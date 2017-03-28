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
var config_1 = require('../shared/config');
var http_1 = require('@angular/http');
var IncomeService = (function () {
    function IncomeService(_http) {
        this._http = _http;
    }
    IncomeService.prototype.getData = function (page, limit) {
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = config_1.configs.api.limit; }
        return this._http
            .get(config_1.configs.api.url + "incomes/?page=" + page + "&limit=" + limit)
            .map(function (res) {
            var result = res.json();
            if (result && result.success === true) {
                return {
                    incomes: result.data,
                    total: result.total
                };
            }
            else {
                return null;
            }
        });
    };
    IncomeService.prototype.save = function (income) { };
    IncomeService.prototype.update = function (id, income) { };
    IncomeService.prototype.erase = function (id) { };
    IncomeService.prototype.getOne = function (id) { };
    IncomeService.prototype.search = function (query) { };
    IncomeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], IncomeService);
    return IncomeService;
}());
exports.IncomeService = IncomeService;
exports.incomeModel = {};
//# sourceMappingURL=income.service.js.map