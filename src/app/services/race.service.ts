import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  private apiUrl = 'https://ergast.com/api/f1';

  constructor(private http: HttpClient) {}

  getQualifyingResults(season: number, round: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${season}/${round}/qualifying.json`).pipe(
      map((response) => {
        if (
          response &&
          response.MRData &&
          response.MRData.RaceTable &&
          response.MRData.RaceTable.Races &&
          response.MRData.RaceTable.Races[0]
        ) {
          return response.MRData.RaceTable.Races[0].QualifyingResults;
        } else {
          console.error('Unexpected API response:', response);
          return [];
        }
      }),
      catchError((error) => {
        console.error('Error loading qualifying results:', error);
        return of([]);
      })
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
      }),
      catchError((error) => {
        console.error('Error loading driver standings:', error);
        return of([]);
      })
    );
  }


  getRaceStatusCounts(season: number, round: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${season}/${round}/results.json`).pipe(
      map((response) => {
        if (
          response &&
          response.MRData &&
          response.MRData.RaceTable &&
          response.MRData.RaceTable.Races &&
          response.MRData.RaceTable.Races[0] &&
          response.MRData.RaceTable.Races[0].Results
        ) {
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
        } else {
          console.error('Unexpected API response:', response);
          return {
            Finished: 0,
            Accident: 0,
            PlusOneLap: 0,
          };
        }
      }),
      catchError((error) => {
        console.error('Error loading race status counts:', error);
        return of({
          Finished: 0,
          Accident: 0,
          PlusOneLap: 0,
        });
      })
    );
  }

}
