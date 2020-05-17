import { Component, OnInit } from '@angular/core'
import { WeatherInfoService } from 'src/app/services/weather-info.service'
import { ActivatedRoute } from '@angular/router'
import { IWeatherHourly } from 'src/app/shared/weather.type'
import { country } from 'src/app/shared/weather.data'

@Component({
  selector: 'weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit {
  hourlyWeather: IWeatherHourly[]
  isLoading: boolean
  country: string

  constructor(
    private weatherService: WeatherInfoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.isLoading = true
    const id: number = parseInt(this.route.snapshot.paramMap.get('id'))
    this.country = country[id].name
    this.weatherService.getHourlyWeather(id).subscribe(
      (hourlyWeatherResponse) => {
        this.hourlyWeather = hourlyWeatherResponse.map((h) => {
          h.dateConversion = new Date(h.dt * 1000)
          return h
        })
        this.isLoading = false
      },
      () => {
        this.hourlyWeather = []
        this.isLoading = false
      }
    )
  }
}
