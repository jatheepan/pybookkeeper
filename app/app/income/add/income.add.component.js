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
var all_1 = require('../../services/all');
var forms_1 = require('@angular/forms');
var IncomeAddComponent = (function () {
    function IncomeAddComponent(_incomeService, _fb, _province) {
        this._incomeService = _incomeService;
        this._fb = _fb;
        this._province = _province;
        this.provinces = null;
    }
    IncomeAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addForm = this._fb.group(income_service_1.incomeModel);
        this._province.getData().subscribe(function (data) { return _this.provinces = data; });
    };
    IncomeAddComponent = __decorate([
        core_1.Component({
            templateUrl: './app/income/add/income.add.component.html',
            providers: [income_service_1.IncomeService, all_1.Province]
        }), 
        __metadata('design:paramtypes', [income_service_1.IncomeService, forms_1.FormBuilder, all_1.Province])
    ], IncomeAddComponent);
    return IncomeAddComponent;
}());
exports.IncomeAddComponent = IncomeAddComponent;
//# sourceMappingURL=income.add.component.js.map