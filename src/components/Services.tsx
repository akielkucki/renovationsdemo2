"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import {BathIcon, CookingPot, HouseIcon, TreesIcon, WashingMachineIcon} from "lucide-react";
import { siteConfig } from "@/config/site.config";

const iconMap: Record<string, ReactNode> = {
  kitchen: (
    <CookingPot/>
  ),
  bathroom: (
    <BathIcon />
  ),
  home: (
    <HouseIcon/>
  ),
  outdoor: (
    <TreesIcon />
  ),
};

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-32 bg-background" ref={ref}>
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
              Our Services
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground"
          >
            Expertise Across
            <br />
            <span className="text-gradient">Every Space</span>
          </motion.h2>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {siteConfig.services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="group relative p-8 md:p-10 bg-surface border border-border hover:border-border-subtle transition-all duration-500 hover-lift"
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-foreground/20 transition-all duration-500 group-hover:w-12 group-hover:h-12 group-hover:border-foreground/40" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-foreground/20 transition-all duration-500 group-hover:w-12 group-hover:h-12 group-hover:border-foreground/40" />

              <div className="text-muted mb-6 transition-colors duration-300 group-hover:text-foreground">
                {iconMap[service.icon]}
              </div>

              <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-foreground mb-4">
                {service.title}
              </h3>

              <p className="font-[family-name:var(--font-inter)] text-muted leading-relaxed">
                {service.description}
              </p>

              <div className="mt-8 flex items-center gap-2 text-foreground opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                <span className="font-[family-name:var(--font-inter)] text-sm font-medium tracking-wide">
                  Learn More
                </span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
