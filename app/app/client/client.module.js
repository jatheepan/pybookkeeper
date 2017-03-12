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
var paginator_module_1 = require("../shared/paginator/paginator.module");
var client_home_component_1 = require('./home/client.home.component');
var client_view_component_1 = require('./view/client.view.component');
var client_edit_component_1 = require('./edit/client.edit.component');
var directives_module_1 = require('../shared/directives/directives.module');
var forms_1 = require('@angular/forms');
var ClientModule = (function () {
    function ClientModule() {
    }
    ClientModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule,
                common_1.CommonModule,
                paginator_module_1.PaginatorModule,
                directives_module_1.DirectivesModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                client_home_component_1.ClientHomeComponent,
                client_view_component_1.ClientViewComponent,
                client_edit_component_1.ClientEditComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ClientModule);
    return ClientModule;
}());
exports.ClientModule = ClientModule;
//# sourceMappingURL=client.module.js.map