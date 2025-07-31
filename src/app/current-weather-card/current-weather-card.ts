import { Component, Input } from '@angular/core';
import { DecimalPipe,DatePipe } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-current-weather-card',
  imports: [DecimalPipe, DatePipe, MatDividerModule,MatIconModule],
  templateUrl: './current-weather-card.html',
  styleUrl: './current-weather-card.css'
})

export class CurrentWeatherCard {
  @Input() temperature!: number;
  @Input() windspeed!: number;
  @Input() weatherCode!: number;

  get_weatherIcon(): string {
    if(this.weatherCode >= 95 && this.weatherCode <= 99 || this.weatherCode == 29 || this.weatherCode >=13 && this.weatherCode <= 17){
      return "thunderstorm";
    }
    if(this.windspeed > 47){
      return "air";
    }
    if(this.weatherCode >= 0 && this.weatherCode <= 2){
      return "wb_sunny";
    }
    if(this.weatherCode  == 3){
      return "cloud";
    }
    if(this.weatherCode == 20 || this.weatherCode == 21 || this.weatherCode >=23 && this.weatherCode <= 27 || this.weatherCode >= 80 && this.weatherCode <= 94 || this.weatherCode >= 50 && this.weatherCode <= 69){
      return "water_drop";
    }
    if(this.weatherCode >= 4 && this.weatherCode <= 12 || this.weatherCode >= 40 && this.weatherCode <= 49 || this.weatherCode == 10 || this.weatherCode == 28){
      return "foggy";
    }
    return "cloud";
    }
}

