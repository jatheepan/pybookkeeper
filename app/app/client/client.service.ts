import {Injectable} from '@angular/core';
import {configs} from '../shared/config';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ClientService {
    constructor(private _http: Http) {
    }

    getData(page: Number =1, limit: Number = configs.api.limit) {
        return this._http
            .get(`${configs.api.url}clients?page=${page}&limit=${limit}`)
            .map(res => {
                let result = res.json();
                if(result && result.success === true) {
                    return {
                        clients: result.data,
                        total: result.total
                    }
                }
                else {
                    return null;
                }
            });
    }

    getClientDetail(id) {
        return this._http
            .get(`${configs.api.url}clients/${id}`)
            .map(res => {
                let result = res.json();

                return (result && result.success) ? result.data : null;
            });
    }
}