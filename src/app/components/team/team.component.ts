import { Component } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { Chef } from 'src/app/services/team.service';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  chefs: any;
  constructor(private teamService: TeamService) { }
  ngOnInit(): void {
    this.teamService.getData().subscribe(
      (data) => {
        this.chefs = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
