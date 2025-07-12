import { Component, OnInit } from '@angular/core';
import { Timeline } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
  content?: string;
}

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.css'],
  imports: [Timeline, CardModule, ButtonModule],
})
export class BookNowComponent implements OnInit {
  events: EventItem[];

  constructor() {
    this.events = [
      {
        status: 'Order',
        icon: 'pi pi-shopping-cart',
        content:
          'Place your order effortlessly through our intuitive platform. Our system instantly processes your request and begins coordinating your delivery.',
      },
      {
        status: 'Assign rider',
        icon: 'pi pi-user',
        content:
          'Smart rider assignment powered by AI or manual selection for specific needs. Our algorithm matches the best available rider based on location, expertise, and real-time availability.',
      },
      {
        status: 'Track shipment',
        icon: 'pi pi-map-marker',
        content:
          'Real-time GPS tracking keeps you informed every step of the way. Monitor your delivery progress with live updates and estimated arrival times.',
      },
      {
        status: 'Feedback',
        icon: 'pi pi-star',
        content:
          'revieve feedback based on customer experience to help you to improve your service. Feedbacks drives your commitment to excellence and helps other customers make informed decisions.',
      },
      {
        status: 'Insights',
        icon: 'pi pi-chart-line',
        content:
          'Comprehensive analytics dashboard provides valuable insights into delivery patterns, performance metrics, and optimization opportunities for your business.',
      },
    ];
  }

  ngOnInit() {}
}
