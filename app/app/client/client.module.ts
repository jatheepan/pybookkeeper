import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {CommonModule} from '@angular/common';
import {ClientHomeComponent} from './home/client.home.component'

@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [ClientHomeComponent]
})

export class ClientModule {
}