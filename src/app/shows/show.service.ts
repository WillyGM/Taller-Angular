import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Show } from './show'; 
import { Observable } from 'rxjs';
import { environment } from '../../environments/entorno.development';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  private apiUrl = environment.baseUrl + 'series.json';

  constructor(private http: HttpClient) { }

  getSeries(): Observable<Show[]> {
    return this.http.get<Show[]>(this.apiUrl);
  }
}
