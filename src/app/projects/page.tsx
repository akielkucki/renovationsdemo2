"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site.config";

export default function ProjectsPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const categories = ["All", ...new Set(siteConfig.portfolio.map((p) => p.category))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? siteConfig.portfolio
      : siteConfig.portfolio.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors duration-300 mb-12"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              <span className="font-[family-name:var(--font-inter)] text-sm font-medium tracking-wide">
                Back to Home
              </span>
            </Link>
          </motion.div>

          {/* Page title */}
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-px bg-gradient-to-r from-foreground to-transparent" />
              <span className="font-[family-name:var(--font-inter)] text-sm font-medium tracking-[0.2em] text-muted uppercase">
                Our Work
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-[family-name:var(--font-space-grotesk)] text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground mb-6"
            >
              All Projects
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-[family-name:var(--font-inter)] text-lg text-muted leading-relaxed"
            >
              Explore our complete portfolio of renovation projects, from luxury estates to modern commercial spaces.
            </motion.p>
          </div>

          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3 mt-12"
          >
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 font-[family-name:var(--font-inter)] text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-foreground text-background"
                    : "bg-transparent text-muted border border-border hover:border-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
              >
                {/* Image or placeholder */}
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} cover photo`}
                    fill
                    className={`object-cover transition-transform duration-700 ${
                      hoveredIndex === index ? "scale-110" : "scale-100"
                    }`}
                  />
                ) : (
                  <div
                    className={`absolute inset-0 bg-gradient-to-br transition-transform duration-700 ${
                      index % 3 === 0
                        ? "from-surface-elevated to-surface"
                        : index % 3 === 1
                        ? "from-surface to-background"
                        : "from-background to-surface-elevated"
                    } ${hoveredIndex === index ? "scale-110" : "scale-100"}`}
                  />
                )}

                {/* Overlay pattern */}
                <div className="absolute inset-0 grid-pattern opacity-30" />

                {/* Decorative elements */}
                <div className="absolute top-8 left-8 w-20 h-20 border border-foreground/10" />
                <div className="absolute bottom-16 right-8 w-12 h-12 border border-foreground/10" />

                {/* Content overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <motion.div
                    className="mb-3 w-fit relative"
                    animate={{ y: hoveredIndex === index ? -8 : 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="relative z-10 text-xs font-medium tracking-[0.2em] text-foreground uppercase">
                      {project.category}
                    </p>
                    <div className="absolute -bottom-1 -left-1 w-full h-3 bg-muted/40 -z-0 -rotate-1 origin-bottom-left" />
                  </motion.div>

                  <motion.h3
                    className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-foreground mb-2"
                    animate={{ y: hoveredIndex === index ? -8 : 0 }}
                    transition={{ duration: 0.4, delay: 0.05 }}
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    className="font-[family-name:var(--font-inter)] text-sm text-muted"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      y: hoveredIndex === index ? 0 : 20,
                    }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    {project.description}
                  </motion.p>

                  {/* View button */}
                  <motion.div
                    className="mt-6 flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      x: hoveredIndex === index ? 0 : -20,
                    }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                  >
                    <span className="font-[family-name:var(--font-inter)] text-sm font-medium text-foreground tracking-wide">
                      View Project
                    </span>
                    <svg className="w-4 h-4 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[60px] border-t-foreground/5 border-l-[60px] border-l-transparent transition-all duration-500 group-hover:border-t-foreground/10" />
              </motion.div>
            ))}
          </motion.div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="font-[family-name:var(--font-inter)] text-lg text-muted">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-foreground mb-6"
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-[family-name:var(--font-inter)] text-lg text-muted mb-10"
          >
            Let&apos;s discuss how we can transform your space.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href="/#contact" className="btn-primary">
              <span>Get in Touch</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
