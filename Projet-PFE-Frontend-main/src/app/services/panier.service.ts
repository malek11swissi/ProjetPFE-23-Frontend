import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private baseUrl = 'http://localhost:9093/api/test/paniers';

  constructor(private http: HttpClient) { }

// consulter panier
  getPaniersList(username: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${username}`);
  }

  // payer panier 
  payerPanier(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getPanier(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPanier(panier: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, panier);
  }

  updatePanier(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }


  
  
}
