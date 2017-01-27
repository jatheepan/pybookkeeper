import {Component, OnInit} from '@angular/core';
import {ClientService} from '../client.service';
import {configs} from '../../shared/config';

@Component({
    templateUrl: './app/client/home/client.home.component.html',
    providers: [ClientService]
})

export class ClientHomeComponent implements OnInit {
    private clients = [];
    private pageCount: Number;
    private pageLimit: number = configs.api.limit;
    constructor(private _clientService: ClientService) {
    }

    ngOnInit() {
        this.loadClients();
    }

    loadClients(page = 1) {
        this._clientService.getData(page, this.pageLimit)
            .subscribe(
                data => {
                    this.clients = data.clients;
                    this.pageCount = data.total
                },
                error => console.log(error)
            )
    }

    onPageClick(page) {
        this.loadClients(page);
    }
}