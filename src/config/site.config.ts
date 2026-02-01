// Site Configuration - Edit these values to customize the demo site
// All variables defined here are used across the entire website

export const siteConfig = {
  // Company Information
  company: {
    name: "TCR",
    tagline: "Renovations",
    fullName: "TCR Renovations",
    description: "Contemporary renovation specialists transforming spaces with precision craftsmanship and modern design.",
    foundedYear: 2015,
    yearsExperience: 10,
    projectsCompleted: 500,
    awardsWon: 25,
  },

  // Contact Information
  contact: {
    phone: "+1 (267) 543-4567",
    email: "support@tcrrenovations.com",
    address: {
      street: "1234 Design District",
      city: "Southampton",
      state: "PA",
      zip: "18966",
      full: "1470 Buck Hill Dr, Southampton, PA 18966",
    },
  },

  // Social Media Links
  social: {
    instagram: "https://instagram.com/apexrenovations",
    linkedin: "https://linkedin.com/company/apexrenovations",
    pinterest: "https://pinterest.com/apexrenovations",
    houzz: "https://houzz.com/apexrenovations",
  },

  // Navigation Links
  navigation: [
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  // Services Offered
  services: [
    {
      title: "Kitchen Renovations",
      slug: "kitchen-renovations",
      description: "Transform your kitchen into a culinary masterpiece with custom cabinetry, premium countertops, and state-of-the-art appliances.",
      longDescription: "Our kitchen renovation services combine functionality with stunning aesthetics. From complete gut renovations to targeted upgrades, we handle every aspect of your kitchen transformation including custom cabinetry, premium countertops, modern appliances, lighting design, and flooring. We work closely with you to create a space that reflects your style while maximizing efficiency and storage.",
      icon: "kitchen",
      features: [
        "Custom cabinetry design and installation",
        "Premium countertop selection (granite, quartz, marble)",
        "Modern appliance integration",
        "Lighting design and installation",
        "Flooring and backsplash tile work",
        "Plumbing and electrical upgrades",
      ],
    },
    {
      title: "Bathroom Remodels",
      slug: "bathroom-remodels",
      description: "Create spa-like retreats with luxurious fixtures, custom tile work, and modern amenities that elevate daily routines.",
      longDescription: "Transform your bathroom into a personal sanctuary with our comprehensive remodeling services. Whether you're updating a powder room or creating a luxurious master bath, we bring expertise in waterproofing, tile installation, fixture selection, and space optimization. Our team ensures every detail contributes to both beauty and functionality.",
      icon: "bathroom",
      features: [
        "Custom shower and tub installations",
        "Luxury fixture selection and installation",
        "Custom tile work and waterproofing",
        "Vanity and storage solutions",
        "Heated flooring options",
        "Ventilation and lighting upgrades",
      ],
    },
    {
      title: "Full Home Renovations",
      slug: "full-home-renovations",
      description: "Complete transformations that reimagine your entire living space while preserving architectural integrity.",
      longDescription: "Our full home renovation services provide comprehensive transformations that touch every aspect of your living space. We coordinate all trades, manage permits, and ensure seamless integration between rooms. Whether you're modernizing a dated home or reconfiguring layouts for better flow, we deliver cohesive results that enhance both form and function.",
      icon: "home",
      features: [
        "Complete interior redesign",
        "Structural modifications and open floor plans",
        "Electrical and plumbing system upgrades",
        "HVAC modernization",
        "Window and door replacements",
        "Finish carpentry and millwork",
      ],
    },
    {
      title: "Deck Building & Outdoor Spaces",
      slug: "deck-building-outdoor-spaces",
      description: "Extend your living area outdoors with expertly crafted decks, patios, and landscaping features.",
      longDescription: "Expand your living space into the outdoors with our custom deck building and outdoor living solutions. We design and construct durable, beautiful outdoor spaces using premium materials that withstand the elements. From intimate balconies to expansive multi-level decks with built-in features, we create outdoor environments perfect for relaxation and entertainment.",
      icon: "outdoor",
      features: [
        "Custom deck design and construction",
        "Composite and natural wood options",
        "Built-in seating and planters",
        "Outdoor kitchen integration",
        "Pergolas and shade structures",
        "Lighting and electrical for outdoor living",
      ],
    },
  ],

  // Portfolio Projects
  portfolio: [
    {
      title: "Malibu Beach House",
      category: "Full Renovation",
      image: "/portfolio/malibu.jpg",
      description: "Complete transformation of a 4,500 sq ft oceanfront property.",
    },
    {
      title: "Downtown Loft",
      category: "Kitchen & Bath",
      image: "/portfolio/loft.png",
      description: "Industrial-modern conversion with custom finishes.",
    },
    {
      title: "Beverly Hills Estate",
      category: "Full Renovation",
      image: "/portfolio/beverly.png",
      description: "Luxury estate renovation preserving 1920s character.",
    },
    {
      title: "Venice Creative Studio",
      category: "Commercial",
      image: "/portfolio/venice.jpg",
      description: "Adaptive reuse of warehouse into creative workspace.",
    },
    {
      title: "Silver Lake Modern",
      category: "Kitchen",
      image: "/portfolio/silverlake.png",
      description: "Minimalist kitchen with European cabinetry.",
    },
    {
      title: "Pasadena Craftsman",
      category: "Bathroom",
      image: "/portfolio/pasadena.jpg",
      description: "Period-appropriate updates to historic home.",
    },
  ],

  // Testimonials
  testimonials: [
    {
      name: "Sarah Chen",
      role: "Homeowner, Malibu",
      quote: "Apex transformed our dated beach house into a contemporary masterpiece. Their attention to detail and project management was impeccable.",
      rating: 5,
    },
    {
      name: "Marcus Williams",
      role: "Restaurant Owner",
      quote: "They delivered our restaurant renovation on time and under budget. The space has completely elevated our brand.",
      rating: 5,
    },
    {
      name: "Elena Rodriguez",
      role: "Interior Designer",
      quote: "As a designer, I'm particular about execution. Apex consistently delivers craftsmanship that exceeds expectations.",
      rating: 5,
    },
  ],

  // CTA Section
  cta: {
    headline: "Ready to Transform Your Space?",
    subheadline: "Schedule a consultation and let's bring your vision to life.",
    buttonText: "Start Your Project",
    buttonLink: "#contact",
  },

  // Footer
  footer: {
    tagline: "Crafting exceptional spaces since 2015.",
    copyright: `© ${new Date().getFullYear()} Apex Renovations. All rights reserved.`,
    certifications: ["Licensed & Insured", "NARI Certified", "EPA Lead-Safe"],
  },
} as const;

export type SiteConfig = typeof siteConfig;
