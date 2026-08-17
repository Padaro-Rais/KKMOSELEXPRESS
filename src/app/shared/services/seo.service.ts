import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { PageMeta } from '../models';

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(private title: Title, private meta: Meta) {}

  updateMeta(meta: PageMeta): void {
    this.title.setTitle(meta.title);
    this.meta.updateTag({ name: 'description', content: meta.description });
    this.meta.updateTag({ name: 'keywords', content: meta.keywords });
    this.meta.updateTag({ property: 'og:title', content: meta.title });
    this.meta.updateTag({ property: 'og:description', content: meta.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'twitter:title', content: meta.title });
    this.meta.updateTag({ name: 'twitter:description', content: meta.description });
  }
}
