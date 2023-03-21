import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SeasonDriversComponent } from './season-drivers.component';
import { SeasonService } from '../../services/season.service';
import { FormsModule } from '@angular/forms';

describe('SeasonDriversComponent', () => {
  let component: SeasonDriversComponent;
  let fixture: ComponentFixture<SeasonDriversComponent>;
  let seasonService: SeasonService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [SeasonDriversComponent],
      providers: [SeasonService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonDriversComponent);
    component = fixture.componentInstance;
    seasonService = TestBed.inject(SeasonService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load drivers on init', () => {
    spyOn(component, 'loadDrivers');
    component.ngOnInit();
    expect(component.loadDrivers).toHaveBeenCalled();
  });

  it('should call service to get drivers when loading drivers', () => {
    spyOn(seasonService, 'getDriversBySeason').and.callThrough();
    component.loadDrivers();
    expect(seasonService.getDriversBySeason).toHaveBeenCalled();
  });

  it('should load drivers on season change', () => {
    spyOn(component, 'loadDrivers');
    const newSeason = 2024;
    component.onSeasonChange(newSeason);
    expect(component.selectedSeason).toBe(newSeason);
    expect(component.loadDrivers).toHaveBeenCalled();
  });
});
