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
    <section className="relative min-h-screen overflow-hidden bg-[#05080f] px-6 py-14 text-white md:py-16">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[320px] w-[660px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/8 blur-[110px]" />
      <div className="absolute -left-20 top-14 -z-10 h-56 w-56 rounded-full bg-cyan-500/8 blur-[90px]" />

      <div className="max-w-6xl mx-auto relative">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-6 text-center text-4xl font-black uppercase italic tracking-tight md:mb-8 md:text-left md:text-5xl"
        >
          Professional <span className="text-cyan-400">Core</span>
        </motion.h2>

        <div className="mb-10 grid gap-3 sm:grid-cols-3">
          <div className="rounded-md border border-white/10 bg-[#08101a] p-3">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">Focus</p>
            <p className="mt-1 text-sm font-semibold text-neutral-100">Scalable Product Systems</p>
          </div>
          <div className="rounded-md border border-white/10 bg-[#08101a] p-3">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">Approach</p>
            <p className="mt-1 text-sm font-semibold text-neutral-100">Performance with Clarity</p>
          </div>
          <div className="rounded-md border border-white/10 bg-[#08101a] p-3">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">Workflow</p>
            <p className="mt-1 text-sm font-semibold text-neutral-100">Build, Measure, Refine</p>
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
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#a855f7" />
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
              <div className="flex-1 space-y-3 rounded-md border border-white/10 bg-[#08101a] p-4 md:p-5">
                <div className="flex items-center gap-4">
                   <span className="text-xs font-mono text-cyan-400">SECTION_0{i + 1}</span>
                   <h3 className="text-2xl font-bold tracking-tight">
                     {item.role}
                   </h3>
                </div>
                <p className="border-l border-white/20 pl-4 text-base leading-snug text-neutral-300">
                  {item.content}
                </p>
              </div>

              {/* Stat Node */}
              <div className="relative">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  className="relative flex h-36 w-36 flex-col items-center justify-center overflow-hidden rounded-full border border-white/10 bg-[#0b1220]"
                >
                  <div className="absolute inset-0 bg-cyan-500/5" />
                  <span className="text-[10px] font-mono text-neutral-500 uppercase mb-2 tracking-widest">Focus Area</span>
                  <span className="text-xs font-bold text-white text-center px-4 leading-tight uppercase tracking-tighter">
                    {item.stat}
                  </span>
                  
                  <div className="absolute -bottom-1 w-1.5 h-1.5 bg-cyan-400 rounded-full" />
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