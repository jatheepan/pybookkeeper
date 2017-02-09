from sqlalchemy import Column, Integer, String, DateTime, Float, ForeignKey, SmallInteger
from api.base import Base


class Expense(Base):
    __tablename__ = 'expenses'

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer)
    account_id = Column(Integer)
    expense_type_id = Column(Integer)
    date = Column(DateTime)
    issued_by = Column(String)
    invoice_no = Column(Integer)
    amount = Column(Float)
    hst_amount = Column(Float)
    user_entered_hst = Column(SmallInteger)
