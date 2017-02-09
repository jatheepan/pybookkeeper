from flask_restful import Resource, request
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

import api.modules.ExpenseManager as expense
from api.config.db import conn_string

engine = create_engine(conn_string())
Session = sessionmaker()
Session.configure(bind=engine)
session = Session()


def get_url_param(key):
    return request.args.get(key)


class ExpenseList(Resource):
    def get(self):
        limit = int(get_url_param('limit') or 10)
        page = int(get_url_param('page') or 1)
        result = expense.expense_list({'limit': limit, 'page': page})

        return {
            'success': True,
            'data': result['data'],
            'total': result['total'],
            'page': result['page'],
            'limit': result['limit']
        }
