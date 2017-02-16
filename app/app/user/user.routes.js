"use strict";
var user_home_component_1 = require('./home/user.home.component');
var user_view_component_1 = require('./view/user.view.component');
var user_edit_component_1 = require('./edit/user.edit.component');
var user_add_component_1 = require('./add/user.add.component');
exports.UserRoutes = [{
        path: 'users',
        component: user_home_component_1.UserHomeComponent
    }, {
        path: 'users/view/:id',
        component: user_view_component_1.UserViewComponent
    }, {
        path: 'users/edit/:id',
        component: user_edit_component_1.UserEditComponent
    }, {
        path: 'users/add',
        component: user_add_component_1.UserAddComponent
    }];
//# sourceMappingURL=user.routes.js.map