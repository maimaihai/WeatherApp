import { Component,Input } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@Component({
  selector: 'app-chart-7-day',
  imports: [NgxChartsModule],
  templateUrl: './chart-7-day.html',
  styleUrl: './chart-7-day.css'
})
export class Chart7Day {

  @Input() multi!: any[];

  view: [number,number] = [700, 400];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Tag';
  yAxisLabel: string = 'Temperatur (C°) | Regen(%)';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454']
  };
}
