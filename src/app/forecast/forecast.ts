import { Component, OnInit } from '@angular/core';
import { getAPIData } from '../api_meteo';
import { DecimalPipe} from '@angular/common';
import { WeatherCard } from '../weather-card/weather-card';
import {CurrentWeatherCard} from '../current-weather-card/current-weather-card';
import { Chart7Day } from '../chart-7-day/chart-7-day';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';



@Component({
  selector: 'app-forecast',
  imports: [DecimalPipe, WeatherCard, CurrentWeatherCard, MatIconModule,Chart7Day,MatDividerModule],
  templateUrl: './forecast.html',
  styleUrl: './forecast.css'
})


export class Forecast  implements OnInit{

  today = new Date();
  formatted = this.today.toLocaleDateString('de-DE'); 


  weatherData: any;
  multi: any[] = [];

  async ngOnInit() {
    this.weatherData = await getAPIData();
    console.log('Weather Data:', this.weatherData);

    const dailyTime = this.weatherData.daily.time;
    const temperatureMean = this.weatherData.daily.temperature_2m_mean;
    const precipitationProbability = this.weatherData.daily.precipitation_probability_mean;

    this.multi = [
      {
        name: 'Temperatur',
        series: dailyTime.map((date: Date, index: number) => ({
          name: date.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit' }),
          value: temperatureMean[index]
        }))
      },
      {
        name: 'Regenwahrscheinlichkeit',
        series: dailyTime.map((date: string, index: number) => ({
          name: new Date(date).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit' }),
          value: precipitationProbability[index]
        }))
      }
    ];

  }

}
