import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SeasonService } from './season.service';

describe('SeasonService', () => {
  let service: SeasonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SeasonService],
    });
    service = TestBed.inject(SeasonService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch drivers by season with correct parameters', () => {
    const season = 2022;
    const mockDrivers = [
      {
        driverId: 'testDriver',
        givenName: 'Test',
        familyName: 'Driver',
        dateOfBirth: '1990-01-01',
        nationality: 'Testland',
      },
    ];

    service.getDriversBySeason(season).subscribe((data) => {
      expect(data.drivers).toEqual(mockDrivers);
    });

    const req = httpMock.expectOne(`https://ergast.com/api/f1/${season}/drivers.json`);
    expect(req.request.method).toBe('GET');
    req.flush({
      MRData: {
        DriverTable: {
          Drivers: mockDrivers,
        },
      },
    });
  });

  it('should fetch races by season with correct parameters', () => {
    const season = 2022;
    const mockRaces = [
      {
        raceName: 'Test Grand Prix',
        Circuit: {
          circuitName: 'Test Circuit',
        },
        date: '2022-03-21',
      },
    ];

    service.getRacesBySeason(season).subscribe((data) => {
      expect(data).toEqual(mockRaces);
    });

    const req = httpMock.expectOne(`https://ergast.com/api/f1/${season}.json`);
    expect(req.request.method).toBe('GET');
    req.flush({
      MRData: {
        RaceTable: {
          Races: mockRaces,
        },
      },
    });
  });
});
