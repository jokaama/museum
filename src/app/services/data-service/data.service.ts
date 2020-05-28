import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Museum } from '../../models/museum/museum';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  // 1. Variables
  // 2. Constructor 
  constructor(private httpClient: HttpClient) { }

  // 3. Méthodes
  public fetchMuseums(): Observable<Museum[]> {
    let museumsObservable: Observable<Museum[]> = this.httpClient.get<Museum[]>('http://localhost:3000/museums');
    return museumsObservable;

  }
  public fetchMuseumById(id: string): Observable<Museum> {
    let museumObservable: Observable<Museum> = this.httpClient.get<Museum>('http://localhost:3000/museums/' + id);
    return museumObservable;
  }

}
