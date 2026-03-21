"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaCertificate, FaTrophy, FaFileAlt, FaExternalLinkAlt } from "react-icons/fa";

const credentialsData = {
  certifications: [
    {
      id: 1,
      title: "Full Stack Web Development",
      issuer: "Add Issuer Name",
      year: "2025",
      verify: "Add certificate link",
    },
    {
      id: 2,
      title: "React Advanced Patterns",
      issuer: "Add Platform Name",
      year: "2024",
      verify: "Add certificate link",
    },
    {
      id: 3,
      title: "Backend Architecture",
      issuer: "Add Course Platform",
      year: "2024",
      verify: "Add certificate link",
    },
  ],
  hackathons: [
    {
      id: 1,
      eventName: "Paradox 2.0 Hackathon",
      achievement: "Participant",
      year: "2025",
      issuer: "Unstop",
      vocLink: "https://unstop.com/certificate-preview/85687fb3-6bf3-441b-9cca-97662a085e33?utm_campaign=site-emails",
      certificateLink: "https://unstop.com/certificate-preview/85687fb3-6bf3-441b-9cca-97662a085e33?utm_campaign=site-emails",
    },
    {
      id: 2,
      eventName: "DRISHTI-NE Hackathon",
      achievement: "Certificate of Participation",
      year: "2026",
      issuer: "Unstop Holiday Fest 2025",
      vocLink: "https://unstop.com/certificate-preview/10c3bcf7-6b65-4cd5-b80e-50a5cad35126?utm_campaign=site-emails",
      certificateLink: "https://unstop.com/certificate-preview/10c3bcf7-6b65-4cd5-b80e-50a5cad35126?utm_campaign=site-emails",
    },
  ],
  internship: {
    completionCertificate: "Add Completion Certificate link",
    letterOfRecommendation: "Add LOR link",
    locationVerification: "Add LOC link",
  },
};

