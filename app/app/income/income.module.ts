import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {IncomeHomeComponent} from './home/income.home.component';
import {IncomeAddComponent} from './add/income.add.component';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        IncomeHomeComponent,
        IncomeAddComponent
    ],
    exports: [
        IncomeHomeComponent,
        IncomeAddComponent
    ]
})

export class IncomeModule {
}