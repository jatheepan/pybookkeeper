from flask import jsonify

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.exc import SQLAlchemyError

from api.config.db import conn_string
from api.model.Client import Client as ClientModel
from api.model.Province import Province as ProvinceModel

engine = create_engine(conn_string())
Session = sessionmaker()
Session.configure(bind = engine)
session = Session()


def client_list(options):
    limit = int(options['limit'] or 10)
    page = int(options['page'] or 1)
    clients = []

    query = session\
        .query(ClientModel, ProvinceModel)\
        .outerjoin(ProvinceModel, ClientModel.province_id == ProvinceModel.id)\
        .limit(limit)\
        .offset((page - 1) * limit)

    query_total = session.query(ClientModel).count()

    for client, province in query:
        clients.append({
            'id': client.id,
            'first_name': client.first_name,
            'last_name': client.last_name,
            'company_name': client.company_name,
            'email': client.email,
            'phone_number': client.phone_number,
            'street': client.street,
            'address_line_2': client.address_line_2,
            'city': client.city,
            'postal_code': client.postal_code,
            'province_id': client.province_id,
            'province': province.title if province else None
        })

    return {
        'data': clients,
        'total': query_total,
        'limit': limit,
        'page': page
    }


def by_id(client_id):
    query = session\
        .query(ClientModel, ProvinceModel)\
        .outerjoin(ProvinceModel, ClientModel.province_id == ProvinceModel.id)\
        .filter(ClientModel.id == client_id)\
        .first()

    client = query[0]
    province = query[1]

    data = {}

    if client:
        data = {
            'id': client.id,
            'first_name': client.first_name,
            'last_name': client.last_name,
            'company_name': client.company_name,
            'email': client.email,
            'phone_number': client.phone_number,
            'street': client.street,
            'address_line_2': client.address_line_2,
            'city': client.city,
            'postal_code': client.postal_code,
            'province_id': client.province_id,
            'province': province.title if province else None
        }

    return data


def save(data):
    try:
        row = ClientModel(
            first_name = data.get('first_name'),
            last_name = data.get('last_name'),
            address_line_2 = data.get('address_line_2'),
            city = data.get('city'),
            company_name = data.get('company_name'),
            email = data.get('email'),
            phone_number = data.get('phone_number'),
            postal_code = data.get('postal_code'),
            province_id = data.get('province_id'),
            street = data.get('street'),
            user_id = 15,  # hardcoded for now
            account_id = 15  # hardcoded for now
        )
        session.add(row)
        session.commit()

        return {
            'success': True,
            'data': {
                'id': row.id,
                'first_name': row.first_name,
                'last_name': row.last_name,
                'company_name': row.company_name,
                'email': row.email,
                'phone_number': row.phone_number,
                'street': row.street,
                'address_line_2': row.address_line_2,
                'city': row.city,
                'postal_code': row.postal_code,
                'province_id': row.province_id
            }
        }
    except SQLAlchemyError as e:
        return {
            'success': False,
            'message': e
        }
    finally:
        session.close()


def delete(id):
    try:
        query = session.query(ClientModel).filter(ClientModel.id == id)
        row = query.first()
        if row is None:
            raise SQLAlchemyError(Exception('Record not found'))
        data = {
            'id': row.id,
            'first_name': row.first_name,
            'last_name': row.last_name,
            'company_name': row.company_name,
            'email': row.email,
            'phone_number': row.phone_number,
            'street': row.street,
            'address_line_2': row.address_line_2,
            'city': row.city,
            'postal_code': row.postal_code,
            'province_id': row.province_id
        }
        query.delete()
        session.commit()
        return {
            'success': True,
            'message': None,
            'data': data
        }
    except SQLAlchemyError as e:
        return {
            'success': False,
            'message': str(e)
        }
    finally:
        session.close()