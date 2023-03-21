import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CircuitListComponent } from './circuit-list.component';
import { CircuitService } from '../../services/circuit.service';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

describe('CircuitListComponent', () => {
  let component: CircuitListComponent;
  let fixture: ComponentFixture<CircuitListComponent>;
  let circuitService: CircuitService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NgbPaginationModule],
      declarations: [CircuitListComponent],
      providers: [CircuitService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitListComponent);
    component = fixture.componentInstance;
    circuitService = TestBed.inject(CircuitService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load circuits on init', () => {
    spyOn(component, 'loadCircuits');
    component.ngOnInit();
    expect(component.loadCircuits).toHaveBeenCalled();
  });

  it('should call service to get circuits when loading circuits', () => {
    spyOn(circuitService, 'getCircuits').and.callThrough();
    component.loadCircuits();
    expect(circuitService.getCircuits).toHaveBeenCalled();
  });

  it('should change page and load circuits on page change', () => {
    spyOn(component, 'loadCircuits');
    const newPage = 2;
    component.onPageChange(newPage);
    expect(component.currentPage).toBe(newPage);
    expect(component.loadCircuits).toHaveBeenCalled();
  });
});
