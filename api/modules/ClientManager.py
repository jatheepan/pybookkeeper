from api.model.Client import Client as ClientModel
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from api.config.db import conn_string

engine = create_engine(conn_string())
Session = sessionmaker()
Session.configure(bind=engine)
session = Session()


def client_list(options):
    limit = int(options['limit'] or 10)
    page = int(options['page'] or 1)
    clients = []

    query = session.query(ClientModel).limit(limit).offset((page - 1) * limit)
    for instance in query:
        clients.append({
            'id': instance.id,
            'first_name': instance.first_name,
            'last_name': instance.last_name,
            'company_name': instance.company_name,
            'email': instance.email,
            'phone_number': instance.phone_number,
            'street': instance.street,
            'address_line_2': instance.address_line_2,
            'city': instance.city,
            'postal_code': instance.postal_code,
            # 'province_id': instance.province_id
            # 'title': instance.title
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
