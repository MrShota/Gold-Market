import { Component } from '@angular/core';
import { CarouselComponent } from "../carousel/carousel.component";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

  public slides = [
    { src: "../../assets/images/H9893eb5be63c4382a3e61068ba1cd427v.jpg" },
    { src: "../../assets/images/180703-340x226-half-carat-solitare-14k.jpg" },
    { src: "../../assets/images/JT01041-1RP600_1_lar.jpg" },
    { src: "../../assets/images/MP000000012226747_437Wx649H_202202210122281.jpeg" },
    { src: "../../assets/images/71Lmincsf7L._UL1500_.jpg" },
    { src: "../../assets/images/1644248918-0400014091286_GOLD.jpg" },

    { src: "../../assets/images/47743ob_800.jpg" },
    { src: "../../assets/images/barandringtoggle-clasps-category(16).jpg" },
    { src: "../../assets/images/ring-concierge-bracelets-14k-yellow-gold-graduated-single-prong-diamond-bracelet-30024294858840.jpg.webp" },
    { src: "../../assets/images/best-simple-gold-jewelry-293078-1620409827035-main.700x0c.jpg" },
    { src: "../../assets/images/a744c114c6a6827ffc3794b2dd9a906b87f4640b.jpg" },
    { src: "../../assets/images/Jewellery-1.jpg" }
  ]

}
