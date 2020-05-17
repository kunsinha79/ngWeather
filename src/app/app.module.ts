import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherInfoComponent } from './components/weather-info/weather-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherInfoService } from './services/weather-info.service';
import { WeatherErrorComponent } from './components/weather-error/weather-error.component';
import { WeatherHourlyComponent } from './components/weather-hourly/weather-hourly.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherInfoComponent,
    WeatherErrorComponent,
    WeatherHourlyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  ],
  providers: [WeatherInfoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
