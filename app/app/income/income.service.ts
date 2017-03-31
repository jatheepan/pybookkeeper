import {Injectable} from '@angular/core';
import {Validators} from '@angular/forms';
import {configs} from '../shared/config';
import {
    Http,
    Headers,
    RequestOptions
} from '@angular/http';

@Injectable()
export class IncomeService {
    constructor(private _http: Http) {
    }

    getData(page: Number = 1, limit: Number = configs.api.limit) {
        return this._http
            .get(`${configs.api.url}incomes/?page=${page}&limit=${limit}`)
            .map(res => {
                let result = res.json();

                if(result && result.success === true) {
                    return {
                        incomes: result.data,
                        total: result.total
                    }
                } else {
                    return null;
                }
            });
    }

    save(income: any) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this._http
            .post(`${configs.api.url}incomes/`, income, headers)
            .map(res => res.json());
    }

    update(id: Number, income: any) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this._http
            .put(`${configs.api.url}incomes/${id}`, income, headers)
            .map(res => res.json());
    }

    erase(id: Number) {
        return this._http
            .delete(`${configs.api.url}incomes/${id}`)
            .map(res => {
                let result = res.json();
                return (result && result.success) ? result.data : null;
            });
    }

    getOne(id: Number) {
        return this._http
            .get(`${configs.api.url}incomes/${id}`)
            .map(res => {
                let result = res.json();
                return (result && result.success) ? result.data : null;
            });
    }

    search(query) {

    }
}

export let incomeModel = {
    date: ['', [<any>Validators.required]],
    issued_to: ['me', [<any>Validators.required]],
    invoice_no: ['', [<any>Validators.required]],
    amount: ['', [<any>Validators.required]],
    prorated_amount: ['', [<any>Validators.required]],
    hst_amount: ['', [<any>Validators.required]],
    user_entered_hst: ['', [<any>Validators.required]],
    province_id: ['', [<any>Validators.required]],
    invoice_id: ['', [<any>Validators.required]]
};