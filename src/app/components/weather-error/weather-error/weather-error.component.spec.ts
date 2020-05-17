import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { WeatherErrorComponent } from './weather-error.component'

describe('WeatherErrorComponent', () => {
  let component: WeatherErrorComponent
  let fixture: ComponentFixture<WeatherErrorComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherErrorComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherErrorComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
