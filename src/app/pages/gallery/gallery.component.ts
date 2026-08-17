import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../shared/services/data.service';
import { SeoService } from '../../shared/services/seo.service';
import { GalleryComponent as GalleryGridComponent } from '../../components/gallery/gallery.component';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [CommonModule, GalleryGridComponent],
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent {

  galleryCategories = ['camions', 'entrepots', 'chargement', 'livraison'];

  constructor(
    public dataService: DataService,
    private seoService: SeoService
  ) {
    const meta = this.dataService.getPageMeta('gallery');
    this.seoService.updateMeta(meta);
  }
}