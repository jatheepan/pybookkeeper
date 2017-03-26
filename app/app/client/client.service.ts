import {Injectable} from '@angular/core';
import {Validators} from '@angular/forms';
import {configs} from '../shared/config';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

export let clientModel = {
    first_name: ['Theepan', [<any>Validators.required]],
    last_name: ['Kanthavel', [<any>Validators.required]],
    email: ['tk@cutedrops.com', [<any>Validators.required]],
    address_line_2: ['line 2', [<any>Validators.required]],
    street: ['ON', [<any>Validators.required]],
    city: ['Scarborough', [<any>Validators.required]],
    postal_code: ['M1P4G9', [<any>Validators.required]],
    province_id: ['', [<any>Validators.required]],
    company_name: ['Company name', [<any>Validators.required]],
    phone_number: ['Phone number']
};

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

    save(values:any) {
        return this._http
            .post(`${configs.api.url}clients/`, values);
    }

    update(id:Number, values:any) {
        return this._http
            .put(`${configs.api.url}clients/${id}`, values)
            .map(res => {
                let result = res.json();
                return (result && result.success) ? result.data : null;
            });
    }

    erase(id:Number) {
        return this._http
            .delete(`${configs.api.url}clients/${id}`)
    }
}

