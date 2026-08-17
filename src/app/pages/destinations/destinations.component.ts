import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../shared/services/data.service';
import { SeoService } from '../../shared/services/seo.service';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section class="page-banner">
      <div class="banner-overlay"></div>
      <div class="container">
        <h1>Nos Destinations</h1>
        <p>4 pays, des milliers de routes, une seule promesse : la livraison</p>
      </div>
    </section>

    <section class="section-padding map-section">
      <div class="container">
        <div class="section-header">
          <h2 appScrollReveal>Zone de <span>couverture</span></h2>
          <p appScrollReveal>Un reseau transfrontalier performant au coeur de l'Europe</p>
        </div>
        <div class="map-container" appScrollReveal>
          <div class="europe-map">
            <svg viewBox="0 0 800 600" class="map-svg">
              <defs>
                <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#0B3D91;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#1565C0;stop-opacity:1" />
                </linearGradient>
              </defs>
              <ellipse cx="400" cy="300" rx="350" ry="250" fill="url(#mapGrad)" opacity="0.1"/>
              <circle cx="400" cy="300" r="300" fill="none" stroke="#0B3D91" stroke-width="1" opacity="0.2"/>
              <circle cx="400" cy="300" r="200" fill="none" stroke="#0B3D91" stroke-width="1" opacity="0.2"/>
              <circle cx="400" cy="300" r="100" fill="none" stroke="#F58220" stroke-width="2" opacity="0.4"/>
              
              <!-- Luxembourg center -->
              <circle cx="400" cy="300" r="8" fill="#F58220"/>
              <circle cx="400" cy="300" r="20" fill="none" stroke="#F58220" stroke-width="2" opacity="0.5">
                <animate attributeName="r" values="20;30;20" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.5;0.1;0.5" dur="2s" repeatCount="indefinite"/>
              </circle>
              
              <!-- Germany -->
              <circle cx="480" cy="260" r="6" fill="#0B3D91"/>
              <!-- France -->
              <circle cx="320" cy="340" r="6" fill="#0B3D91"/>
              <!-- Belgium -->
              <circle cx="360" cy="280" r="6" fill="#0B3D91"/>
              
              <!-- Connection lines -->
              <line x1="400" y1="300" x2="480" y2="260" stroke="#F58220" stroke-width="2" stroke-dasharray="5,5" opacity="0.6"/>
              <line x1="400" y1="300" x2="320" y2="340" stroke="#F58220" stroke-width="2" stroke-dasharray="5,5" opacity="0.6"/>
              <line x1="400" y1="300" x2="360" y2="280" stroke="#F58220" stroke-width="2" stroke-dasharray="5,5" opacity="0.6"/>
            </svg>
            <div class="map-labels">
              <div class="map-label" style="top: 45%; left: 48%;">
                <span class="map-flag">🇱🇺</span>
                <span>Luxembourg</span>
              </div>
              <div class="map-label" style="top: 38%; left: 58%;">
                <span class="map-flag">🇩🇪</span>
                <span>Allemagne</span>
              </div>
              <div class="map-label" style="top: 52%; left: 35%;">
                <span class="map-flag">🇫🇷</span>
                <span>France</span>
              </div>
              <div class="map-label" style="top: 42%; left: 42%;">
                <span class="map-flag">🇧🇪</span>
                <span>Belgique</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding destinations-detail">
      <div class="container">
        <div class="section-header">
          <h2 appScrollReveal>Details par <span>pays</span></h2>
          <p appScrollReveal>Informations et services disponibles pour chaque destination</p>
        </div>
        <div class="destinations-detail-grid">
          <div class="destination-detail-card" *ngFor="let dest of dataService.destinations; let i = index" appScrollReveal [style.transitionDelay]="i * 100 + 'ms'">
            <div class="destination-detail-image">
              <img [src]="dest.image" [alt]="dest.country" loading="lazy">
              <div class="destination-detail-flag">{{ dest.flag }}</div>
            </div>
            <div class="destination-detail-content">
              <h3>{{ dest.country }}</h3>
              <p>{{ dest.description }}</p>
              <div class="detail-services">
                <h4>Services disponibles</h4>
                <div class="service-tags">
                  <span *ngFor="let s of dest.services">{{ s }}</span>
                </div>
              </div>
              <div class="detail-time">
                <i class="fa-solid fa-clock"></i>
                <span>Delai moyen de livraison : <strong>{{ dest.averageTime }}</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @use 'styles/variables' as v;
    @use 'styles/mixins' as m;

    .page-banner {
      position: relative;
      min-height: 50vh;
      @include m.flex-center;
      background-image: url('https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg');
      background-size: cover;
      background-position: center;
      text-align: center;
      color: v.$white;

      .container {
        position: relative;
        z-index: 2;
      }

      h1 {
        font-size: v.$font-size-4xl;
        font-weight: v.$font-weight-extrabold;
        color: v.$white;
        margin-bottom: v.$space-md;

        @media (min-width: v.$breakpoint-lg) {
          font-size: v.$font-size-5xl;
        }
      }

      p {
        font-size: v.$font-size-lg;
        color: rgba(255, 255, 255, 0.85);
        max-width: 600px;
        margin: 0 auto;
      }
    }

    .banner-overlay {
      position: absolute;
      inset: 0;
      background: v.$gradient-overlay;
      z-index: 1;
    }

    .map-section {
      background: v.$gray-50;
    }

    .map-container {
      max-width: 900px;
      margin: 0 auto;
    }

    .europe-map {
      position: relative;
      background: v.$white;
      border-radius: v.$radius-xl;
      box-shadow: v.$shadow-md;
      border: 1px solid v.$gray-100;
      overflow: hidden;
      padding: v.$space-xl;
    }

    .map-svg {
      width: 100%;
      height: auto;
      display: block;
    }

    .map-labels {
      position: absolute;
      inset: 0;
    }

    .map-label {
      position: absolute;
      @include m.flex(row, flex-start, center, v.$space-xs);
      background: v.$white;
      padding: v.$space-xs v.$space-sm;
      border-radius: v.$radius-md;
      box-shadow: v.$shadow-sm;
      font-size: v.$font-size-xs;
      font-weight: v.$font-weight-semibold;
      color: v.$text-primary;
      border: 1px solid v.$gray-100;
      transform: translate(-50%, -50%);
      white-space: nowrap;
    }

    .map-flag {
      font-size: 16px;
    }

    .destinations-detail {
      background: v.$white;
    }

    .destinations-detail-grid {
      @include m.responsive-grid(360px, v.$space-xl);
    }

    .destination-detail-card {
      background: v.$gray-50;
      border-radius: v.$radius-xl;
      overflow: hidden;
      box-shadow: v.$shadow-md;
      border: 1px solid v.$gray-100;
      transition: all v.$transition-base;

      &:hover {
        transform: translateY(-8px);
        box-shadow: v.$shadow-xl;
      }
    }

    .destination-detail-image {
      position: relative;
      height: 220px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
      }

      .destination-detail-card:hover & img {
        transform: scale(1.08);
      }
    }

    .destination-detail-flag {
      position: absolute;
      top: v.$space-md;
      right: v.$space-md;
      font-size: 36px;
      background: v.$white;
      border-radius: v.$radius-full;
      width: 56px;
      height: 56px;
      @include m.flex-center;
      box-shadow: v.$shadow-md;
    }

    .destination-detail-content {
      padding: v.$space-xl;

      h3 {
        font-size: v.$font-size-xl;
        font-weight: v.$font-weight-bold;
        color: v.$text-primary;
        margin-bottom: v.$space-sm;
      }

      p {
        font-size: v.$font-size-sm;
        color: v.$text-secondary;
        line-height: v.$line-height-relaxed;
        margin-bottom: v.$space-lg;
      }
    }

    .detail-services {
      margin-bottom: v.$space-lg;

      h4 {
        font-size: v.$font-size-sm;
        font-weight: v.$font-weight-semibold;
        color: v.$text-primary;
        margin-bottom: v.$space-sm;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
    }

    .service-tags {
      @include m.flex(row, flex-start, center, v.$space-sm);
      flex-wrap: wrap;

      span {
        font-size: v.$font-size-xs;
        padding: v.$space-xs v.$space-sm;
        background: v.$primary;
        color: v.$white;
        border-radius: v.$radius-sm;
        font-weight: v.$font-weight-medium;
      }
    }

    .detail-time {
      @include m.flex(row, flex-start, center, v.$space-sm);
      font-size: v.$font-size-sm;
      color: v.$secondary;
      font-weight: v.$font-weight-semibold;
      padding-top: v.$space-lg;
      border-top: 1px solid v.$gray-200;

      i {
        font-size: v.$font-size-sm;
      }

      strong {
        color: v.$primary;
      }
    }
  `],
})
export class DestinationsComponent {
  constructor(
    public dataService: DataService,
    private seoService: SeoService,
  ) {
    const meta = this.dataService.getPageMeta('destinations');
    this.seoService.updateMeta(meta);
  }
}
