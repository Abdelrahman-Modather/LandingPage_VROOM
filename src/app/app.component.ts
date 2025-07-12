import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
import { ServicesSectionComponent } from "./components/services-section/services-section.component";
import { Know_moreComponent } from "./components/know_more/know_more.component";
import { BookNowComponent } from "./components/book-now/book-now.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { ScrollPanelModule } from 'primeng/scrollpanel';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InputIcon, IconField, InputTextModule, FormsModule, HeroSectionComponent, ServicesSectionComponent, Know_moreComponent, BookNowComponent, SignUpComponent, ScrollPanelModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Landing-Page';
}
