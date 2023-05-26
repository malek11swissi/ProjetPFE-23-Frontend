import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StatistiqueAnnuelToken } from '../models/statistiqueAnnuelToken';


@Injectable({
  providedIn: 'root'
})
export class StatistiqueAnnuelTokenService {

  private baseUrl = 'http://localhost:9093/api/test/statistiqueAnnuelsToken';

  constructor(private http: HttpClient) { }

  getStatToken()
  {
    return this.http.get<StatistiqueAnnuelToken[]>(this.baseUrl);
  }
  getStatistiqueAnnuelsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getChartStatsVenteToken():Observable<any>
  {
    return this.http.get(this.baseUrl + '/getStatsVenteToken');

  }
}
