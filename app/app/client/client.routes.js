"use strict";
var client_home_component_1 = require('./home/client.home.component');
var client_view_component_1 = require('./view/client.view.component');
exports.ClientRoutes = [{
        path: 'clients',
        component: client_home_component_1.ClientHomeComponent
    }, {
        path: 'clients/view/:id',
        component: client_view_component_1.ClientViewComponent
    }];
//# sourceMappingURL=client.routes.js.map