from sqlalchemy import Column, Integer, String
from api.base import Base


class Client(Base):
    __tablename__ = 'clients'

    id = Column(Integer, primary_key=True)
    first_name = Column(String)
    last_name = Column(String)
    company_name = Column(String)
    email = Column(String)
    phone_number = Column(String)
    street = Column(String)
    address_line_2 = Column(String)
    city = Column(String)
    postal_code = Column(String)
    province_id = Column(Integer)
    user_id = Column(Integer)
    account_id = Column(Integer)
