import { Component, OnInit } from '@angular/core'
import { WeatherInfoService } from 'src/app/services/weather-info.service'
import { Observable, forkJoin } from 'rxjs'
import { IWeather } from 'src/app/shared/weather.type'

@Component({
  selector: 'weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss'],
})
export class WeatherInfoComponent implements OnInit {
  data: Observable<Array<IWeather>>

  constructor(private weatherService: WeatherInfoService) {}

  ngOnInit(): void {
    this.data = forkJoin(
      this.weatherService.getCityWeather('Amsterdam'),
      this.weatherService.getCityWeather('Madrid'),
      this.weatherService.getCityWeather('Budapest'),
      this.weatherService.getCityWeather('Paris'),
      this.weatherService.getCityWeather('Frankfurt')
    )
  }
}
