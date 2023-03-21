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
      map((response) => {
        if (
          response &&
          response.MRData &&
          response.MRData.StandingsTable &&
          response.MRData.StandingsTable.StandingsLists &&
          response.MRData.StandingsTable.StandingsLists[0]
        ) {
          return response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        } else {
          console.error('Unexpected API response:', response);
          return [];
        }
      })
    );
  }

  getRaceStatusCounts(season: number, round: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${season}/${round}/results.json`).pipe(
      map((response) => {
        const results = response.MRData.RaceTable.Races[0].Results;
        const statusCounts = {
          Finished: 0,
          Accident: 0,
          PlusOneLap: 0,
        };
  
        results.forEach((result: { status: string | string[]; }) => {
          if (result.status === 'Finished') {
            statusCounts.Finished++;
          } else if (result.status.includes('Accident')) {
            statusCounts.Accident++;
          } else if (result.status.includes('+1 Lap')) {
            statusCounts.PlusOneLap++;
          }
        });
  
        return statusCounts;
      })
    );
  }

}
