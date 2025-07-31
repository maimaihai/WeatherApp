import { Component, Input } from '@angular/core';
import { DecimalPipe,DatePipe } from '@angular/common';

@Component({
  selector: 'app-weather-card',
  imports: [DecimalPipe, DatePipe],
  templateUrl: './weather-card.html',
  styleUrl: './weather-card.css'
})
export class WeatherCard{
  @Input() day!: number;
  @Input() temperature!: number;
  @Input() precipitation!: number;

}
