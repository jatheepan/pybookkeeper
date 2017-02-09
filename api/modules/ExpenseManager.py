from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from api.config.db import conn_string
from api.model.Expense import Expense as ExpenseModel

engine = create_engine(conn_string())
Session = sessionmaker()
Session.configure(bind=engine)
session = Session()


def expense_list(options):
    limit = int(options['limit'] or 10)
    page = int(options['page'] or 1)
    expenses = []

    query = session \
        .query(ExpenseModel) \
        .limit(limit) \
        .offset((page - 1) * limit)

    query_total = session.query(ExpenseModel).count()

    for expense in query:
        expenses.append({
            'id': expense.id
            # 'first_name': expense.first_name,
            # 'last_name': expense.last_name,
            # 'company_name': expense.company_name,
            # 'email': expense.email,
            # 'phone_number': expense.phone_number,
            # 'street': expense.street,
            # 'address_line_2': expense.address_line_2,
            # 'city': expense.city,
            # 'postal_code': expense.postal_code
        })

    return {
        'data': expenses,
        'total': query_total,
        'limit': limit,
        'page': page
    }