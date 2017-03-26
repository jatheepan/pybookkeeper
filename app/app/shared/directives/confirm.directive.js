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
var modal_component_1 = require('../modal/modal.component');
var ConfirmDirective = (function () {
    function ConfirmDirective() {
        this.onconfirm = new core_1.EventEmitter();
        this.oncancel = new core_1.EventEmitter();
    }
    ConfirmDirective.prototype.onClick = function () {
        var _this = this;
        var modal = new modal_component_1.ModalComponent();
        modal.confirm({
            message: 'Are you sure?'
        }, function (answer) {
            if (answer === true) {
                _this.onconfirm.emit(_this.data);
            }
            else {
                _this.oncancel.emit(_this.data);
            }
        });
    };
    __decorate([
        core_1.Input('message'), 
        __metadata('design:type', Object)
    ], ConfirmDirective.prototype, "message", void 0);
    __decorate([
        core_1.Input('passeddata'), 
        __metadata('design:type', Object)
    ], ConfirmDirective.prototype, "data", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ConfirmDirective.prototype, "onconfirm", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ConfirmDirective.prototype, "oncancel", void 0);
    __decorate([
        core_1.HostListener('click', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ConfirmDirective.prototype, "onClick", null);
    ConfirmDirective = __decorate([
        core_1.Directive({
            selector: '[confirm]'
        }), 
        __metadata('design:paramtypes', [])
    ], ConfirmDirective);
    return ConfirmDirective;
}());
exports.ConfirmDirective = ConfirmDirective;
//# sourceMappingURL=confirm.directive.js.map