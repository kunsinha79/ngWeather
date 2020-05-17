import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherInfoComponent } from './components/weather-info/weather-info.component';
import { WeatherErrorComponent } from './components/weather-error/weather-error.component';
import { WeatherHourlyComponent } from './components/weather-hourly/weather-hourly.component';

const routes: Routes = [
  { path: '', redirectTo: 'weather', pathMatch: 'full' },
  { path: 'weather', component: WeatherInfoComponent },
  { path: 'weatherDetail/:id', component: WeatherHourlyComponent },
  { path: '**', component: WeatherErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
