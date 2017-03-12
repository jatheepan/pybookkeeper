"use strict";
var client_home_component_1 = require('./home/client.home.component');
var client_view_component_1 = require('./view/client.view.component');
var client_edit_component_1 = require('./edit/client.edit.component');
exports.ClientRoutes = [{
        path: 'clients',
        component: client_home_component_1.ClientHomeComponent
    }, {
        path: 'clients/view/:id',
        component: client_view_component_1.ClientViewComponent
    }, {
        path: 'clients/edit/:id',
        component: client_edit_component_1.ClientEditComponent
    }];
//# sourceMappingURL=client.routes.js.map