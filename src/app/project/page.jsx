"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaChevronRight, FaChevronLeft } from "react-icons/fa";

const projects = [
  {
    "title": "TaskPulse -(Project Management Tool)",
    "description": "Spearheaded full-stack development of a scalable MERN stack TaskPulse platform, implementing real-time notifications (Socket.io) and optimization techniques (caching, pagination) to reduce API latency and boost throughput.",
    "live": "https://task-pulse-jo23.onrender.com/",
    "github": "https://github.com/RiyaKaushik-tech/TaskPulse",
    "image": "/taskManager.png",
    "skills": ["React/Vite", "Redux", "Node.js/Express", "MongoDB"]
  },
  {
    "title": "Dashboard - Real-time Data Sync",
    "description": "Engineered a dynamic, TypeScript-based Personalized Content Dashboard using Next.js, integrating external APIs (News/TMDB) and Redux Toolkit (RTK) for centralized state management and real-time data visualization.",
    "live": "https://datasync-dashboard.vercel.app/",
    "github": "https://github.com/riya1807pro/datasync-dashboard",
    "image": "/datasync.png",
    "skills": ["React", "Next.js", "Typescript", "Tailwind CSS"]
  },
  {
    "title": "React Redux CRUD (Posts App)",
    "description": "Developed a lightweight CRUD application using React and Redux Toolkit (RTK) to manage posts, implementing reliable state management and localStorage persistence for data continuity.",
    "live": "https://redux-posts-app-lake.vercel.app/",
    "github": "https://github.com/riya1807pro/redux-posts-app",
    "image": "/crud_app.png",
    "skills": ["React", "Redux Toolkit", "Tailwind CSS", "Vite"]
  },
  {
    "title": "My Developer Portfolio",
    "description": "Designed and deployed a full-stack, responsive Personal Portfolio using Next.js and Framer Motion to showcase projects with high-performance animations and an integrated backend service for client communication.",
    "live": "https://cryptotracke.vercel.app/",
    "github": "https://github.com/riya1807pro/riya-kaushik-portfolio",
    "image": "/profile.png",
    "skills": ["Next.js", "Tailwind CSS", "Framer Motion"]
  }
];

export default function ProjectShowcase() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % projects.length);
  const prev = () => setActive((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section className="relative min-h-screen bg-black text-white py-24 px-6 flex flex-col justify-center overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-10">
          <div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">
              Featured <span className="text-indigo-500">Builds</span>
            </h2>
            <p className="mt-4 text-neutral-500 font-mono text-[10px] uppercase tracking-[0.4em]">
              Technical Case Studies // System Architecture
            </p>
          </div>
          
          {/* Curved Navigation Controls */}
          <div className="flex items-center gap-4">
            <button 
              onClick={prev} 
              className="p-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all group"
            >
              <FaChevronLeft size={14} />
            </button>
            <div className="font-mono text-sm text-indigo-500 tracking-widest">
              0{active + 1} / 0{projects.length}
            </div>
            <button 
              onClick={next} 
              className="p-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all group"
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Main Display Area */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Project Metadata */}
          <div className="lg:col-span-5 space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <span className="text-indigo-400 font-mono text-xs uppercase tracking-widest">Deployment Ready</span>
                  <h3 className="text-4xl md:text-6xl font-bold tracking-tight uppercase italic leading-tight">
                    {projects[active].title}
                  </h3>
                </div>

                <p className="text-neutral-400 text-lg leading-relaxed font-light border-l-2 border-indigo-500/30 pl-6">
                  {projects[active].description}
                </p>

                {/* Curved Skill Tags */}
                <div className="flex flex-wrap gap-2">
                  {projects[active].skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] px-4 py-1.5 rounded-full bg-white/5 text-neutral-300 border border-white/10 font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="pt-6 flex gap-6">
                  <a href={projects[active].github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-indigo-400 transition-colors group">
                    <FaGithub size={18} /> <span>Source_Code</span>
                  </a>
                  {projects[active].live && (
                    <a href={projects[active].live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-indigo-400 transition-colors group">
                      <FaExternalLinkAlt size={16} /> <span>Live_Preview</span>
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: Visual Frame (Super Curved) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={projects[active].image}
                  initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  transition={{ duration: 0.6, ease: "circOut" }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_2px,3px_100%] opacity-20" />
            </div>
          </div>
        </div>

        {/* BOTTOM: Fully Curved Navigation Tabs */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {projects.map((p, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`text-left p-2 rounded-2xl border transition-all duration-500 flex flex-col justify-center ${
                active === i 
                ? 'bg-indigo-500/10 border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.2)]' 
                : 'border-white/5 opacity-40 hover:opacity-100 hover:bg-white/5'
              }`}
            >
              <span className="text-[12px] font-bold camelCase tracking-tighter truncate block"> 0{i + 1}: {p.title}</span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}