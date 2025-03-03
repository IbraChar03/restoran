import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Service {
  title: string;
  description: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceListService {
  private apiUrl = 'http://localhost:8080/services';
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

}