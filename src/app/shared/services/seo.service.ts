import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { PageMeta } from '../models';
@Injectable({
  providedIn: 'root'
})
export class SeoService {

  private readonly siteUrl = 'https://kkmoselexpress.lu';

  private readonly defaultImage =
    'https://kkmoselexpress.lu/assets/images/kkmosel-express-transport.jpg';

  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  updateMeta(metaData: PageMeta): void {

    // =========================
    // TITLE
    // =========================

    this.title.setTitle(metaData.title);

    // =========================
    // META DESCRIPTION
    // =========================

    this.meta.updateTag({
      name: 'description',
      content: metaData.description
    });

    // =========================
    // KEYWORDS
    // =========================

    if (metaData.keywords) {
      this.meta.updateTag({
        name: 'keywords',
        content: metaData.keywords
      });
    }

    // =========================
    // ROBOTS
    // =========================

    this.meta.updateTag({
      name: 'robots',
      content: metaData.noindex
        ? 'noindex, nofollow'
        : 'index, follow'
    });

    // =========================
    // OPEN GRAPH
    // =========================

    this.meta.updateTag({
      property: 'og:title',
      content: metaData.title
    });

    this.meta.updateTag({
      property: 'og:description',
      content: metaData.description
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website'
    });

    this.meta.updateTag({
      property: 'og:url',
      content: `${this.siteUrl}${metaData.url}`
    });

    this.meta.updateTag({
      property: 'og:site_name',
      content: 'KKMOSEL EXPRESS'
    });

    this.meta.updateTag({
      property: 'og:image',
      content: metaData.image || this.defaultImage
    });

    this.meta.updateTag({
      property: 'og:image:alt',
      content: metaData.title
    });

    // =========================
    // TWITTER / X
    // =========================

    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: metaData.title
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: metaData.description
    });

    this.meta.updateTag({
      name: 'twitter:image',
      content: metaData.image || this.defaultImage
    });

    // =========================
    // CANONICAL
    // =========================

this.updateCanonical(metaData.url || '/');  }

  private updateCanonical(url: string): void {

    const canonicalUrl = `${this.siteUrl}${url}`;

    let canonical =
      document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

    if (!canonical) {
      canonical = document.createElement('link');

      canonical.setAttribute('rel', 'canonical');

      document.head.appendChild(canonical);
    }

    canonical.setAttribute('href', canonicalUrl);
  }
}