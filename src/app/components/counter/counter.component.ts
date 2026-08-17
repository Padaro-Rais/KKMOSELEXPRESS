import { Component, Input, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterItem } from '../../shared/models';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() items: CounterItem[] = [];

  displayValues: number[] = [];
  private observer!: IntersectionObserver;
  private animated = false;

  ngOnInit(): void {
    this.displayValues = this.items.map(() => 0);
  }

  ngAfterViewInit(): void {
    const section = document.querySelector('.counter-section');
    if (!section) return;

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !this.animated) {
          this.animated = true;
          this.animateCounters();
          this.observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    this.observer.observe(section);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private animateCounters(): void {
    this.items.forEach((item, index) => {

      const start = performance.now();
      const duration = 1800;

      const step = (time: number) => {
        const progress = Math.min((time - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);

        this.displayValues[index] = Math.floor(ease * item.value);

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    });
  }
}