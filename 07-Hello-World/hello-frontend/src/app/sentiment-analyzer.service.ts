import { Injectable } from '@angular/core';
import { Sentiment, SentimentResponse } from "./sentiment";
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SentimentAnalyzerService {

  private apiUrl = `${environment.baseURL}/api/sentiment-analyze`;

  constructor(private http: HttpClient) { }

  analyze(sentiment: Sentiment): Observable<SentimentResponse> {
    return this.http.post<SentimentResponse>(this.apiUrl, sentiment.text, httpOptions).pipe(
      catchError(this.handleError('analyze', new SentimentResponse()))
    );
  }

  log(msg): void {
    console.log(msg);

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
