from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from api.config.db import conn_string
from api.model.User import User as UserModel

engine = create_engine(conn_string())
Session = sessionmaker()
Session.configure(bind=engine)
session = Session()


def user_list(options):
    limit = int(options['limit'] or 10)
    page = int(options['page'] or 1)
    users = []

    query = session.query(UserModel).limit(limit).offset((page - 1) * limit)
    query_total = session.query(UserModel).count()

    for user in query:
        profile = user.profile if user.profile else None

        users.append({
            'id': user.id,
            'email': user.email,
            'username': user.username,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'company_name': profile.company_name if profile else None
        })

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
            'last_name': user.last_name,
            'company_name': profile.company_name if profile else None
        }

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
