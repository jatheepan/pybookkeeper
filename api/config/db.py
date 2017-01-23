from sqlalchemy.engine.url import URL
from os import environ as env

db_config = {
    'drivername': 'mysql+mysqlconnector',
    'username': env['DB_USER'] or 'root',
    'password': env['DB_PASS'] or '',
    'host': env['DB_HOST'] or 'localhost',
    'database': env['DB_NAME'] or 'book_keeper'
}


def conn_string():
    return URL(**db_config)
