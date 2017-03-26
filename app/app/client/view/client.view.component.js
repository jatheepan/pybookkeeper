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
var ClientViewComponent = (function () {
    /**
     * Constructor
     * @param route
     * @param service
     */
    function ClientViewComponent(route, service) {
        this.route = route;
        this.service = service;
        this.client = {};
    }
    /**
     * On init
     */
    ClientViewComponent.prototype.ngOnInit = function () {
        this.loadClientData();
    };
    /**
     * Load client by id
     */
    ClientViewComponent.prototype.loadClientData = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.service.getClientDetail(params['id'])
                .subscribe(function (data) { return _this.client = data; });
        });
    };
    ClientViewComponent.prototype.onClientDeleteConfirm = function (client) {
        this.service.erase(client.id)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    ClientViewComponent = __decorate([
        core_1.Component({
            templateUrl: './app/client/view/client.view.component.html',
            providers: [client_service_1.ClientService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, client_service_1.ClientService])
    ], ClientViewComponent);
    return ClientViewComponent;
}());
exports.ClientViewComponent = ClientViewComponent;
//# sourceMappingURL=client.view.component.js.map