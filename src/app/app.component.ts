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
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InputIcon, IconField, InputTextModule, FormsModule, HeroSectionComponent, Toast, ButtonModule, Ripple,ServicesSectionComponent, Know_moreComponent, BookNowComponent, SignUpComponent, ScrollPanelModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MessageService]

})
export class AppComponent {
      constructor(private messageService: MessageService) {}

    show() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Your request has been sent to the team to review', life: 3000 });
    }
  title = 'VROOM';
}
