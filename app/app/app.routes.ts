import {Routes} from '@angular/router';

import {UserRoutes} from './user/user.routes';
import {dashboardRoutes} from './dashboard/dashboard.routes'
import {ClientRoutes} from './client/client.routes'

export const routes: Routes = [
    ...dashboardRoutes,
    ...UserRoutes,
    ...ClientRoutes
];
