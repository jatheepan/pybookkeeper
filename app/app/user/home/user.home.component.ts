import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {configs} from '../../shared/config';
import {Observable} from 'rxjs/Rx';

@Component({
    templateUrl: './app/user/home/user.home.component.html',
    providers: [UserService]
})

export class UserHomeComponent implements OnInit {
    private users = [];
    private pageCount: Number;
    private localObserver: any;
    private pageLimit: number = configs.api.limit;
    private hir:any;

    constructor(private _userService: UserService) {
        this.hir = Observable.create(observer => {
            this.localObserver = observer;
        });
    }

    ngOnInit() {
        this.loadUsers();
    }

    /**
     * Load the data
     * @param page
     */
    loadUsers(page = 1) {
        this._userService.getData(page)
            .subscribe(
                data => {
                    this.users = data.users;
                    this.pageCount = data.total
                },
                error => console.log(error)
            );
    }

    /**
     * When user clicks on paginator page button..
     * load the page
     * @param page
     */
    onPageClick(page) {
        this.loadUsers(page);
    }

    /**
     * On typeAhead keyup.
     *
     * @param value
     */
    onTypeAheadKeyUp(value) {
        if(typeof value === 'string') {
            if(value.length) {
                this._userService.search(value)
                    .subscribe(
                        // data => {
                            // this.localObserver.next(data);
                        // },
                        // error => console.log(error)
                    );
            }
            else {
                this.localObserver.next([]);
            }
        }
    }
}