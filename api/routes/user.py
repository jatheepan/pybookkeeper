from flask_restful import Resource, request
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

import api.modules.UserManager as user
from api.config.db import conn_string

engine = create_engine(conn_string())
Session = sessionmaker()
Session.configure(bind=engine)
session = Session()


def get_url_param(key):
    return request.args.get(key)


class UserList(Resource):
    def get(self):
        limit = int(get_url_param('limit') or 10)
        page = int(get_url_param('page') or 1)
        result = user.user_list({'limit': limit, 'page': page})

        return {
            'success': True,
            'data': result['data'],
            'total': result['total'],
            'page': result['page'],
            'limit': result['limit']
        }


class UserById(Resource):
    def get(self, user_id):
        result = user.by_id(user_id)

        if result:
            data = {
                'success': True,
                'data': result
            }

        else:
            data = {
                'success': False,
                'message': 'No user found'
            }

        return data


class UserSearch(Resource):
    def get(self):
        keyword = get_url_param('keyword') or ''
        result = user.search(keyword)

        if result:
            data = {
                'success': True,
                'data': result
            }
        else:
            data = {
                'success': False,
                'message': 'No user found'
            }

        return data
