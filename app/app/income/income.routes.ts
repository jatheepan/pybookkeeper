import {Route} from '@angular/router';
import {IncomeHomeComponent} from './home/income.home.component';
import {IncomeAddComponent} from './add/income.add.component';

export const IncomeRoutes: Route[] = [{
    path: 'incomes',
    component: IncomeHomeComponent
}, {
    path: 'incomes/add',
    component: IncomeAddComponent
}];