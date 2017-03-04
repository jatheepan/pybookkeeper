from sqlalchemy import Column, String, Integer, Float, DateTime, SmallInteger
from api.base import Base


class Income(Base):
    __tablename__ = 'incomes'
    id = Column(Integer, primary_key = True)
    date = Column(DateTime)
    issued_to = Column(String)
    invoice_no = Column(Integer)
    amount = Column(Float)
    prorated_amount = Column(Float)
    hst_amount = Column(Float)
    user_entered_hst = Column(SmallInteger)
    province_id = Column(Integer)
    invoice_id = Column(Integer)
    income_account_id = Column(Integer)
    user_id = Column(Integer)
    account_id = Column(Integer)
    created = Column(DateTime)
    modified = Column(DateTime)
