from flask import Flask
from flask_restful import Api
from flask_cors import CORS
from routes import home, client, user, expense, income

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
    expense.ExpenseList: '/expenses/',
    expense.ExpenseById: '/expenses/<string:expense_id>',
    income.IncomeList: '/incomes/'
}

for key, value in path_configs.iteritems():
    api.add_resource(key, value)


# If you need custom headers enable this.
# @app.after_request
# def after_request(response):
    # response.headers.add('Access-Control-Allow-Origin', '*')
    # response.headers.add('Content-Type', 'application/json')
    # response.headers.add('Origin', '*')
    # response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    # response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    # return response

if __name__ == "__main__":
    app.run(debug=True)
