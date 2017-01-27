import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {CommonModule} from '@angular/common';
import {PaginatorModule} from "../shared/paginator/paginator.module";
import {ClientHomeComponent} from './home/client.home.component'
import {ClientViewComponent} from './view/client.view.component'

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        PaginatorModule
    ],
    declarations: [
        ClientHomeComponent,
        ClientViewComponent
    ]
})

export class ClientModule {
}