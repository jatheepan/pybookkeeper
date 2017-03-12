import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {CommonModule} from '@angular/common';
import {PaginatorModule} from "../shared/paginator/paginator.module";
import {ClientHomeComponent} from './home/client.home.component';
import {ClientViewComponent} from './view/client.view.component';
import {ClientEditComponent} from './edit/client.edit.component';
import {DirectivesModule} from '../shared/directives/directives.module';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms'

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        PaginatorModule,
        DirectivesModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        ClientHomeComponent,
        ClientViewComponent,
        ClientEditComponent
    ]
})

export class ClientModule {
}