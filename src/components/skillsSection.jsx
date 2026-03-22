"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Frontend Mastery",
    skills: [
      { name: "React/Next.js", level: 95, color: "from-blue-400 to-cyan-400" },
      { name: "TypeScript", level: 85, color: "from-blue-600 to-indigo-500" },
      { name: "Tailwind CSS", level: 90, color: "from-cyan-400 to-sky-400" },
    ],
  },
  {
    title: "Backend & Systems",
    skills: [
      { name: "Node.js", level: 80, color: "from-green-400 to-emerald-500" },
      { name: "Rest APIs", level: 90, color: "from-orange-400 to-red-500" },
      { name: "PostgreSQL", level: 75, color: "from-indigo-400 to-purple-500" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="relative bg-[#05080f] px-6 py-14 text-white md:py-16">
      {/* Background Glows matching your Hero 3D shape */}
      <div className="absolute top-1/2 left-0 w-[380px] h-[380px] bg-blue-500/8 blur-[90px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute right-0 top-20 h-56 w-56 rounded-full bg-cyan-500/8 blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-3">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight italic uppercase">
              Technical <span className="text-cyan-400">Metrics</span>
            </h2>
            <p className="mt-2 font-mono text-sm text-neutral-400">Proficiency and architecture breakdown</p>
          </div>
          <div className="text-right hidden md:block">
            <span className="text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full text-neutral-400">
              Updated 2024
            </span>
          </div>
        </div>

        <div className="mb-8 grid gap-3 sm:grid-cols-3">
          <div className="rounded-md bg-white/[0.03] p-3">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">Frontend</p>
            <p className="mt-1 text-sm font-semibold text-neutral-100">Component-first delivery</p>
          </div>
          <div className="rounded-md bg-white/[0.03] p-3">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">Backend</p>
            <p className="mt-1 text-sm font-semibold text-neutral-100">Reliable API architecture</p>
          </div>
          <div className="rounded-md bg-white/[0.03] p-3">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">Optimization</p>
            <p className="mt-1 text-sm font-semibold text-neutral-100">Performance-driven systems</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => (
            <motion.div 
              key={cat.title}
              initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-5 rounded-md bg-white/[0.04] p-4 md:p-5"
            >
              <h3 className="text-lg font-bold tracking-wider text-neutral-300 uppercase pb-2">
                {cat.title}
              </h3>
              
              <div className="space-y-6">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="relative">
                    <div className="flex justify-between mb-2 items-end">
                      <span className="text-base font-bold tracking-tight text-neutral-100">{skill.name}</span>
                      <span className="text-xs font-mono text-cyan-300">{skill.level}%</span>
                    </div>
                    
                    {/* The "Gauge" Bar */}
                    <div className="h-1.5 w-full bg-white/8 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${skill.color} relative`}
                      >
                        {/* Glow tip */}
                        <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-white/70 blur-[1px] opacity-50" />
                      </motion.div>
                    </div>

                    {/* Ambient light under the bar */}
                    <div 
                      className={`absolute -bottom-3 left-0 w-full h-5 opacity-8 blur-xl bg-gradient-to-r ${skill.color} pointer-events-none`} 
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Circular "Full Stack" Indicator Section */}
        <div className="mt-10 flex flex-col items-center gap-6 rounded-md bg-white/[0.04] p-4 md:flex-row md:p-5">
            <div className="relative w-36 h-36 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                    <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-white/5" />
                    <motion.circle 
                        cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="12" fill="transparent" 
                        strokeDasharray="502" 
                        initial={{ strokeDashoffset: 502 }}
                        whileInView={{ strokeDashoffset: 100 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        className="text-cyan-400"
                    />
                </svg>
                <div className="absolute text-center">
                    <span className="text-3xl font-black">90%</span>
                    <p className="text-[10px] uppercase font-bold text-neutral-500">Efficiency</p>
                </div>
            </div>
            <div className="flex-1">
                <h4 className="text-xl font-bold mb-2">Web App Architecture</h4>
                <p className="text-neutral-400 text-sm leading-snug">
                    Specialized in building end-to-end scalable applications. My workflow covers everything from 
                    <span className="text-white"> UI Design </span> to <span className="text-white"> Database Optimization</span>.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}