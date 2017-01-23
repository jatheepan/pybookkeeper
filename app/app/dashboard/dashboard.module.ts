import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {DashboardComponent} from './dashboard.component';
import {PieChartModule} from '../ux/chart/pie-chart.module';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        PieChartModule
    ],
    declarations: [DashboardComponent],
    exports: [DashboardComponent]
})

export class DashboardModule {
}