import {Component, OnInit} from '@angular/core';
import {UserService, userModel} from '../user.service';
import {
    FormGroup,
    FormBuilder,
} from '@angular/forms';
import {ModalComponent} from "../../shared/modal/modal.component";

@Component({
    templateUrl: './app/user/add/user.add.component.html',
    providers: [UserService],
})
export class UserAddComponent implements OnInit {
    public userAddForm: FormGroup;
    constructor(public _fb:FormBuilder, public _service: UserService) {}
    ngOnInit() {
        this.userAddForm = this._fb.group(userModel);
    }

    onUserFormSubmit(model, valid) {
        let modal = new ModalComponent();
        if(!valid) {
            return modal.alert('Missing required fields.');
        }
        this._service.save(model)
            .subscribe(
                data => {
                    if(data.success !== true) {
                        modal.alert(data.message);
                    }
                    else {
                        //TODO: Push to notification manager
                    }
                },
                error => {
                    modal.alert(error);
                }
            );
    }
}