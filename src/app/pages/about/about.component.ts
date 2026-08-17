import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../shared/services/data.service';
import { SeoService } from '../../shared/services/seo.service';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <!-- HERO -->
    <section class="page-banner">
      <div class="banner-overlay"></div>
      <div class="container">
        <h1>A propos de nous</h1>
        <p>Découvrez K&KMOSEL LOGISTICS et notre engagement dans le transport international</p>
      </div>
    </section>

    <!-- INTRO -->
    <section class="section-padding about">
      <div class="container about-grid">

        <div class="about-text" appScrollReveal>
          <h2>Une entreprise de transport au service de l’Europe</h2>

          <p>
            K&KMOSEL LOGISTICS Sàrl-S est spécialisée dans le transport et la logistique internationale.
            Nous proposons des solutions fiables, rapides et adaptées aux besoins de nos clients.
          </p>

          <p>
            Grâce à une équipe engagée et une flotte moderne, nous assurons des livraisons sécurisées
            entre plusieurs pays européens.
          </p>

       
        </div>

        <div class="about-image" appScrollReveal>
          <img src="https://images.pexels.com/photos/6169638/pexels-photo-6169638.jpeg" alt="About us">
        </div>

      </div>
    </section>

    <!-- VALUES -->
    <section class="section-padding values">
      <div class="container">
        <div class="section-header">
          <h2>Nos <span>valeurs</span></h2>
          <p>Ce qui guide notre travail au quotidien</p>
        </div>

        <div class="values-grid">
          <div class="card" appScrollReveal>
            <i class="fa-solid fa-bullseye"></i>
            <h3>Mission</h3>
            <p>Offrir un transport fiable et rapide pour tous nos clients.</p>
          </div>

          <div class="card" appScrollReveal>
            <i class="fa-solid fa-eye"></i>
            <h3>Vision</h3>
            <p>Devenir un acteur majeur du transport en Europe.</p>
          </div>

          <div class="card" appScrollReveal>
            <i class="fa-solid fa-heart"></i>
            <h3>Valeurs</h3>
            <p>Fiabilité, transparence et respect des engagements.</p>
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
      min-height: 45vh;
      @include m.flex-center;
      text-align: center;
      color: v.$white;
      background: url('https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg') center/cover;

      .banner-overlay {
        position: absolute;
        inset: 0;
        background: v.$gradient-overlay;
      }

      .container {
        position: relative;
        z-index: 2;
      }

      h1 {
        font-size: v.$font-size-4xl;
        font-weight: v.$font-weight-extrabold;
      }

      p {
        opacity: .9;
        max-width: 600px;
        margin: 10px auto 0;
      }
    }

    .about-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: v.$space-3xl;
      align-items: center;

      @media (min-width: v.$breakpoint-lg) {
        grid-template-columns: 1fr 1fr;
      }
    }

    .about-text h2 {
      font-size: v.$font-size-3xl;
      margin-bottom: v.$space-md;
    }

    .about-text p {
      margin-bottom: v.$space-md;
      color: v.$text-secondary;
    }

    .stats {
      display: flex;
      gap: v.$space-xl;
      margin-top: v.$space-lg;
      flex-wrap: wrap;
    }

    .stat span {
      display: block;
      font-size: v.$font-size-2xl;
      font-weight: bold;
      color: v.$primary;
    }

    .stat small {
      color: v.$text-muted;
    }

    .about-image img {
      width: 100%;
      border-radius: v.$radius-xl;
      box-shadow: v.$shadow-md;
    }

    .values {
      background: v.$gray-50;
    }

    .values-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: v.$space-lg;
    }

    .card {
      background: v.$white;
      padding: v.$space-xl;
      border-radius: v.$radius-xl;
      text-align: center;
      box-shadow: v.$shadow-sm;
      transition: .3s;

      &:hover {
        transform: translateY(-6px);
        box-shadow: v.$shadow-md;
      }

      i {
        font-size: 2rem;
        color: v.$primary;
        margin-bottom: 10px;
      }

      h3 {
        margin-bottom: 8px;
      }

      p {
        color: v.$text-secondary;
        font-size: v.$font-size-sm;
      }
    }
  `]
})
export class AboutComponent {
  constructor(
    public dataService: DataService,
    private seoService: SeoService,
  ) {
    const meta = this.dataService.getPageMeta('about');
    this.seoService.updateMeta(meta);
  }
}