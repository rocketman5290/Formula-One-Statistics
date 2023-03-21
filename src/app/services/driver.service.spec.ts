import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DriverService, DriversResponse } from './driver.service';

describe('DriverService', () => {
  let service: DriverService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DriverService],
    });
    service = TestBed.inject(DriverService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch drivers with correct parameters', () => {
    const mockDriversResponse: DriversResponse = {
      drivers: [
        {
          driverId: 'test_driver',
          givenName: 'Test',
          familyName: 'Driver',
          dateOfBirth: '1990-01-01',
          nationality: 'Test Nationality',
        },
      ],
      total: 1,
    };

    const offset = 0;
    const limit = 1;

    service.getDrivers(offset, limit).subscribe((data) => {
      expect(data).toEqual(mockDriversResponse);
    });

    const req = httpMock.expectOne(
      `https://ergast.com/api/f1/drivers.json?offset=${offset}&limit=${limit}`
    );
    expect(req.request.method).toBe('GET');
    req.flush({
      MRData: {
        DriverTable: {
          Drivers: mockDriversResponse.drivers,
        },
        total: mockDriversResponse.total,
      },
    });
  });
});
