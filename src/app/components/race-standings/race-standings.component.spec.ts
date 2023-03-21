import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceStandingsComponent } from './race-standings.component';

describe('RaceStandingsComponent', () => {
  let component: RaceStandingsComponent;
  let fixture: ComponentFixture<RaceStandingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceStandingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaceStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
