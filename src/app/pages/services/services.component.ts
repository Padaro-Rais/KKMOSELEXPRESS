import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DataService } from '../../shared/services/data.service';
import { SeoService } from '../../shared/services/seo.service';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule, ScrollRevealDirective],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services : any = [];

  constructor(
    public dataService: DataService,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    const meta = this.dataService.getPageMeta('services');
    this.seoService.updateMeta(meta);

    this.services = this.dataService.services;
  }

  trackByIndex(index: number): number {
    return index;
  }
}