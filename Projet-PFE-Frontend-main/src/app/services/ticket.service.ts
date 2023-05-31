import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private baseUrl = 'http://localhost:9093/api/test/tickets';
  private baseUrlusername = 'http://localhost:9093/api/test/ticketsByUsername';

  constructor(private http: HttpClient) { }



//vendre ticket 
  ticketrwithLoggedcentreTicket( serial: number, value: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addTicket/${serial}/`, value);
  }

// consulter historique vente marchand
  getTicketsMarchand(): Observable<any> {
    return this.http.get(this.baseUrl+ '/getTicketsMarchand');
  }

  
  getTicketsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createTicket(ticket: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, ticket);
  }

  updateTicket(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteTicket(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  
  getTicketfromSerial(serial: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${serial}`);
  }
  

  

}

