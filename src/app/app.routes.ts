import { Routes } from '@angular/router';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';

export const routes: Routes = [
    {
        path: 'hero',
        component: HeroSectionComponent,
    },
    {
        path: 'services',
        component: ServicesSectionComponent
    }
];
