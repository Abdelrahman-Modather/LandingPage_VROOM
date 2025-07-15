import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.css'],
})
export class ServicesSectionComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  private observer?: IntersectionObserver;
  // Observer for the counters
  private counterObserver?: IntersectionObserver;
  private observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  };

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    // Component initialization logic
  }

  ngAfterViewInit(): void {
    // Initialize animations after view is fully loaded
    this.initializeScrollAnimations();
    this.initializeHoverEffects();
    // Add the counter animation initialization
    this.initializeCounterAnimation();
  }

  ngOnDestroy(): void {
    // Clean up observers to prevent memory leaks
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.counterObserver) {
      this.counterObserver.disconnect();
    }
  }

  private initializeScrollAnimations(): void {
    // Create intersection observer for scroll-triggered animations
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    }, this.observerOptions);

    // Observe all feature items within this component
    const featureItems =
      this.elementRef.nativeElement.querySelectorAll('.feature-item');
    featureItems.forEach((item: Element) => {
      this.observer?.observe(item);
    });
  }

  private initializeHoverEffects(): void {
    // Add interactive hover effects to service cards
    const serviceCards =
      this.elementRef.nativeElement.querySelectorAll('.service-card');

    serviceCards.forEach((card: HTMLElement) => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.02)';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
      });
    });
  }

  /**
   * Initializes the number counting animation for elements with the '.counter' class.
   */
  private initializeCounterAnimation(): void {
    const counters = this.elementRef.nativeElement.querySelectorAll('.counter');
    if (counters.length === 0) {
      return;
    }

    const animateCounter = (element: HTMLElement, duration: number) => {
      const target = parseInt(element.textContent || '0', 10);
      element.textContent = '0%'; // Start display at 0%
      let startTime: number | null = null;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const currentValue = Math.floor(progress * target);
        element.textContent = `${currentValue}%`;

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          element.textContent = `${target}%`; // Ensure it ends on the exact target
        }
      };
      requestAnimationFrame(step);
    };

    this.counterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target as HTMLElement, 1500); // Animate over 1.5 seconds
            observer.unobserve(entry.target); // Animate only once
          }
        });
      },
      { threshold: 0.5 } // Start when 50% of the element is visible
    );

    counters.forEach((counter: Element) => {
      this.counterObserver?.observe(counter);
    });
  }

  changeImage(picId: number): void {
    // Implementation for changing images
    console.log('Changing image to:', picId);
    // Add your image changing logic here
  }
}