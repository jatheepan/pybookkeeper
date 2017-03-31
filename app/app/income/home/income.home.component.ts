import {Component, OnInit} from '@angular/core';
import {IncomeService} from '../income.service';

@Component({
    templateUrl: './app/income/home/income.home.component.html',
    providers: [IncomeService]
})

export class IncomeHomeComponent implements OnInit {
    private incomes = [];

    constructor(private _incomeService: IncomeService) {
    }
    ngOnInit() {
        this.loadIncomes();
    }

    loadIncomes(page: Number = 1) {
        this._incomeService.getData(page)
            .subscribe(
                data => {
                    this.incomes = data.incomes;
                },
                err => {
                    console.log(err);
                }
            )
    }
}