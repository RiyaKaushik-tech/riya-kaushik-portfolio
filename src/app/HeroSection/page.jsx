"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaFileDownload } from "react-icons/fa";

export default function Hero() {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Riya-Kaushik-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-[78vh] flex items-center overflow-hidden bg-gradient-to-br from-black via-[#060b13] to-[#0c1523] px-6 pt-18 pb-12 text-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -left-24 top-1/4 h-64 w-64 rounded-full bg-cyan-500/8 blur-[80px]" />
        <div className="absolute right-0 top-1/2 h-[340px] w-[340px] rounded-full bg-blue-500/8 blur-[100px]" />
        <div className="absolute bottom-14 left-1/4 h-48 w-48 rounded-full bg-cyan-500/5 blur-[70px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="lg:col-span-7 space-y-5"
        >
          <div className="inline-flex items-center gap-2 rounded-sm bg-white/5 px-3 py-1 w-fit">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-300">Featured</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
            Full-Stack Developer
          </h1>

          <p className="text-base md:text-lg leading-snug text-neutral-300 max-w-2xl">
            Building scalable web applications with React, Next.js, Node.js & modern cloud infrastructure. 
            Delivering production-ready solutions for startups and enterprises.
          </p>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href="https://github.com/riya1807pro"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-2 rounded-sm bg-cyan-500 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black transition-all duration-300 hover:bg-cyan-400"
            >
              <FaGithub className="text-[11px]" />
              <span>View GitHub</span>
              <FaArrowRight className="text-[11px] group-hover:translate-x-0.5 transition-transform duration-300" />
            </a>

            <button
              onClick={handleResumeDownload}
              className="inline-flex items-center gap-2 rounded-sm border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
            >
              <FaFileDownload className="text-[11px]" />
              Resume
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-2.5 pt-3">
            {[
              { value: "6+", label: "Tech Stacks", color: "cyan" },
              { value: "15+", label: "Projects", color: "indigo" },
              { value: "100%", label: "Client Satisfaction", color: "emerald" }
            ].map(({ value, label, color }, i) => (
              <div key={i} className="group rounded-md border border-white/10 bg-[#08101a] p-3 text-center hover:bg-white/[0.08] transition-all duration-300">
                <div className={`text-2xl font-black bg-gradient-to-r from-${color}-400 to-${color}-500 bg-clip-text text-transparent mb-1`}>
                  {value}
                </div>
                <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 group-hover:text-white transition-colors">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-lg bg-white/[0.04] p-4">
            <div className="relative z-10">
              <img
                className="w-full rounded-md object-cover aspect-[4/3]"
                src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/1/3d-illustration.png"
                alt="Full-stack development workflow"
              />
            </div>
            <div className="absolute -inset-1 bg-cyan-500/8 rounded-lg blur-md -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}