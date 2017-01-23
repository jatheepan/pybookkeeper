from flask_restful import Resource

class Homepage(Resource):
    """Dashboard"""

    def get(self):
        return {
            'success': False,
            'message': 'There is nothing to show in the root.'
        }
