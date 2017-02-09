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
    @Output() confirm = new EventEmitter<any>();
    @Output() cancel = new EventEmitter<any>();
    @HostListener('click', ['$event'])
    onClick() {
        let modal = new ModalComponent();
        modal.confirm({
            message: 'Are you sure?'
        }, answer => {
            if(answer === true) {
                this.confirm.emit(this.data);
            }
            else {
                this.cancel.emit(this.data);
            }
        });

    }

}