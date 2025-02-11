import { Injectable } from '@angular/core';
export interface Chef {
  name: string;
  designation: string;
  imageUrl: string;
}
@Injectable({
  providedIn: 'root'
})
export class TeamService {
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
  constructor() { }
  getTeamList(): Chef[] {
    return this.chefs;
  }
}
