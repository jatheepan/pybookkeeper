import {Component, OnInit} from '@angular/core';
import {ClientService, clientModel} from '../client.service';
import {Province} from '../../services/all';
import {
    FormGroup,
    FormBuilder
} from '@angular/forms'

@Component({
    templateUrl: './app/client/add/client.add.component.html',
    providers: [ClientService, Province]
})
export class ClientAddComponent implements OnInit {
    public clientAddForm: FormGroup;
    public provinces: any = null;

    /**
     * Constructor
     * @param _service
     * @param _fb
     * @param _province
     */
    constructor(private _service: ClientService,
                private _fb: FormBuilder,
                private _province: Province) {
    }

    ngOnInit() {
        this.clientAddForm = this._fb.group(clientModel);
        this._province.getData().subscribe(data => this.provinces = data);
    }

    onClientFormSubmit(values: any, valid: boolean) {
        this._service.save(values).subscribe(
            data => {
                console.log(data);
            },
            err => {
                console.log(err);
            },
            () => {
                console.log('done');
            }
        );

    }
}