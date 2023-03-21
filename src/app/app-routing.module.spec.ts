// import { Location } from '@angular/common';
// import { TestBed, fakeAsync, tick } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { Router } from '@angular/router';

// import { AppComponent } from './app.component';
// import { AppRoutingModule } from './app-routing.module';
// import { SeasonDriversComponent } from './components/season-drivers/season-drivers.component';
// import { RaceStatusCountsComponent } from './components/race-status-counts/race-status-counts.component';
// import { SeasonRacesComponent } from './components/season-races/season-races.component';
// import { RaceStandingsComponent } from './components/race-standings/race-standings.component';
// import { RaceQualifyingComponent } from './components/race-qualifying/race-qualifying.component';
// import { DriverListComponent } from './components/driver-list/driver-list.component';
// import { ConstructorListComponent } from './components/constructor-list/constructor-list.component';
// import { CircuitListComponent } from './components/circuit-list/circuit-list.component';

// describe('AppRoutingModule', () => {
//   let location: Location;
//   let router: Router;
//   let fixture;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [RouterTestingModule.withRoutes(routes)],
//       declarations: [
//         AppComponent,
//         SeasonDriversComponent,
//         RaceStatusCountsComponent,
//         SeasonRacesComponent,
//         RaceStandingsComponent,
//         RaceQualifyingComponent,
//         DriverListComponent,
//         ConstructorListComponent,
//         CircuitListComponent,
//       ],
//     });

//     router = TestBed.inject(Router);
//     location = TestBed.inject(Location);

//     fixture = TestBed.createComponent(AppComponent);
//     router.initialNavigation();
//   });

//   it('navigate to "" redirects you to /season-drivers', fakeAsync(() => {
//     router.navigate(['']);
//     tick();
//     expect(location.path()).toBe('/season-drivers');
//   }));

//   it('navigate to "**" redirects you to /season-drivers', fakeAsync(() => {
//     router.navigate(['nonexistent-route']);
//     tick();
//     expect(location.path()).toBe('/season-drivers');
//   }));

//   it('navigate to "season-drivers" should render SeasonDriversComponent', fakeAsync(() => {
//     router.navigate(['season-drivers']);
//     tick();
//     expect(location.path()).toBe('/season-drivers');
//   }));

// });
