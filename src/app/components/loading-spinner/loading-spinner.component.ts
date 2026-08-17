import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="spinner-container">
      <div class="spinner">
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
      </div>
      <p class="spinner-text">Chargement...</p>
    </div>
  `,
  styles: [`
    @use 'styles/variables' as v;
    @use 'styles/mixins' as m;

    .spinner-container {
      @include m.flex-center;
      flex-direction: column;
      gap: v.$space-lg;
      padding: v.$space-3xl;
    }

    .spinner {
      position: relative;
      width: 60px;
      height: 60px;
    }

    .spinner-ring {
      position: absolute;
      border-radius: 50%;
      border: 3px solid transparent;
      animation: spin 1s linear infinite;

      &:nth-child(1) {
        width: 60px;
        height: 60px;
        border-top-color: v.$primary;
        top: 0;
        left: 0;
      }

      &:nth-child(2) {
        width: 44px;
        height: 44px;
        border-top-color: v.$secondary;
        top: 8px;
        left: 8px;
        animation-duration: 1.5s;
        animation-direction: reverse;
      }

      &:nth-child(3) {
        width: 28px;
        height: 28px;
        border-top-color: v.$accent;
        top: 16px;
        left: 16px;
        animation-duration: 2s;
      }
    }

    .spinner-text {
      color: v.$text-muted;
      font-size: v.$font-size-sm;
      font-weight: v.$font-weight-medium;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `],
})
export class LoadingSpinnerComponent {}
