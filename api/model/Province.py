from sqlalchemy import Column, String, Integer, Float
from api.base import Base


class Province(Base):
    __tablename__ = 'provinces'
    id = Column(Integer, primary_key=True)
    title = Column(String)
    hst = Column(Float)
