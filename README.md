# Formula-One-Statistics

## (an Angular app)

This is an Angular application that provides various Formula 1 race statistics using the Ergast Developer API.

## Features

- List of Drivers per season
- List of Races per season with final results
- Qualifying Results per race in every single season
- Driver Standings after a race

## Bonus Features

- How many cars "Finished"
- How many cars had an "Accident"
- How many cars finished +1 Lap

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Angular CLI](https://cli.angular.io/)

## Installation

1. Clone the repository: ```bash git clone https://github.com/yourusername/f1-race-statistics.git```
2. Change directory to the project folder: ```bash cd f1```
3. Install the dependencies: ```bash npm install```

## RUNNING THE APPLICATION

1. Start dev server: ```bash ng serve```
2. Open your browser and navigate to `http://localhost:4200/`

## RUNNING TESTS

1. Run the following command to execute the unit tests: ```bash ng test```

## BUILD

1. To build the project for production, run the following command: ```bash ng build --prod```
2. The build artifacts will be stored in the dist/ directory.

## TESTS ADDED FOR YOUR PLEASURE

```css
56 specs, 0 failures, randomized with seed 13872

### AppComponent
- should have as title 'f1'
- should create the app
- should render navbar
- should have correct default season value
- should have correct default round value

### CircuitListComponent
- should load circuits on init
- should call service to get circuits when loading circuits
- should change page and load circuits on page change
- should create

### AppRoutingModule
- navigate to "season-drivers" should render SeasonDriversComponent
- navigate to "**" redirects you to /season-drivers
- navigate to "" redirects you to /season-drivers

### ConstructorListComponent
- should create
- should load constructors on init
- should change page and load constructors on page change
- should call service to get constructors when loading constructors

### ConstructorService
- should be created
- should fetch constructors with correct parameters
- DriverService
- should be created
- should fetch drivers with correct parameters

### DriverListComponent
- should change page and load drivers on page change
- should call service to get drivers when loading drivers
- should load drivers on init
- should create

### SeasonRacesComponent
- should create
- should call service to get races when loading races
- should load races on season change
- should load races on init

### RaceQualifyingComponent
- should create
- should load qualifying results on season change
- should load qualifying results on init
- should load qualifying results on form submit
- should call service to get qualifying results when loading results

### RaceStandingsComponent
- should call service to get driver standings when loading standings
- should create
- should load driver standings on init
- should load driver standings on season change
- should load driver standings on form submit

### CircuitService
- should fetch circuits with correct parameters
- should be created

### RaceStatusCountsComponent
- should load race status counts on season change
- should load race status counts on init
- should create
- should call service to get race status counts when loading counts
- should load race status counts on form submit

### RaceService
- should fetch driver standings with correct parameters
- should fetch qualifying results with correct parameters
- should be created
- should fetch race status counts with correct parameters

### SeasonDriversComponent
- should load drivers on init
- should call service to get drivers when loading drivers
- should load drivers on season change
- should create

### SeasonService
- should fetch drivers by season with correct parameters
- should be created
- should fetch races by season with correct parameters ```

## LISCENSE

- This project is licensed under the MIT License. See the LICENSE file for details.

GitHub repository URL (`https://github.com/rocketman5290/f1.git`) 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.2.
