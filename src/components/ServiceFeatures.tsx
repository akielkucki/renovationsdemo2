"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { siteConfig } from "@/components/index";

interface ServiceFeaturesProps {
  service: (typeof siteConfig.services)[number];
  city: string;
}

export function ServiceFeatures({ service, city }: ServiceFeaturesProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-px bg-gradient-to-r from-foreground to-transparent" />
            <span className="font-[family-name:var(--font-inter)] text-sm font-medium tracking-[0.2em] text-muted uppercase">
              What We Offer
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground"
          >
            Our {service.title}
            <br />
            <span className="text-gradient">Services in {city}</span>
          </motion.h2>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="group relative p-8 bg-surface border border-border hover:border-border-subtle transition-all duration-500 hover-lift"
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-foreground/20 transition-all duration-500 group-hover:w-10 group-hover:h-10 group-hover:border-foreground/40" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-foreground/20 transition-all duration-500 group-hover:w-10 group-hover:h-10 group-hover:border-foreground/40" />

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center text-foreground">
                  <Check className="w-4 h-4" />
                </div>
                <p className="font-[family-name:var(--font-inter)] text-foreground leading-relaxed">
                  {feature}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why choose us section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 p-10 bg-surface border border-border"
        >
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Choose {siteConfig.company.fullName} for {service.title} in {city}?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-gradient mb-2">
                {siteConfig.company.yearsExperience}+
              </div>
              <p className="font-[family-name:var(--font-inter)] text-muted">
                Years of experience serving {city} and surrounding areas
              </p>
            </div>
            <div>
              <div className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-gradient mb-2">
                {siteConfig.company.projectsCompleted}+
              </div>
              <p className="font-[family-name:var(--font-inter)] text-muted">
                Projects completed with exceptional results
              </p>
            </div>
            <div>
              <div className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-gradient mb-2">
                100%
              </div>
              <p className="font-[family-name:var(--font-inter)] text-muted">
                Satisfaction guaranteed on every project
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
