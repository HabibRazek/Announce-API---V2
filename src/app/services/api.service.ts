import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Announce } from '../model/announce.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private apiUrl = 'http://annonce.datum-it.com/api/v2/Announce';

  constructor(private http: HttpClient) { }

  getAnnounces(): Observable<Announce[]> {
    return this.http.get<Announce[]>(this.apiUrl);
  }


  addAnnounce(announceData: Announce): Observable<Announce> {
    const url = `${this.apiUrl}/Add`;
    return this.http.post<Announce>(url, announceData);
  }

}


