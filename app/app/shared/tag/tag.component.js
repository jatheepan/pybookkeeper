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
var forms_1 = require('@angular/forms');
var valueAccessor = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return TagComponent; }),
    multi: true
};
var TagComponent = (function () {
    function TagComponent() {
        this._value = '';
        this.onChange = function (_) { return; };
        this.onTouched = function () { return; };
    }
    Object.defineProperty(TagComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this.onChange(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    TagComponent.prototype.writeValue = function (value) {
        this._value = value;
        this.onChange(value);
    };
    TagComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    TagComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    TagComponent = __decorate([
        core_1.Component({
            selector: 'tag-input',
            template: "\n    <input type=\"text\" [(ngModel)]=\"value\">\n    <div>{{value}}</div>\n",
            providers: [valueAccessor]
        }), 
        __metadata('design:paramtypes', [])
    ], TagComponent);
    return TagComponent;
}());
exports.TagComponent = TagComponent;
//# sourceMappingURL=tag.component.js.map