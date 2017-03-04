from flask_restful import Resource, request
import api.modules.ExpenseManager as expense


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


class ExpenseById(Resource):
    def get(self, expense_id):
        result = expense.by_id(expense_id)
        return {
            'success': True,
            'data': result
        }