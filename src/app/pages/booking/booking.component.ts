import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder,FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Booking } from '../../models/Booking';
import { Table, TableModule } from 'primeng/table';

import { BookingService } from '../../../services/booking/booking.service';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule,DialogModule,InputTextModule,TableModule,ButtonModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent implements OnInit {
  @ViewChild('dt') dataTable!: Table;

  bookings: Booking[] = [];
  selectedSales: any[] = [];
  loadingTable = false;
  loadingButton = false;
  messageTable = 'No data found';
  isEditMode: boolean = false;
  saleId: number = 0;
  visibleDialog: boolean = false;
  
  booking: Booking = {
    bookingId: 0,
    startDate: new Date(),
    endDate: new Date(),
    customerId: 0,
    vehicleId: 0,
    ratingStatus: false,
    commentStatus: false,
    customer: { customerId: 0, name: '' },
    vehicle: { vehicleId: 0, model: '' }
  };
  
  
  constructor(
    private fb: FormBuilder,
    private bookingService: BookingService,
    private titleService: Title
    ){
    this.titleService.setTitle('Register Booking');
  }
  ngOnInit() {
    this.getAllBooking()
  }

  getAllBooking(){
    this.loadingTable = true;
    this.bookingService.getAllBooking().subscribe({
      next:(response) => {
        this.bookings = response.flat()
        console.log(response)
      },
      error: () => {
        this.messageTable = 'No data found';
      }
    })
    this.loadingTable = false;
  }


  openDialog(id : number) {
    this.loadingTable = true;
    this.bookingService.getBookingById(id).subscribe({
      next:(response) => {
        this.booking = response
      },
      error: () => {
        this.messageTable = 'No data found';
      }
      
    })
    this.openVisibleDialog()
    this.loadingTable = false;
  }

  openVisibleDialog() {
    this.visibleDialog = true;
  }
}
