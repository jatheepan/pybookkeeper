from flask import Flask
from flask_restful import Api
from flask_cors import CORS
from routes import home, client, user

app = Flask(__name__)
api = Api(app)
CORS(app)


api.add_resource(home.Homepage, '/')
api.add_resource(client.ClientList, '/clients/')
api.add_resource(client.ClientById, '/clients/<string:client_id>')
api.add_resource(user.UserList, '/users/')
api.add_resource(user.UserById, '/users/<string:user_id>')

if __name__ == "__main__":
    app.run(debug=True)
