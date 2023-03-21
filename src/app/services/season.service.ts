import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {
  private apiUrl = 'https://ergast.com/api/f1';

  constructor(private http: HttpClient) { }

  getDriversBySeason(season: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${season}/drivers.json`)
      .pipe(
        map((response) => {
          if (
            response &&
            response.MRData &&
            response.MRData.DriverTable &&
            response.MRData.DriverTable.Drivers
          ) {
            return {
              drivers: response.MRData.DriverTable.Drivers
            };
          } else {
            console.error('Unexpected API response:', response);
            return { drivers: [] };
          }
        }),
        catchError((error) => {
          console.error('Error loading drivers by season:', error);
          return of({ drivers: [] });
        })
      );
  }

  getRacesBySeason(season: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${season}.json`).pipe(
      map((response) => {
        if (
          response &&
          response.MRData &&
          response.MRData.RaceTable &&
          response.MRData.RaceTable.Races
        ) {
          return response.MRData.RaceTable.Races;
        } else {
          console.error('Unexpected API response:', response);
          return [];
        }
      }),
      catchError((error) => {
        console.error('Error loading races by season:', error);
        return of([]);
      })
    );
  }
}
