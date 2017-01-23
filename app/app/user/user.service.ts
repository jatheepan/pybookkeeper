import {Injectable} from '@angular/core';
import {configs} from '../shared/config';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    constructor(private _http: Http) {
    }

    getData(page: Number = 1, limit: Number = configs.api.limit) {
        return this._http
            .get(`${configs.api.url}users/?page=${page}&limit=${limit}`)
            .map(res => {
                let result = res.json();

                if(result && result.success === true) {
                    return {
                        users: result.data,
                        total: result.total
                    }
                }
                else {
                    return null;
                }
            });
    }

    getUserDetail(id) {
        return this._http
            .get(`${configs.api.url}users/${id}`)
            .map(res => {
                let result = res.json();

                return (result && result.success) ? result.data : null;
            });
    }

    search(query) {
        return this._http
            .get(`${configs.api.url}users/search/?query=${query}`)
            .map(res => {
                let result = res.json();

                return (result && result.success) ? result.data : null;
            });
    }
}