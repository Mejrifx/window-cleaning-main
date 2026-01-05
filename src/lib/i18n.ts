export type Language = 'en' | 'nl';

export interface Translations {
  // Common
  businessName: string;
  since: string;
  
  // Hero
  heroSubtitle: string;
  heroCta: string;
  
  // Navbar
  navServices: string;
  navAbout: string;
  navContact: string;
  navGetQuote: string;
  
  // Services
  servicesTitle: string;
  servicesSubtitle: string;
  residentialTitle: string;
  residentialDesc: string;
  commercialTitle: string;
  commercialDesc: string;
  highRiseTitle: string;
  highRiseDesc: string;
  
  // Why Choose Us
  whyChooseUsTitle: string;
  whyChooseUsSubtitle: string;
  
  // Reviews
  reviewsTitle: string;
  
  // Gallery
  galleryTitle: string;
  gallerySubtitle: string;
  
  // Before/After
  beforeAfterTitle: string;
  beforeAfterSubtitle: string;
  before: string;
  after: string;
  
  // How It Works
  howItWorksTitle: string;
  howItWorksSubtitle: string;
  
  // About
  aboutTitle: string;
  aboutSubtitle: string;
  aboutContent1: string;
  aboutContent2: string;
  aboutContent3: string;
  aboutTeam: string;
  
  // CTA
  ctaTitle: string;
  ctaSubtitle: string;
  ctaCall: string;
  ctaWhatsApp: string;
  ctaGetQuote: string;
  
  // Contact
  contactTitle: string;
  contactSubtitle: string;
  contactInfo: string;
  contactPhone: string;
  contactEmail: string;
  contactAreas: string;
  contactResponse: string;
  contactWhatsAppTitle: string;
  contactWhatsAppDesc: string;
  contactWhatsAppButton: string;
  
  // Footer
  footerDescription: string;
  footerInsured: string;
  footerServiceAreas: string;
  footerContact: string;
  footerFollow: string;
  footerServing: string;
  footerCopyright: string;
  footerPrivacy: string;
  footerTerms: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    businessName: 'VERSTRAETE CLEANING',
    since: 'Since 2013',
    
    heroSubtitle: 'Premium Window Care',
    heroCta: 'Discover Excellence',
    
    navServices: 'Services',
    navAbout: 'About',
    navContact: 'Contact',
    navGetQuote: 'Get Free Quote',
    
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Professional window cleaning tailored to your needs',
    residentialTitle: 'Residential',
    residentialDesc: 'Transform your home with crystal-clear windows. We handle everything from single-family homes to luxury estates.',
    commercialTitle: 'Commercial',
    commercialDesc: 'Keep your business looking professional. Regular maintenance plans available for offices, retail spaces, and more.',
    highRiseTitle: 'High-Rise',
    highRiseDesc: 'Specialized equipment and trained professionals for buildings of any height. Safety-certified and fully insured.',
    
    whyChooseUsTitle: 'Why Choose Us',
    whyChooseUsSubtitle: 'The Verstraete Cleaning Difference',
    
    reviewsTitle: 'What Our Clients Say',
    
    galleryTitle: 'Our Work',
    gallerySubtitle: 'See the difference professional care makes',
    
    beforeAfterTitle: 'Witness The Difference',
    beforeAfterSubtitle: 'Drag to reveal the stunning transformation. Watch as grime dissolves into crystal clarity.',
    before: 'Before',
    after: 'After',
    
    howItWorksTitle: 'How It Works',
    howItWorksSubtitle: 'Simple, transparent, professional',
    
    aboutTitle: 'Meet Verstraete Cleaning',
    aboutSubtitle: 'About Us',
    aboutContent1: 'Founded in 2013, Verstraete Cleaning began with a simple belief: every window deserves to be crystal clear, and every client deserves exceptional service.',
    aboutContent2: "We're a locally-owned team of trained professionals who take genuine pride in transforming your home or business. With over 500 satisfied clients across the region, we've built our reputation on reliability, attention to detail, and respect for your property.",
    aboutContent3: 'Our values are simple: show up on time, do exceptional work, and leave every client smiling.',
    aboutTeam: '— The Verstraete Cleaning Team',
    
    ctaTitle: 'Ready for Crystal-Clear Windows?',
    ctaSubtitle: 'Get your free, no-obligation quote today. We respond within hours.',
    ctaCall: 'Call Now',
    ctaWhatsApp: 'WhatsApp Us',
    ctaGetQuote: 'Get Free Quote',
    
    contactTitle: 'Request Your Free Quote',
    contactSubtitle: 'Get In Touch',
    contactInfo: 'Contact Information',
    contactPhone: 'Phone',
    contactEmail: 'Email',
    contactAreas: 'Service Areas',
    contactResponse: '⚡ We respond to all inquiries within 2 hours during business hours',
    contactWhatsAppTitle: 'Get Your Free Quote',
    contactWhatsAppDesc: 'Contact us via WhatsApp for instant response and personalized service',
    contactWhatsAppButton: 'Message Us on WhatsApp',
    
