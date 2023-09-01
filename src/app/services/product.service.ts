import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Results } from '../models/food.models';

@Injectable({
  providedIn: 'root'
})

export class FoodService {

  private foodUrl = 'https://es.openfoodfacts.org';

  constructor(private http: HttpClient) { }

  getFoods(): Observable<Results> {
    return this.http.get<Results>(`${this.foodUrl}?json=true`).pipe(
      tap(data => console.log('All', JSON.parse(JSON.stringify(data)))),
      catchError(this.handleError)
    );
  }

  getNutritionFacts(id: string): Observable<Results> {
    return this.http.get<Results>(`${this.foodUrl}/api/v2/product/${id}`).pipe(
      tap(data => console.log('All', JSON.parse(JSON.stringify(data)))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}