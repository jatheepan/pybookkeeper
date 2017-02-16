import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService, userModel} from '../user.service';
import {
    FormGroup,
    FormBuilder
} from '@angular/forms'
@Component({
    templateUrl: './app/user/edit/user.edit.component.html',
    providers: [UserService],
})

export class UserEditComponent implements OnInit {
    public userEditForm:FormGroup;
    constructor(private route: ActivatedRoute, public _fb:FormBuilder, private _service: UserService) {
    }

    ngOnInit() {
        this.userEditForm = this._fb.group(userModel);
        this.loadUserData();
    }

    onUserFormSubmit(model, valid) {

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