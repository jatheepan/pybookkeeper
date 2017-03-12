import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfirmDirective} from './confirm.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ConfirmDirective
    ],
    exports: [
        ConfirmDirective
    ]
})
export class DirectivesModule {}