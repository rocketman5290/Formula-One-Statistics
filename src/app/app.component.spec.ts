import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render navbar with correct links', () => {
    const compiled = fixture.nativeElement;
    const navLinks = compiled.querySelectorAll('.nav-link');

    expect(navLinks[0].getAttribute('routerLink')).toEqual('/season-drivers');
    expect(navLinks[1].getAttribute('routerLink')).toEqual('/season-races');
    expect(navLinks[2].getAttribute('routerLink')).toEqual('/race-standings/${season}/${round}');
    expect(navLinks[3].getAttribute('routerLink')).toEqual('/race-qualifying/${season}/${round}');
    expect(navLinks[4].getAttribute('routerLink')).toEqual('/driver-list');
    expect(navLinks[5].getAttribute('routerLink')).toEqual('/constructor-list');
    expect(navLinks[6].getAttribute('routerLink')).toEqual('/circuit-list');
    expect(navLinks[7].getAttribute('routerLink')).toEqual('/race-status-counts/${season}/${round}');
  });
});
