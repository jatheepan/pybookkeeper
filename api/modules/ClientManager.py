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

    print query

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

    return clients


def by_id(client_id):
    query = session.query(ClientModel).filter(ClientModel.id == client_id)
    client = query.first() or None
    data = {}

    if client:
        data = {
            'name': client.first_name
        }

    return data
