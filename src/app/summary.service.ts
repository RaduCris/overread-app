import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  private baseUrl = 'http://localhost:8080/summaries';

  constructor(private http: HttpClient) { }

  getSummary(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createSummary(summary: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, summary);
  }

  updateSummary(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteSummary(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getSummariesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
