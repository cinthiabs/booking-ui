import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BookingComponent } from './pages/booking/booking.component';

export const routes: Routes = [
    {path: '', redirectTo:'/home',pathMatch: 'full'},
    {path: 'home',component: HomeComponent},
    {path:'booking',component: BookingComponent}
];
