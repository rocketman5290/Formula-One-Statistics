import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonDriversComponent } from './season-drivers.component';

describe('SeasonDriversComponent', () => {
  let component: SeasonDriversComponent;
  let fixture: ComponentFixture<SeasonDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonDriversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasonDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
