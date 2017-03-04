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
            'date': income.date.strftime('%Y-%m-%d'),
            'issued_to': income.issued_to if income.issued_to else None,
            'invoice_no': income.invoice_no if income.invoice_no else None,
            'amount': income.amount if income.amount else None,
            'prorated_amount': income.prorated_amount if income.prorated_amount else None,
            'hst_amount': income.hst_amount if income.hst_amount else None,
            'user_entered_hst': income.user_entered_hst if income.user_entered_hst else None,
            'province': province.title if province.title else None,
            'invoice_id': income.invoice_id if income.invoice_id else None,
            'income_account': income_account.title if income_account.title else None,
            'user_id': income.user_id if income.user_id else None,
            'account_id': income.account_id if income.account_id else None,
            'created': income.created.strftime('%Y-%m-%d') if income.created else None,
            'modified': income.modified.strftime('%Y-%m-%d') if income.modified else None
        })

    return {
        'data': incomes,
        'total': query_total,
        'limit': limit,
        'page': page
    }


def by_id(income_id):
    query = session\
        .query(IncomeModel, IncomeAccountModel, ProvinceModel)\
        .outerjoin(IncomeAccountModel, IncomeAccountModel.id == IncomeModel.income_account_id)\
        .outerjoin(ProvinceModel, ProvinceModel.id == IncomeModel.province_id)\
        .first()

    income = query[0]
    income_account = query[1]
    province = query[2]

    return {
        'id': income.id,
        'date': income.date.strftime('%Y-%m-%d'),
        'issued_to': income.issued_to,
        'invoice_no': income.invoice_no,
        'amount': income.amount,
        'prorated_amount': income.prorated_amount,
        'hst_amount': income.hst_amount,
        'user_entered_hst': income.user_entered_hst,
        'province': province.title,
        'invoice_id': income.invoice_id,
        'income_account': income_account.title,
        'user_id': income.user_id,
        'account_id': income.account_id,
        'created': income.created.strftime('%Y-%m-%d'),
        'modified': income.modified.strftime('%Y-%m-%d')
    }