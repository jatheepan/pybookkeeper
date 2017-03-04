from sqlalchemy import Column, String, Integer
from api.base import Base


class IncomeAccount(Base):
    __tablename__ = 'income_accounts'
    id = Column(Integer, primary_key = True)
    title = Column(String)
