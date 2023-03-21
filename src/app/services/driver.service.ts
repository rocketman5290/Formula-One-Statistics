import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Driver {
  driverId: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}

export interface DriversResponse {
  drivers: Driver[];
  total: number;
}

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  private apiUrl = 'https://ergast.com/api/f1/drivers.json';

  constructor(private http: HttpClient) {}

  getDrivers(offset: number, limit: number): Observable<DriversResponse> {
    return this.http
      .get<any>(`${this.apiUrl}?offset=${offset}&limit=${limit}`)
      .pipe(
        map((response) => ({
          drivers: response.MRData.DriverTable.Drivers,
          total: +response.MRData.total,
        }))
      );
  }
}

