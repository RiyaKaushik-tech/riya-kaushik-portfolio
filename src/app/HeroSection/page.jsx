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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a0033] px-6 pt-24 pb-32 text-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-cyan-500/8 blur-[100px] animate-pulse" />
        <div className="absolute right-0 top-1/2 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-[120px] animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/4 h-72 w-72 rounded-full bg-gradient-to-t from-emerald-500/5 to-transparent blur-[80px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-12 lg:items-center lg:gap-24">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="inline-flex items-center gap-3 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 w-fit">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-300">Featured</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight bg-gradient-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-transparent">
            Full-Stack Developer
          </h1>

          <p className="text-xl md:text-2xl leading-relaxed text-neutral-300 max-w-2xl">
            Building scalable web applications with React, Next.js, Node.js & modern cloud infrastructure. 
            Delivering production-ready solutions for startups and enterprises.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/riya1807pro"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <FaGithub />
              <span>View GitHub</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <button
              onClick={handleResumeDownload}
              className="inline-flex items-center gap-3 rounded-2xl border-2 border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105"
            >
              <FaFileDownload />
              Download CV
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 pt-8">
            {[
              { value: "6+", label: "Tech Stacks", color: "cyan" },
              { value: "15+", label: "Projects", color: "indigo" },
              { value: "100%", label: "Client Satisfaction", color: "emerald" }
            ].map(({ value, label, color }, i) => (
              <div key={i} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
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
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-black/20 to-transparent p-8 backdrop-blur-xl shadow-2xl">
            <div className="relative z-10">
              <img
                className="w-full rounded-2xl border border-white/20 object-cover aspect-[4/3]"
                src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/1/3d-illustration.png"
                alt="Full-stack development workflow"
              />
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 rounded-3xl blur-xl -z-10 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}