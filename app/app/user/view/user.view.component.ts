import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {UserService} from '../user.service';

@Component({
    templateUrl: './app/user/view/user.view.component.html',
    providers: [UserService]
})

export class UserViewComponent implements OnInit{
    private user: Object = {};

    /**
     * Constructor
     * @param route
     * @param service
     */
    constructor(private route: ActivatedRoute, private service: UserService) {
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
        this.route.params.subscribe(params => {
            this.service.getUserDetail(params['id'])
                .subscribe(
                    data => this.user = data
                )
        });
    }

    //TODO do delete
    onUserConfirm(answer:any): void {
        console.log(answer);
    }
}