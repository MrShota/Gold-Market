import { Component } from '@angular/core';
import { JewelryModalComponent } from './jewelry-modal/jewelry-modal.component';
import { HoverDirective } from '../../directives/hover.directive';
import { NgIf } from '@angular/common';
import { WatchModalComponent } from '../../modals/watch-modal/watch-modal.component';
import { CoinModalComponent } from '../../modals/coin-modal/coin-modal.component';
import { ServiceComponent } from '../../modals/service/service.component';
import { GiftModalComponent } from "../../modals/gift-modal/gift-modal.component";
import { MaisonModalComponent } from '../../modals/maison-modal/maison-modal.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    JewelryModalComponent,
    WatchModalComponent,
    CoinModalComponent,
    ServiceComponent,
    GiftModalComponent,
    MaisonModalComponent,
    HoverDirective,
    NgIf,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})



export class NavigationComponent {

  jewelryModalShown: boolean = false;
  watchModalShown: boolean = false;
  coinModalShown: boolean = false;
  serviceModalShown: boolean = false;
  giftModalShown: boolean = false;
  maisonModalShown: boolean = false;

  
  showJewelryModal() {
    this.jewelryModalShown = true;


    // თუ მაუს ივენთ თaრგეთი არის ჩაილდ ელემენტი მაშინ ჩაილდს ექნება მაუს ლივ;


    // თუ მაუს ივენთ თaრგეთი არის nav-link მაშინ this.jewelryModalShown = false;
    // if (event.target.classList.value === 'nav-link one') {
      // this.jewelryModalShown = false;
      // alert('works')

    // }





    // console.log('mouse entered :', event.target.classList.value)
    // if (event.target) {
    // }
  }


  closeJewelryModal() {

    this.jewelryModalShown = false;
  }

  showWatchModal() {
    this.watchModalShown = true;

  }
  closeWatchModal() {
    this.watchModalShown = false;

  }

  showCoinModal() {
    this.coinModalShown = true;

  }
  closeCoinModal() {
    this.coinModalShown = false;

  }

  showServiceModal() {
    this.serviceModalShown = true;

  }
  closeServiceModal() {
    this.serviceModalShown = false;

  }

  showGiftModal() {
    this.giftModalShown = true;

  }
  closeGiftModal() {
    this.giftModalShown = false;

  }

  showMaisonModal() {
    this.maisonModalShown = true;

  }
  closeMaisonModal() {
    this.maisonModalShown = false;

  }


}

