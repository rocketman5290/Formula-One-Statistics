import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceStatusCountsComponent } from './race-status-counts.component';

describe('RaceStatusCountsComponent', () => {
  let component: RaceStatusCountsComponent;
  let fixture: ComponentFixture<RaceStatusCountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceStatusCountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaceStatusCountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
