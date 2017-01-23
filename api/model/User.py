from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, TIMESTAMP
from api.base import Base
from sqlalchemy.orm import relationship
from .Profile import Profile


class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    username = Column(String)
    password = Column(String)
    first_name = Column(String)
    last_name = Column(String)
    email = Column(String)
    user_role_id = Column(Integer)
    package_id = Column(Integer)
    status = Column(Integer)
    last_login = Column(DateTime)
    last_access = Column(DateTime)
    created = Column(TIMESTAMP)
    modified = Column(DateTime)
    profile = relationship(Profile, backref='users', uselist=False)
