// api_meteo.ts
import { fetchWeatherApi } from 'openmeteo';

export async function getAPIData() {
  const params = {
    "latitude": 52.52,
    "longitude": 13.41,
	"daily": ["temperature_2m_mean", "weather_code", "cloud_cover_mean", "precipitation_probability_mean", "wind_speed_10m_mean", "sunshine_duration"],
    "current": ["temperature_2m", "weather_code", "wind_speed_10m"],
    "timezone": 'Europe/Berlin'
  };

  const url = 'https://api.open-meteo.com/v1/forecast';
  const responses = await fetchWeatherApi(url, params);
  const response = responses[0];
  const utcOffsetSeconds = response.utcOffsetSeconds();
  const current = response.current()!;
  const daily = response.daily()!;

  return {
    current: {
		time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
		temperature_2m: current.variables(0)!.value(),
		weather_code: current.variables(1)!.value(),
		wind_speed_10m: current.variables(2)!.value(),
	},
    daily: {
		time: [...Array((Number(daily.timeEnd()) - Number(daily.time())) / daily.interval())].map(
			(_, i) => new Date((Number(daily.time()) + i * daily.interval() + utcOffsetSeconds) * 1000)
		),
		temperature_2m_mean: daily.variables(0)!.valuesArray(),
		weather_code: daily.variables(1)!.valuesArray(),
		cloud_cover_mean: daily.variables(2)!.valuesArray(),
		precipitation_probability_mean: daily.variables(3)!.valuesArray(),
		wind_speed_10m_mean: daily.variables(4)!.valuesArray(),
		sunshine_duration: daily.variables(5)!.valuesArray(),
	},
  };
}
