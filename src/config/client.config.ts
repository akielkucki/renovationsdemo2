// Site Configuration - Updated for NJS Renovations & Construction
// All variables defined here are used across the entire website

export const siteConfig = {
    // Company Information
    company: {
        name: "NJS",
        tagline: "Renovations & Construction",
        fullName: "NJS Renovations & Construction",
        description: "Expert home renovation specialists specializing in complete kitchen overhauls, luxury bathroom remodels, and structural modifications.",
        foundedYear: 2018,
        yearsExperience: 8,
        projectsCompleted: 350,
        awardsWon: 12,
    },

    // Contact Information
    contact: {
        phone: "(215) 470-3444",
        email: "info@njsrenovations.com",
        address: {
            street: "740 Jackson Ave",
            city: "Glenside",
            state: "PA",
            zip: "19038",
            full: "740 Jackson Ave, Glenside, PA 19038",
        },
    },

    // Social Media Links
    social: {
        instagram: "https://instagram.com/njsrenovations",
        facebook: "https://facebook.com/njsrenovations",
        googleBusiness: "https://njsrenovations.com",
    },

    // Navigation Links
    navigation: [
        { label: "Our Services", href: "#services" },
        { label: "Our Work", href: "#portfolio" },
        { label: "Process", href: "#about" },
        { label: "Contact", href: "#contact" },
    ],

    // Services Offered
    services: [
        {
            title: "Kitchen Remodeling",
            slug: "kitchen-remodeling",
            description: "Full-service kitchen transformations including structural wall removal and custom passthroughs.",
            longDescription: "We specialize in taking kitchens down to the studs to create the space you've always wanted. Our team handles load-bearing wall removal, passthrough creation, and seamless integration with adjoining dining areas.",
            icon: "kitchen",
            features: [
                "Load-bearing wall removal",
                "Custom kitchen islands",
                "Structural passthrough creation",
                "Modern appliance and lighting integration",
            ],
        },
        {
            title: "Bathroom Renovations",
            slug: "bathroom-remodeling",
            description: "Transforming standard bathrooms into luxury retreats with custom tile work and walk-in showers.",
            longDescription: "Our bathroom projects range from guest bath updates to full master suite conversions. We specialize in bathtub-to-walk-in shower transformations, custom vanity installations, and intricate tile work.",
            icon: "bathroom",
            features: [
                "Bathtub to walk-in shower conversions",
                "Custom tiled showers and floors",
                "Vanity and accessory installation",
                "Intricate backsplash and feature walls",
            ],
        },
        {
            title: "Room Renovations",
            slug: "room-renovations",
            description: "Comprehensive interior updates managed with efficiency and detail-oriented craftsmanship.",
            longDescription: "We manage all aspects of interior room renovations, ensuring projects stay on schedule and finish in consecutive days. Our team partners with specialized subcontractors to maintain high standards throughout.",
            icon: "home",
            features: [
                "Full project management",
                "Structural modifications",
                "Consecutive day scheduling",
                "Professional finishing and cleanup",
            ],
        },
    ],

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
            name: "Maria Tecson",
            role: "Kitchen Renovation",
            quote: "We had a really great experience with NJS on our kitchen renovation that included taking everything down to the studs, removing a load bearing wall, creating a passthrough plus some extra work... Nick and his team - Zack, Luke, Connor & Ryan were professional, friendly, and patient.",
            rating: 5,
        },
        {
            name: "Kathryn Carlidge",
            role: "Guest Bathroom Remodel",
            quote: "We hired NJS Construction to renovate our guest bathroom. The project included a new vanity, toilet, accessories, a tiled shower and floor and tile behind the vanity. The project also changed the bathtub into a walk in shower.",
            rating: 5,
        },
        {
            name: "Pooja Gayen",
            role: "Room Renovation",
            quote: "NJS did a great job with a room renovation! Nick managed all aspects of the project and communicated well. Luke was detail-oriented, competent, hard-working and efficient. They stuck to a schedule well and finished everything in consecutive days.",
            rating: 5,
        },
    ],

    // CTA Section
    cta: {
        headline: "Transform Your Home with NJS",
        subheadline: "Serving Glenside and the surrounding area with expert craftsmanship and transparent communication.",
        buttonText: "Start Your Renovation",
        buttonLink: "#contact",
    },

    // Footer
    footer: {
        tagline: "Quality work you can stand behind.",
        copyright: `© ${new Date().getFullYear()} NJS Renovations & Construction. All rights reserved.`,
        certifications: ["Fully Licensed & Insured", "HIC Certified", "Lead-Safe Certified"],
    },
} as const;

export type SiteConfig = typeof siteConfig;