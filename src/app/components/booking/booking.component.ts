import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  booking = {
    name: '',
    email: '',
    date: '',
    numberOfPeople: 0,
    notes: ''
  };
  constructor(private bookingService: BookingService) { }
  onSubmit() {
    if (!this.booking.name || !this.booking.email || !this.booking.date || !this.booking.numberOfPeople) {
      alert('Please fill all required fields!');
      return;
    }
    this.bookingService.saveBooking(this.booking).subscribe({
      next: (response) => {
        alert(response);
      },
      error: (error) => {
        alert('Booking failed. Please try again later.');
        console.error('Error:', error);
      }
    });

    console.log('Booking submitted:', this.booking);
  }
  convertToNumber(value: string) {
    this.booking.numberOfPeople = Number(value);
  }
}
