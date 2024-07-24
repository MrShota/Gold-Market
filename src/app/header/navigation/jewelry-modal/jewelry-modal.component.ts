import { Component, Output } from '@angular/core';
import { HoverDirective } from '../../../directives/hover.directive';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-jewelry-modal',
  standalone: true,
  imports: [HoverDirective, NgIf],
  templateUrl: './jewelry-modal.component.html',
  styleUrl: './jewelry-modal.component.scss'
})
export class JewelryModalComponent {

  isModalShown:boolean=true
  
  // @Output
  
  
  
  
  openModal() {
    this.isModalShown = true;
    // this.isModalShown=true;
    // const modalClassName: string = event.target.classList.value
    // alert(modalClassName)
  }

  closeModal() {
    this.isModalShown = false;

  }





  
}

