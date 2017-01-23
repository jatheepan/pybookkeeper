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
var modal_component_1 = require('../../shared/modal/modal.component');
var user_service_1 = require('../user.service');
var UserViewComponent = (function () {
    /**
     * Constructor
     * @param route
     * @param service
     */
    function UserViewComponent(route, service) {
        this.route = route;
        this.service = service;
        this.user = {};
    }
    /**
     * On init
     */
    UserViewComponent.prototype.ngOnInit = function () {
        this.loadUserData();
    };
    /**
     * Load user from service
     */
    UserViewComponent.prototype.loadUserData = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.service.getUserDetail(params['id'])
                .subscribe(function (data) { return _this.user = data; });
        });
    };
    /**
     * TODO: Delete User
     */
    UserViewComponent.prototype.onDeleteTap = function () {
        var modal = new modal_component_1.ModalComponent();
        modal.confirm({
            message: 'Are youu sure?'
        }, function (value) { return console.log('done', value); });
    };
    UserViewComponent = __decorate([
        core_1.Component({
            templateUrl: './app/user/view/user.view.component.html',
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, user_service_1.UserService])
    ], UserViewComponent);
    return UserViewComponent;
}());
exports.UserViewComponent = UserViewComponent;
//# sourceMappingURL=user.view.component.js.map