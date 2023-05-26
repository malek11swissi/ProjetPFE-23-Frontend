import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompteurLoggedUserService {

  private baseUrl = 'http://localhost:9093/api/test/compteurLoggedUsers';
  private baseUrl2 = 'http://localhost:9093/api/test/compteurofUserx';

  constructor(private http: HttpClient) { }

  getCompteurLoggedUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getCompteurLoggedUserX(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl2}/${id}`);
  }
  createCompteurLoggedUser(compteur: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, compteur);
  }

  updateCompteurLoggedUser(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCompteurLoggedUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCompteurLoggedUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getCompteurLoggedUsername(username: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${username}`);
  }
}
