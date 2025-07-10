import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InputIcon, IconField, InputTextModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Landing-Page';
}
