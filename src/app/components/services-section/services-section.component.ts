import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.css']
})
export class ServicesSectionComponent implements OnInit, AfterViewInit, OnDestroy {
  
  private observer?: IntersectionObserver;
  private observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    // Component initialization logic
  }

  ngAfterViewInit(): void {
    // Initialize animations after view is fully loaded
    this.initializeScrollAnimations();
    this.initializeHoverEffects();
  }

  ngOnDestroy(): void {
    // Clean up observer to prevent memory leaks
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private initializeScrollAnimations(): void {
    // Create intersection observer for scroll-triggered animations
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    }, this.observerOptions);

    // Observe all feature items within this component
    const featureItems = this.elementRef.nativeElement.querySelectorAll('.feature-item');
    featureItems.forEach((item: Element) => {
      this.observer?.observe(item);
    });
  }

  private initializeHoverEffects(): void {
    // Add interactive hover effects to service cards
    const serviceCards = this.elementRef.nativeElement.querySelectorAll('.service-card');
    
    serviceCards.forEach((card: HTMLElement) => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.02)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
      });
    });
  }

  changeImage(picId: number): void {
    // Implementation for changing images
    console.log('Changing image to:', picId);
    // Add your image changing logic here
  }
}