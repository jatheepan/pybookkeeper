import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import {AppComponent}   from './app.component';
import {routes} from './app.routes';
import {SidebarModule} from "./shared/sidebar/sidebar.module";
import {HeaderModule} from './shared/header/header.module';
import {UserModule} from './user/user.module';
import {ClientModule} from './client/client.module';
import {IncomeModule} from './income/income.module';
import {DashboardModule} from './dashboard/dashboard.module';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        HttpModule,
        RouterModule.forRoot(routes, {useHash: true}),
        UserModule,
        ClientModule,
        IncomeModule,
        DashboardModule,
        HeaderModule,
        SidebarModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
