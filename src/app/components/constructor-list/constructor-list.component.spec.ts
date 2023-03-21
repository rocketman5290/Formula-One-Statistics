import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ConstructorListComponent } from './constructor-list.component';
import { ConstructorService } from '../../services/constructor.service';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

describe('ConstructorListComponent', () => {
  let component: ConstructorListComponent;
  let fixture: ComponentFixture<ConstructorListComponent>;
  let constructorService: ConstructorService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NgbPaginationModule],
      declarations: [ConstructorListComponent],
      providers: [ConstructorService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructorListComponent);
    component = fixture.componentInstance;
    constructorService = TestBed.inject(ConstructorService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load constructors on init', () => {
    spyOn(component, 'loadConstructors');
    component.ngOnInit();
    expect(component.loadConstructors).toHaveBeenCalled();
  });

  it('should call service to get constructors when loading constructors', () => {
    spyOn(constructorService, 'getConstructors').and.callThrough();
    component.loadConstructors();
    expect(constructorService.getConstructors).toHaveBeenCalled();
  });

  it('should change page and load constructors on page change', () => {
    spyOn(component, 'loadConstructors');
    const newPage = 2;
    component.onPageChange(newPage);
    expect(component.currentPage).toBe(newPage);
    expect(component.loadConstructors).toHaveBeenCalled();
  });
});
