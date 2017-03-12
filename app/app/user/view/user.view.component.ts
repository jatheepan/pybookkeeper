import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../user.service';

@Component({
    templateUrl: './app/user/view/user.view.component.html',
    providers: [UserService]
})

export class UserViewComponent implements OnInit{
    private user: Object = {};

    /**
     * Constructor
     * @param _route
     * @param _service
     */
    constructor(private _route: ActivatedRoute, private _service: UserService) {
    }

    /**
     * On init
     */
    ngOnInit() {
        this.loadUserData();
    }

    /**
     * Load user from service
     */
    loadUserData() {
        this._route.params.subscribe(params => {
            this._service.getUserDetail(params['id'])
                .subscribe(
                    data => this.user = data
                )
        });
    }

    //TODO do delete
    onDeleteConfirm(user:any): void {
        this._service.erase(user.id)
            .subscribe(
                data => {
                    console.log(data);
                }
            )

    }
}