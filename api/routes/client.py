from flask_restful import Resource, request
import api.modules.ClientManager as Client


def get_url_param(key):
    return request.args.get(key)


class ClientList(Resource):
    """Get client list"""

    def get(self):
        limit = int(get_url_param('limit') or 10)
        page = int(get_url_param('page') or 1)
        result = Client.client_list({'limit': limit, 'page': page})

        return {
            'success': True,
            'data': result['data'],
            'total': result['total'],
            'page': result['page'],
            'limit': result['limit']
        }

    def post(self):
        result = Client.save(request.json)
        return {
            'success': result.get('success', False),
            'message': result.get('message', None),
            'data': result.get('data', None)
        }


class ClientById(Resource):
    """Operations to client by id."""

    def get(self, client_id):
        result = Client.by_id(client_id)

        return {
            'success': True,
            'data': result
        }

    def put(self, client_id):
        result = Client.update(client_id, request.json)

        return {
            'success': result.get('success', False),
            'message': result.get('message', None),
            'data': result.get('data', None)
        }

    def delete(self, client_id):
        result = Client.delete(client_id)
        return {
            'success': result.get('success', False),
            'message': result.get('message', None),
            'data': result.get('data')
        }