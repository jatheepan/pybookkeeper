from sqlalchemy import Column, String, Integer
from api.base import Base


class ExpenseType(Base):
    __tablename__ = 'expense_types'
    id = Column(Integer, primary_key = True)
    title = Column(String)
