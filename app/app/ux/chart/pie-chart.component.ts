import {Component, OnInit, Renderer} from '@angular/core';

@Component({
    selector: 'ux-pie-chart',
    templateUrl: './app/ux/chart/pie-chart.component.html'
})

export class PieChartComponent implements OnInit {
    private chartDom: any;

    constructor(private el: Renderer) {
    }

    ngOnInit() {
        let dom = this.chartDom = this.el.selectRootElement('.pie-chart');
        this.getPieChart();
    }

    getPieChart() {

    }
}