import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface Chef {
  name: string;
  designation: string;
  imageUrl: string;
}
@Injectable({
  providedIn: 'root'
})
export class TeamService {
  apiUrl: string = "http://localhost:8080/chefs"
  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  chefs: Chef[] = [
    { name: 'John Doe', designation: 'Executive Chef', imageUrl: 'assets/img/team-1.jpg' },
    { name: 'Jane Smith', designation: 'Pastry Chef', imageUrl: 'assets/img/team-2.jpg' },
    { name: 'Mario Rossi', designation: 'Sous Chef', imageUrl: 'assets/img/team-3.jpg' },
    { name: 'Ana Gomez', designation: 'Grill Chef', imageUrl: 'assets/img/team-4.jpg' },
    { name: 'John Doe', designation: 'Executive Chef', imageUrl: 'assets/img/team-1.jpg' },
    { name: 'Jane Smith', designation: 'Pastry Chef', imageUrl: 'assets/img/team-2.jpg' },
    { name: 'Mario Rossi', designation: 'Sous Chef', imageUrl: 'assets/img/team-3.jpg' },
    { name: 'Ana Gomez', designation: 'Grill Chef', imageUrl: 'assets/img/team-4.jpg' }
  ];
  getTeamList(): Chef[] {
    return this.chefs;
  }
}
