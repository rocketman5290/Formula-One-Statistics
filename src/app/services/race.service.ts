import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  private apiUrl = 'https://ergast.com/api/f1';
  
  constructor(private http: HttpClient) { }

  getQualifyingResults(season: number, round: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${season}/${round}/qualifying.json`).pipe(
      map((response) => response.MRData.RaceTable.Races[0].QualifyingResults)
    );
  }

  getDriverStandings(season: number, round: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${season}/${round}/driverStandings.json`).pipe(
      map((response) => response.MRData.StandingsTable.StandingsLists[0].DriverStandings)
    );
  }

}
