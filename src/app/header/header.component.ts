import { Component } from '@angular/core';
import { ProfileComponent } from "./profile/profile.component";
import { NavigationComponent } from "./navigation/navigation.component";
@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [ProfileComponent, NavigationComponent]
})
export class HeaderComponent {

}
