import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { WeatherHourlyComponent } from './weather-hourly.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherInfoService } from '../../services/weather-info.service';
import { Observable, of } from 'rxjs';
import { IWeather, IWeatherHourly } from 'src/app/shared/weather.type';
import { currentWeatherMock } from 'src/app/test/mock/current-weather.mock';
import { hourlyWeatherMock } from 'src/app/test/mock/hourly-weather.mock';
import { ActivatedRoute } from '@angular/router';

describe('WeatherInfoComponent', () => {
  let component: WeatherHourlyComponent;
  let fixture: ComponentFixture<WeatherHourlyComponent>;
  let weatherInfoService: WeatherInfoService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatCardModule,
        BrowserAnimationsModule,
      ],
      declarations: [WeatherHourlyComponent],
      providers: [
        WeatherInfoService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => 0,
              },
            },
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherHourlyComponent);
    component = fixture.componentInstance;
    weatherInfoService = TestBed.get(WeatherInfoService);

    spyOn(weatherInfoService, 'getHourlyWeather').and.callFake(
      (): Observable<IWeatherHourly[]> => of(hourlyWeatherMock.hourly)
    );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onInit should call getHourlyWeather', () => {
    component.ngOnInit();
    expect(weatherInfoService.getHourlyWeather).toHaveBeenCalled();
    expect(weatherInfoService.getHourlyWeather).toHaveBeenCalledWith(0);
  });

  it('should get data for weather hourly information', fakeAsync(() => {
    fixture.detectChanges();
    const bannerElement: HTMLElement = fixture.nativeElement;
    const cards = bannerElement.querySelectorAll('mat-card');
    expect(cards.length).toBe(3);
  }));

  it('should get country information', fakeAsync(() => {
    fixture.detectChanges();
    expect(component.country).toBe('Amsterdam');
  }));
});
