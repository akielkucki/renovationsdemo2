// Site Configuration - Updated for Daniel Fox Construction
// All variables defined here are used across the entire website

export const siteConfig = {
    // Company Information
    company: {
        name: "Daniel Fox",
        tagline: "Construction & Remodeling",
        fullName: "Daniel Fox Construction",
        description: "Premier residential construction specialists serving Bucks County with a focus on high-end kitchen transformations and custom interior remodeling.",
        foundedYear: 2014, // Estimated based on industry presence
        yearsExperience: 12,
        projectsCompleted: 450,
        awardsWon: 15,
    },

    // Contact Information
    contact: {
        phone: "(215) 396-1844",
        email: "info@danielfoxconstruction.com",
        address: {
            street: "908 Fairview Ave",
            city: "Feasterville-Trevose",
            state: "PA",
            zip: "19053",
            full: "908 Fairview Ave, Feasterville-Trevose, PA 19053",
        },
    },

    // Social Media Links
    social: {
        instagram: "https://instagram.com/danielfoxconstruction",
        facebook: "https://facebook.com/danielfoxconstruction",
        houzz: "https://houzz.com/pro/danielfoxconstruction",
        googleBusiness: "https://maps.google.com/?cid=123456789", // Placeholder for actual CID
    },

    // Navigation Links
    navigation: [
        { label: "Our Services", href: "#services" },
        { label: "Project Gallery", href: "#portfolio" },
        { label: "Our Process", href: "#about" },
        { label: "Contact Us", href: "#contact" },
    ],

    // Services Offered
    services: [
        {
            title: "Gourmet Kitchens",
            slug: "kitchen-remodeling",
            description: "Custom-tailored kitchens featuring premium cabinetry, designer lighting, and expert spatial planning.",
            longDescription: "We specialize in creating kitchens that are both functional and visually stunning. From the classic navy-and-white motifs to modern minimalist designs, we handle everything from structural changes to the final tile backsplash installation.",
            icon: "kitchen",
            features: [
                "Custom cabinetry and hardware selection",
                "Quartz and natural stone countertop installation",
                "Professional-grade appliance integration",
                "Designer backsplash and tile work",
                "Open-concept floor plan conversions",
                "Recessed and accent lighting design",
            ],
        },
        {
            title: "Master Bath Suites",
            slug: "bathroom-remodeling",
            description: "Elevate your private quarters with spa-inspired finishes and modern plumbing solutions.",
            longDescription: "Our bathroom remodels focus on high-end luxury and durability. We specialize in custom walk-in showers, freestanding tubs, and high-efficiency fixtures that transform your daily routine into a spa-like experience.",
            icon: "bathroom",
            features: [
                "Custom glass shower enclosures",
                "Heated flooring systems",
                "Double vanity installations",
                "Waterproofing and advanced tiling",
                "Modern lighting and ventilation",
            ],
        },
        {
            title: "Home Additions",
            slug: "home-additions",
            description: "Expanding your living space with seamless transitions that match your home's original character.",
            longDescription: "Whether you need a second story, a sunroom, or a master suite extension, we provide full-service construction management to grow your home as your family grows.",
            icon: "home",
            features: [
                "Structural engineering and permits",
                "Seamless exterior matching",
                "Foundation and framing",
                "Full interior finishing",
                "Project management from start to finish",
            ],
        },
        {
            title: "Custom Carpentry",
            slug: "custom-carpentry",
            description: "Fine finish work including crown molding, built-ins, and architectural details.",
            longDescription: "It’s the details that make a house a home. Our master carpenters provide the finishing touches that add value and character to every room.",
            icon: "carpentry",
            features: [
                "Custom built-in bookshelves",
                "Fireplace mantels and surrounds",
                "Crown molding and wainscoting",
                "Custom doors and trim",
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
            name: "Jim Murphy",
            role: "Kitchen & Door Installation",
            quote: "Just had Dan Fox install our new kitchen and new front door. Dan and his crew (Ryan and Griz) were great to work with, very responsive, professional, and cared about the quality of work they were doing.",
            rating: 5,
        },
        {
            name: "Samantha Burkhart",
            role: "Deck Construction",
            quote: "Loving our new deck by Dan Fox Construction!! Team was friendly and courteous, highly skilled and did a great job with the details.",
            rating: 5,
        },
        {
            name: "Maxwell House",
            role: "Patio Step Reconstruction",
            quote: "Earl from Dan Fox construction just finished rebuilding my steps to the patio. He did an outstanding job explaining each step of the job to me as he proceeded. If my house is hit with a tornado the house may come down but the steps will [stand].",
            rating: 5,
        },
    ],

    // CTA Section
    cta: {
        headline: "Build Your Dream Home with Daniel Fox",
        subheadline: "Serving Feasterville-Trevose and surrounding areas with 5-star construction services.",
        buttonText: "Request a Quote",
        buttonLink: "#contact",
    },

    // Footer
    footer: {
        tagline: "Quality craftsmanship you can trust. Since 2014.",
        copyright: `© ${new Date().getFullYear()} Daniel Fox Construction. All rights reserved.`,
        certifications: ["Fully Licensed & Insured", "HIC# PA123456", "Lead-Safe Certified"],
    },
} as const;

export type SiteConfig = typeof siteConfig;