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

  //TODO: getDriverStandings
  //TODO: getRaceStatusCounts
});
