"use client";

import { motion } from "framer-motion";

const aboutData = [
  {
    role: "Full Stack Developer",
    content: "Specializing in the integration of client-side logic with robust server environments. I focus on managing data flow, API orchestration, and ensuring synchronization between frontend and database layers.",
    stat: "System Architecture",
    point: 20 
  },
  {
    role: "Frontend Developer",
    content: "Building high-fidelity user interfaces with a focus on optimized rendering and accessibility. I implement responsive designs that ensure a seamless experience across all device standards.",
    stat: "Interface Precision",
    point: 80 
  },
  {
    role: "React Developer",
    content: "Developing modular, type-safe component libraries. I leverage modern React patterns, including Hooks and Context API, to create maintainable and scalable frontend architectures.",
    stat: "Modular Logic",
    point: 40
  },
  {
    role: "Web App Developer",
    content: "Transforming functional requirements into performance-driven web products. My process includes SEO optimization, cross-browser compatibility, and performance auditing.",
    stat: "Platform Standards",
    point: 60
  }
];

export default function AboutPage() {
  const graphPath = `M0 ${aboutData[0].point} L 250 ${aboutData[0].point} L 500 ${aboutData[1].point} L 750 ${aboutData[2].point} L 1000 ${aboutData[3].point}`;

  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-14 md:py-16" style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)' }}>
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[320px] w-[660px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px]" style={{ background: 'var(--color-bg-blur)' }} />
      <div className="absolute -left-20 top-14 -z-10 h-56 w-56 rounded-full blur-[90px]" style={{ background: 'var(--color-glow-green)' }} />

      <div className="max-w-6xl mx-auto relative">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-6 text-center text-4xl font-black uppercase italic tracking-tight md:mb-8 md:text-left md:text-5xl"
        >
          Professional <span style={{ color: 'var(--color-primary-olive)' }}>Core</span>
        </motion.h2>

        <div className="mb-10 grid gap-3 sm:grid-cols-3">
          <div className="rounded-md border p-3" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-card)' }}>
            <p className="text-[10px] font-mono uppercase tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>Focus</p>
            <p className="mt-1 text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Scalable Product Systems</p>
          </div>
          <div className="rounded-md border p-3" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-card)' }}>
            <p className="text-[10px] font-mono uppercase tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>Approach</p>
            <p className="mt-1 text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Performance with Clarity</p>
          </div>
          <div className="rounded-md border p-3" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-card)' }}>
            <p className="text-[10px] font-mono uppercase tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>Workflow</p>
            <p className="mt-1 text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Build, Measure, Refine</p>
          </div>
        </div>

        {/* The Graph Path */}
        <div className="absolute inset-0 top-56 left-0 w-full h-[420px] opacity-12 pointer-events-none hidden md:block">
          <svg viewBox="0 0 1000 100" className="w-full h-full">
            <motion.path
              d={graphPath}
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            />
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--color-primary-olive)" />
                <stop offset="100%" stopColor="var(--color-secondary-green)" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Content Rows */}
        <div className="space-y-12 relative z-10">
          {aboutData.map((item, i) => (
            <motion.div 
              key={item.role}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-5 md:gap-8`}
            >
              {/* Role Title & Description */}
              <div className="flex-1 space-y-3 rounded-md border p-4 md:p-5" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-card)' }}>
                <div className="flex items-center gap-4">
                   <span className="text-xs font-mono" style={{ color: 'var(--color-primary-olive)' }}>SECTION_0{i + 1}</span>
                   <h3 className="text-2xl font-bold tracking-tight">
                     {item.role}
                   </h3>
                </div>
                <p className="border-l pl-4 text-base leading-snug" style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}>
                  {item.content}
                </p>
              </div>

              {/* Stat Node */}
              <div className="relative">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  className="relative flex h-36 w-36 flex-col items-center justify-center overflow-hidden rounded-full border"
                  style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-card)' }}
                >
                  <div className="absolute inset-0" style={{ background: 'rgba(122, 157, 40, 0.05)' }} />
                  <span className="text-[10px] font-mono uppercase mb-2 tracking-widest" style={{ color: 'var(--text-muted)' }}>Focus Area</span>
                  <span className="text-xs font-bold text-center px-4 leading-tight uppercase tracking-tighter" style={{ color: 'var(--text-primary)' }}>
                    {item.stat}
                  </span>
                  
                  <div className="absolute -bottom-1 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-primary-olive)' }} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Professional Summary */}
     
    </section>
  );
}