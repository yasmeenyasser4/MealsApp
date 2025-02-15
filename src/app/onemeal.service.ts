import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnemealService {

  constructor(private httpClient: HttpClient) {}

  getMealAll(searchTerm: string): Observable<any> {
    return this.httpClient.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
  }
}
