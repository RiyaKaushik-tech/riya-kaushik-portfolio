"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaTrophy } from "react-icons/fa";

const credentialsData = {
  hackathons: [
    {
      id: 1,
      eventName: "Paradox 2.0 Hackathon",
      achievement: "Participant",
      year: "2025",
      issuer: "Unstop",
      summary: "Built and presented an idea-focused product solution under deadline constraints.",
      vocLink: "https://unstop.com/certificate-preview/85687fb3-6bf3-441b-9cca-97662a085e33?utm_campaign=site-emails",
      certificateLink: "https://unstop.com/certificate-preview/85687fb3-6bf3-441b-9cca-97662a085e33?utm_campaign=site-emails",
    },
    {
      id: 2,
      eventName: "DRISHTI-NE Hackathon",
      achievement: "Certificate of Participation",
      year: "2026",
      issuer: "Unstop Holiday Fest 2025",
      summary: "Worked on rapid implementation and solution presentation in a collaborative environment.",
      vocLink: "https://unstop.com/certificate-preview/10c3bcf7-6b65-4cd5-b80e-50a5cad35126?utm_campaign=site-emails",
      certificateLink: "https://unstop.com/certificate-preview/10c3bcf7-6b65-4cd5-b80e-50a5cad35126?utm_campaign=site-emails",
    },
  ],
};

export default function Credentials() {
  return (
    <section id="credentials" className="relative px-6 py-14 md:py-16" style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)' }}>
      <div className="pointer-events-none absolute -right-24 top-20 h-64 w-64 rounded-full blur-[95px]" style={{ background: 'var(--color-glow-green)' }} />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-7 border-b pb-3"
          style={{ borderColor: 'var(--border-color)' }}
        >
          <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tight mb-1" style={{ color: 'var(--text-primary)' }}>
            Extra <span style={{ color: 'var(--color-primary-olive)' }}>Activities</span>
          </h2>
          <p className="font-mono text-xs uppercase tracking-[0.18em]" style={{ color: 'var(--text-muted)' }}>
            Hackathons with verified links and certificates
          </p>
        </motion.div>

        <div className="mb-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-md p-3" style={{ backgroundColor: 'var(--bg-subtle)' }}>
            <p className="text-[10px] font-mono uppercase tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>Hackathons</p>
            <p className="mt-1 text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{credentialsData.hackathons.length} Participations</p>
          </div>
          <div className="rounded-md p-3" style={{ backgroundColor: 'var(--bg-subtle)' }}>
            <p className="text-[10px] font-mono uppercase tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>Proof</p>
            <p className="mt-1 text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Visit + certificate buttons included</p>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {credentialsData.hackathons.map((hackathon, index) => (
            <motion.article
              key={hackathon.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.03 }}
              className="rounded-md p-4"
              style={{ backgroundColor: 'var(--bg-subtle)' }}
            >
              <div className="mb-3 flex items-center justify-between pb-2">
                <div className="flex items-center gap-2">
                  <FaTrophy className="text-sm" style={{ color: 'var(--color-primary-olive)' }} />
                  <span className="text-xs font-mono uppercase tracking-[0.15em]" style={{ color: 'var(--color-primary-olive)' }}>Hackathon</span>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>{hackathon.year}</span>
              </div>

              <h3 className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>{hackathon.eventName}</h3>
              <p className="mt-1 text-sm" style={{ color: 'var(--color-primary-olive)' }}>{hackathon.achievement}</p>
              <p className="mt-2 text-xs leading-snug" style={{ color: 'var(--text-secondary)' }}>{hackathon.summary}</p>

              <div className="mt-3 flex gap-2">
                <a
                  href={hackathon.vocLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-sm transition-all duration-300"
                  style={{ border: '1px solid var(--color-primary-olive)', backgroundColor: 'rgba(122, 157, 40, 0.1)', color: 'var(--color-primary-olive)' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(122, 157, 40, 0.2)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(122, 157, 40, 0.1)'}
                >
                  Visit
                  <FaExternalLinkAlt className="text-[10px]" />
                </a>
                <a
                  href={hackathon.certificateLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-sm transition-all duration-300"
                  style={{ border: '1px solid var(--color-primary-olive)', backgroundColor: 'rgba(122, 157, 40, 0.1)', color: 'var(--color-primary-olive)' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(122, 157, 40, 0.2)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(122, 157, 40, 0.1)'}
                >
                  Certificate
                  <FaExternalLinkAlt className="text-[10px]" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
