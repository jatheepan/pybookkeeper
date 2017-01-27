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
var config_1 = require('../../shared/config');
var ClientHomeComponent = (function () {
    function ClientHomeComponent(_clientService) {
        this._clientService = _clientService;
        this.clients = [];
        this.pageLimit = config_1.configs.api.limit;
    }
    ClientHomeComponent.prototype.ngOnInit = function () {
        this.loadClients();
    };
    ClientHomeComponent.prototype.loadClients = function (page) {
        var _this = this;
        if (page === void 0) { page = 1; }
        this._clientService.getData(page, this.pageLimit)
            .subscribe(function (data) {
            _this.clients = data.clients;
            _this.pageCount = data.total;
        }, function (error) { return console.log(error); });
    };
    ClientHomeComponent.prototype.onPageClick = function (page) {
        this.loadClients(page);
    };
    ClientHomeComponent = __decorate([
        core_1.Component({
            templateUrl: './app/client/home/client.home.component.html',
            providers: [client_service_1.ClientService]
        }), 
        __metadata('design:paramtypes', [client_service_1.ClientService])
    ], ClientHomeComponent);
    return ClientHomeComponent;
}());
exports.ClientHomeComponent = ClientHomeComponent;
//# sourceMappingURL=client.home.component.js.map