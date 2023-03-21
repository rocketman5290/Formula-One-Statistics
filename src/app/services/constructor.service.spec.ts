import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ConstructorService, ConstructorsResponse } from './constructor.service';

describe('ConstructorService', () => {
  let service: ConstructorService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConstructorService],
    });
    service = TestBed.inject(ConstructorService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch constructors with correct parameters', () => {
    const mockConstructorsResponse: ConstructorsResponse = {
      constructors: [
        {
          constructorId: 'test_constructor',
          name: 'Test Constructor',
          nationality: 'Test Nationality',
        },
      ],
      total: 1,
    };

    const offset = 0;
    const limit = 1;

    service.getConstructors(offset, limit).subscribe((data) => {
      expect(data).toEqual(mockConstructorsResponse);
    });

    const req = httpMock.expectOne(
      `https://ergast.com/api/f1/constructors.json?offset=${offset}&limit=${limit}`
    );
    expect(req.request.method).toBe('GET');
    req.flush({
      MRData: {
        ConstructorTable: {
          Constructors: mockConstructorsResponse.constructors,
        },
        total: mockConstructorsResponse.total,
      },
    });
  });
});
