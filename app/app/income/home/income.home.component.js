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
var income_service_1 = require('../income.service');
var IncomeHomeComponent = (function () {
    function IncomeHomeComponent(_incomeService) {
        this._incomeService = _incomeService;
        this.incomes = [];
    }
    IncomeHomeComponent.prototype.ngOnInit = function () {
        this.loadIncomes();
    };
    IncomeHomeComponent.prototype.loadIncomes = function (page) {
        var _this = this;
        if (page === void 0) { page = 1; }
        this._incomeService.getData(page)
            .subscribe(function (data) {
            console.log(data);
            _this.incomes = data.incomes;
        }, function (err) {
            console.log(err);
        });
    };
    IncomeHomeComponent = __decorate([
        core_1.Component({
            templateUrl: './app/income/home/income.home.component.html',
            providers: [income_service_1.IncomeService]
        }), 
        __metadata('design:paramtypes', [income_service_1.IncomeService])
    ], IncomeHomeComponent);
    return IncomeHomeComponent;
}());
exports.IncomeHomeComponent = IncomeHomeComponent;
//# sourceMappingURL=income.home.component.js.map