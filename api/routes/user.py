from flask_restful import Resource, request
import api.modules.UserManager as user
from api.model.User import User as UserModel
from api.config.db import conn_string
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

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
        users = user.user_list({'limit': limit, 'page': page})

        return {
            'success': True,
            'data': users
        }


class UserById(Resource):
    def get(self, user_id):

        data = user.by_id(user_id)

        if data:
            data['success'] = True

        else:
            data = {
                'success': False,
                'message': 'No user found'
            }

        return data
