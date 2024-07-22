import { Component } from '@angular/core';
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

  isModalShown:boolean=true;

  showModal(){
    this.isModalShown=!this.isModalShown;
  }
  closeModal(){
    this.isModalShown=!this.isModalShown;
    
  }


}
