import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = 'http://localhost:8080/bookings';

  constructor(private http: HttpClient) { }

  saveBooking(bookingData: any): Observable<any> {
    return this.http.post(this.apiUrl, bookingData);
  }
}
