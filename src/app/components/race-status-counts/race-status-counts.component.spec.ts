import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RaceStatusCountsComponent } from './race-status-counts.component';
import { RaceService } from '../../services/race.service';
import { of } from 'rxjs';

describe('RaceStatusCountsComponent', () => {
  let component: RaceStatusCountsComponent;
  let fixture: ComponentFixture<RaceStatusCountsComponent>;
  let raceService: RaceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [RaceStatusCountsComponent],
      providers: [RaceService, {
        provide: ActivatedRoute,
        useValue: {
          params: of({ season: '2023', round: '1' }),
        },
      }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceStatusCountsComponent);
    component = fixture.componentInstance;
    raceService = TestBed.inject(RaceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load race status counts on init', () => {
    spyOn(component, 'loadRaceStatusCounts');
    component.ngOnInit();
    expect(component.loadRaceStatusCounts).toHaveBeenCalled();
  });

  it('should call service to get race status counts when loading counts', () => {
    spyOn(raceService, 'getRaceStatusCounts').and.callThrough();
    component.loadRaceStatusCounts();
    expect(raceService.getRaceStatusCounts).toHaveBeenCalled();
  });

  it('should load race status counts on form submit', () => {
    spyOn(component, 'loadRaceStatusCounts');
    component.onFormSubmit('2023', '1');
    expect(component.loadRaceStatusCounts).toHaveBeenCalled();
  });

  it('should load race status counts on season change', () => {
    spyOn(component, 'loadRaceStatusCounts');
    component.onSeasonChange('2023', '1');
    expect(component.loadRaceStatusCounts).toHaveBeenCalled();
  });

});
