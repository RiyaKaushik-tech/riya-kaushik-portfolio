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
    <section className="relative min-h-screen bg-black text-white py-32 overflow-hidden px-6">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[150px] -z-10 rounded-full" />

      <div className="max-w-6xl mx-auto relative">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic mb-24 text-center md:text-left"
        >
          Professional <span className="text-indigo-500">Core</span>
        </motion.h2>

        {/* The Graph Path */}
        <div className="absolute inset-0 top-60 left-0 w-full h-[500px] opacity-20 pointer-events-none hidden md:block">
          <svg viewBox="0 0 1000 100" className="w-full h-full">
            <motion.path
              d={graphPath}
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
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
        <div className="space-y-32 relative z-10">
          {aboutData.map((item, i) => (
            <motion.div 
              key={item.role}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-20`}
            >
              {/* Role Title & Description */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4">
                   <span className="text-xs font-mono text-indigo-500">SECTION_0{i + 1}</span>
                   <h3 className="text-3xl font-bold tracking-tight">
                     {item.role}
                   </h3>
                </div>
                <p className="text-neutral-400 text-lg leading-relaxed border-l border-white/10 pl-6">
                  {item.content}
                </p>
              </div>

              {/* Stat Node */}
              <div className="relative">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="w-44 h-44 rounded-full border border-white/5 bg-neutral-900/30 backdrop-blur-3xl flex flex-col items-center justify-center relative overflow-hidden group shadow-2xl"
                >
                  <div className="absolute inset-0 bg-indigo-500/5 group-hover:bg-indigo-500/10 transition-all duration-500" />
                  <span className="text-[10px] font-mono text-neutral-500 uppercase mb-2 tracking-widest">Focus Area</span>
                  <span className="text-sm font-bold text-white text-center px-6 leading-tight uppercase tracking-tighter">
                    {item.stat}
                  </span>
                  
                  <div className="absolute -bottom-1 w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_15px_#6366f1]" />
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