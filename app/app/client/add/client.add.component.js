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
var client_service_1 = require('../client.service');
var all_1 = require('../../services/all');
var forms_1 = require('@angular/forms');
var ClientAddComponent = (function () {
    /**
     * Constructor
     * @param _service
     * @param _fb
     * @param _province
     */
    function ClientAddComponent(_service, _fb, _province) {
        this._service = _service;
        this._fb = _fb;
        this._province = _province;
        this.provinces = null;
    }
    ClientAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientAddForm = this._fb.group(client_service_1.clientModel);
        this._province.getData().subscribe(function (data) { return _this.provinces = data; });
    };
    ClientAddComponent.prototype.onClientFormSubmit = function (values, valid) {
        this._service.save(values).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        }, function () {
            console.log('done');
        });
    };
    ClientAddComponent = __decorate([
        core_1.Component({
            templateUrl: './app/client/add/client.add.component.html',
            providers: [client_service_1.ClientService, all_1.Province]
        }), 
        __metadata('design:paramtypes', [client_service_1.ClientService, forms_1.FormBuilder, all_1.Province])
    ], ClientAddComponent);
    return ClientAddComponent;
}());
exports.ClientAddComponent = ClientAddComponent;
//# sourceMappingURL=client.add.component.js.map