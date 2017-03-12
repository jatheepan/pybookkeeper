from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from api.config.db import conn_string
from api.model.Client import Client as ClientModel
from api.model.Province import Province as ProvinceModel

engine = create_engine(conn_string())
Session = sessionmaker()
Session.configure(bind=engine)
session = Session()


def client_list(options):
    limit = int(options['limit'] or 10)
    page = int(options['page'] or 1)
    clients = []

    query = session\
        .query(ClientModel, ProvinceModel) \
        .outerjoin(ProvinceModel, ClientModel.province_id == ProvinceModel.id) \
        .limit(limit)\
        .offset((page - 1) * limit)

    query_total = session.query(ClientModel).count()

    for user, province in query:
        clients.append({
            'id': user.id,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'company_name': user.company_name,
            'email': user.email,
            'phone_number': user.phone_number,
            'street': user.street,
            'address_line_2': user.address_line_2,
            'city': user.city,
            'postal_code': user.postal_code,
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
            'province': province.title if province else None
        }

    return data
