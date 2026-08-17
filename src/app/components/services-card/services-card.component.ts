import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Service } from '../../shared/models';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-services-card',
  standalone: true,
  imports: [CommonModule, RouterModule, ScrollRevealDirective],
  templateUrl: './services-card.component.html',
  styleUrls: ['./services-card.component.scss']
})
export class ServicesCardComponent {
  @Input() services: Service[] = [];
  @Input() showLink = true;
}