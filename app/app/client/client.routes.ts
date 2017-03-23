import {Route} from '@angular/router';
import {ClientHomeComponent} from './home/client.home.component'
import {ClientViewComponent} from './view/client.view.component'
import {ClientAddComponent} from './add/client.add.component';
import {ClientEditComponent} from './edit/client.edit.component';

export const ClientRoutes: Route[] = [{
    path: 'clients',
    component: ClientHomeComponent
}, {
    path: 'clients/view/:id',
    component: ClientViewComponent
}, {
    path: 'clients/add',
    component: ClientAddComponent
}, {
    path: 'clients/edit/:id',
    component: ClientEditComponent
}];