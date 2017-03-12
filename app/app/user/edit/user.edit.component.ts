import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService, userModel} from '../user.service';
import {
    FormGroup,
    FormBuilder
} from '@angular/forms'
import {ModalComponent} from "../../shared/modal/modal.component";

@Component({
    templateUrl: './app/user/edit/user.edit.component.html',
    providers: [UserService],
})

export class UserEditComponent implements OnInit {
    public userEditForm: FormGroup;

    constructor(private route: ActivatedRoute, public _fb: FormBuilder, private _service: UserService) {
    }

    ngOnInit() {
        this.userEditForm = this._fb.group(userModel);
        this.loadUserData();
    }

    onUserFormSubmit(model, valid) {
        let modal = new ModalComponent();
        if(!valid) {
            return modal.alert('Missing required fields.');
        }
        this.route.params.subscribe(params => {
            this._service.update(params['id'], model)
                .subscribe(data => {
                    if(data.success !== true) {
                        modal.alert('Unable to update.');
                    }
                    else {
                        this.userEditForm = this._fb.group(data);
                    }
                }, err => {
                    model.alert('Unable to update.');
                });
        });
    }

    /**
     * Load user from service
     */
    loadUserData() {
        this.route.params.subscribe(params => {
            this._service.getUserDetail(params['id'])
                .subscribe(
                    data => this.userEditForm = this._fb.group(data)
                )
        });
    }
}