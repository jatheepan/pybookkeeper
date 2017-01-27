import {Route} from '@angular/router';
import {ClientHomeComponent} from './home/client.home.component'
import {ClientViewComponent} from './view/client.view.component'

export const ClientRoutes: Route[] = [{
    path: 'clients',
    component: ClientHomeComponent
}, {
    path: 'clients/view/:id',
    component: ClientViewComponent
}];