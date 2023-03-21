import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SeasonService {
  private apiUrl = 'https://ergast.com/api/f1';

  constructor(private http: HttpClient) { }

  getDriversBySeason(season: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${season}/drivers.json`)
      .pipe(
        map((response) => ({
          drivers: response.MRData.DriverTable.Drivers
        }))
      );
  }

  getRacesBySeason(season: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${season}.json`).pipe(
      map((response) => response.MRData.RaceTable.Races)
    );
  }

}
