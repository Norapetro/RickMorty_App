import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RickService {
  private baseUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient ) { }

  getPersonajes(){
    return this.http.get(this.baseUrl+'/character')
  }
}
