import {Injectable} from '@angular/core';
import {Validators} from '@angular/forms';
import {configs} from '../shared/config';
import {Http, Headers, RequestOptions} from '@angular/http';
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

    saveUser(user:any) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this._http
            .post(`${configs.api.url}users/`, user, headers)
            .map(res => res.json());
    }

    updateUser(id:number, user:any) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this._http
            .put(`${configs.api.url}users/${id}`, user, headers)
            .map(res => res.json());
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
            .get(`${configs.api.url}users/search/?keyword=${query}`)
            .map(res => {
                let result = res.json();
                return (result && result.success) ? result.data : null;
            });
    }
}

export let userModel = {
    username: ['username', [<any>Validators.required, <any>Validators.minLength(6)]],
    password: ['password', [<any>Validators.required, <any>Validators.minLength(6)]],
    first_name: ['your first name', [<any>Validators.required]],
    last_name: ['your last name', [<any>Validators.required]],
    email: ['email', [<any>Validators.required]],
    user_role_id: ['user_role_id', [<any>Validators.required]],
    package_id: ['package_id', [<any>Validators.required]],
    status: ['status', [<any>Validators.required]],
    tags: ['']
};