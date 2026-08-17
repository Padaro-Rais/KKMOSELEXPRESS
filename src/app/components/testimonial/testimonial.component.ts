import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Testimonial } from '../../shared/models';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {

  @Input() testimonials: Testimonial[] = [];

  // helper pour générer les étoiles proprement
  getStarsArray(rating: number): number[] {
    return Array(rating).fill(0);
  }
}