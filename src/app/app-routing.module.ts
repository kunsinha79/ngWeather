import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { WeatherCardComponent } from './components/weather-card/weather-card.component'
import { WeatherInfoComponent } from './components/weather-info/weather-info.component'
import { WeatherErrorComponent } from './components/weather-error/weather-error/weather-error.component'

const routes: Routes = [
  { path: '', redirectTo: 'weather', pathMatch: 'full' },
  { path: 'weather', component: WeatherInfoComponent },
  { path: 'weatherDetail/:id', component: WeatherCardComponent },
  { path: '**', component: WeatherErrorComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
