export interface Booking {
    bookingId: number;
    startDate: Date;
    endDate: Date;
    customerId: number;
    vehicleId: number;
    ratingStatus?: boolean;
    commentStatus?: boolean;
    customer: Customer;
    vehicle: Vehicle;
}
  
export interface Customer {
  customerId: number;
  name: string;
}

export interface Vehicle {
  vehicleId: number;
  model: string;
}
  