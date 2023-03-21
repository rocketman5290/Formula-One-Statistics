import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Constructor {
  constructorId: string;
  name: string;
  nationality: string;
}

export interface ConstructorsResponse {
  constructors: Constructor[];
  total: number;
}

@Injectable({
  providedIn: 'root',
})
export class ConstructorService {
  private apiUrl = 'https://ergast.com/api/f1/constructors.json';

  constructor(private http: HttpClient) {}

  getConstructors(offset: number, limit: number): Observable<ConstructorsResponse> {
    return this.http
      .get<any>(`${this.apiUrl}?offset=${offset}&limit=${limit}`)
      .pipe(
        map((response) => ({
          constructors: response.MRData.ConstructorTable.Constructors,
          total: +response.MRData.total,
        }))
      );
  }
}

