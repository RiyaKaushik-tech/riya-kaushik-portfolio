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
    <section id="credentials" className="relative bg-[#05080f] px-6 py-14 text-white md:py-16">
      <div className="pointer-events-none absolute -right-24 top-20 h-64 w-64 rounded-full bg-cyan-500/8 blur-[95px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-7 border-b border-white/10 pb-3"
        >
          <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tight text-white mb-1">
            Extra <span className="text-cyan-300">Activities</span>
          </h2>
          <p className="text-neutral-400 font-mono text-xs uppercase tracking-[0.18em]">
            Hackathons with verified links and certificates
          </p>
        </motion.div>

        <div className="mb-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-md bg-white/[0.03] p-3">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">Hackathons</p>
            <p className="mt-1 text-sm font-semibold text-neutral-100">{credentialsData.hackathons.length} Participations</p>
          </div>
          <div className="rounded-md bg-white/[0.03] p-3">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">Proof</p>
            <p className="mt-1 text-sm font-semibold text-neutral-100">Visit + certificate buttons included</p>
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
              className="rounded-md bg-white/[0.04] p-4"
            >
              <div className="mb-3 flex items-center justify-between pb-2">
                <div className="flex items-center gap-2">
                  <FaTrophy className="text-cyan-300 text-sm" />
                  <span className="text-xs font-mono uppercase tracking-[0.15em] text-cyan-300">Hackathon</span>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">{hackathon.year}</span>
              </div>

              <h3 className="text-base font-semibold text-neutral-100">{hackathon.eventName}</h3>
              <p className="mt-1 text-sm text-cyan-300">{hackathon.achievement}</p>
              <p className="mt-2 text-xs leading-snug text-neutral-400">{hackathon.summary}</p>

              <div className="mt-3 flex gap-2">
                <a
                  href={hackathon.vocLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-sm border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.14em] text-cyan-300 transition-all duration-300 hover:bg-cyan-500/20"
                >
                  Visit
                  <FaExternalLinkAlt className="text-[10px]" />
                </a>
                <a
                  href={hackathon.certificateLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-sm border border-blue-400/30 bg-blue-500/10 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.14em] text-blue-300 transition-all duration-300 hover:bg-blue-500/20"
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
