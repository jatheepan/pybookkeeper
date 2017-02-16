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
var forms_1 = require('@angular/forms');
var UserEditComponent = (function () {
    function UserEditComponent(route, _fb, _service) {
        this.route = route;
        this._fb = _fb;
        this._service = _service;
    }
    UserEditComponent.prototype.ngOnInit = function () {
        this.userEditForm = this._fb.group(user_service_1.userModel);
        this.loadUserData();
    };
    UserEditComponent.prototype.onUserFormSubmit = function (model, valid) {
    };
    /**
     * Load user from service
     */
    UserEditComponent.prototype.loadUserData = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this._service.getUserDetail(params['id'])
                .subscribe(function (data) { return _this.userEditForm = _this._fb.group(data); });
        });
    };
    UserEditComponent = __decorate([
        core_1.Component({
            templateUrl: './app/user/edit/user.edit.component.html',
            providers: [user_service_1.UserService],
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, forms_1.FormBuilder, user_service_1.UserService])
    ], UserEditComponent);
    return UserEditComponent;
}());
exports.UserEditComponent = UserEditComponent;
//# sourceMappingURL=user.edit.component.js.map