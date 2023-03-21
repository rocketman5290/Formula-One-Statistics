import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SeasonRacesComponent } from './season-races.component';
import { SeasonService } from '../../services/season.service';
import { FormsModule } from '@angular/forms';

describe('SeasonRacesComponent', () => {
  let component: SeasonRacesComponent;
  let fixture: ComponentFixture<SeasonRacesComponent>;
  let seasonService: SeasonService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [SeasonRacesComponent],
      providers: [SeasonService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonRacesComponent);
    component = fixture.componentInstance;
    seasonService = TestBed.inject(SeasonService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load races on init', () => {
    spyOn(component, 'loadRaces');
    component.ngOnInit();
    expect(component.loadRaces).toHaveBeenCalled();
  });

  it('should call service to get races when loading races', () => {
    spyOn(seasonService, 'getRacesBySeason').and.callThrough();
    component.loadRaces();
    expect(seasonService.getRacesBySeason).toHaveBeenCalled();
  });

  it('should load races on season change', () => {
    spyOn(component, 'loadRaces');
    const newSeason = 2024;
    component.onSeasonChange(newSeason);
    expect(component.selectedSeason).toBe(newSeason);
    expect(component.loadRaces).toHaveBeenCalled();
  });
});