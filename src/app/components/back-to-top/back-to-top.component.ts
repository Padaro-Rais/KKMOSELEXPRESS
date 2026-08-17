import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      class="back-to-top"
      [class.visible]="visible"
      (click)="scrollToTop()"
      aria-label="Retour en haut"
    >
      <i class="fa-solid fa-arrow-up"></i>
    </button>
  `,
  styles: [`
    @use 'styles/variables' as v;

    .back-to-top {
      position: fixed;
      bottom: v.$space-xl;
      right: v.$space-xl;
      width: 48px;
      height: 48px;
      border-radius: v.$radius-full;
      background: v.$gradient-primary;
      color: v.$white;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: v.$shadow-primary;
      z-index: v.$z-back-to-top;
      opacity: 0;
      transform: translateY(20px);
      transition: all v.$transition-base;
      pointer-events: none;

      &.visible {
        opacity: 1;
        transform: translateY(0);
        pointer-events: auto;
      }

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 14px 40px rgba(11, 61, 145, 0.4);
      }

      i {
        font-size: v.$font-size-lg;
      }
    }
  `],
})
export class BackToTopComponent {
  visible = false;

  @HostListener('window:scroll')
  onScroll(): void {
    this.visible = window.scrollY > 400;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
