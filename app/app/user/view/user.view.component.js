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
var user_service_1 = require('../user.service');
var UserViewComponent = (function () {
    /**
     * Constructor
     * @param _route
     * @param _service
     */
    function UserViewComponent(_route, _service) {
        this._route = _route;
        this._service = _service;
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
        this._route.params.subscribe(function (params) {
            _this._service.getUserDetail(params['id'])
                .subscribe(function (data) { return _this.user = data; });
        });
    };
    //TODO do delete
    UserViewComponent.prototype.onDeleteConfirm = function (user) {
        this._service.erase(user.id)
            .subscribe(function (data) {
            console.log(data);
        });
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