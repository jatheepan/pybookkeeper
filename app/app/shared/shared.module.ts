import {NgModule} from '@angular/core';
import {HeaderModule} from './header/header.module';
import {SidebarModule} from './sidebar/sidebar.module';
import {PaginatorModule} from "./paginator/paginator.module";
import {TypeAheadModule} from "./typeAhead/typeAhead.module";

@NgModule({
    imports: [HeaderModule, SidebarModule, PaginatorModule, TypeAheadModule],
    exports: [HeaderModule, SidebarModule, PaginatorModule, TypeAheadModule]
})

export class SharedModule {

}