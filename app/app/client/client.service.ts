import {Injectable} from '@angular/core';
import {Validators} from '@angular/forms';
import {configs} from '../shared/config';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

export let clientModel = {
    first_name: ['Your first name', [<any>Validators.required]],
    last_name: ['Your last name', [<any>Validators.required]],
    email: ['Email', [<any>Validators.required]],
    address_line_2: ['Address line 2', [<any>Validators.required]],
    street: ['Street', [<any>Validators.required]],
    city: ['City', [<any>Validators.required]],
    postal_code: ['Postal code', [<any>Validators.required]],
    province_id: ['Province ID', [<any>Validators.required]],
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
}

