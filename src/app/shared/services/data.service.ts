import { Injectable } from '@angular/core';
import {
  Service, Destination, Testimonial, FAQItem, GalleryItem,
  TeamMember, TimelineEvent, CounterItem, NavLink, SocialLink, ContactInfo, PageMeta
} from '../models';

@Injectable({ providedIn: 'root' })
export class DataService {
  navLinks: NavLink[] = [
    { label: 'Accueil', route: '/', exact: true },
    { label: 'A propos', route: '/about' },
    { label: 'Services', route: '/services' },
    { label: 'Destinations', route: '/destinations' },
    { label: 'Galerie', route: '/gallery' },
    { label: 'FAQ', route: '/faq' },
    { label: 'Contact', route: '/contact' },
  ];

  socialLinks: SocialLink[] = [
    { name: 'Facebook', url: '#', icon: 'fa-brands fa-facebook-f' },
    { name: 'LinkedIn', url: '#', icon: 'fa-brands fa-linkedin-in' },
    { name: 'Twitter', url: '#', icon: 'fa-brands fa-x-twitter' },
    { name: 'Instagram', url: '#', icon: 'fa-brands fa-instagram' },
  ];

  contactInfo: ContactInfo = {
    phone: '+352 69 15 33 566',
    email: 'contact@kkmosel-logistics.lu',
    address: '38 Grand-Rue L-6630 Wasserbillig Luxemburg',
    hours: 'Lun - Ven: 8h00 - 18h00',
  };

  pageMeta: Record<string, PageMeta> = {
    home: {
      title: 'KKMOSEL LOGISTICS - Transport & Logistique Internationale',
      description: 'KKMOSEL LOGISTICS assure le transport rapide, securise et fiable entre le Luxembourg, l\'Allemagne, la France et la Belgique. Plus de 10 ans d\'experience.',
      keywords: 'transport, logistique, Luxembourg, Allemagne, France, Belgique, livraison, camion, entreposage',
    },
    about: {
      title: 'A propos - KKMOSEL LOGISTICS',
      description: 'Decouvrez l\'histoire, la mission et les valeurs de KKMOSEL LOGISTICS, leader du transport et de la logistique en Europe.',
      keywords: 'a propos, entreprise, transport, logistique, equipe, histoire, mission',
    },
    services: {
      title: 'Nos Services - KKMOSEL LOGISTICS',
      description: 'Transport routier, logistique, entreposage, distribution et livraison express. Des solutions completes pour vos besoins de transport.',
      keywords: 'services, transport routier, logistique, entreposage, distribution, livraison express',
    },
    destinations: {
      title: 'Nos Destinations - KKMOSEL LOGISTICS',
      description: 'Nous desservons le Luxembourg, l\'Allemagne, la France et la Belgique avec des services de transport sur mesure.',
      keywords: 'destinations, Luxembourg, Allemagne, France, Belgique, transport international',
    },
    gallery: {
      title: 'Galerie - KKMOSEL LOGISTICS',
      description: 'Decouvrez nos flottes de camions, entrepots et operations logistiques en images.',
      keywords: 'galerie, photos, camions, entrepots, logistique, flotte',
    },
    faq: {
      title: 'FAQ - KKMOSEL LOGISTICS',
      description: 'Trouvez les reponses a vos questions sur nos services de transport et logistique.',
      keywords: 'FAQ, questions, reponses, transport, logistique, livraison',
    },
    contact: {
      title: 'Contact - KKMOSEL LOGISTICS',
      description: 'Contactez KKMOSEL LOGISTICS pour un devis ou pour en savoir plus sur nos services de transport et logistique.',
      keywords: 'contact, devis, transport, logistique, Luxembourg, telephone, email',
    },
  };

