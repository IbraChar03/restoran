import { Component } from '@angular/core';
import { TestimonialService } from 'src/app/services/testimonial.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  currentIndex: number = 0;
  testimonials: any[] = [];
  cardsToShow = 3;

  constructor(private testimonialService: TestimonialService) { }

  ngOnInit(): void {
    this.testimonialService.getData().subscribe(
      (data) => {
        this.testimonials = data;
        console.log(this.testimonials);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getActiveDotIndex() {
    return Math.floor(this.currentIndex / this.cardsToShow);
  }

  goToCards(index: number) {
    if (index !== undefined) {
      this.currentIndex = index * this.cardsToShow;
    }
  }

  getVisibleCards() {
    return this.testimonials.slice(this.currentIndex, this.currentIndex + this.cardsToShow);
  }

  getDotsCount() {
    return Math.ceil(this.testimonials.length / this.cardsToShow);
  }
}