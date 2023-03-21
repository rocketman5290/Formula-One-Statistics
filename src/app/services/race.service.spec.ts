import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RaceService } from './race.service';

describe('RaceService', () => {
  let service: RaceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RaceService],
    });
    service = TestBed.inject(RaceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch qualifying results with correct parameters', () => {
    const season = 2022;
    const round = 1;
    const mockQualifyingResults = [
      {
        number: '1',
        position: '1',
        Driver: { givenName: 'Test', familyName: 'Driver' },
        Constructor: { name: 'Test Constructor' },
        Q1: '1:23.456',
      },
    ];

    service.getQualifyingResults(season, round).subscribe((data) => {
      expect(data).toEqual(mockQualifyingResults);
    });

    const req = httpMock.expectOne(
      `https://ergast.com/api/f1/${season}/${round}/qualifying.json`
    );
    expect(req.request.method).toBe('GET');
    req.flush({
      MRData: {
        RaceTable: {
          Races: [{ QualifyingResults: mockQualifyingResults }],
        },
      },
    });
  });

  it('should fetch driver standings with correct parameters', () => {
    const season = 2022;
    const round = 1;
    const mockDriverStandings = [
      {
        position: '1',
        Driver: { givenName: 'Test', familyName: 'Driver' },
        Constructors: [{ name: 'Test Constructor' }],
        points: '25',
        wins: '1',
      },
    ];
  
    service.getDriverStandings(season, round).subscribe((data) => {
      expect(data).toEqual(mockDriverStandings);
    });
  
    const req = httpMock.expectOne(
      `https://ergast.com/api/f1/${season}/${round}/driverStandings.json`
    );
    expect(req.request.method).toBe('GET');
    req.flush({
      MRData: {
        StandingsTable: {
          StandingsLists: [{ DriverStandings: mockDriverStandings }],
        },
      },
    });
  });
  
  it('should fetch race status counts with correct parameters', () => {
    const season = 2022;
    const round = 1;
    const mockRaceResults = [
      { status: 'Finished' },
      { status: 'Finished' },
      { status: 'Accident' },
      { status: '+1 Lap' },
    ];
  
    const expectedResult = {
      Finished: 2,
      Accident: 1,
      PlusOneLap: 1,
    };
  
    service.getRaceStatusCounts(season, round).subscribe((data) => {
      expect(data).toEqual(expectedResult);
    });
  
    const req = httpMock.expectOne(
      `https://ergast.com/api/f1/${season}/${round}/results.json`
    );
    expect(req.request.method).toBe('GET');
    req.flush({
      MRData: {
        RaceTable: {
          Races: [{ Results: mockRaceResults }],
        },
      },
    });
  });
});
