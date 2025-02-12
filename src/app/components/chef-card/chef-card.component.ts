import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-chef-card',
  templateUrl: './chef-card.component.html',
  styleUrls: ['./chef-card.component.css']
})
export class ChefCardComponent {
  @Input() name: string = "";
  @Input() image: string = "";
  @Input() designation: string = "";
}
