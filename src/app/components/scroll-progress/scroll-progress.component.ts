import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="scroll-progress" [style.width.%]="progress"></div>`,
  styles: [`
    @use 'styles/variables' as v;

    .scroll-progress {
      position: fixed;
      top: 0;
      left: 0;
      height: 3px;
      background: v.$gradient-secondary;
      z-index: v.$z-scroll-progress;
      transition: width 0.1s ease;
    }
  `],
})
export class ScrollProgressComponent {
  progress = 0;

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  }
}
