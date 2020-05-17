# NgWeather

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

# About

API used:

1. https://api.openweathermap.org/data/2.5/weather - To fetch current weather
2. https://api.openweathermap.org/data/2.5/onecall - To fetch hourly weather

Preetier has been configured with Husky to preetify code before commiting

# Main Components

1. show weather cards of 5 cities: weather-info component
   Uses forkJoin to call the current weather API 5 times and generate the city cards
2. show hourly weather: weather-hourly component
   Uses router parameter to detect which city's hourly weather has been asked for. Provides link to go back to home page
3. show error: weather-error component
   Has been configured using router to be redirected when user does not enter valid url

Angular Material style components have been used to design the UI wth minimal styles

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/weather`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests
