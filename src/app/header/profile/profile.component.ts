import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { HoverDirective } from '../../directives/hover.directive';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgIf, HoverDirective],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {



  
}
