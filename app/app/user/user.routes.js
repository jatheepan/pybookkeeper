"use strict";
var user_home_component_1 = require("./home/user.home.component");
var user_view_component_1 = require("./view/user.view.component");
var user_edit_component_1 = require("./edit/user.edit.component");
exports.UserRoutes = [{
        path: 'users',
        component: user_home_component_1.UserHomeComponent
    }, {
        path: 'users/view/:id',
        component: user_view_component_1.UserViewComponent
    }, {
        path: 'users/edit/:id',
        component: user_edit_component_1.UserEditComponent
    }];
//# sourceMappingURL=user.routes.js.map