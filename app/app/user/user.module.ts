import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {UserHomeComponent, UserEditComponent, UserViewComponent} from './user.component';
import {PaginatorModule} from "../shared/paginator/paginator.module";
import {ModalModule} from "../shared/modal/modal.module";
import {TypeAheadModule} from "../shared/typeAhead/typeAhead.module";
import {ConfirmDirective} from '../shared/directives/confirm.directive'

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        PaginatorModule,
        TypeAheadModule,
        ModalModule
    ],
    declarations: [
        UserHomeComponent,
        UserViewComponent,
        UserEditComponent,
        ConfirmDirective
    ],
    exports: [UserHomeComponent, UserViewComponent, UserEditComponent]
})

export class UserModule {
}