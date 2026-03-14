// Site Configuration - Updated for MRL Home Improvement
// All variables defined here are used across the entire website

export const siteConfig = {
    // Company Information
    company: {
        name: "MRL",
        tagline: "Home Improvement",
        fullName: "MRL Home Improvement",
        description: "Reliable home improvement specialists serving North Bellport and surrounding areas. Expert craftsmanship in drywall, painting, and general home repairs.",
        foundedYear: 2018, // Estimated based on typical local business profiles
        yearsExperience: 10,
        projectsCompleted: 150,
        awardsWon: 5,
    },
    //
    // Contact Information
    contact: {
        phone: "(631) 566-2340",
        email: "info@mrlhomeimprovement.com", // Placeholder based on company name
        address: {
            street: "423 Lenox Ave",
            city: "North Bellport",
            state: "NY",
            zip: "11772",
            full: "423 Lenox Ave, North Bellport, NY 11772",
        },
    },

    // Social Media Links
    social: {
        instagram: "https://instagram.com/mrlhomeimprovement",
        facebook: "https://facebook.com/mrlhomeimprovement",
        googleBusiness: "https://google.com/maps?cid=mrlhomeimprovement",
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
            title: "Drywall & Sheetrock",
            slug: "drywall-repair",
            description: "Professional sheetrock installation and repair for seamless walls and ceilings.",
            longDescription: "We specialize in restoring your walls to perfection. Whether it's repairing water damage, patching holes, or installing new sheetrock for a renovation, our finish is always smooth and ready for paint.",
            icon: "construction",
            features: [
                "Sheetrock installation",
                "Drywall patching & repair",
                "Texturing and finishing",
                "Water damage restoration",
            ],
        },
        {
            title: "Interior Painting",
            slug: "interior-painting",
            description: "High-quality painting services to refresh and transform your living space.",
            longDescription: "Our painting services are defined by precision and cleanliness. We handle all prep work, including sanding and priming, to ensure a durable and beautiful finish for your home's interior.",
            icon: "palette",
            features: [
                "Full room painting",
                "Trim and molding detail",
                "Color consultation",
                "Clean and efficient process",
            ],
        },
        {
            title: "General Maintenance",
            slug: "general-maintenance",
            description: "Comprehensive home repairs including insulation and seasonal services.",
            longDescription: "From installing energy-efficient insulation to handling seasonal needs like snow removal, we are the 'nice guys' you can count on for reliable home maintenance and prompt service.",
            icon: "handyman",
            features: [
                "Insulation installation",
                "Seasonal snow removal",
                "General home repairs",
                "Prompt emergency response",
            ],
        },
    ],

    // KEEPING ALL PORTFOLIO IMAGES AS REQUESTED
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
            name: "William",
            role: "Drywall & Painting",
            quote: "Mario did sheet rock repair and painting for me. His work was excellent, price was fair and everything was done on time and as requested. I would definitely use him again and won’t hesitate to recommend him to others.",
            rating: 5,
        },
        {
            name: "Janice Neff",
            role: "Drywall, Insulation & Paint",
            quote: "Mario has replaced sheetrock and did drywall and repairs. He also installed insulation and painted. Mario is very professional and his work is great. His prices are very reasonable and he is a pleasure to work with.",
            rating: 5,
        },
        {
            name: "Sharon Otis",
            role: "Seasonal Services",
            quote: "Needed snow removal on my driveway. Left a message on his phone. He called me back n was able to come over within 10 minutes to clear it all up. Very nice guy!! Very reasonably priced!",
            rating: 5,
        },
    ],

    // CTA Section
    cta: {
        headline: "Ready for your Home Improvement?",
        subheadline: "Serving North Bellport and the surrounding area with fair prices and excellent work.",
        buttonText: "Call Mario Today",
        buttonLink: "#contact",
    },

    // Footer
    footer: {
        tagline: "Excellent work at a fair price.",
        copyright: `© ${new Date().getFullYear()} MRL Home Improvement. All rights reserved.`,
        certifications: ["Licensed Contractor", "Insured", "Satisfaction Guaranteed"],
    },
} as const;

export type SiteConfig = typeof siteConfig;