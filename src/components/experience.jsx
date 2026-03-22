"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiFileText } from "react-icons/fi";

const experience = {
  role: "Senior Full-Stack Developer",
  company: "TechFlow Systems",
  period: "2024 - PRESENT",
  location: "Add Internship / Job Location",
  description:
    "Currently spearheading full-stack development with a focus on scalable MERN architectures. Responsible for end-to-end delivery of high-traffic platforms, optimizing system performance, and leading technical integration strategies.",
  stack: ["Next.js", "Node.js", "TypeScript", "AWS", "Redis"],
  documents: [
    {
      label: "Internship Completion Certificate",
      href: "Add Internship Certificate Link",
    },
    {
      label: "Letter of Recommendation (LOR)",
      href: "Add LOR Link",
    },
  ],
};

export default function Experience() {
  return (
    <section className="relative bg-[#05080f] px-6 py-14 text-white md:py-16">
      <div className="pointer-events-none absolute right-0 top-14 h-56 w-56 rounded-full bg-cyan-500/8 blur-[85px]" />

      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-6 flex items-center gap-3 opacity-45">
          <div className="h-[1px] w-8 bg-white" />
          <span className="text-[10px] font-mono uppercase tracking-[0.25em]">Experience</span>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="rounded-md bg-white/[0.04] p-4 md:p-5"
        >
          <div className="space-y-4">
            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
              <h2 className="text-3xl font-semibold tracking-tight uppercase italic leading-none md:text-5xl">
                {experience.company}
              </h2>
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500">
                {experience.period}
              </span>
            </div>

            <h3 className="text-lg md:text-xl text-cyan-300 font-medium uppercase tracking-tight">
              {experience.role}
            </h3>

            <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-neutral-400">
              Location: {experience.location}
            </p>

            <p className="text-neutral-300 text-base md:text-base font-light leading-snug max-w-3xl">
              {experience.description}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {experience.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-sm bg-white/[0.06] px-2.5 py-1 text-[11px] font-mono text-neutral-300 uppercase tracking-wider"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4 border-t border-white/10 pt-3">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">Internship Documents</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {experience.documents.map((doc) => (
                  <a
                    key={doc.label}
                    href={doc.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-sm border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.14em] text-cyan-300 transition-all duration-300 hover:bg-cyan-500/20"
                  >
                    <FiFileText className="text-[11px]" />
                    {doc.label}
                    <FiExternalLink className="text-[11px]" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
