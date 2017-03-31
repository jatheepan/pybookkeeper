import {Component, OnInit} from '@angular/core';
import {IncomeService, incomeModel} from '../income.service';
import {Province} from '../../services/all';

import {
    FormGroup,
    FormBuilder
} from '@angular/forms';
@Component({
    templateUrl: './app/income/add/income.add.component.html',
    providers: [IncomeService, Province]
})

export class IncomeAddComponent implements OnInit {
    public addForm: FormGroup;
    public provinces: any = null;

    constructor(private _incomeService: IncomeService,
                private _fb: FormBuilder,
                private _province: Province) {
    }

    ngOnInit() {
        this.addForm = this._fb.group(incomeModel);
        this._province.getData().subscribe(
            data => this.provinces = data);
    }


}
