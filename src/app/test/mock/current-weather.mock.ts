import { IWeather } from 'src/app/shared/weather.type'

export const currentWeatherMock: IWeather = {
  main: {
    temp: 10.0,
  },
  weather: [
    {
      main: 'cloudy',
      description: 'cloudy',
      icon: '10d',
    },
  ],
  wind: {
    speed: '30.6',
  },
  name: 'Amsterdam',
}
