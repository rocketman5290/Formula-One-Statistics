import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RaceQualifyingComponent } from './race-qualifying.component';
import { RaceService } from '../../services/race.service';
import { of } from 'rxjs';

describe('RaceQualifyingComponent', () => {
  let component: RaceQualifyingComponent;
  let fixture: ComponentFixture<RaceQualifyingComponent>;
  let raceService: RaceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [RaceQualifyingComponent],
      providers: [RaceService, {
        provide: ActivatedRoute,
        useValue: {
          params: of({ season: '2023', round: '1' }),
        },
      }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceQualifyingComponent);
    component = fixture.componentInstance;
    raceService = TestBed.inject(RaceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load qualifying results on init', () => {
    spyOn(component, 'loadQualifyingResults');
    component.ngOnInit();
    expect(component.loadQualifyingResults).toHaveBeenCalled();
  });

  it('should call service to get qualifying results when loading results', () => {
    spyOn(raceService, 'getQualifyingResults').and.callThrough();
    component.loadQualifyingResults();
    expect(raceService.getQualifyingResults).toHaveBeenCalled();
  });

  it('should load qualifying results on form submit', () => {
    spyOn(component, 'loadQualifyingResults');
    component.onFormSubmit('2023', '1');
    expect(component.loadQualifyingResults).toHaveBeenCalled();
  });

  it('should load qualifying results on season change', () => {
    spyOn(component, 'loadQualifyingResults');
    component.onSeasonChange('2023', '1');
    expect(component.loadQualifyingResults).toHaveBeenCalled();
  });

});
