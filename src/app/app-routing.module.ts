import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SeasonDriversComponent } from './components/season-drivers/season-drivers.component';
import { RaceStatusCountsComponent } from './components/race-status-counts/race-status-counts.component';
import { SeasonRacesComponent } from './components/season-races/season-races.component';
import { RaceStandingsComponent } from './components/race-standings/race-standings.component';
import { RaceQualifyingComponent } from './components/race-qualifying/race-qualifying.component';
import { DriverListComponent } from './components/driver-list/driver-list.component';
import { ConstructorListComponent } from './components/constructor-list/constructor-list.component';
import { CircuitListComponent } from './components/circuit-list/circuit-list.component';

export const routes: Routes = [
  {
    path: 'season-drivers',
    component: SeasonDriversComponent,
  },
  {
    path: 'race-status-counts/:season/:round',
    component: RaceStatusCountsComponent,
  },
  {
    path: 'season-races',
    component: SeasonRacesComponent,
  },
  {
    path: 'race-standings/:season/:round',
    component: RaceStandingsComponent,
  },
  {
    path: 'race-qualifying/:season/:round',
    component: RaceQualifyingComponent,
  },
  {
    path: 'driver-list',
    component: DriverListComponent,
  },
  {
    path: 'constructor-list',
    component: ConstructorListComponent,
  },
  {
    path: 'circuit-list',
    component: CircuitListComponent,
  },
  {
    path: '', // Default route
    redirectTo: 'season-drivers',
    pathMatch: 'full',
  },
  {
    path: '**', // Wildcard route to catch any undefined routes
    redirectTo: 'season-drivers',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
