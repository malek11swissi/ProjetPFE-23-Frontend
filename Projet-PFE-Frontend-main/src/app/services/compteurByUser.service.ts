import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompteurByUserService {

  private baseUrl = 'http://localhost:9093/api/test/compteurByUsers';

  constructor(private http: HttpClient) { }

  getCompteurByUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCompteurByUser(compteur: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, compteur);
  }

  updateCompteurByUser(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCompteurByUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCompteurByUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
