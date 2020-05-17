export interface IWeather {
  main: {
    temp: number
  }
  weather: IWeatherIcon[]
  wind: {
    speed: string
  }
  name: string
}

export interface IWeatherHourlyList {
  hourly: IWeatherHourly[]
}

export interface IWeatherHourly {
  dt: number
  dateConversion: Date
  temp: number
  feels_like: number
  wind_speed: number
  wind_gust: number
  clouds: number
  humidity: number
  visibility: number
  rain: number
  snow: number
  weather: IWeatherIcon[]
}

export interface IWeatherIcon {
  main: string
  description: string
  icon: string
}
