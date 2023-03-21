import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CircuitService, CircuitsResponse } from './circuit.service';

describe('CircuitService', () => {
  let service: CircuitService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CircuitService],
    });
    service = TestBed.inject(CircuitService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch circuits with correct parameters', () => {
    const mockCircuitsResponse: CircuitsResponse = {
      circuits: [
        {
          circuitId: 'test_circuit',
          circuitName: 'Test Circuit',
          Location: {
            locality: 'Test Locality',
            country: 'Test Country',
          },
        },
      ],
      total: 1,
    };

    const offset = 0;
    const limit = 1;

    service.getCircuits(offset, limit).subscribe((data) => {
      expect(data).toEqual(mockCircuitsResponse);
    });

    const req = httpMock.expectOne(
      `https://ergast.com/api/f1/circuits.json?offset=${offset}&limit=${limit}`
    );
    expect(req.request.method).toBe('GET');
    req.flush({
      MRData: {
        CircuitTable: {
          Circuits: mockCircuitsResponse.circuits,
        },
        total: mockCircuitsResponse.total,
      },
    });
  });
});
