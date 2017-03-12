import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClientService, clientModel} from '../client.service';
import {Province} from '../../services/all';

import {
    FormGroup,
    FormBuilder
} from '@angular/forms';

@Component({
    templateUrl: './app/client/edit/client.edit.component.html',
    providers: [ClientService, Province]
})
export class ClientEditComponent implements OnInit {
    public clientEditForm: FormGroup = null;
    public provinces: any = null;

    /**
     * Constructor
     * @param _route
     * @param _service
     * @param _fb
     * @param _province
     */
    constructor(private _route: ActivatedRoute,
                private _service: ClientService,
                private _fb: FormBuilder,
                private _province: Province) {
    }

    ngOnInit() {
        this.clientEditForm = this._fb.group(clientModel);
        this.loadClientData();
        this._province.getData().subscribe(data => this.provinces = data);
    }

    onClientFormSubmit(values: any, valid: boolean) {
        console.log(arguments);
    }

    /**
     * Load client from service
     */
    loadClientData() {
        this._route.params.subscribe(params => {
            this._service.getClientDetail(params['id'])
                .subscribe(
                    data => this.clientEditForm = this._fb.group(data)
                )
        });
    }
}