export default function Credentials() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="credentials"
      className="relative min-h-screen bg-black px-6 py-28 text-white md:py-32"
    >
      {/* Background Glows */}
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-indigo-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white mb-2">
            Verified <span className="text-indigo-400">Credentials</span>
          </h2>
          <p className="text-neutral-400 font-mono text-sm uppercase tracking-widest">
            Certifications, Hackathons, and Internship Documentation
          </p>
        </motion.div>

        {/* Summary Cards - 3 Column */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24 grid gap-4 sm:grid-cols-3"
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">
              Certifications
            </p>
            <p className="mt-1 text-sm font-semibold text-neutral-100">
              {credentialsData.certifications.length} Verified
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">
              Hackathons
            </p>
            <p className="mt-1 text-sm font-semibold text-neutral-100">
              {credentialsData.hackathons.length} Participations
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">
              Internship
            </p>
            <p className="mt-1 text-sm font-semibold text-neutral-100">Documented</p>
          </div>
        </motion.div>

        {/* Main Content Grid - 2 Columns */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Column: Certifications & Hackathons */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Certifications Section */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <FaCertificate className="text-indigo-400 text-lg" />
                <h3 className="text-xl font-bold uppercase tracking-widest text-neutral-100">
                  Certifications
                </h3>
              </div>

              <div className="space-y-4">
                {credentialsData.certifications.map((cert, idx) => (
                  <motion.div
                    key={cert.id}
                    variants={itemVariants}
                    className="p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-neutral-100">
                          {cert.title}
                        </p>
                        <p className="text-[11px] font-mono text-neutral-500 mt-1">
                          {cert.issuer} • {cert.year}
                        </p>
                      </div>
                    </div>
                    <a 
                      href={cert.verify}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[10px] mt-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-indigo-400/30 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 transition-all font-mono uppercase tracking-wider"
                    >
                      Verify <FaExternalLinkAlt className="text-xs" />
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Hackathons Section */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <FaTrophy className="text-cyan-400 text-lg" />
                <h3 className="text-xl font-bold uppercase tracking-widest text-neutral-100">
                  Hackathons
                </h3>
              </div>

              <div className="space-y-4">
                {credentialsData.hackathons.map((hackathon) => (
                  <motion.div
                    key={hackathon.id}
                    variants={itemVariants}
                    className="p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300"
                  >
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-neutral-100">
                          {hackathon.eventName}
                        </p>
                        <p className="text-[11px] font-mono text-cyan-400 mt-1">
                          {hackathon.achievement}
                        </p>
                        <p className="text-[10px] font-mono text-neutral-500 mt-1">
                          {hackathon.year}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={hackathon.vocLink}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[10px] px-2.5 py-1 rounded-lg border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 transition-all font-mono uppercase tracking-wider flex items-center gap-1"
                        >
                          VOC <FaExternalLinkAlt className="text-xs" />
                        </a>
                        <a
                          href={hackathon.certificateLink}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[10px] px-2.5 py-1 rounded-lg border border-indigo-400/30 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 transition-all font-mono uppercase tracking-wider flex items-center gap-1"
                        >
                          Cert <FaExternalLinkAlt className="text-xs" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Internship Documentation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8 backdrop-blur-xl h-fit"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <FaFileAlt className="text-purple-400 text-lg" />
              <h3 className="text-xl font-bold uppercase tracking-widest text-neutral-100">
                Internship Proof
              </h3>
            </div>

            <div className="space-y-4">
              {/* Completion Certificate */}
              <motion.a
                href={credentialsData.internship.completionCertificate}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2 }}
                className="group block p-5 rounded-xl border-2 border-purple-400/30 bg-purple-500/10 hover:bg-purple-500/20 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-purple-400" />
                  <span className="text-xs font-mono uppercase tracking-widest text-purple-300">
                    Completion
                  </span>
                </div>
                <p className="text-sm font-semibold text-neutral-100 group-hover:text-purple-200 transition-colors">
                  Internship Completion Certificate
                </p>
                <p className="text-[10px] text-neutral-500 mt-2 font-mono">
                  Official certificate from company
                </p>
                <FaExternalLinkAlt className="text-neutral-600 group-hover:text-purple-400 text-xs mt-3 transition-colors" />
              </motion.a>

              {/* Letter of Recommendation */}
              <motion.a
                href={credentialsData.internship.letterOfRecommendation}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2 }}
                className="group block p-5 rounded-xl border-2 border-indigo-400/30 bg-indigo-500/10 hover:bg-indigo-500/20 hover:border-indigo-400/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-400" />
                  <span className="text-xs font-mono uppercase tracking-widest text-indigo-300">
                    Recommendation
                  </span>
                </div>
                <p className="text-sm font-semibold text-neutral-100 group-hover:text-indigo-200 transition-colors">
                  Letter of Recommendation (LOR)
                </p>
                <p className="text-[10px] text-neutral-500 mt-2 font-mono">
                  Signed by mentor/supervisor
                </p>
                <FaExternalLinkAlt className="text-neutral-600 group-hover:text-indigo-400 text-xs mt-3 transition-colors" />
              </motion.a>

              {/* Verification Location */}
              <motion.a
                href={credentialsData.internship.locationVerification}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2 }}
                className="group block p-5 rounded-xl border-2 border-cyan-400/30 bg-cyan-500/10 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="text-xs font-mono uppercase tracking-widest text-cyan-300">
                    Verification
                  </span>
                </div>
                <p className="text-sm font-semibold text-neutral-100 group-hover:text-cyan-200 transition-colors">
                  Location of Completion (LOC)
                </p>
                <p className="text-[10px] text-neutral-500 mt-2 font-mono">
                  Attendance & Timeline Proof
                </p>
                <FaExternalLinkAlt className="text-neutral-600 group-hover:text-cyan-400 text-xs mt-3 transition-colors" />
              </motion.a>
            </div>

            {/* Info Box */}
            <div className="mt-6 p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-2">
                Status
              </p>
              <p className="text-xs text-neutral-400 leading-relaxed">
                All documents are verified and can be validated upon request.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
