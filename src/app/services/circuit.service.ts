import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Circuit {
  circuitId: string;
  circuitName: string;
  Location: {
    locality: string;
    country: string;
  };
}

export interface CircuitsResponse {
  circuits: Circuit[];
  total: number;
}

@Injectable({
  providedIn: 'root',
})
export class CircuitService {
  private apiUrl = 'https://ergast.com/api/f1/circuits.json';

  constructor(private http: HttpClient) {}

  getCircuits(offset: number, limit: number): Observable<CircuitsResponse> {
    return this.http
      .get<any>(`${this.apiUrl}?offset=${offset}&limit=${limit}`)
      .pipe(
        map((response) => ({
          circuits: response.MRData.CircuitTable.Circuits,
          total: +response.MRData.total,
        }))
      );
  }
}
