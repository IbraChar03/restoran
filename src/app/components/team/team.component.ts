import { Component } from '@angular/core';
interface Chef {
  name: string;
  designation: string;
  imageUrl: string;
}
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  chefs: Chef[] = [
    { name: 'John Doe', designation: 'Executive Chef', imageUrl: 'assets/img/team-1.jpg' },
    { name: 'Jane Smith', designation: 'Pastry Chef', imageUrl: 'assets/img/team-2.jpg' },
    { name: 'Mario Rossi', designation: 'Sous Chef', imageUrl: 'assets/img/team-3.jpg' },
    { name: 'Ana Gomez', designation: 'Grill Chef', imageUrl: 'assets/img/team-4.jpg' }
  ];
}
