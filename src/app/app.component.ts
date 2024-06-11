import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './header/profile/profile.component';
import { ServicesComponent } from './services/services.component';
import { CategoriesComponent } from './categories/categories.component'
import { QualityComponent } from './quality/quality.component';
import { GiftComponent } from './gift/gift.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PricesComponent } from './prices/prices.component';
import { FooterComponent } from './footer/footer.component';
import { PracticeComponent} from './practice/practice.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports:
    [RouterOutlet,
      HeaderComponent,
      ProfileComponent,
      ServicesComponent,
      CategoriesComponent,
      QualityComponent,
      GiftComponent,
      GalleryComponent,
      PricesComponent,
      FooterComponent,
      PracticeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gold-market-project';
}
