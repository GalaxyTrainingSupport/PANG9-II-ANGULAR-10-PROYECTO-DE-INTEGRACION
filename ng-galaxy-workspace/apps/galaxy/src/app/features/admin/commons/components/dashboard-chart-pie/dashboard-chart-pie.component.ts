import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { WorkshopReport } from '@galaxy/commons/interfaces';

@Component({
  selector: 'app-dashboard-chart-pie',
  templateUrl: './dashboard-chart-pie.component.html',
  styleUrls: ['./dashboard-chart-pie.component.scss']
})
export class DashboardChartPieComponent implements OnChanges {
  @Input() dataSource: WorkshopReport[] = [];
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.dataSource.currentValue) {
      this.pieChartLabels = this.dataSource.map(item => item.workshop.name);
      this.pieChartData = this.dataSource.map(item => item.participants);
    }
  }

}
