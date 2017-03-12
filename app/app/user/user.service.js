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
var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.getData = function (page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = config_1.configs.api.limit; }
        return this._http
            .get(config_1.configs.api.url + "users/?page=" + page + "&limit=" + limit)
            .map(function (res) {
            var result = res.json();
            if (result && result.success === true) {
                return {
                    users: result.data,
                    total: result.total
                };
            }
            else {
                return null;
            }
        });
    };
    UserService.prototype.save = function (user) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this._http
            .post(config_1.configs.api.url + "users/", user, headers)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.update = function (id, user) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this._http
            .put(config_1.configs.api.url + "users/" + id, user, headers)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getUserDetail = function (id) {
        return this._http
            .get(config_1.configs.api.url + "users/" + id)
            .map(function (res) {
            var result = res.json();
            return (result && result.success) ? result.data : null;
        });
    };
    UserService.prototype.search = function (query) {
        return this._http
            .get(config_1.configs.api.url + "users/search/?keyword=" + query)
            .map(function (res) {
            var result = res.json();
            return (result && result.success) ? result.data : null;
        });
    };
    UserService.prototype.erase = function (id) {
        return this._http
            .delete(config_1.configs.api.url + "users/" + id)
            .map(function (res) {
            var result = res.json();
            return (result && result.success) ? result.data : null;
        });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
exports.userModel = {
    username: ['username', [forms_1.Validators.required, forms_1.Validators.minLength(6)]],
    password: ['password', [forms_1.Validators.required, forms_1.Validators.minLength(6)]],
    first_name: ['your first name', [forms_1.Validators.required]],
    last_name: ['your last name', [forms_1.Validators.required]],
    email: ['email', [forms_1.Validators.required]],
    user_role_id: ['user_role_id', [forms_1.Validators.required]],
    package_id: ['package_id', [forms_1.Validators.required]],
    status: ['status', [forms_1.Validators.required]],
    tags: ['']
};
//# sourceMappingURL=user.service.js.map