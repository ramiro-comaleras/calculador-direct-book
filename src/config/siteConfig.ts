// ============================================================
// SITE CONFIG - Direct-Book Bocas
// ============================================================

export interface ServiceItem {
  icon: 'divorce' | 'custody' | 'alimony' | 'mediation' | 'domestic-violence' | 'separation' | 'contracts' | 'corporate' | 'real-estate' | 'criminal' | 'immigration' | 'labor' | 'custom'
  title: string
  slug: string
  shortDescription: string
  fullDescription: string
}

export interface TeamMember {
  name: string
  title: string
  bio: string
  specialties: string[]
  imageUrl?: string
  bookingSlug?: string
}

export interface Testimonial {
  name: string
  quote: string
  rating: number
  caseType?: string
}

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export interface SiteConfig {
  firmName: string;
  firmSlogan: string;
  firmDescription: string;
  founderName: string;
  founderTitle: string;
  founderBio: string;
  yearsExperience: number;
  yearFounded: number;

  contact: {
    phone: string;
    phoneDisplay: string;
    email: string;
    address: string;
    city: string;
    country: string;
    googleMapsEmbedUrl: string;
    whatsappNumber?: string;
    officeHours: string;
  };

  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };

  navigation: {
    items: NavItem[];
  };

  hero: {
    headline: string;
    subheadline: string;
    ctaText: string;
    ctaHref: string;
    backgroundImageUrl?: string;
  };

  values: Array<{
    icon: 'respect' | 'quality' | 'team' | 'experience' | 'confidential' | 'results';
    title: string;
    description: string;
  }>;

  services: ServiceItem[];

  tabs: Array<{
    title: string;
    content: string;
  }>;

  team: TeamMember[];

  testimonials: Testimonial[];

  booking: {
    enabled: boolean;
    ctaText: string;
    mainLawyerSlug?: string;
  };

  seo: {
    siteTitle: string;
    titleTemplate: string;
    defaultDescription: string;
    locale: string;
    ogImageUrl?: string;
  };

  legal: {
    privacyLastUpdated: string;
    termsLastUpdated: string;
  };

  theme?: {
    primaryColor?: string;
    accentColor?: string;
  };
}

export const siteConfig: SiteConfig = {
  firmName: 'Direct-Book Bocas',
  firmSlogan: 'Recupera tus comisiones, controla tu hotel',
  firmDescription: 'Plataforma de reservas directas para hoteles en Bocas del Toro. Elimina intermediarios y aumenta tu margen de beneficio.',
  founderName: 'SaaS Factory',
  founderTitle: 'Desarrollo de Software',
  founderBio: 'Especialistas en soluciones tecnológicas para el sector hotelero en Panamá.',
  yearsExperience: 5,
  yearFounded: 2024,

  contact: {
    phone: '+50769XXXXXX',
    phoneDisplay: '+507 6XXX-XXXX',
    email: 'hola@directbookbocas.com',
    address: 'Bocas del Toro, Panamá',
    city: 'Bocas del Toro',
    country: 'Panamá',
    googleMapsEmbedUrl: '',
    whatsappNumber: '+50769XXXXXX',
    officeHours: 'Lunes a Viernes, 9:00 a.m. a 6:00 p.m.',
  },

  social: {
    instagram: 'https://instagram.com/directbookbocas',
  },

  navigation: {
    items: [
      { label: 'Inicio', href: '/' },
      { label: 'Calculadora', href: '/calculadora' },
      { label: 'Demo', href: '/demo' },
      { label: 'Contacto', href: '/contacto' },
    ],
  },

  hero: {
    headline: 'Deja de regalar tu dinero a Booking',
    subheadline: 'Implementamos el sistema de reservas directas que se paga solo. Recupera hasta el 18% de comisiones por cada reserva.',
    ctaText: 'Ver Calculadora',
    ctaHref: '/calculadora',
  },

  values: [
    {
      icon: 'results',
      title: 'Más Rentabilidad',
      description: 'Cada reserva directa es dinero que se queda en tu bolsillo, no en el de los intermediarios.',
    },
    {
      icon: 'quality',
      title: 'IA Integrada',
      description: 'Chat inteligente que atiende a tus huéspedes 24/7 y automatiza la venta de tours.',
    },
    {
      icon: 'experience',
      title: 'Control Total',
      description: 'Tú gestionas la comunicación, los pagos y la relación con el cliente desde el primer momento.',
    },
  ],

  services: [
    {
      icon: 'custom',
      title: 'Motor de Reservas',
      slug: 'motor-reservas',
      shortDescription: 'Un motor de reservas moderno y optimizado para móvil.',
      fullDescription: 'Nuestro motor de reservas está diseñado para convertir visitantes en huéspedes sin fricciones.',
    },
    {
      icon: 'custom',
      title: 'IA Concierge',
      slug: 'ia-concierge',
      shortDescription: 'Chat inteligente para atención al cliente y ventas.',
      fullDescription: 'Recepción.ia atiende dudas, recomienda tours y gestiona reservas automáticamente.',
    },
  ],

  tabs: [
    {
      title: 'Reservas Directas',
      content: 'Elimina las comisiones de terceros y toma el control de tus ingresos.',
    },
    {
      title: 'Automatización con IA',
      content: 'Ahorra tiempo a tu equipo con un recepcionista virtual que nunca descansa.',
    },
  ],

  team: [],

  testimonials: [
    {
      name: 'La Coralina',
      quote: 'Desde que implementamos Direct-Book, hemos reducido nuestras comisiones a OTAs en un 40%.',
      rating: 5,
      caseType: 'Hotel Boutique',
    },
  ],

  booking: {
    enabled: true,
    ctaText: 'Agendar Demo Gratis',
  },

  seo: {
    siteTitle: 'Direct-Book Bocas | Reservas Directas sin Comisiones',
    titleTemplate: '%s | Direct-Book Bocas',
    defaultDescription: 'Calcula cuánto dinero estás perdiendo en comisiones y empieza a reservar directo.',
    locale: 'es_PA',
  },

  legal: {
    privacyLastUpdated: '2026-04-15',
    termsLastUpdated: '2026-04-15',
  },
}