  services: Service[] = [
    {
      id: 'transport-routier',
      title: 'Transport Routier',
      description: 'Solutions de transport routier fiables et efficaces pour tous types de marchandises. Notre flotte moderne garantit des livraisons ponctuelles et securisees.',
      icon: 'fa-solid fa-truck',
      features: ['Flotte de camions modernes', 'Chauffeurs certifies', 'Suivi des livraisons'],
      image: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg',
    },
    {
      id: 'transport-national',
      title: 'Transport National',
      description: 'Couverture complete du territoire national luxembourgeois avec des livraisons rapides et un suivi en temps reel de vos envois.',
      icon: 'fa-solid fa-road',
      features: ['Livraison 24-48h', 'Couverture nationale', 'Prix competitifs', 'Service client 24/7'],
      image: 'https://images.pexels.com/photos/977213/pexels-photo-977213.jpeg',
    },
    {
      id: 'transport-international',
      title: 'Transport International',
      description: 'Transport transfrontalier entre le Luxembourg, l\'Allemagne, la France et la Belgique avec des solutions adaptees a chaque destination.',
      icon: 'fa-solid fa-globe-europe',
      features: ['4 pays desservis', 'Douanes gerees', 'Documents prepares', 'Tarifs negocies'],
      image: 'https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg',
    },

    {
  id: 'transport-aog',
  title: 'Transport AOG',
  description: 'Solutions de transport AOG rapides et sécurisées pour l’industrie aéronautique. Nous assurons l’acheminement urgent de pièces, équipements et composants aéronautiques afin de minimiser les temps d’immobilisation des appareils.',
  icon: 'fa-solid fa-plane-circle-exclamation',
  features: [
    'Transport urgent 24/7',
    'Livraison de pièces aéronautiques',
    'Suivi en temps réel',
    'Prise en charge internationale',
    'Respect des délais critiques'
  ],
  image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg',
},
    {
      id: 'transport-express',
      title: 'Transport Express',
      description: 'Service de livraison express pour vos envois urgents. Livraison le jour meme ou le lendemain selon la destination.',
      icon: 'fa-solid fa-bolt',
      features: ['Livraison jour meme', 'Suivi en temps reel', 'Priorite garantie', 'Devis rapide'],
      image: 'https://images.pexels.com/photos/4246249/pexels-photo-4246249.jpeg',
    },
    {
      id: 'logistique',
      title: 'Logistique',
      description: 'Solutions logistiques completes pour optimiser votre chaine d\'approvisionnement et reduire vos couts de transport.',
      icon: 'fa-solid fa-boxes-stacked',
      features: ['Planification optimale', 'Gestion de stocks', 'Reporting detaille', 'Analyse de performance'],
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg',
    },
    {
      id: 'stockage',
      title: 'Entreposage',
      description: 'Espaces d\'entreposage securises et modernes pour le stockage de vos marchandises sur courte, moyenne et longue duree.',
      icon: 'fa-solid fa-warehouse',
      features: ['Entrepots securises', 'Climate control', 'Inventaire en ligne', 'Acces 24h/24'],
      image: 'https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg',
    },
    {
      id: 'distribution',
      title: 'Distribution',
      description: 'Reseau de distribution efficace pour livrer vos produits a vos clients et partenaires dans les meilleurs delais.',
      icon: 'fa-solid fa-network-wired',
      features: ['Reseau etendu', 'Gestion de retours', 'Conditionnement', 'Livraison groupee'],
      image: 'https://images.pexels.com/photos/6169638/pexels-photo-6169638.jpeg',
    },
  ];

  homeServices: Service[] = [
    {
      id: 'transport-routier',
      title: 'Transport Routier',
      description: 'Flotte de camions modernes pour le transport de vos marchandises en toute securite.',
      icon: 'fa-solid fa-truck',
      features: [],
      image: '',
    },
    {
      id: 'transport-marchandises',
      title: 'Transport de Marchandises',
      description: 'Solutions adaptees pour tous types de marchandises, palettisees ou en vrac.',
      icon: 'fa-solid fa-box-open',
      features: [],
      image: '',
    },
    {
      id: 'livraison-express',
      title: 'Livraison Express',
      description: 'Service rapide pour vos envois urgents avec livraison le jour meme ou le lendemain.',
      icon: 'fa-solid fa-bolt',
      features: [],
      image: '',
    },
    {
      id: 'logistique',
      title: 'Logistique',
      description: 'Optimisation de votre chaine logistique pour reduire vos couts et ameliorer vos delais.',
      icon: 'fa-solid fa-boxes-stacked',
      features: [],
      image: '',
    },
    {
      id: 'entreposage',
      title: 'Entreposage',
      description: 'Entrepots securises et modernes pour le stockage de vos marchandises.',
      icon: 'fa-solid fa-warehouse',
      features: [],
      image: '',
    },
    {
      id: 'distribution',
      title: 'Distribution',
      description: 'Reseau de distribution efficace pour atteindre vos clients partout en Europe.',
      icon: 'fa-solid fa-network-wired',
      features: [],
      image: '',
    },
  ];

