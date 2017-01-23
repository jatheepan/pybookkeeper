from sqlalchemy import Column, Integer, String, ForeignKey
from api.base import Base


class Profile(Base):
    __tablename__ = 'profiles'

    id = Column(Integer, primary_key=True)
    company_name = Column(String)
    home_phone = Column(String)
    cell_phone = Column(String)
    street = Column(String)
    address_line_2 = Column(String)
    city = Column(String)
    postal_code = Column(String)
    website = Column(String)
    email = Column(String)
    user_id = Column(Integer, ForeignKey('users.id'))