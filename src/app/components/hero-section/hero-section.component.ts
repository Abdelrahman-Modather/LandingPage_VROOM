// hero-section.component.ts
import { Component, OnInit } from '@angular/core';
import { ButtonIcon, ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
  imports: [ButtonModule, CommonModule]
})
export class HeroSectionComponent implements OnInit {
  isMobileMenuOpen = false;
    isDarkMode = false;

  toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('my-app-dark');
    this.isDarkMode = body.classList.contains('my-app-dark');

    const logo = document.querySelector('.logo') as HTMLImageElement;
    if (body.classList.contains('my-app-dark')) {
      logo.src = 'logoDarkMode.png';
        } else {
      logo.src = 'logo.png';
        }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  constructor() { }

  ngOnInit() {
  }
}