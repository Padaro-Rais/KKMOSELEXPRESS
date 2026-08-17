import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeroComponent } from '../../components/hero/hero.component';
import { ServicesCardComponent } from '../../components/services-card/services-card.component';
import { CounterComponent } from '../../components/counter/counter.component';
import { TestimonialComponent } from '../../components/testimonial/testimonial.component';
import { CtaComponent } from '../../components/cta/cta.component';

import { DataService } from '../../shared/services/data.service';
import { SeoService } from '../../shared/services/seo.service';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeroComponent,
    ServicesCardComponent,
    CounterComponent,
    TestimonialComponent,
    CtaComponent,
    ScrollRevealDirective
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  whyChooseUs: any[] = [];
  destinations: any[] = [];
  homeServices: any[] = [];
  counterItems: any[] = [];
  testimonials: any[] = [];

  constructor(
    private dataService: DataService,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {

    this.seoService.updateMeta(
      this.dataService.getPageMeta('home')
    );

    this.whyChooseUs = this.dataService.whyChooseUs;
    this.destinations = this.dataService.destinations;
    this.homeServices = this.dataService.homeServices;
    this.counterItems = this.dataService.counterItems;
    this.testimonials = this.dataService.testimonials;
  }

  trackByIndex(index: number): number {
    return index;
  }
}