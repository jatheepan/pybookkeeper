from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from api.config.db import conn_string
from api.model.Expense import Expense as ExpenseModel
from api.model.ExpenseType import ExpenseType as ExpenseTypeModel
from api.model.ExpenseAccount import ExpenseAccount as ExpenseAccountModel

engine = create_engine(conn_string())
Session = sessionmaker()
Session.configure(bind=engine)
session = Session()


def expense_list(options):
    limit = int(options['limit'] or 10)
    page = int(options['page'] or 1)
    expenses = []

    query = session \
        .query(ExpenseModel, ExpenseTypeModel, ExpenseAccountModel) \
        .outerjoin(ExpenseTypeModel, ExpenseModel.expense_type_id == ExpenseTypeModel.id)\
        .outerjoin(ExpenseAccountModel, ExpenseModel.expense_account_id == ExpenseAccountModel.id)\
        .limit(limit) \
        .offset((page - 1) * limit)

    query_total = session.query(ExpenseModel).count()

    for expense, expense_type, expense_account in query:
        expenses.append({
            'id': expense.id,
            'user_id': expense.user_id,
            'account_id': expense.account_id,
            'expense_type': expense_type.title if expense_type.title else None,
            'expense_account': expense_account.title if expense_account.title else None,
            'issued_by': expense.issued_by,
            'invoice_no': expense.invoice_no,
            'amount': expense.amount,
            'hst_amount': expense.hst_amount,
            'user_entered_hst': expense.user_entered_hst
            # 'date': expense.date
        })

    return {
        'data': expenses,
        'total': query_total,
        'limit': limit,
        'page': page
    }