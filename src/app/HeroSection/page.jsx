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
    <section id="home" className="relative min-h-[78vh] flex items-center overflow-hidden px-6 pt-18 pb-12" style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -left-24 top-1/4 h-64 w-64 rounded-full blur-[80px]" style={{ background: 'var(--color-glow-green)' }} />
        <div className="absolute right-0 top-1/2 h-[340px] w-[340px] rounded-full blur-[100px]" style={{ background: 'var(--color-bg-blur)' }} />
        <div className="absolute bottom-14 left-1/4 h-48 w-48 rounded-full blur-[70px]" style={{ background: 'var(--color-glow-green)' }} />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="lg:col-span-7 space-y-5"
        >
          <div className="inline-flex items-center gap-2 rounded-sm px-3 py-1 w-fit" style={{ backgroundColor: 'var(--bg-subtle)' }}>
            <span className="text-xs font-mono uppercase tracking-[0.3em]" style={{ color: 'var(--color-primary-olive)' }}>Featured</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, var(--text-primary), var(--color-primary-olive), var(--color-secondary-green))' }}>
            Full-Stack Developer
          </h1>

          <p className="text-base md:text-lg leading-snug max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
            Building scalable web applications with React, Next.js, Node.js & modern cloud infrastructure. 
            Delivering production-ready solutions for startups and enterprises.
          </p>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href="https://github.com/riya1807pro"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-2 rounded-sm px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-all duration-300"
              style={{ backgroundColor: 'var(--color-primary-olive)', color: '#000', cursor: 'pointer' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-olive-light)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-olive)'}
            >
              <FaGithub className="text-[11px]" />
              <span>View GitHub</span>
              <FaArrowRight className="text-[11px] group-hover:translate-x-0.5 transition-transform duration-300" />
            </a>

            <button
              onClick={handleResumeDownload}
              className="inline-flex items-center gap-2 rounded-sm px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-all duration-300"
              style={{ borderColor: 'var(--color-primary-olive)', borderWidth: '1px', backgroundColor: 'var(--bg-subtle)', color: 'var(--text-primary)' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-primary-olive)'; e.currentTarget.style.color = '#000'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--bg-subtle)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
            >
              <FaFileDownload className="text-[11px]" />
              Resume
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-2.5 pt-3">
            {[
              { value: "6+", label: "Tech Stacks" },
              { value: "15+", label: "Projects" },
              { value: "100%", label: "Client Satisfaction" }
            ].map(({ value, label }, i) => (
              <div key={i} className="group rounded-md border p-3 text-center transition-all duration-300" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-card)' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--bg-subtle-strong)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--bg-card)'; }}>
                <div className="text-2xl font-black mb-1" style={{ color: 'var(--color-primary-olive)' }}>
                  {value}
                </div>
                <p className="text-xs font-mono uppercase tracking-wider transition-colors" style={{ color: 'var(--text-muted)' }}>
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
          <div className="relative rounded-lg p-4" style={{ backgroundColor: 'var(--bg-subtle)' }}>
            <div className="relative z-10">
              <img
                className="w-full rounded-md object-cover aspect-[4/3]"
                src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/1/3d-illustration.png"
                alt="Full-stack development workflow"
              />
            </div>
            <div className="absolute -inset-1 rounded-lg blur-md -z-10" style={{ background: 'var(--color-bg-blur)' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}