import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {configs} from '../shared/config';

@Injectable()
export class ProvinceService {
    constructor(private _http: Http) {
    }

    public getData() {
        return this._http
            .get(`${configs.api.url}resource/provinces`)
            .map(res => {
                let result = res.json();
                return (result && result.success === true) ? result.data : null;
            });
    }
}