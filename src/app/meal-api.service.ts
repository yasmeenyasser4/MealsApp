import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealAPIService {

  constructor(private httpClient: HttpClient) {}

  getMeal(searchQuery: string): Observable<any> {
    return this.httpClient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchQuery}`);
  }

  
  getMealDetails(idMeal: string): Observable<any> {
    return this.httpClient.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
  }



}
