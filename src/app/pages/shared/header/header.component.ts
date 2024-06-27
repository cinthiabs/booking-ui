import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  items: any[] = []; 
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {

    this.items = [
      {
        label: 'Booking', icon: 'pi pi-home',
        items: [
          { label: 'Report Booking', icon: 'pi pi-file-plus', route: '/booking' }
        ]
      }
    ];
  }
}
