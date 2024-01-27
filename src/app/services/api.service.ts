import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Announce } from '../model/announce.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private apiUrl = 'http://annonce.datum-it.com/api/v2/Announce'; // API URL

  constructor(private http: HttpClient) { }

  getAnnounces(): Observable<Announce[]> {
    return this.http.get<Announce[]>(this.apiUrl);
  }
}
