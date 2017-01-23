import {Route} from '@angular/router';
import {ClientHomeComponent} from './home/client.home.component'

export const ClientRoutes: Route[] = [{
    path: 'clients',
    component: ClientHomeComponent
}];