from flask import Flask
from flask_restful import Api
from flask_cors import CORS
from routes import home, client, user, expense

app = Flask(__name__)
api = Api(app)
CORS(app)


path_configs = {
    home.Homepage: '/',
    client.ClientList: '/clients/',
    client.ClientById: '/clients/<string:client_id>',
    user.UserList: '/users/',
    user.UserById: '/users/<string:user_id>',
    user.UserSearch: '/users/search/',
    expense.ExpenseList: '/expenses/'
}

for key, value in path_configs.iteritems():
    api.add_resource(key, value)


if __name__ == "__main__":
    app.run(debug=True)
