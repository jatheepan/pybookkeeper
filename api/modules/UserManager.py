from sqlalchemy import create_engine
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import sessionmaker

from api.config.db import conn_string
from api.model.User import User as UserModel

engine = create_engine(conn_string())
Session = sessionmaker()
Session.configure(bind = engine)
session = Session()

profile_fields = ['company_name', 'cell_phone', 'street', 'address_line_2', 'postal_code', 'website']


def extract_and_append(props, dic_obj, target_obj):
    for prop in props:
        target_obj[prop] = getattr(dic_obj, prop) if dic_obj else None

    return target_obj


def user_list(options):
    limit = int(options['limit'] or 10)
    page = int(options['page'] or 1)
    users = []

    query = session.query(UserModel).limit(limit).offset((page - 1) * limit)
    query_total = session.query(UserModel).count()

    for user in query:
        profile = user.profile if user.profile else None
        user_data = {
            'id': user.id,
            'email': user.email,
            'username': user.username,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'status': user.status
        }

        extract_and_append(profile_fields, profile, user_data)
        users.append(user_data)

    return {
        'data': users,
        'total': query_total,
        'page': page,
        'limit': limit
    }


def by_id(user_id):
    query = session.query(UserModel).filter(UserModel.id == user_id)
    user = query.first() or None
    data = {}

    if user:
        profile = user.profile if user.profile else None
        data = {
            'id': user.id,
            'email': user.email,
            'username': user.username,
            'first_name': user.first_name,
            'last_name': user.last_name
        }
        extract_and_append(profile_fields, profile, data)

    return data


def search(keyword):
    query = session.query(UserModel).filter(UserModel.first_name.like('%' + keyword + '%'))
    users = []

    for user in query:
        profile = user.profile if user.profile else None
        data = {
            'id': user.id,
            'email': user.email,
            'username': user.username,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'company_name': profile.company_name if profile else None
        }
        users.append(data)

    return users


def save(data):
    user = UserModel(
        username = data['username'],
        password = data['password'],
        first_name = data['first_name'],
        last_name = data['last_name'],
        email = data['email'],
        user_role_id = data['user_role_id'],
        package_id = data['package_id'],
        status = data['status']
    )
    error = None
    try:
        session.add(user)
        session.commit()
    except SQLAlchemyError:
        error = 'Unable to save. Missing required fields.'
    finally:
        return {
            'error': error,
            'data': {
                'username': user.username,
                'first_name': user.first_name,
                'last_name': user.last_name,
                'email': user.email,
                'user_role_id': user.user_role_id,
                'package_id': user.package_id,
                'status': user.status
            }
        }


def update(user_id, data):
    error = None
    user = None
    try:
        user = session.query(UserModel).filter(UserModel.id == user_id).first()
        if data['first_name']: user.first_name = data['first_name']
        if data['last_name']: user.last_name = data['last_name']
        if data['email']: user.email = data['email']
        if data['user_role_id']: user.user_role_id = data['user_role_id']
        if data['package_id']: user.package_id = data['package_id']
        if data['status']: user.status = data['status']
        session.commit()
    except SQLAlchemyError as e:
        error = e
    finally:
        result = {
            'error': error
        }
        if user and user.id:
            result['data'] = {
                'id': user.id,
                'username': user.username,
                'first_name': user.first_name,
                'last_name': user.last_name,
                'email': user.email,
                'user_role_id': user.user_role_id,
                'package_id': user.package_id,
                'status': user.status
            }

        return result
