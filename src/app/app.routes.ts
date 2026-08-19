import { Routes } from '@angular/router';

const defaultImage =
  'https://kkmoselexpress.lu/assets/images/kkmosel-express-transport.jpg';

export const routes: Routes = [

  /**
   * =========================
   * ACCUEIL
   * =========================
   */
  {
    path: '',

    loadComponent: () =>
      import('./pages/home/home.component')
        .then(m => m.HomeComponent),

    data: {
      page: 'home',

      meta: {
        title:
          'Transport & Logistique au Luxembourg | KKMOSEL EXPRESS',

        description:
          'KKMOSEL EXPRESS est une entreprise de transport et logistique au Luxembourg. Transport de marchandises vers la France, la Belgique, l’Allemagne et l’Europe.',

        keywords:
          'transport Luxembourg, logistique Luxembourg, transport marchandises Luxembourg, transport international Luxembourg, livraison Luxembourg',

        url: '/',

        image: defaultImage
      }
    }
  },


  /**
   * =========================
   * À PROPOS
   * =========================
   */
  {
    path: 'about',

    loadComponent: () =>
      import('./pages/about/about.component')
        .then(m => m.AboutComponent),

    data: {
      page: 'about',

      meta: {
        title:
          'À propos de KKMOSEL EXPRESS | Transport au Luxembourg',

        description:
          'Découvrez KKMOSEL EXPRESS, entreprise spécialisée dans le transport et la logistique au Luxembourg et les échanges de marchandises en Europe.',

        keywords:
          'KKMOSEL EXPRESS, entreprise transport Luxembourg, société logistique Luxembourg, transporteur Luxembourg',

        url: '/about',

        image: defaultImage
      }
    }
  },


  /**
   * =========================
   * SERVICES
   * =========================
   */
  {
    path: 'services',

    loadComponent: () =>
      import('./pages/services/services.component')
        .then(m => m.ServicesComponent),

    data: {
      page: 'services',

      meta: {
        title:
          'Services de transport et logistique | KKMOSEL EXPRESS',

        description:
          'Découvrez les services de transport et de logistique de KKMOSEL EXPRESS au Luxembourg et vers la France, la Belgique, l’Allemagne et l’Europe.',

        keywords:
          'services transport Luxembourg, transport marchandises Luxembourg, logistique Luxembourg, transport international, livraison Luxembourg',

        url: '/services',

        image: defaultImage
      }
    }
  },


  /**
   * =========================
   * DESTINATIONS
   * =========================
   */
  {
    path: 'destinations',

    loadComponent: () =>
      import('./pages/destinations/destinations.component')
        .then(m => m.DestinationsComponent),

    data: {
      page: 'destinations',

      meta: {
        title:
          'Destinations de transport en Europe | KKMOSEL EXPRESS',

        description:
          'Découvrez les principales destinations desservies par KKMOSEL EXPRESS depuis le Luxembourg vers la France, la Belgique, l’Allemagne et l’Europe.',

        keywords:
          'transport Luxembourg Allemagne, transport Luxembourg France, transport Luxembourg Belgique, transport Europe, destinations transport',

        url: '/destinations',

        image: defaultImage
      }
    }
  },


  /**
   * =========================
   * GALERIE
   * =========================
   */
  {
    path: 'gallery',

    loadComponent: () =>
      import('./pages/gallery/gallery.component')
        .then(m => m.GalleryPageComponent),

    data: {
      page: 'gallery',

      meta: {
        title:
          'Galerie photos | KKMOSEL EXPRESS',

        description:
          'Découvrez en images les activités, véhicules et opérations de transport et de logistique de KKMOSEL EXPRESS au Luxembourg et en Europe.',

        keywords:
          'KKMOSEL EXPRESS photos, transport Luxembourg photos, camion transport Luxembourg, logistique Luxembourg',

        url: '/gallery',

        image: defaultImage
      }
    }
  },


  /**
   * =========================
   * FAQ
   * =========================
   */
  {
    path: 'faq',

    loadComponent: () =>
      import('./pages/faq/faq.component')
        .then(m => m.FaqPageComponent),

    data: {
      page: 'faq',

      meta: {
        title:
          'FAQ Transport et Logistique | KKMOSEL EXPRESS',

        description:
          'Retrouvez les réponses aux questions fréquentes sur les services de transport, la logistique, les destinations et les solutions proposées par KKMOSEL EXPRESS.',

        keywords:
          'FAQ transport Luxembourg, questions transport marchandises, livraison Luxembourg, logistique Luxembourg',

        url: '/faq',

        image: defaultImage
      }
    }
  },


  /**
   * =========================
   * CONTACT
   * =========================
   */
  {
    path: 'contact',

    loadComponent: () =>
      import('./pages/contact/contact.component')
        .then(m => m.ContactComponent),

    data: {
      page: 'contact',

      meta: {
        title:
          'Contact et Demande de Devis | KKMOSEL EXPRESS',

        description:
          'Contactez KKMOSEL EXPRESS pour vos besoins de transport et de logistique au Luxembourg et en Europe ou pour obtenir un devis personnalisé.',

        keywords:
          'contact transport Luxembourg, devis transport Luxembourg, demande devis logistique, transporteur Luxembourg',

        url: '/contact',

        image: defaultImage
      }
    }
  },


  /**
   * =========================
   * PAGE 404
   * =========================
   */
  {
    path: '404',

    loadComponent: () =>
      import('./pages/not-found/not-found.component')
        .then(m => m.NotFoundComponent),

    data: {
      page: 'not-found',

      meta: {
        title:
          'Page introuvable | KKMOSEL EXPRESS',

        description:
          'La page demandée est introuvable sur le site KKMOSEL EXPRESS.',

        keywords: '',

        url: '/404',

        noindex: true
      }
    }
  },


  /**
   * =========================
   * ROUTE INCONNUE
   * =========================
   */
  {
    path: '**',
    redirectTo: '404'
  }

];