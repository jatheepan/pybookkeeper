"use strict";
var user_routes_1 = require('./user/user.routes');
var dashboard_routes_1 = require('./dashboard/dashboard.routes');
var client_routes_1 = require('./client/client.routes');
var income_routes_1 = require('./income/income.routes');
exports.routes = dashboard_routes_1.dashboardRoutes.concat(user_routes_1.UserRoutes, client_routes_1.ClientRoutes, income_routes_1.IncomeRoutes);
//# sourceMappingURL=app.routes.js.map