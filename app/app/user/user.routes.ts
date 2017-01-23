import {Route} from '@angular/router';
import {UserHomeComponent} from "./home/user.home.component";
import {UserViewComponent} from "./view/user.view.component";
import {UserEditComponent} from "./edit/user.edit.component";

export const UserRoutes: Route[] = [{
    path: 'users',
    component: UserHomeComponent
},{
    path: 'users/view/:id',
    component: UserViewComponent
},{
    path: 'users/edit/:id',
    component: UserEditComponent
}];