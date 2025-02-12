import { Component } from '@angular/core';
import { TestimonialService } from 'src/app/services/testimonial.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  currentIndex: number = 0;
  testimonials!: any;
  cardsToShow = 3;

  constructor(private testimonialService: TestimonialService) { }

  cards: { title: string, description: string }[] = [
    { title: 'Card 1', description: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam' },
    { title: 'Card 2', description: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam' },
    { title: 'Card 3', description: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam' },
    { title: 'Card 4', description: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam' },
    { title: 'Card 5', description: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam' },
    { title: 'Card 6', description: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam' },
    { title: 'Card 7', description: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam' }
  ];

  ngOnInit(): void {
    this.testimonialService.getData().subscribe(
      (data) => {
        this.testimonials = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  nextCards() {
    if (this.currentIndex + this.cardsToShow < this.cards.length) {
      this.currentIndex += this.cardsToShow;
    } else {
      this.currentIndex = 0;
    }
  }
  getActiveDotIndex() {
    return Math.floor(this.currentIndex / this.cardsToShow);
  }

  prevCards() {
    if (this.currentIndex - this.cardsToShow >= 0) {
      this.currentIndex -= this.cardsToShow;
    } else {
      this.currentIndex = Math.floor(this.cards.length / this.cardsToShow) * this.cardsToShow;  // Vai alla fine
    }
  }

  goToCards(index: number) {
    if (index !== undefined) {
      this.currentIndex = index * this.cardsToShow;
    }
  }

  getVisibleCards() {
    return this.cards.slice(this.currentIndex, this.currentIndex + this.cardsToShow);
  }

  getDotsCount() {
    return Math.ceil(this.cards.length / this.cardsToShow);
  }
}