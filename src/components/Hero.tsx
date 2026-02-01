"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site.config";
import { ArrowRight, Star, Quote, CheckCircle2, Trophy, Hammer } from "lucide-react";

// --- Floating Animation Variants ---
const floatVariant = {
    initial: { y: 0, rotate: -2 },
    animate: {
        y: [-15, 15, -15],
        rotate: [-4, 0, -4],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

const floatVariantDelayed = {
    initial: { y: 0, rotate: 2 },
    animate: {
        y: [15, -15, 15],
        rotate: [4, 0, 4],
        transition: {
            duration: 7,
            delay: 1,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

export function Hero() {
    return (
        <section className="relative min-h-[100vh] w-full flex flex-col items-center justify-center overflow-hidden bg-[#FDFDFD] selection:bg-zinc-900 selection:text-white">

            {/* --- 1. Background Texture --- */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">

                {/* --- 2. Status Pill (Bravio Style) --- */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-2 shadow-sm"
                >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
          </span>
                    <span className="text-xs font-semibold uppercase tracking-wide text-zinc-600">
            Available for new projects in {siteConfig.contact.address.city}
          </span>
                    <ArrowRight className="ml-1 h-3 w-3 text-zinc-400" />
                </motion.div>

                {/* --- 3. Headline with "Pop" Icons --- */}
                <div className="relative z-20 flex flex-col items-center gap-2">

                    {/* Row 1 */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-[family-name:var(--font-space-grotesk)] text-6xl font-bold tracking-tight text-zinc-900 sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9]"
                    >
                        Transforming
                    </motion.h1>

                    {/* Row 2: Text + Icon + Text */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6"
                    >
                        <h1 className="font-[family-name:var(--font-space-grotesk)] text-6xl font-bold tracking-tight text-zinc-900 sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9]">
                            Spaces
                        </h1>
                        {/* 3D Hammer Icon Badge */}
                        <div className="hidden md:flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-zinc-900 text-white shadow-xl rotate-6 transform hover:rotate-0 transition-transform duration-300">
                            <Hammer className="h-6 w-6 sm:h-8 sm:w-8" />
                        </div>
                        <h1 className="font-[family-name:var(--font-space-grotesk)] text-6xl font-bold tracking-tight text-zinc-900 sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9]">
                            Into
                        </h1>
                    </motion.div>

                    {/* Row 3: Icon + Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6"
                    >
                        {/* 3D Trophy Icon Badge */}
                        <div className="hidden md:flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-white border border-zinc-100 shadow-xl -rotate-6 text-amber-500 transform hover:rotate-0 transition-transform duration-300">
                            <Trophy className="h-6 w-6 sm:h-8 sm:w-8 fill-current" />
                        </div>
                        <h1 className="bg-gradient-to-r from-zinc-900 to-zinc-500 bg-clip-text text-transparent font-[family-name:var(--font-space-grotesk)] text-6xl font-bold tracking-tight sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9]">
                            Masterpieces
                        </h1>
                    </motion.div>
                </div>

                {/* --- 4. Description --- */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-8 max-w-xl mx-auto font-[family-name:var(--font-inter)] text-lg text-zinc-500 leading-relaxed md:text-xl"
                >
                    {siteConfig.company.description || "We specialize in high-end renovations and construction, ensuring every detail reflects your vision."}
                </motion.p>

                {/* --- 5. CTA Buttons --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a href="#contact" className="group flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-zinc-900 px-8 text-white shadow-xl shadow-zinc-900/10 transition-all hover:bg-zinc-800 hover:scale-105">
                        <span className="font-semibold">Start Your Project</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                    <a href="#portfolio" className="group flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-8 text-zinc-900 transition-all hover:bg-zinc-50 hover:border-zinc-300">
                        <span className="font-semibold">View Our Work</span>
                    </a>
                </motion.div>

                {/* --- 6. Social Proof (Avatar Stack) --- */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.9 }}
                    className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8"
                >
                    <div className="flex -space-x-4">
                        {[1,2,3,4].map((i) => (
                            <div key={i} className="h-12 w-12 rounded-full border-2 border-white bg-zinc-100 flex items-center justify-center overflow-hidden shadow-sm">
                                {/* Gradient placeholders for avatars */}
                                <div className={`h-full w-full bg-gradient-to-br ${['from-blue-100 to-blue-300', 'from-amber-100 to-amber-300', 'from-purple-100 to-purple-300', 'from-emerald-100 to-emerald-300'][i-1]}`} />
                            </div>
                        ))}
                        <div className="h-12 w-12 rounded-full border-2 border-white bg-zinc-900 flex items-center justify-center text-xs font-bold text-white shadow-sm">
                            2k+
                        </div>
                    </div>

                    <div className="flex flex-col items-center sm:items-start">
                        <div className="flex gap-1 text-amber-400">
                            {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                        </div>
                        <p className="text-sm font-medium text-zinc-600 mt-1">
                            Rated 5.0 by <strong>{siteConfig.company.projectsCompleted || "100"}+ homeowners</strong>
                        </p>
                    </div>
                </motion.div>

            </div>

            {/* --- 7. Absolute Floating "Pop" Cards --- */}

            {/* Left Card: Testimonial */}
            <motion.div
                variants={floatVariant}
                initial="initial"
                animate="animate"
                className="absolute left-[4%] top-[25%] hidden xl:block z-0"
            >
                <div className="max-w-[280px] rounded-2xl border border-zinc-100 bg-white p-6 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm transition-transform hover:scale-105">
                    <Quote className="mb-4 h-8 w-8 text-blue-100 fill-blue-50" />
                    <p className="text-sm font-medium text-zinc-700 leading-relaxed italic">
                        "We saw a total transformation of our space. The attention to detail was incredible."
                    </p>
                    <div className="mt-4 flex items-center gap-3 border-t border-zinc-50 pt-4">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400" />
                        <div>
                            <p className="text-xs font-bold text-zinc-900">Sarah Mitchell</p>
                            <p className="text-[10px] text-zinc-400">Verified Client</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Right Card: Stats/Trust */}
            <motion.div
                variants={floatVariantDelayed}
                initial="initial"
                animate="animate"
                className="absolute right-[4%] top-[30%] hidden xl:block z-0"
            >
                <div className="max-w-[260px] rounded-2xl border border-zinc-100 bg-white p-5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm transition-transform hover:scale-105">
                    <div className="mb-3 flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                            <CheckCircle2 size={20} />
                        </div>
                        <span className="text-xs font-bold text-zinc-300">TRUSTED</span>
                    </div>

                    <p className="text-lg font-bold text-zinc-900">{siteConfig.company.yearsExperience}+ Years</p>
                    <p className="text-sm text-zinc-500">Of delivering excellence in {siteConfig.contact.address.city}.</p>
                </div>
            </motion.div>

        </section>
    );
}