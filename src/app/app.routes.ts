import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    data: { page: 'home' },
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    data: { page: 'about' },
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent),
    data: { page: 'services' },
  },
  {
    path: 'destinations',
    loadComponent: () => import('./pages/destinations/destinations.component').then(m => m.DestinationsComponent),
    data: { page: 'destinations' },
  },
  {
    path: 'gallery',
    loadComponent: () => import('./pages/gallery/gallery.component').then(m => m.GalleryPageComponent),
    data: { page: 'gallery' },
  },
  {
    path: 'faq',
    loadComponent: () => import('./pages/faq/faq.component').then(m => m.FaqPageComponent),
    data: { page: 'faq' },
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    data: { page: 'contact' },
  },
  {
    path: '404',
    loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent),
    data: { page: 'not-found' },
  },
  {
    path: '**',
    redirectTo: '404',
  },
];
