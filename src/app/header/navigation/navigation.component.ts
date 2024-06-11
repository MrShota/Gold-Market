import { Component } from '@angular/core';
import { JewelryModalComponent } from './jewelry-modal/jewelry-modal.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    JewelryModalComponent
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  openModal() {
    alert('It/s works')
  }
}