  destinations: Destination[] = [
    {
      id: 'luxembourg',
      country: 'Luxembourg',
      flag: '🇱🇺',
      code: 'LU',
      description: 'Notre siege social et centre de distribution principal. Desserte complete du Grand-Duche avec des solutions adaptees au tissu economique local.',
      services: ['Transport national', 'Distribution urbaine', 'Entreposage', 'Logistique'],
      averageTime: '24h',
      image: 'https://images.pexels.com/photos/208733/pexels-photo-208733.jpeg',
    },
    {
      id: 'allemagne',
      country: 'Allemagne',
      flag: '🇩🇪',
      code: 'DE',
      description: 'Connexion directe avec les principales villes allemandes. Axes privilegies vers le Rhin-Ruhr, Berlin et la Baviere.',
      services: ['Transport international', 'Fret ferroviaire', 'Logistique', 'Distribution'],
      averageTime: '24-48h',
      image: 'https://images.pexels.com/photos/196666/pexels-photo-196666.jpeg',
    },
    {
      id: 'france',
      country: 'France',
      flag: '🇫🇷',
      code: 'FR',
      description: 'Reseau etendu couvrant la France metropolitaine. Desserte des grandes metropoles et des zones industrielles.',
      services: ['Transport international', 'Express France', 'Logistique', 'Entreposage'],
      averageTime: '24-48h',
      image: 'https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      id: 'belgique',
      country: 'Belgique',
      flag: '🇧🇪',
      code: 'BE',
      description: 'Proximite geographique permettant des livraisons ultra-rapides. Connexion ideale avec les ports d\'Anvers et Zeebruges.',
      services: ['Transport international', 'Express Belgique', 'Distribution', 'Logistique'],
      averageTime: '12-24h',
      image: 'https://images.pexels.com/photos/374600/pexels-photo-374600.jpeg',
    },
  ];

  testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Jean-Pierre Muller',
      role: 'Directeur des Operations',
      company: 'SteelTech Luxembourg',
      text: 'KKMOSEL LOGISTICS a transforme notre chaine logistique. Leurs livraisons sont toujours ponctuelles et leurs equipes professionnelles. Un partenaire de confiance depuis 5 ans.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    },
    {
      id: '2',
      name: 'Sophie Weber',
      role: 'Responsable Achats',
      company: 'EuroPharma SA',
      text: 'La fiabilite et la reactivite de KKMOSEL sont exceptionnelles. Nos produits pharmaceutiques sont transportes dans des conditions optimales avec un suivi parfait.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    },
    {
      id: '3',
      name: 'Markus Schneider',
      role: 'CEO',
      company: 'BauTech GmbH',
      text: 'Excellent service de transport entre le Luxembourg et l\'Allemagne. Les camions sont modernes, les chauffeurs qualifies et les tarifs tres competitifs. Hautement recommande.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg',
    },
  ];

