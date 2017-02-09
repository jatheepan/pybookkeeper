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
var common_1 = require('@angular/common');
var user_component_1 = require('./user.component');
var paginator_module_1 = require("../shared/paginator/paginator.module");
var modal_module_1 = require("../shared/modal/modal.module");
var typeAhead_module_1 = require("../shared/typeAhead/typeAhead.module");
var confirm_directive_1 = require('../shared/directives/confirm.directive');
var UserModule = (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule,
                common_1.CommonModule,
                paginator_module_1.PaginatorModule,
                typeAhead_module_1.TypeAheadModule,
                modal_module_1.ModalModule
            ],
            declarations: [
                user_component_1.UserHomeComponent,
                user_component_1.UserViewComponent,
                user_component_1.UserEditComponent,
                confirm_directive_1.ConfirmDirective
            ],
            exports: [user_component_1.UserHomeComponent, user_component_1.UserViewComponent, user_component_1.UserEditComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], UserModule);
    return UserModule;
}());
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map