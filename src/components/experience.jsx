    "use client";

    import React from "react";
    import { motion } from "framer-motion";

    const experience = {
    role: "Senior Full-Stack Developer",
    company: "TechFlow Systems",
    period: "2024 — PRESENT",
    location: "Add Internship / Job Location",
    description: "Currently spearheading full-stack development with a focus on scalable MERN architectures. Responsible for end-to-end delivery of high-traffic platforms, optimizing system performance, and leading technical integration strategies.",
    stack: ["Next.js", "Node.js", "TypeScript", "AWS", "Redis"]
    };

    export default function Experience() {
    return (
        <section className="relative flex min-h-screen items-center justify-center bg-[#050505] px-6 py-20 text-white">
        <div className="pointer-events-none absolute right-0 top-14 h-72 w-72 rounded-full bg-indigo-500/10 blur-[120px]" />

        <div className="max-w-4xl w-full">
            
            {/* Simple Section Label */}
            <div className="flex items-center gap-4 mb-12 opacity-30">
            <div className="w-8 h-[1px] bg-white" />
            <span className="text-[10px] font-mono uppercase tracking-[0.4em]">Experience</span>
            </div>

            {/* The Main Focus Card */}
            <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="group relative rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8"
            >
            {/* Subtle Vertical Accent Line */}
            <div className="absolute -left-6 md:-left-12 top-0 bottom-0 w-[1px] bg-white/5 group-hover:bg-indigo-500 transition-colors duration-500" />

            <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <h2 className="text-5xl md:text-7xl font-light tracking-tighter uppercase italic leading-none">
                    {experience.company}
                </h2>
                <span className="text-neutral-500 font-mono text-xs mb-1 uppercase tracking-widest">
                    {experience.period}
                </span>
                </div>

                <h3 className="text-xl md:text-2xl text-indigo-400 font-medium uppercase tracking-tight">
                {experience.role}
                </h3>

                <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-neutral-400">
                Location: {experience.location}
                </p>

                <p className="text-neutral-300 text-lg md:text-xl font-light leading-relaxed max-w-3xl">
                {experience.description}
                </p>

                {/* Tech Stack - Clean & Minimal */}
                <div className="flex flex-wrap gap-x-3 gap-y-3 pt-4">
                {experience.stack.map((tech, i) => (
                    <span key={i} className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] font-mono text-neutral-300 uppercase tracking-widest">
                    {tech}    
                    </span>
                ))}
                </div>
            </div>
            </motion.div>

            {/* Subtle Bottom Accent */}
            <div className="mt-32 opacity-10">
            <p className="text-[10px] font-mono uppercase tracking-[1em] text-center">Focus Mode Active</p>
            </div>
        </div>
        </section>
    );
    }