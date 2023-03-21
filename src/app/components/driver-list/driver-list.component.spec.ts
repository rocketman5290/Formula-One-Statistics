import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DriverListComponent } from './driver-list.component';
import { DriverService } from '../../services/driver.service';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

describe('DriverListComponent', () => {
  let component: DriverListComponent;
  let fixture: ComponentFixture<DriverListComponent>;
  let driverService: DriverService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NgbPaginationModule],
      declarations: [DriverListComponent],
      providers: [DriverService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverListComponent);
    component = fixture.componentInstance;
    driverService = TestBed.inject(DriverService);
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
    spyOn(driverService, 'getDrivers').and.callThrough();
    component.loadDrivers();
    expect(driverService.getDrivers).toHaveBeenCalled();
  });

  it('should change page and load drivers on page change', () => {
    spyOn(component, 'loadDrivers');
    const newPage = 2;
    component.onPageChange(newPage);
    expect(component.currentPage).toBe(newPage);
    expect(component.loadDrivers).toHaveBeenCalled();
  });
});
