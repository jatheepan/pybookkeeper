import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {UserHomeComponent, UserEditComponent, UserViewComponent} from './user.component';
import {PaginatorModule} from "../shared/paginator/paginator.module";
import {ModalModule} from "../shared/modal/modal.module";
import {TypeAheadModule} from "../shared/typeAhead/typeAhead.module";

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        PaginatorModule,
        TypeAheadModule,
        ModalModule
    ],
    declarations: [UserHomeComponent, UserViewComponent, UserEditComponent],
    exports: [UserHomeComponent, UserViewComponent, UserEditComponent]
})

export class UserModule {
}