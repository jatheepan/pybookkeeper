import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {PaginatorModule} from "../shared/paginator/paginator.module";
import {ModalModule} from "../shared/modal/modal.module";
import {TypeAheadModule} from "../shared/typeAhead/typeAhead.module";
import {ConfirmDirective} from '../shared/directives/confirm.directive'
import {TagModule} from '../shared/tag/tag.module';
import {
    UserHomeComponent,
    UserEditComponent,
    UserViewComponent,
    UserAddComponent
} from './user.component';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms'

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PaginatorModule,
        TypeAheadModule,
        ModalModule,
        TagModule
    ],
    declarations: [
        UserHomeComponent,
        UserViewComponent,
        UserEditComponent,
        UserAddComponent,
        ConfirmDirective
    ],
    exports: [UserHomeComponent, UserViewComponent, UserEditComponent, UserAddComponent]
})

export class UserModule {
}