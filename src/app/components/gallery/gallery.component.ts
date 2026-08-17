import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryItem } from '../../shared/models';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.scss']
})
export class GalleryComponent {

  @Input() items: GalleryItem[] = [];
  @Input() categories: string[] = [];
  @Output() filterChange = new EventEmitter<string>();

  activeFilter = 'all';
  lightboxItem: GalleryItem | null = null;

  get filteredItems(): GalleryItem[] {
    return this.activeFilter === 'all'
      ? this.items
      : this.items.filter(i => i.category === this.activeFilter);
  }

  setFilter(cat: string) {
    this.activeFilter = cat;
    this.filterChange.emit(cat);
  }

  open(item: GalleryItem) {
    this.lightboxItem = item;
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.lightboxItem = null;
    document.body.style.overflow = '';
  }

  prev() {
    const list = this.filteredItems;
    const index = list.findIndex(i => i.id === this.lightboxItem?.id);
    this.lightboxItem = list[(index - 1 + list.length) % list.length];
  }

  next() {
    const list = this.filteredItems;
    const index = list.findIndex(i => i.id === this.lightboxItem?.id);
    this.lightboxItem = list[(index + 1) % list.length];
  }
}