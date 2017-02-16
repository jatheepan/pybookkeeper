import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TagComponent} from './tag.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        TagComponent
    ],
    exports: [
        TagComponent
    ]
})
export class TagModule {
}