import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="not-found">
      <div class="container">
        <div class="not-found-content">
          <div class="error-code">404</div>
          <div class="error-icon">
            <i class="fa-solid fa-truck-fast"></i>
          </div>
          <h1>Page non trouvee</h1>
          <p>La page que vous recherchez semble avoir pris une autre route. Ne vous inquietez pas, nous vous ramenons a bon port.</p>
          <div class="error-actions">
            <a class="btn-primary" routerLink="/">
              <i class="fa-solid fa-house"></i>
              Retour a l'accueil
            </a>
            <a class="btn-outline" routerLink="/contact">
              <i class="fa-solid fa-envelope"></i>
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @use 'styles/variables' as v;
    @use 'styles/mixins' as m;

    .not-found {
      min-height: 100vh;
      @include m.flex-center;
      background: v.$gray-50;
      padding-top: 100px;
    }

    .not-found-content {
      text-align: center;
      max-width: 600px;
    }

    .error-code {
      font-size: 120px;
      font-weight: v.$font-weight-extrabold;
      color: v.$primary;
      line-height: 1;
      margin-bottom: v.$space-md;
      opacity: 0.2;

      @media (min-width: v.$breakpoint-lg) {
        font-size: 180px;
      }
    }

    .error-icon {
      width: 80px;
      height: 80px;
      border-radius: v.$radius-full;
      background: v.$gradient-primary;
      @include m.flex-center;
      color: v.$white;
      font-size: v.$font-size-3xl;
      margin: -60px auto v.$space-xl;
      box-shadow: v.$shadow-primary;
      position: relative;
      z-index: 1;
    }

    .not-found-content h1 {
      font-size: v.$font-size-3xl;
      font-weight: v.$font-weight-bold;
      color: v.$text-primary;
      margin-bottom: v.$space-md;
    }

    .not-found-content p {
      font-size: v.$font-size-base;
      color: v.$text-secondary;
      line-height: v.$line-height-relaxed;
      margin-bottom: v.$space-2xl;
    }

    .error-actions {
      @include m.flex(row, center, center, v.$space-md);
      flex-wrap: wrap;
    }

    .btn-primary {
      @include m.button-primary;
    }

    .btn-outline {
      @include m.button-outline;
      color: v.$primary;
      border-color: v.$primary;

      &:hover {
        background: v.$primary;
        color: v.$white;
      }
    }
  `],
})
export class NotFoundComponent {}
