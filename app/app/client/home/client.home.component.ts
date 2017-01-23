import {Component, OnInit} from '@angular/core';
import {ClientService} from '../client.service';

@Component({
    templateUrl: './app/client/home/client.home.component.html',
    providers: [ClientService]
})

export class ClientHomeComponent implements OnInit {
    private clients = [];
    constructor(private _clientService: ClientService) {
    }

    ngOnInit() {
        this.loadClients();
    }

    loadClients(page = 1) {
        this._clientService.getData(page)
            .subscribe(
                data => {
                    this.clients = data.clients
                },
                error => console.log(error)
            )
    }
}