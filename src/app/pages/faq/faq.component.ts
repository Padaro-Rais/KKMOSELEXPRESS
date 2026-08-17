import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../shared/services/data.service';
import { SeoService } from '../../shared/services/seo.service';
import { FaqComponent as FaqAccordionComponent } from '../../components/faq/faq.component';

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [CommonModule, FaqAccordionComponent],
template: `
<!-- HERO BANNER -->
<section class="faq-hero">
  <div class="overlay"></div>

  <div class="container content">
    <div class="badge">Centre d'aide</div>

    <h1>Foire aux Questions</h1>

    <p class="wi">
      Trouvez rapidement les réponses à vos questions sur nos services
      de transport et logistique internationale.
    </p>
  </div>
</section>

<!-- FAQ SECTION -->
<section class="faq-section section-padding">
  <div class="container">

    <div class="section-header premium">
      <h2>Questions <span>fréquentes</span></h2>
      <p>Tout ce que vous devez savoir sur nos services</p>
    </div>

    <div class="faq-box">
      <app-faq [items]="dataService.faqItems"></app-faq>
    </div>

  </div>
</section>
`,
  styles: [`
   @use 'styles/variables' as v;
@use 'styles/mixins' as m;

/* HERO */
.faq-hero {
  position: relative;
  min-height: 45vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  background: url('https://images.pexels.com/photos/5025503/pexels-photo-5025503.jpeg');
  background-size: cover;
  background-position: center;
}
  .wi {
  color : white
  }

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    rgba(11,61,145,0.85),
    rgba(245,130,32,0.6)
  );
}

.content {
  position: relative;
  z-index: 2;
  color: white;
  max-width: 750px;
}

.badge {
  display: inline-block;
  padding: 6px 14px;
  background: rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 999px;
  font-size: 12px;
  letter-spacing: 1px;
  margin-bottom: 15px;
  backdrop-filter: blur(6px);
}

h1 {
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 56px;
  }
}

p {
  font-size: 16px;
  opacity: 0.9;
  line-height: 1.6;
}

/* SECTION */
.faq-section {
  background: #f7f9fc;
}

/* FAQ BOX (CARD PREMIUM) */
.faq-box {
  margin-top: 30px;
  padding: 30px;
  border-radius: 18px;
  background: white;
  box-shadow: 0 10px 40px rgba(0,0,0,0.08);
  border: 1px solid #eee;
}
  `],
})
export class FaqPageComponent {
  constructor(
    public dataService: DataService,
    private seoService: SeoService,
  ) {
    const meta = this.dataService.getPageMeta('faq');
    this.seoService.updateMeta(meta);
  }
}
