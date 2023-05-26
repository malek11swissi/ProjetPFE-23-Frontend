import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenLoggedUserService {

  private baseUrl = 'http://localhost:9093/api/test/tokensByUser';

  constructor(private http: HttpClient) { }

  getTokenLoggedUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createTokenLoggedUser(token: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, token);
  }

  updateTokenLoggedUser(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteTokenLoggedUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getTokenLoggedUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getTokenLoggedUsername(username: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${username}`);
  }
}
