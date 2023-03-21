import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructorListComponent } from './constructor-list.component';

describe('ConstructorListComponent', () => {
  let component: ConstructorListComponent;
  let fixture: ComponentFixture<ConstructorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructorListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstructorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
