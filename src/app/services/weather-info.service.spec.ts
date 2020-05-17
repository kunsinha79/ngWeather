import { TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { WeatherInfoService } from './weather-info.service'
import { HttpClient } from '@angular/common/http'
import { of } from 'rxjs'
import { IWeather, IWeatherHourly } from '../shared/weather.type'
import { currentWeatherMock } from '../test/mock/current-weather.mock'
import { hourlyWeatherMock } from '../test/mock/hourly-weather.mock'

describe('WeatherInfoService', () => {
  let service: WeatherInfoService
  let http: HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherInfoService, HttpClient],
    })
    service = TestBed.inject(WeatherInfoService)
    http = TestBed.get(HttpClient)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should return weather of the city requested', () => {
    spyOn(http, 'get').and.returnValue(of(currentWeatherMock))
    service.getCityWeather('ams').subscribe((x: IWeather) => {
      expect(x).toEqual(currentWeatherMock)
      expect(http.get).toHaveBeenCalled()
    })
  })

  it('should return flight info of the city requested', () => {
    spyOn(http, 'get').and.returnValue(of(hourlyWeatherMock))
    service.getHourlyWeather(0).subscribe((x: IWeatherHourly[]) => {
      expect(x).toEqual(hourlyWeatherMock.hourly)
      expect(http.get).toHaveBeenCalled()
    })
  })
})
