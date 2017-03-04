from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from api.config.db import conn_string
from api.model.Income import Income as IncomeModel
from api.model.IncomeAccount import IncomeAccount as IncomeAccountModel
from api.model.Province import Province as ProvinceModel

engine = create_engine(conn_string())
Session = sessionmaker()
Session.configure(bind=engine)
session = Session()


def income_list(options):
    limit = int(options['limit'] or 10)
    page = int(options['page'] or 1)
    incomes = []

    query = session\
        .query(IncomeModel, IncomeAccountModel, ProvinceModel)\
        .outerjoin(IncomeAccountModel, IncomeAccountModel.id == IncomeModel.income_account_id)\
        .outerjoin(ProvinceModel, ProvinceModel.id == IncomeModel.province_id)\
        .limit(limit)\
        .offset((page - 1) * limit)

    query_total = session.query(IncomeModel).count()

    for income, income_account, province in query:
        incomes.append({
            'id': income.id,
            'issued_to': income.issued_to if income.issued_to else None,
            'invoice_no': income.invoice_no if income.invoice_no else None,
            'amount': income.amount if income.amount else None,
            'prorated_amount': income.prorated_amount if income.prorated_amount else None,
            'hst_amount': income.hst_amount if income.hst_amount else None,
            'user_entered_hst': income.user_entered_hst if income.user_entered_hst else None,
            'province': province.title if province.title else None,
            'income_account': income_account.title if income_account.title else None
        })

    return {
        'data': incomes,
        'total': query_total,
        'limit': limit,
        'page': page
    }