import {Injectable} from '@angular/core';
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

    save(income: any) {}

    update(id: Number, income: any) {}

    erase(id: Number) {}

    getOne(id: Number) {}

    search(query) {}
}

export let incomeModel = {};