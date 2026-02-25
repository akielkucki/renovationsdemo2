"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/components/index";
import { ArrowRight, Star, CheckCircle2, Trophy, Hammer, Sparkles } from "lucide-react";

// --- Floating Animation Variants ---
const floatVariant = {
    initial: { y: 0, rotate: -2 },
    animate: {
        y: [-12, 12, -12],
        rotate: [-3, 1, -3],
        transition: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

const floatVariantDelayed = {
    initial: { y: 0, rotate: 2 },
    animate: {
        y: [12, -12, 12],
        rotate: [3, -1, 3],
        transition: {
            duration: 8,
            delay: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

// Stagger children orchestrator
const staggerContainer = {
    initial: {},
    animate: {
        transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
};

const fadeUp = {
    initial: { opacity: 0, y: 40 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: [0.19, 1, 0.22, 1] },
    },
};

const fadeScale = {
    initial: { opacity: 0, scale: 0.92 },
    animate: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.9, ease: [0.19, 1, 0.22, 1] },
    },
};

export function Hero() {
    return (
        <section className="relative min-h-[100vh] w-full flex flex-col items-center justify-center overflow-hidden bg-white selection:bg-zinc-900/10 selection:text-zinc-900">

            {/* --- Background Layers --- */}
            <div className="absolute inset-0 z-0">
                {/* Subtle grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
                {/* Soft radial warmth from center */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_40%,rgba(245,239,224,0.4),transparent)]" />
            </div>

            {/* --- Main Content --- */}
            <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center"
            >
                {/* --- Status Pill --- */}
                {/* @ts-ignore */}
                <motion.div variants={fadeUp} className="mb-10 inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-white px-5 py-2.5 shadow-[0_2px_16px_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.03)]">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                        Available for new projects in {siteConfig.contact.address.city}
                    </span>
                    <ArrowRight className="h-3 w-3 text-zinc-400" />
                </motion.div>

                {/* --- Headline --- */}
                <div className="relative z-20 flex flex-col items-center gap-1 md:gap-2">

                    {/* Row 1 */}
                    <motion.h1
                        /* @ts-ignore */

                        variants={fadeUp}
                        className="font-[family-name:var(--font-space-grotesk)] text-6xl font-bold tracking-tight text-zinc-900 sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9]"
                    >
                        Transforming
                    </motion.h1>

                    {/* Row 2: Spaces + Icon + Into */}
                    <motion.div
                        /* @ts-ignore */
                        variants={fadeScale}
                        className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6"
                    >
                        <h1 className="font-[family-name:var(--font-space-grotesk)] text-6xl font-bold tracking-tight text-zinc-900 sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9]">
                            Spaces
                        </h1>
                        {/* Icon badge */}
                        <div className="hidden md:flex h-14 w-14 lg:h-16 lg:w-16 items-center justify-center rounded-2xl bg-zinc-900 text-white shadow-[0_8px_32px_rgba(0,0,0,0.15)] rotate-6 transform hover:rotate-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]">
                            <Hammer className="h-7 w-7 lg:h-8 lg:w-8" />
                        </div>
                        <h1 className="font-[family-name:var(--font-space-grotesk)] text-6xl font-bold tracking-tight text-zinc-900 sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9]">
                            Into
                        </h1>
                    </motion.div>

                    {/* Row 3: Icon + Masterpieces */}
                    <motion.div
                        /* @ts-ignore */
                        variants={fadeUp}
                        className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6"
                    >
                        {/* Icon badge */}
                        <div className="hidden md:flex h-14 w-14 lg:h-16 lg:w-16 items-center justify-center rounded-2xl bg-white border border-zinc-100 text-amber-500 shadow-[0_8px_32px_rgba(0,0,0,0.08)] -rotate-6 transform hover:rotate-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]">
                            <Trophy className="h-7 w-7 lg:h-8 lg:w-8 fill-current" />
                        </div>
                        <h1 className="font-[family-name:var(--font-space-grotesk)] text-6xl font-bold tracking-tight sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 bg-clip-text text-transparent">
                            Masterpieces
                        </h1>
                    </motion.div>
                </div>

                {/* --- Description --- */}
                <motion.p
                    /* @ts-ignore */
                    variants={fadeUp}
                    className="mt-8 max-w-xl mx-auto font-[family-name:var(--font-inter)] text-lg text-zinc-500 leading-relaxed md:text-xl"
                >
                    {siteConfig.company.description || "We specialize in high-end renovations and construction, ensuring every detail reflects your vision."}
                </motion.p>

                {/* --- CTA Buttons --- */}
                <motion.div
                    /* @ts-ignore */
                    variants={fadeUp}
                    className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#contact"
                        className="group flex h-14 w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-zinc-900 px-8 text-white shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] hover:bg-zinc-800 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] hover:scale-[1.03]"
                    >
                        <span className="font-semibold tracking-wide">Start Your Project</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                    <a
                        href="#portfolio"
                        className="group flex h-14 w-full sm:w-auto items-center justify-center gap-2.5 rounded-full border border-zinc-200 bg-white px-8 text-zinc-900 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] hover:bg-zinc-50 hover:border-zinc-300 hover:scale-[1.03]"
                    >
                        <span className="font-semibold tracking-wide">View Our Work</span>
                    </a>
                </motion.div>

                {/* --- Social Proof --- */}
                <motion.div
                    /* @ts-ignore */
                    variants={fadeUp}
                    className="mt-16 inline-flex flex-col sm:flex-row items-center justify-center gap-5 rounded-full border border-zinc-100 bg-white/80 backdrop-blur-md px-8 py-4 shadow-[0_2px_16px_rgba(0,0,0,0.05)]"
                >
                    {/* Avatar stack */}
                    <div className="flex -space-x-3">
                        {[
                            "from-blue-200 to-blue-400",
                            "from-amber-200 to-amber-400",
                            "from-purple-200 to-purple-400",
                            "from-emerald-200 to-emerald-400",
                        ].map((gradient, i) => (
                            <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-zinc-50 flex items-center justify-center overflow-hidden shadow-sm">
                                <div className={`h-full w-full bg-gradient-to-br ${gradient}`} />
                            </div>
                        ))}
                        <div className="h-10 w-10 rounded-full border-2 border-white bg-zinc-900 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                            2k+
                        </div>
                    </div>

                    <div className="h-8 w-px bg-zinc-200 hidden sm:block" />

                    <div className="flex flex-col items-center sm:items-start gap-1">
                        <div className="flex gap-0.5 text-amber-400">
                            {[1, 2, 3, 4, 5].map(star => <Star key={star} size={14} fill="currentColor" />)}
                        </div>
                        <p className="text-xs font-medium text-zinc-500">
                            Rated 5.0 by <strong className="text-zinc-900">{siteConfig.company.projectsCompleted || "100"}+ homeowners</strong>
                        </p>
                    </div>
                </motion.div>

            </motion.div>

            {/* --- Floating Glass Cards --- */}

            {/* Left Card: Testimonial */}
            <motion.div
                /* @ts-ignore */
                variants={floatVariant}
                initial="initial"
                animate="animate"
                className="absolute left-[3%] top-[22%] hidden xl:block z-0"
            >
                <div className="max-w-[280px] rounded-2xl border border-zinc-100 bg-white/80 backdrop-blur-xl p-6 shadow-[0_20px_60px_-12px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.03)] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] hover:scale-105">
                    <Sparkles className="mb-4 h-6 w-6 text-zinc-300" />
                    <p className="text-sm font-medium text-zinc-600 leading-relaxed italic">
                        &ldquo;We saw a total transformation of our space. The attention to detail was incredible.&rdquo;
                    </p>
                    <div className="mt-4 flex items-center gap-3 border-t border-zinc-100 pt-4">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-300 to-cyan-300" />
                        <div>
                            <p className="text-xs font-bold text-zinc-900">Sarah Mitchell</p>
                            <p className="text-[10px] text-zinc-400">Verified Client</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Right Card: Stats */}
            <motion.div
                /* @ts-ignore */
                variants={floatVariantDelayed}
                initial="initial"
                animate="animate"
                className="absolute right-[3%] top-[28%] hidden xl:block z-0"
            >
                <div className="max-w-[260px] rounded-2xl border border-zinc-100 bg-white/80 backdrop-blur-xl p-5 shadow-[0_20px_60px_-12px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.03)] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] hover:scale-105">
                    <div className="mb-3 flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                            <CheckCircle2 size={20} />
                        </div>
                        <span className="text-[10px] font-bold tracking-widest text-zinc-300 uppercase">Trusted</span>
                    </div>

                    <p className="text-lg font-bold text-zinc-900">{siteConfig.company.yearsExperience}+ Years</p>
                    <p className="text-sm text-zinc-500">Of delivering excellence in {siteConfig.contact.address.city}.</p>
                </div>
            </motion.div>

            {/* --- Wave Transition to next section --- */}
            <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
                <svg
                    viewBox="0 0 1440 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto block"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
                        fill="#1a3a2a"
                    />
                </svg>
            </div>

        </section>
    );
}
