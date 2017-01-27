import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClientService} from '../client.service'

@Component({
    templateUrl: './app/client/view/client.view.component.html',
    providers: [ClientService]
})

export class ClientViewComponent implements OnInit {
    private client: Object = {};

    /**
     * Constructor
     * @param route
     * @param service
     */
    constructor(private route: ActivatedRoute, private service: ClientService) {
    }

    /**
     * On init
     */
    ngOnInit() {
        this.loadClientData();
    }

    /**
     * Load client by id
     */
    loadClientData() {
        this.route.params.subscribe(params => {
            this.service.getClientDetail(params['id'])
                .subscribe(data => this.client = data);
        })
    }
}

