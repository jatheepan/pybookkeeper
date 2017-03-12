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
var router_1 = require('@angular/router');
var client_service_1 = require('../client.service');
var all_1 = require('../../services/all');
var forms_1 = require('@angular/forms');
var ClientEditComponent = (function () {
    /**
     * Constructor
     * @param _route
     * @param _service
     * @param _fb
     * @param _province
     */
    function ClientEditComponent(_route, _service, _fb, _province) {
        this._route = _route;
        this._service = _service;
        this._fb = _fb;
        this._province = _province;
        this.clientEditForm = null;
        this.provinces = null;
    }
    ClientEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientEditForm = this._fb.group(client_service_1.clientModel);
        this.loadClientData();
        this._province.getData().subscribe(function (data) { return _this.provinces = data; });
    };
    ClientEditComponent.prototype.onClientFormSubmit = function (values, valid) {
        console.log(arguments);
    };
    /**
     * Load client from service
     */
    ClientEditComponent.prototype.loadClientData = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this._service.getClientDetail(params['id'])
                .subscribe(function (data) { return _this.clientEditForm = _this._fb.group(data); });
        });
    };
    ClientEditComponent = __decorate([
        core_1.Component({
            templateUrl: './app/client/edit/client.edit.component.html',
            providers: [client_service_1.ClientService, all_1.Province]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, client_service_1.ClientService, forms_1.FormBuilder, all_1.Province])
    ], ClientEditComponent);
    return ClientEditComponent;
}());
exports.ClientEditComponent = ClientEditComponent;
//# sourceMappingURL=client.edit.component.js.map