    footerDescription: 'Premium window care for discerning clients. Crystal-clear results, every time.',
    footerInsured: 'Fully Insured',
    footerServiceAreas: 'Service Areas',
    footerContact: 'Contact',
    footerFollow: 'Follow Us',
    footerServing: 'Serving the Greater Metro Area',
    footerCopyright: `© ${new Date().getFullYear()} Verstraete Cleaning Premium Window Care. All rights reserved.`,
    footerPrivacy: 'Privacy Policy',
    footerTerms: 'Terms of Service',
  },
  nl: {
    businessName: 'VERSTRAETE CLEANING',
    since: 'Sinds 2013',
    
    heroSubtitle: 'Premium Ramenreiniging',
    heroCta: 'Ontdek Uitmuntendheid',
    
    navServices: 'Diensten',
    navAbout: 'Over Ons',
    navContact: 'Contact',
    navGetQuote: 'Gratis Offerte',
    
    servicesTitle: 'Onze Diensten',
    servicesSubtitle: 'Professionele ramenreiniging op maat van uw behoeften',
    residentialTitle: 'Particulier',
    residentialDesc: 'Transformeer uw huis met kristalheldere ramen. Wij verzorgen alles van eengezinswoningen tot luxe landhuizen.',
    commercialTitle: 'Zakelijk',
    commercialDesc: 'Houd uw bedrijf er professioneel uit. Regelmatige onderhoudsplannen beschikbaar voor kantoren, winkelruimtes en meer.',
    highRiseTitle: 'Hoogbouw',
    highRiseDesc: 'Gespecialiseerde apparatuur en opgeleide professionals voor gebouwen van elke hoogte. Gecertificeerd en volledig verzekerd.',
    
    whyChooseUsTitle: 'Waarom Kiezen Voor Ons',
    whyChooseUsSubtitle: 'Het Verstraete Cleaning Verschil',
    
    reviewsTitle: 'Wat Onze Klanten Zeggen',
    
    galleryTitle: 'Ons Werk',
    gallerySubtitle: 'Zie het verschil dat professionele zorg maakt',
    
    beforeAfterTitle: 'Zie Het Verschil',
    beforeAfterSubtitle: 'Sleep om de verbluffende transformatie te onthullen. Kijk hoe vuil oplost in kristalheldere helderheid.',
    before: 'Voor',
    after: 'Na',
    
    howItWorksTitle: 'Hoe Het Werkt',
    howItWorksSubtitle: 'Eenvoudig, transparant, professioneel',
    
    aboutTitle: 'Maak Kennis Met Verstraete Cleaning',
    aboutSubtitle: 'Over Ons',
    aboutContent1: 'Opgericht in 2013, Verstraete Cleaning begon met een simpele overtuiging: elk raam verdient kristalhelder te zijn, en elke klant verdient uitzonderlijke service.',
    aboutContent2: 'Wij zijn een lokaal team van opgeleide professionals die oprecht trots zijn op het transformeren van uw huis of bedrijf. Met meer dan 500 tevreden klanten in de regio, hebben we onze reputatie opgebouwd op betrouwbaarheid, aandacht voor detail en respect voor uw eigendom.',
    aboutContent3: 'Onze waarden zijn eenvoudig: op tijd komen, uitzonderlijk werk leveren en elke klant met een glimlach achterlaten.',
    aboutTeam: '— Het Verstraete Cleaning Team',
    
    ctaTitle: 'Klaar Voor Kristalheldere Ramen?',
    ctaSubtitle: 'Vraag vandaag nog uw gratis, vrijblijvende offerte aan. Wij reageren binnen enkele uren.',
    ctaCall: 'Bel Nu',
    ctaWhatsApp: 'WhatsApp Ons',
    ctaGetQuote: 'Gratis Offerte',
    
    contactTitle: 'Vraag Uw Gratis Offerte Aan',
    contactSubtitle: 'Neem Contact Op',
    contactInfo: 'Contactgegevens',
    contactPhone: 'Telefoon',
    contactEmail: 'E-mail',
    contactAreas: 'Servicegebieden',
    contactResponse: '⚡ Wij reageren op alle vragen binnen 2 uur tijdens kantooruren',
    contactWhatsAppTitle: 'Vraag Uw Gratis Offerte Aan',
    contactWhatsAppDesc: 'Neem contact met ons op via WhatsApp voor directe reactie en persoonlijke service',
    contactWhatsAppButton: 'Stuur Ons Een WhatsApp Bericht',
    
    footerDescription: 'Premium ramenreiniging voor veeleisende klanten. Kristalheldere resultaten, elke keer.',
    footerInsured: 'Volledig Verzekerd',
    footerServiceAreas: 'Servicegebieden',
    footerContact: 'Contact',
    footerFollow: 'Volg Ons',
    footerServing: 'Bedienen van de Grootstedelijke Regio',
    footerCopyright: `© ${new Date().getFullYear()} Verstraete Cleaning Premium Ramenreiniging. Alle rechten voorbehouden.`,
    footerPrivacy: 'Privacybeleid',
    footerTerms: 'Servicevoorwaarden',
  },
};

