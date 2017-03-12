from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from api.config.db import conn_string
from api.model.Province import Province as ProvinceModel

engine = create_engine(conn_string())
Session = sessionmaker()
Session.configure(bind = engine)
session = Session()


def get_list():
    query = session.query(ProvinceModel)
    provinces = []

    for province in query:
        provinces.append({
            'id': province.id,
            'title': province.title
        })

    return provinces
