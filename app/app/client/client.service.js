"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var config_1 = require('../shared/config');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
exports.clientModel = {
    first_name: ['Theepan', [forms_1.Validators.required]],
    last_name: ['Kanthavel', [forms_1.Validators.required]],
    email: ['tk@cutedrops.com', [forms_1.Validators.required]],
    address_line_2: ['line 2', [forms_1.Validators.required]],
    street: ['ON', [forms_1.Validators.required]],
    city: ['Scarborough', [forms_1.Validators.required]],
    postal_code: ['M1P4G9', [forms_1.Validators.required]],
    province_id: ['', [forms_1.Validators.required]],
    company_name: ['Company name', [forms_1.Validators.required]],
    phone_number: ['Phone number']
};
var ClientService = (function () {
    function ClientService(_http) {
        this._http = _http;
    }
    ClientService.prototype.getData = function (page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = config_1.configs.api.limit; }
        return this._http
            .get(config_1.configs.api.url + "clients?page=" + page + "&limit=" + limit)
            .map(function (res) {
            var result = res.json();
            if (result && result.success === true) {
                return {
                    clients: result.data,
                    total: result.total
                };
            }
            else {
                return null;
            }
        });
    };
    ClientService.prototype.getClientDetail = function (id) {
        return this._http
            .get(config_1.configs.api.url + "clients/" + id)
            .map(function (res) {
            var result = res.json();
            return (result && result.success) ? result.data : null;
        });
    };
    ClientService.prototype.save = function (values) {
        return this._http
            .post(config_1.configs.api.url + "clients/", values);
    };
    ClientService.prototype.update = function (id, values) {
        return this._http
            .put(config_1.configs.api.url + "clients/" + id, values)
            .map(function (res) {
            var result = res.json();
            return (result && result.success) ? result.data : null;
        });
    };
    ClientService.prototype.erase = function (id) {
        return this._http
            .delete(config_1.configs.api.url + "clients/" + id);
    };
    ClientService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ClientService);
    return ClientService;
}());
exports.ClientService = ClientService;
//# sourceMappingURL=client.service.js.map