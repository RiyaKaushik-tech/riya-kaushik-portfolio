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
    <section className="relative px-6 py-14 md:py-16" style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)' }}>
      <div className="pointer-events-none absolute right-0 top-14 h-56 w-56 rounded-full blur-[85px]" style={{ background: 'var(--color-glow-green)' }} />

      <div className="mx-auto w-full max-w-6xl">
          <div className="mb-6 flex items-center gap-3 opacity-45">
          <div className="h-[1px] w-8" style={{ backgroundColor: 'var(--text-primary)' }} />
          <span className="text-[10px] font-mono uppercase tracking-[0.25em]">Experience</span>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="rounded-md p-4 md:p-5"
          style={{ backgroundColor: 'var(--bg-subtle)' }}
        >
          <div className="space-y-4">
            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
              <h2 className="text-3xl font-semibold tracking-tight uppercase italic leading-none md:text-5xl">
                {experience.company}
              </h2>
              <span className="text-xs font-mono uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                {experience.period}
              </span>
            </div>

            <h3 className="text-lg md:text-xl font-medium uppercase tracking-tight" style={{ color: 'var(--color-primary-olive)' }}>
              {experience.role}
            </h3>

            <p className="text-[11px] font-mono uppercase tracking-[0.15em]" style={{ color: 'var(--text-muted)' }}>
              Location: {experience.location}
            </p>

            <p className="text-base md:text-base font-light leading-snug max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
              {experience.description}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {experience.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-sm px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider"
                  style={{ backgroundColor: 'var(--bg-subtle-strong)', color: 'var(--text-secondary)' }}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4 border-t pt-3" style={{ borderColor: 'var(--border-color)' }}>
              <p className="text-[10px] font-mono uppercase tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>Internship Documents</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {experience.documents.map((doc) => (
                  <a
                    key={doc.label}
                    href={doc.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-sm transition-all duration-300"
                    style={{ border: '1px solid var(--color-primary-olive)', backgroundColor: 'rgba(122, 157, 40, 0.1)', color: 'var(--color-primary-olive)' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(122, 157, 40, 0.2)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(122, 157, 40, 0.1)'}
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
