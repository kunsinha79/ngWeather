import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing'

import { WeatherInfoComponent } from './weather-info.component'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { MatCardModule } from '@angular/material/card'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { WeatherInfoService } from '../../services/weather-info.service'
import { Observable, of } from 'rxjs'
import { IWeather } from 'src/app/shared/weather.type'
import { currentWeatherMock } from 'src/app/test/mock/current-weather.mock'

describe('WeatherInfoComponent', () => {
  let component: WeatherInfoComponent
  let fixture: ComponentFixture<WeatherInfoComponent>
  let weatherInfoService: WeatherInfoService

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatCardModule,
        BrowserAnimationsModule,
      ],
      declarations: [WeatherInfoComponent],
      providers: [WeatherInfoService],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherInfoComponent)
    component = fixture.componentInstance
    weatherInfoService = TestBed.get(WeatherInfoService)
    spyOn(weatherInfoService, 'getCityWeather').and.callFake(
      (): Observable<IWeather> => of(currentWeatherMock)
    )

    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('onInit should call getCityWeather', () => {
    component.ngOnInit()
    expect(weatherInfoService.getCityWeather).toHaveBeenCalled()
  })

  it('should render 5 cards for weather current information of 5 cities', fakeAsync(() => {
    fixture.detectChanges()
    tick()
    fixture.detectChanges()
    const bannerElement: HTMLElement = fixture.nativeElement
    const cards = bannerElement.querySelectorAll('mat-card')
    expect(cards.length).toBe(5)
  }))
})
