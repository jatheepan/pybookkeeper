from sqlalchemy import Column, String, Integer, SmallInteger
from api.base import Base


class ExpenseAccount(Base):
    __tablename__ = 'expense_accounts'
    id = Column(Integer, primary_key = True)
    title = Column(String)
    is_hst = Column(SmallInteger)

