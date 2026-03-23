"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Frontend Mastery",
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Backend & Systems",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Rest APIs", level: 90 },
      { name: "PostgreSQL", level: 75 },
    ],
  },
];

export default function Skills() {
  return (
    <section className="relative px-6 py-14 md:py-16" style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)' }}>
      {/* Background Glows matching your Hero 3D shape */}
      <div className="absolute top-1/2 left-0 w-[380px] h-[380px] blur-[90px] -translate-y-1/2 pointer-events-none" style={{ background: 'var(--color-bg-blur)' }} />
      <div className="absolute right-0 top-20 h-56 w-56 rounded-full blur-[90px] pointer-events-none" style={{ background: 'var(--color-glow-green)' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-3">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight italic uppercase">
              Technical <span style={{ color: 'var(--color-primary-olive)' }}>Metrics</span>
            </h2>
            <p className="mt-2 font-mono text-sm" style={{ color: 'var(--text-muted)' }}>Proficiency and architecture breakdown</p>
          </div>
          <div className="text-right hidden md:block">
            <span className="text-xs border px-3 py-1 rounded-full" style={{ backgroundColor: 'var(--bg-subtle)', borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}>
              Updated 2024
            </span>
          </div>
        </div>

        <div className="mb-8 grid gap-3 sm:grid-cols-3">
          <div className="rounded-md p-3" style={{ backgroundColor: 'var(--bg-subtle)' }}>
            <p className="text-[10px] font-mono uppercase tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>Frontend</p>
            <p className="mt-1 text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Component-first delivery</p>
          </div>
          <div className="rounded-md p-3" style={{ backgroundColor: 'var(--bg-subtle)' }}>
            <p className="text-[10px] font-mono uppercase tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>Backend</p>
            <p className="mt-1 text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Reliable API architecture</p>
          </div>
          <div className="rounded-md p-3" style={{ backgroundColor: 'var(--bg-subtle)' }}>
            <p className="text-[10px] font-mono uppercase tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>Optimization</p>
            <p className="mt-1 text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Performance-driven systems</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => (
            <motion.div 
              key={cat.title}
              initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-5 rounded-md p-4 md:p-5"
              style={{ backgroundColor: 'var(--bg-subtle)' }}
            >
              <h3 className="text-lg font-bold tracking-wider uppercase pb-2" style={{ color: 'var(--text-secondary)' }}>
                {cat.title}
              </h3>
              
              <div className="space-y-6">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="relative">
                    <div className="flex justify-between mb-2 items-end">
                      <span className="text-base font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>{skill.name}</span>
                      <span className="text-xs font-mono" style={{ color: 'var(--color-primary-olive)' }}>{skill.level}%</span>
                    </div>
                    
                    {/* The "Gauge" Bar */}
                    <div className="h-1.5 w-full rounded-full overflow-hidden" style={{ backgroundColor: 'var(--bg-subtle-strong)' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        className="h-full relative"
                        style={{ background: 'linear-gradient(to right, var(--color-primary-olive), var(--color-secondary-green))' }}
                      >
                        {/* Glow tip */}
                        <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-white/70 blur-[1px] opacity-50" />
                      </motion.div>
                    </div>

                    {/* Ambient light under the bar */}
                    <div className="absolute -bottom-3 left-0 w-full h-5 opacity-8 blur-xl pointer-events-none" style={{ background: 'linear-gradient(to right, var(--color-primary-olive), var(--color-secondary-green))' }} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Circular "Full Stack" Indicator Section */}
              <div className="mt-10 flex flex-col items-center gap-6 rounded-md p-4 md:flex-row md:p-5" style={{ backgroundColor: 'var(--bg-subtle)' }}>
            <div className="relative w-36 h-36 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                    <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="12" fill="transparent" style={{ color: 'var(--bg-subtle-strong)' }} />
                    <motion.circle 
                        cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="12" fill="transparent" 
                        strokeDasharray="502" 
                        initial={{ strokeDashoffset: 502 }}
                        whileInView={{ strokeDashoffset: 100 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                      style={{ color: 'var(--color-primary-olive)' }}
                    />
                </svg>
                <div className="absolute text-center">
                    <span className="text-3xl font-black">90%</span>
                    <p className="text-[10px] uppercase font-bold" style={{ color: 'var(--text-muted)' }}>Efficiency</p>
                </div>
            </div>
            <div className="flex-1">
                <h4 className="text-xl font-bold mb-2">Web App Architecture</h4>
                  <p className="text-sm leading-snug" style={{ color: 'var(--text-secondary)' }}>
                    Specialized in building end-to-end scalable applications. My workflow covers everything from 
                    <span style={{ color: 'var(--text-primary)' }}> UI Design </span> to <span style={{ color: 'var(--text-primary)' }}> Database Optimization</span>.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}