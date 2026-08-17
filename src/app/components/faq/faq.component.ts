import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FAQItem } from '../../shared/models';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {
  @Input() items: FAQItem[] = [];

  openIndex: number | null = 0;

  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }

  isOpen(index: number): boolean {
    return this.openIndex === index;
  }
}