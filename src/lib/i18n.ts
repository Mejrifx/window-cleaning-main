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
  navWhyUs: string;
  navReviews: string;
  navGallery: string;
  navProcess: string;
  navAbout: string;
  navContact: string;
  navGetQuote: string;
  
  // Services
  servicesTitle: string;
  servicesSubtitle: string;
  servicesHeader: string;
  residentialTitle: string;
  residentialSubtitle: string;
  residentialDesc: string;
  commercialTitle: string;
  commercialSubtitle: string;
  commercialDesc: string;
  highRiseTitle: string;
  highRiseSubtitle: string;
  highRiseDesc: string;
  
  // Why Choose Us
  whyChooseUsTitle: string;
  whyChooseUsSubtitle: string;
  featureReliable: string;
  featureReliableDesc: string;
  featureInsured: string;
  featureInsuredDesc: string;
  featureEco: string;
  featureEcoDesc: string;
  featureLocal: string;
  featureLocalDesc: string;
  featureSatisfaction: string;
  featureSatisfactionDesc: string;
  
  // Reviews
  reviewsTitle: string;
  reviewsSubtitle: string;
  reviewsRating: string;
  reviewsViewAll: string;
  
  // Gallery
  galleryTitle: string;
  gallerySubtitle: string;
  galleryDescription: string;
  galleryTapToToggle: string;
  
  // Before/After
  beforeAfterTitle: string;
  beforeAfterSubtitle: string;
  before: string;
  after: string;
  
  // How It Works
  howItWorksTitle: string;
  howItWorksSubtitle: string;
  howItWorksHeader: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
  step4Title: string;
  step4Desc: string;
  
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
    
    heroSubtitle: 'For all your cleaning needs',
    heroCta: 'Click here to contact',
    
    navServices: 'Services',
    navWhyUs: 'Why Us',
    navReviews: 'Reviews',
    navGallery: 'Gallery',
    navProcess: 'Process',
    navAbout: 'About',
    navContact: 'Contact',
    navGetQuote: 'Get Free Quote',
    
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Professional window cleaning tailored to your needs',
    servicesHeader: 'Precision Crafted Care',
    residentialTitle: 'Private estate & homes',
    residentialSubtitle: 'Private Estates & Homes',
    residentialDesc: 'Transform your home with crystal-clear windows. We handle everything from single-family homes to luxury estates.',
    commercialTitle: 'Commercial',
    commercialSubtitle: 'Office & Retail Spaces',
    commercialDesc: 'Keep your business looking professional. Regular maintenance plans available for offices, retail spaces, and more.',
    highRiseTitle: 'High-Rise',
    highRiseSubtitle: 'Architectural Monuments',
    highRiseDesc: 'Specialized equipment and trained professionals for buildings of any height. Safety-certified and fully insured.',
    
    whyChooseUsTitle: 'Why Choose Us',
    whyChooseUsSubtitle: 'The Verstraete Cleaning Difference',
    featureReliable: 'Window Cleaning',
    featureReliableDesc: 'Professional window cleaning both inside and outside.',
    featureInsured: 'Gutter Cleaning',
    featureInsuredDesc: 'Complete gutter service including emptying and exterior cleaning.',
    featureEco: 'Solar Panel Cleaning',
    featureEcoDesc: 'For better performance and efficiency of your solar panels.',
    featureLocal: 'Roller Shutter Cleaning',
    featureLocalDesc: 'Complete cleaning of roller shutters inside and outside, including polishing the shutter boxes.',
    featureSatisfaction: 'Facade & Terrace Cleaning',
    featureSatisfactionDesc: 'Using softwash technology, your paving will look like new again.',
    
    reviewsTitle: 'What Our Clients Say',
    reviewsSubtitle: 'Trusted by Hundreds',
    reviewsRating: '5.0 on Google',
    reviewsViewAll: 'View All Reviews',
    
    galleryTitle: 'Our Work',
    gallerySubtitle: 'Before & After Gallery',
    galleryDescription: 'Tap any image to see the transformation',
    galleryTapToToggle: 'Tap to Toggle',
    
    beforeAfterTitle: 'Witness The Difference',
    beforeAfterSubtitle: 'Drag to reveal the stunning transformation. Watch as grime dissolves into crystal clarity.',
    before: 'Before',
    after: 'After',
    
    howItWorksTitle: 'How It Works',
    howItWorksSubtitle: 'Simple, transparent, professional',
    howItWorksHeader: 'Simple Process',
    step1Title: 'Request a Quote',
    step1Desc: 'Fill out our simple form or give us a call. We respond within hours.',
    step2Title: 'Confirm Time & Price',
    step2Desc: "We'll provide a transparent quote and schedule a time that works for you.",
    step3Title: 'We Clean Your Windows',
    step3Desc: 'Our professionals arrive on time with all equipment. You relax.',
    step4Title: 'Enjoy Crystal-Clear Results',
    step4Desc: "Step back and admire the view. That's the Verstraete Cleaning experience.",
    
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
    contactResponse: '⚡ We respond to all inquiries during business hours',
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
    
    heroSubtitle: 'Voor al uw cleaning.',
    heroCta: 'Neem Contact met ons op',
    
    navServices: 'Diensten',
    navWhyUs: 'Waarom Ons',
    navReviews: 'Beoordelingen',
    navGallery: 'Galerij',
    navProcess: 'Proces',
    navAbout: 'Over Ons',
    navContact: 'Contact',
    navGetQuote: 'Gratis Offerte',
    
    servicesTitle: 'Onze Diensten',
    servicesSubtitle: 'Professionele ramenreiniging op maat van uw behoeften',
    servicesHeader: 'Hoe kunnen we u helpen?',
    residentialTitle: 'Voor alle privewoningen',
    residentialSubtitle: 'Privé Landgoederen & Woningen',
    residentialDesc: 'Beschikbaar in regio West Zeeuws Vlaanderen',
    commercialTitle: 'Zakelijk',
    commercialSubtitle: 'Bedrijven en Kantoren',
    commercialDesc: 'Ook beschikbaar voor uw bedrijfspand, zowel binnen als buiten',
    highRiseTitle: 'Vakantieparken',
    highRiseSubtitle: 'Van vakantiehuizen tot chalets.',
    highRiseDesc: 'Voor al uw (zomer) klussen staan we ook voor u klaar.',
    
    whyChooseUsTitle: 'Wij leveren de volgende services',
    whyChooseUsSubtitle: 'Het Verstraete Cleaning Verschil',
    featureReliable: 'Glasbewassing',
    featureReliableDesc: 'Glasbewassing (zowel binnen als buiten)',
    featureInsured: 'Dakgoot reiniging',
    featureInsuredDesc: 'Dakgoot reiniging (zowel leeghalen als het schoonmaken van de buitenkant)',
    featureEco: 'Zonnepaneel reiniging',
    featureEcoDesc: 'Zonnepaneel reiniging (Voor een beter rendement van uw panelen)',
    featureLocal: 'Rolluik reiniging',
    featureLocalDesc: 'Rolluik reiniging (zowel binnen als buiten en het laten glimmen van de rolluik bakken)',
    featureSatisfaction: 'Gevel en terrasreiniging',
    featureSatisfactionDesc: 'Gevel en terrasreiniging (met behulp van softwash ziet uw bestrating er weer uit als nieuw)',
    
    reviewsTitle: 'Wat Onze Klanten Zeggen',
    reviewsSubtitle: 'Vertrouwd door Honderden',
    reviewsRating: '5.0 op Google',
    reviewsViewAll: 'Bekijk Alle Beoordelingen',
    
    galleryTitle: 'Ons Werk',
    gallerySubtitle: 'Voor & Na Galerij',
    galleryDescription: 'Tik op een afbeelding om de transformatie te zien',
    galleryTapToToggle: 'Tik om te Wisselen',
    
    beforeAfterTitle: 'Wat kunt u verwachten?',
    beforeAfterSubtitle: 'Dit is het resultaat wat u van ons kan verwachten',
    before: 'Voor',
    after: 'Na',
    
    howItWorksTitle: 'Hoe gaan we te werk?',
    howItWorksSubtitle: 'Eenvoudig, transparant, professioneel',
    howItWorksHeader: 'Makkeljik en snel.',
    step1Title: 'Vul het offerte formulier in',
    step1Desc: 'Wij zullen zo spoedig mogeljik reageren op uw aanvraag.',
    step2Title: 'Afspraak maken',
    step2Desc: 'Graag komen we eerst langs om te kijken naar uw aanvraag, zodat we een eerlijke prijs kunnen opstellen.',
    step3Title: 'U wordt ingepland',
    step3Desc: 'Ongeveer een week van te voren krijgt u een mailtje met de vraag of we kunnen langskomen voor de klus.',
    step4Title: 'De factuur komt achteraf',
    step4Desc: 'Na het uitvoeren van de klus wordt de factuur verstuurd volgens de afgesproken prijs.',
    
    aboutTitle: 'Maak Kennis Met Verstraete Cleaning',
    aboutSubtitle: 'Over Ons',
    aboutContent1: 'Opgericht in 2013, Verstraete Cleaning begon met een simpele overtuiging: elk raam verdient kristalhelder te zijn, en elke klant verdient uitzonderlijke service.',
    aboutContent2: 'Wij zijn een lokaal team van opgeleide professionals die oprecht trots zijn op het transformeren van uw huis of bedrijf. Met meer dan 500 tevreden klanten in de regio, hebben we onze reputatie opgebouwd op betrouwbaarheid, aandacht voor detail en respect voor uw eigendom.',
    aboutContent3: 'Onze waarden zijn eenvoudig: op tijd komen, uitzonderlijk werk leveren en elke klant met een glimlach achterlaten.',
    aboutTeam: '— Het Verstraete Cleaning Team',
    
    ctaTitle: 'Wanneer mogen we bij u langskomen?',
    ctaSubtitle: 'Vraag vandaag nog uw gratis, vrijblijvende offerte aan. Wij reageren binnen enkele uren.',
    ctaCall: 'Bel Nu',
    ctaWhatsApp: 'WhatsApp Ons',
    ctaGetQuote: 'Gratis Offerte',
    
    contactTitle: 'Vraag Uw Gratis Offerte Aan',
    contactSubtitle: 'Neem Contact Op',
    contactInfo: 'Contactgegevens',
    contactPhone: 'Telefoon',
    contactEmail: 'E-mail',
    contactAreas: 'Adres',
    contactResponse: '⚡ Wij reageren op alle vragen tijdens kantooruren',
    contactWhatsAppTitle: 'Vraag Uw Gratis Offerte Aan',
    contactWhatsAppDesc: 'Neem contact met ons op via WhatsApp voor directe reactie en persoonlijke service',
    contactWhatsAppButton: 'Stuur Ons Een WhatsApp Bericht',
    
    footerDescription: 'Premium ramenreiniging voor veeleisende klanten. Kristalheldere resultaten, elke keer.',
    footerInsured: 'Volledig Verzekerd',
    footerServiceAreas: 'Adres',
    footerContact: 'Contact',
    footerFollow: 'Volg Ons',
    footerServing: 'Bedienen van de Grootstedelijke Regio',
    footerCopyright: `© ${new Date().getFullYear()} Verstraete Cleaning Premium Ramenreiniging. Alle rechten voorbehouden.`,
    footerPrivacy: 'Privacybeleid',
    footerTerms: 'Servicevoorwaarden',
  },
};


