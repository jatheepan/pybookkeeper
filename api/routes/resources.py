from flask_restful import Resource
import api.modules.ProvinceManager as manager

class ProvinceList(Resource):
    def get(self):
        return {
            'success': True,
            'data': manager.get_list()
        }