import { IWeatherHourlyList } from 'src/app/shared/weather.type'

export const hourlyWeatherMock: IWeatherHourlyList = {
  hourly: [
    {
      dt: 1234456,
      dateConversion: null,
      temp: 10,
      feels_like: 4,
      wind_speed: 20,
      wind_gust: 20,
      clouds: 85,
      humidity: 90,
      visibility: 2,
      rain: 1,
      snow: 1,
      weather: [
        {
          main: 'cloudy',
          description: 'cloudy',
          icon: '10d',
        },
      ],
    },
    {
      dt: 1234457,
      dateConversion: null,
      temp: 10,
      feels_like: 4,
      wind_speed: 20,
      wind_gust: 20,
      clouds: 85,
      humidity: 90,
      visibility: 2,
      rain: 1,
      snow: 1,
      weather: [
        {
          main: 'cloudy',
          description: 'cloudy',
          icon: '10d',
        },
      ],
    },
    {
      dt: 1234458,
      dateConversion: null,
      temp: 10,
      feels_like: 4,
      wind_speed: 20,
      wind_gust: 20,
      clouds: 85,
      humidity: 90,
      visibility: 2,
      rain: 1,
      snow: 1,
      weather: [
        {
          main: 'cloudy',
          description: 'cloudy',
          icon: '10d',
        },
      ],
    },
  ],
}
