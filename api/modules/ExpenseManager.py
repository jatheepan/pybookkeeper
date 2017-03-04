from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from api.config.db import conn_string
from api.model.Expense import Expense as ExpenseModel
from api.model.ExpenseType import ExpenseType as ExpenseTypeModel
from api.model.ExpenseAccount import ExpenseAccount as ExpenseAccountModel
from api.model.Province import Province as ProvinceModel

engine = create_engine(conn_string())
Session = sessionmaker()
Session.configure(bind=engine)
session = Session()


def expense_list(options):
    limit = int(options['limit'] or 10)
    page = int(options['page'] or 1)
    expenses = []

    query = session \
        .query(ExpenseModel, ExpenseTypeModel, ExpenseAccountModel, ProvinceModel) \
        .outerjoin(ExpenseTypeModel, ExpenseModel.expense_type_id == ExpenseTypeModel.id)\
        .outerjoin(ExpenseAccountModel, ExpenseModel.expense_account_id == ExpenseAccountModel.id)\
        .outerjoin(ProvinceModel, ProvinceModel.id == ExpenseModel.province_id)\
        .limit(limit) \
        .offset((page - 1) * limit)

    query_total = session.query(ExpenseModel).count()

    for expense, expense_type, expense_account, province in query:
        expenses.append({
            'id': expense.id,
            'user_id': expense.user_id,
            'account_id': expense.account_id,
            'province': province.title,
            'expense_type': expense_type.title if expense_type.title else None,
            'expense_account': expense_account.title if expense_account.title else None,
            'issued_by': expense.issued_by,
            'invoice_no': expense.invoice_no,
            'amount': expense.amount,
            'hst_amount': expense.hst_amount,
            'user_entered_hst': expense.user_entered_hst,
            'date': expense.date.strftime("%y-%m-%d")
        })

    return {
        'data': expenses,
        'total': query_total,
        'limit': limit,
        'page': page
    }


def by_id(id):
    query = session\
        .query(ExpenseModel, ProvinceModel, ExpenseAccountModel, ExpenseTypeModel)\
        .outerjoin(ProvinceModel, ProvinceModel.id == ExpenseModel.province_id)\
        .outerjoin(ExpenseAccountModel, ExpenseAccountModel.id == ExpenseModel.expense_account_id)\
        .outerjoin(ExpenseTypeModel, ExpenseTypeModel.id == ExpenseModel.expense_type_id)\
        .filter(ExpenseModel.id == id)\
        .first()

    client = query[0]
    province = query[1]
    expense_account = query[2]
    expense_type = query[3]

    return {
        'data': {
            'id': client.id,
            'user_id': client.user_id,
            'province': province.title,
            'account_id': client.account_id,
            'date': client.date.strftime("%y-%m-%d"),
            'issued_by': client.issued_by,
            'invoice_no': client.invoice_no,
            'amount': client.amount,
            'hst_amount': client.hst_amount,
            'user_entered_hst': client.user_entered_hst,
            'expense_account': expense_account.title,
            'expense_type': expense_type.title
        }
    }