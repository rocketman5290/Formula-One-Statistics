import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RaceStandingsComponent } from './race-standings.component';
import { RaceService } from '../../services/race.service';
import { of } from 'rxjs';

describe('RaceStandingsComponent', () => {
  let component: RaceStandingsComponent;
  let fixture: ComponentFixture<RaceStandingsComponent>;
  let raceService: RaceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [RaceStandingsComponent],
      providers: [RaceService, {
        provide: ActivatedRoute,
        useValue: {
          params: of({ season: '2023', round: '1' }),
        },
      }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceStandingsComponent);
    component = fixture.componentInstance;
    raceService = TestBed.inject(RaceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load driver standings on init', () => {
    spyOn(component, 'loadDriverStandings');
    component.ngOnInit();
    expect(component.loadDriverStandings).toHaveBeenCalled();
  });

  it('should call service to get driver standings when loading standings', () => {
    spyOn(raceService, 'getDriverStandings').and.callThrough();
    component.loadDriverStandings();
    expect(raceService.getDriverStandings).toHaveBeenCalled();
  });

  it('should load driver standings on form submit', () => {
    spyOn(component, 'loadDriverStandings');
    component.onFormSubmit('2023', '1');
    expect(component.loadDriverStandings).toHaveBeenCalled();
  });

  it('should load driver standings on season change', () => {
    spyOn(component, 'loadDriverStandings');
    component.onSeasonChange('2023', '1');
    expect(component.loadDriverStandings).toHaveBeenCalled();
  });

});
