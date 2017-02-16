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
var user_service_1 = require('../user.service');
var forms_1 = require('@angular/forms');
var modal_component_1 = require("../../shared/modal/modal.component");
var UserAddComponent = (function () {
    function UserAddComponent(_fb, _userService) {
        this._fb = _fb;
        this._userService = _userService;
    }
    UserAddComponent.prototype.ngOnInit = function () {
        this.userAddForm = this._fb.group(user_service_1.userModel);
    };
    UserAddComponent.prototype.onUserFormSubmit = function (model, valid) {
        var modal = new modal_component_1.ModalComponent();
        if (!valid) {
            return modal.alert('Missing required fields.');
        }
        this._userService.saveUser(model)
            .subscribe(function (data) {
            if (data.success !== true) {
                modal.alert(data.message);
            }
            else {
            }
        }, function (error) {
            modal.alert(error);
        });
    };
    UserAddComponent = __decorate([
        core_1.Component({
            templateUrl: './app/user/add/user.add.component.html',
            providers: [user_service_1.UserService],
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, user_service_1.UserService])
    ], UserAddComponent);
    return UserAddComponent;
}());
exports.UserAddComponent = UserAddComponent;
//# sourceMappingURL=user.add.component.js.map