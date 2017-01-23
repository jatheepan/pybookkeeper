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
var config_1 = require('../../shared/config');
var Rx_1 = require('rxjs/Rx');
var UserHomeComponent = (function () {
    function UserHomeComponent(_userService) {
        var _this = this;
        this._userService = _userService;
        this.users = [];
        this.pageLimit = config_1.configs.api.limit;
        this.hir = Rx_1.Observable.create(function (observer) {
            _this.localObserver = observer;
        });
    }
    UserHomeComponent.prototype.ngOnInit = function () {
        this.loadUsers();
    };
    /**
     * Load the data
     * @param page
     */
    UserHomeComponent.prototype.loadUsers = function (page) {
        var _this = this;
        if (page === void 0) { page = 1; }
        this._userService.getData(page)
            .subscribe(function (data) {
            _this.users = data.users;
            _this.pageCount = data.total;
        }, function (error) { return console.log(error); });
    };
    /**
     * When user clicks on paginator page button..
     * load the page
     * @param page
     */
    UserHomeComponent.prototype.onPageClick = function (page) {
        this.loadUsers(page);
    };
    /**
     * On typeAhead keyup.
     *
     * @param value
     */
    UserHomeComponent.prototype.onTypeAheadKeyUp = function (value) {
        var _this = this;
        if (typeof value === 'string') {
            if (value.length) {
                this._userService.search(value)
                    .subscribe(function (data) {
                    _this.localObserver.next(data);
                }, function (error) { return console.log(error); });
            }
            else {
                this.localObserver.next([]);
            }
        }
    };
    UserHomeComponent = __decorate([
        core_1.Component({
            templateUrl: './app/user/home/user.home.component.html',
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], UserHomeComponent);
    return UserHomeComponent;
}());
exports.UserHomeComponent = UserHomeComponent;
//# sourceMappingURL=user.home.component.js.map