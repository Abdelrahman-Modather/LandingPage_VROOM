import { Component, OnInit } from '@angular/core';
import { FocusTrapModule } from 'primeng/focustrap';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { AutoFocusModule } from 'primeng/autofocus';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  imports: [
    FocusTrapModule, 
    ButtonModule, 
    FormsModule, 
    InputTextModule, 
    CheckboxModule, 
    IconFieldModule, 
    InputIconModule, 
    AutoFocusModule
  ]
})
export class SignUpComponent implements OnInit {

  // Component properties for form data
  selectedBusinessSize: string = 'startup';
  businessName: string = '';
  yourName: string = '';
  businessEmail: string = '';
  phoneNumber: string = '';
  businessAddress: string = '';
  deliveryNeeds: string = '';
  acceptTerms: boolean = false;

  // Business size options
  businessSizeOptions = [
    { id: 'startup', label: 'Startup', description: '1-50 orders/month', icon: '🚀' },
    { id: 'growing', label: 'Growing', description: '50-500 orders/month', icon: '📈' },
    { id: 'enterprise', label: 'Enterprise', description: '500+ orders/month', icon: '🏢' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Angular lifecycle hook - component initialization logic goes here
    // No need for DOM manipulation as Angular handles this reactively
  }

  // Method to handle business size selection
  onBusinessSizeChange(size: string): void {
    this.selectedBusinessSize = size;
  }

  // Method to handle form submission
  onSubmit(): void {
    if (this.isFormValid()) {
      const formData = {
        businessSize: this.selectedBusinessSize,
        businessName: this.businessName,
        yourName: this.yourName,
        businessEmail: this.businessEmail,
        phoneNumber: this.phoneNumber,
        businessAddress: this.businessAddress,
        deliveryNeeds: this.deliveryNeeds,
        acceptTerms: this.acceptTerms
      };
      
      console.log('Form submitted:', formData);
      // Add your form submission logic here
    }
  }

  // Method to validate form
  isFormValid(): boolean {
    return this.businessName.trim() !== '' && 
           this.yourName.trim() !== '' && 
           this.businessEmail.trim() !== '' && 
           this.phoneNumber.trim() !== '' && 
           this.acceptTerms;
  }

  // Method to handle demo scheduling
  onScheduleDemo(): void {
    console.log('Schedule demo clicked');
    // Add your demo scheduling logic here
  }

  // Method to check if a business size is selected
  isBusinessSizeSelected(size: string): boolean {
    return this.selectedBusinessSize === size;
  }
}