  faqItems: FAQItem[] = [
    {
      id: '1',
      question: 'Quels pays desservez-vous ?',
      answer: 'Nous desservons principalement le Luxembourg, l\'Allemagne, la France et la Belgique. Notre reseau permet des livraisons rapides et efficaces dans ces quatre pays, avec des connexions vers d\'autres destinations europeennes sur demande.',
    },
    {
      id: '2',
      question: 'Quels types de marchandises transportez-vous ?',
      answer: 'Nous transportons une grande variete de marchandises : produits palettises, marchandises en vrac, colis, materiaux de construction, produits pharmaceutiques, et bien plus. Contactez-nous pour discuter de vos besoins specifiques.',
    },
    {
      id: '3',
      question: 'Quels sont vos delais de livraison ?',
      answer: 'Nos delais varient selon la destination : Luxembourg 24h, Belgique 12-24h, Allemagne et France 24-48h. Nous proposons egalement un service express pour les livraisons urgentes le jour meme.',
    },
    {
      id: '4',
      question: 'Comment obtenir un devis ?',
      answer: 'Vous pouvez obtenir un devis gratuit en remplissant le formulaire de contact sur notre site, en nous appelant au +352 27 99 99 99 ou en envoyant un email a contact@kkmosel-logistics.lu. Nous repondons sous 24h.',
    },
    {
      id: '5',
      question: 'Proposez-vous un service de tracking ?',
      answer: 'Oui, tous nos envois sont equipes de GPS en temps reel. Vous pouvez suivre votre marchandise a tout moment via notre plateforme de suivi. Un lien de tracking est envoye automatiquement a chaque expedition.',
    },
    {
      id: '6',
      question: 'Quelles sont vos garanties d\'assurance ?',
      answer: 'Toutes les marchandises transportees sont couvertes par notre assurance tous risques. Nous proposons egalement des options d\'assurance complementaires pour les valeurs elevees.',
    },
    {
      id: '7',
      question: 'Acceptez-vous les paiements a la livraison ?',
      answer: 'Oui, nous proposons des solutions de paiement flexibles incluant le paiement a la livraison pour nos clients reguliers. Les conditions de paiement sont negociables selon votre contrat.',
    },
    {
      id: '8',
      question: 'Disposez-vous d\'entrepots de stockage ?',
      answer: 'Oui, nous disposons d\'entrepots modernes et securises au Luxembourg. Nous offrons du stockage court, moyen et long terme avec gestion d\'inventaire en temps reel.',
    },
    {
      id: '9',
      question: 'Comment sont formes vos chauffeurs ?',
      answer: 'Tous nos chauffeurs sont certifies et beneficient d\'une formation continue reguliere. Ils sont formes a la securite routiere, au manutention des marchandises et au service client.',
    },
    {
      id: '10',
      question: 'Proposez-vous des services de groupage ?',
      answer: 'Oui, nous proposons des services de groupage (LTL - Less Than Truckload) pour optimiser les couts de transport. Cette solution permet de partager les frais de transport entre plusieurs clients.',
    },
    {
      id: '11',
      question: 'Quelle est votre politique en cas de retard ?',
      answer: 'Nous nous engageons sur des delais de livraison. En cas de retard imputable a notre service, des compensations sont prevues selon les termes de votre contrat. Notre taux de ponctualite est de 98%.',
    },
    {
      id: '12',
      question: 'Transportez-vous des marchandises dangereuses ?',
      answer: 'Oui, nous sommes certifies pour le transport de marchandises dangereuses (ADR). Nos chauffeurs sont formes et nos vehicules equipes conformement aux reglementations en vigueur.',
    },
    {
      id: '13',
      question: 'Quels sont vos horaires d\'ouverture ?',
      answer: 'Notre siege est ouvert du lundi au vendredi de 8h00 a 18h00. Cependant, nos services de transport et d\'entreposage fonctionnent 24h/24, 7j/7 pour assurer vos livraisons urgentes.',
    },
    {
      id: '14',
      question: 'Comment puis-je devenir un client regulier ?',
      answer: 'Contactez notre equipe commerciale pour mettre en place un contrat cadre. Nos clients reguliers beneficient de tarifs preferentiels, d\'un account manager dedie et d\'un service prioritaire.',
    },
    {
      id: '15',
      question: 'Proposez-vous des solutions e-commerce ?',
      answer: 'Oui, nous proposons des solutions logistiques completes pour les e-commercants : preparation de commandes, stockage, livraison au dernier kilometre et gestion des retours.',
    },
  ];

  galleryItems: GalleryItem[] = [
    { id: '1', category: 'camions', title: 'Flotte moderne', image: 'assets/images/hero.PNG' },
    { id: '2', category: 'camions', title: 'Camion sur autoroute', image: 'https://images.pexels.com/photos/977213/pexels-photo-977213.jpeg' },
    { id: '3', category: 'camions', title: 'Transport routier', image: 'assets/images/IMG_3519.PNG' },
    { id: '4', category: 'camions', title: 'Camion de nuit', image: 'assets/images/IMG_3522.PNG' },
    { id: '5', category: 'entrepots', title: 'Entrepot principal', image: 'https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg' },
    { id: '6', category: 'entrepots', title: 'Stockage organise', image: 'assets/images/IMG_3523.PNG' },
    { id: '7', category: 'entrepots', title: 'Logistique interieure', image: 'https://images.pexels.com/photos/6169638/pexels-photo-6169638.jpeg' },
    { id: '8', category: 'entrepots', title: 'Chariot elevateur', image: 'assets/images/IMG_3524.PNG' },
    { id: '9', category: 'chargement', title: 'Chargement de palettes', image: 'assets/images/IMG_3525.PNG' },
    { id: '10', category: 'chargement', title: 'Chargement de colis', image: 'assets/images/IMG_3527.PNG' },
    { id: '11', category: 'livraison', title: 'Livraison en ville', image: 'assets/images/IMG_3528.PNG' },
    { id: '12', category: 'livraison', title: 'Livraison express', image: 'https://images.pexels.com/photos/4246198/pexels-photo-4246198.jpeg' },
  ];

  teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Marc Koob',
      role: 'Fondateur & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      bio: 'Plus de 20 ans d\'experience dans le transport et la logistique. Visionnaire et passionne par l\'innovation.',
    },
    {
      id: '2',
      name: 'Claire Weber',
      role: 'Directrice Operations',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      bio: 'Experte en optimisation logistique et gestion des flux. Elle supervise toutes les operations quotidiennes.',
    },
    {
      id: '3',
      name: 'Thomas Muller',
      role: 'Responsable Flotte',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg',
      bio: 'Il garantit la maintenance et la performance de notre flotte de plus de 50 vehicules modernes.',
    },
    {
      id: '4',
      name: 'Anna Schmidt',
      role: 'Responsable Clientele',
      image: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg',
      bio: 'A l\'ecoute des besoins clients, elle developpe des solutions sur mesure pour chaque partenaire.',
    },
  ];

  timelineEvents: TimelineEvent[] = [
    {
      year: '2014',
      title: 'Fondation de KKMOSEL',
      description: 'Marc Koob fonde KKMOSEL LOGISTICS avec une flotte de 3 camions au Luxembourg.',
    },
    {
      year: '2016',
      title: 'Expansion en Allemagne',
      description: 'Ouverture de notre premiere agence internationale en Allemagne, a Trier.',
    },
    {
      year: '2018',
      title: 'Flotte renouvelee',
      description: 'Investissement de 5M EUR dans une flotte de camions euro 6 ',
    },
    {
      year: '2020',
      title: 'Certification ISO 9001',
      description: 'Obtention de la certification ISO 9001 pour la qualite de nos services logistiques.',
    },
    {
      year: '2022',
      title: 'Nouvel entrepot',
      description: 'Inauguration d\'un entrepot de 10 000 m2 avec gestion d\'inventaire en temps reel.',
    },
    {
      year: '2024',
      title: 'Leader regional',
      description: 'KKMOSEL devient leader du transport transfrontalier Luxembourg-Allemagne-France-Belgique.',
    },
  ];

  counterItems: CounterItem[] = [
    { value: 10, suffix: '+', label: 'Annees d\'experience', icon: 'fa-solid fa-calendar-check' },
    { value: 500, suffix: '+', label: 'Clients satisfaits', icon: 'fa-solid fa-users' },
    { value: 2500, suffix: '+', label: 'Livraisons realisees', icon: 'fa-solid fa-truck-fast' },
    { value: 98, suffix: '%', label: 'Taux de satisfaction', icon: 'fa-solid fa-star' },
  ];

  values = [
    {
      title: 'Fiabilite',
      description: 'Nous honorons nos engagements. Chaque livraison est une promesse tenue.',
      icon: 'fa-solid fa-shield-halved',
    },
    {
      title: 'Innovation',
      description: 'Nous investissons continuellement dans les technologies pour ameliorer nos services.',
      icon: 'fa-solid fa-lightbulb',
    },
    {
      title: 'Durabilite',
      description: 'Notre flotte eco-responsable reduit l\'impact environnemental de chaque transport.',
      icon: 'fa-solid fa-leaf',
    },
    {
      title: 'Proximite',
      description: 'Un accompagnement personnalise pour chaque client, de la petite PME au grand groupe.',
      icon: 'fa-solid fa-handshake',
    },
  ];

  whyChooseUs = [
    // {
    //   title: 'Experience',
    //   description: 'Plus de 10 ans d\'experience dans le transport international avec une expertise reconnue.',
    //   icon: 'fa-solid fa-medal',
    // },
    {
      title: 'Couverture',
      description: 'Reseau etendu couvrant 4 pays europeens avec des connexions vers toute l\'Europe.',
      icon: 'fa-solid fa-map-location-dot',
    },
    // {
    //   title: 'Technologie',
    //   description: 'Flotte equipee de GPS, suivi en temps reel et reporting detaille pour vos envois.',
    //   icon: 'fa-solid fa-microchip',
    // },
    {
      title: 'Prix',
      description: 'Tarifs competitifs et transparents, sans frais caches. Devis gratuit sous 24h.',
      icon: 'fa-solid fa-tag',
    },
  ];

  getPageMeta(page: string): PageMeta {
    return this.pageMeta[page] || this.pageMeta['home'];
  }
}
