import { Component, Input } from '@angular/core';
interface Chef {
  name: string;
  designation: string;
  imageUrl: string;
}

@Component({
  selector: 'app-chef-card',
  templateUrl: './chef-card.component.html',
  styleUrls: ['./chef-card.component.css']
})
export class ChefCardComponent {
  @Input() chef!: Chef;
}
