import {
    Directive,
    Input,
    Output,
    HostListener,
    EventEmitter
} from '@angular/core';

import {ModalComponent} from '../modal/modal.component';

@Directive({
    selector: '[confirm]'
})
export class ConfirmDirective {
    @Input('message') message:any;
    @Input('passeddata') data:any;
    @Output() onconfirm = new EventEmitter<any>();
    @Output() oncancel = new EventEmitter<any>();
    @HostListener('click', ['$event'])
    onClick() {
        let modal = new ModalComponent();
        modal.confirm({
            message: 'Are you sure?'
        }, answer => {
            if(answer === true) {
                this.onconfirm.emit(this.data);
            }
            else {
                this.oncancel.emit(this.data);
            }
        });
    }
}