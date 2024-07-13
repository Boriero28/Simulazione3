import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FinancingService {
  private apiUrl = 'https://vdpb-ackend-ak55tnsy5-davides-projects-56acf969.vercel.app/api';

  constructor(private http: HttpClient) { }

  getRichieste(limit: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/richieste`);
  }

  searchRichieste(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/richieste/search?query=${query}`);
  }

  createRichiesta(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/richieste`, data);
  }

  updateRichiesta(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/richieste/update`, data);
  }

  deleteRichiesta(richiestaID: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/richieste/delete?richiestaID=${richiestaID}`);
  }

  getRichiesteByDateRange(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/richieste/date-range`, data);
  }

  getSumImportoByDateRange(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/richieste/sum-importo`, data);
  }

  getAverageRateByDateRange(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/richieste/avg-rate`, data);
  }
}
