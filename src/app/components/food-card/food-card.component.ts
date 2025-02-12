import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.css']
})
export class FoodCardComponent {
  @Input() name: string = "";
  @Input() description: string = "";
  @Input() image: string = "";
  @Input() price!: number;
}
