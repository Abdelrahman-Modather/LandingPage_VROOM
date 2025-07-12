import { Routes } from '@angular/router';
import { Know_moreComponent } from './components/know_more/know_more.component';
import { BookNowComponent } from './components/book-now/book-now.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

export const routes: Routes = [
    {
        path: 'test',
        component: SignUpComponent,
    }
];
