from flask_restful import Resource, request
import api.modules.IncomeManager as income


def get_url_param(key):
    return request.args.get(key)


class IncomeList(Resource):
    def get(self):
        limit = int(get_url_param('limit') or 10)
        page = int(get_url_param('page') or 1)
        result = income.income_list({'limit': limit, 'page': page})

        return {
            'success': True,
            'data': result['data'],
            'total': result['total'],
            'limit': limit,
            'page': page
        }

class IncomeById(Resource):
    def get(self, income_id):
        result = income.by_id(income_id)

        return {
            'success': True,
            'data': result
        }
