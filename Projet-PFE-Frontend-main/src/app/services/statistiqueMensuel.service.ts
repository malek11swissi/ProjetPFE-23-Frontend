import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueMensuelService {

  private baseUrl = 'http://localhost:9093/api/test/statistiqueMensuelDetailss';

  constructor(private http: HttpClient) { }

  getStatistiqueMensuel(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createStatistiqueMensuel(statistiquemensuel: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, statistiquemensuel);
  }

  updateStatistiqueMensuel(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteStatistiqueMensuel(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getStatistiqueMensuelsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
