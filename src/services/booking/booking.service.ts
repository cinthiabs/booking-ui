import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../../app/models/Booking';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  getAllBooking():Observable<Booking[]>{
    return this.http.get<Booking[]>('/Booking');
  }

  getBookingById(id: number):Observable<Booking>{
    return this.http.get<Booking>(`/Booking/${id}`);
  }
}
