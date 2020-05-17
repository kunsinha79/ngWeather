import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map, catchError } from 'rxjs/operators'

import {
  IWeather,
  IWeatherHourly,
  IWeatherHourlyList,
} from '../shared/weather.type'
import { WEATHER_CONSTANTS } from '../shared/weather.constant'
import { HttpClient } from '@angular/common/http'
import { country } from '../shared/weather.data'

@Injectable({
  providedIn: 'root',
})
export class WeatherInfoService {
  constructor(private httpClient: HttpClient) {}

  getCityWeather(value: String): Observable<IWeather> {
    return this.httpClient
      .get(
        `${WEATHER_CONSTANTS.WEATHER_API_CURRENT}${value}${WEATHER_CONSTANTS.WEATHER_API_CURRENT_PREDICATE}${WEATHER_CONSTANTS.WEATHER_API_TOKEN}`
      )
      .pipe(
        map((res: IWeather) => res),
        catchError(() => [])
      )
  }

  getHourlyWeather(index: number): Observable<IWeatherHourly[]> {
    const { latitude, longitude } = country[index]
    return this.httpClient
      .get(
        `${WEATHER_CONSTANTS.WEATHER_API_HOURLY}lat=${latitude}&lon=${longitude}${WEATHER_CONSTANTS.WEATHER_API_HOURLY_PREDICATE}${WEATHER_CONSTANTS.WEATHER_API_CURRENT_PREDICATE}${WEATHER_CONSTANTS.WEATHER_API_TOKEN}`
      )
      .pipe(
        map((res: IWeatherHourlyList) => res.hourly),
        catchError(() => [])
      )
  }
}
