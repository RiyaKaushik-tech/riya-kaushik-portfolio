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
    <section className="relative min-h-screen py-14 px-6 flex flex-col justify-center overflow-hidden md:py-16" style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)' }}>
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-12 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] blur-[90px] rounded-full" style={{ background: 'var(--color-bg-blur)' }} />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-4" style={{ borderColor: 'var(--border-color)' }}>
          <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase italic leading-none">
              Featured <span style={{ color: 'var(--color-primary-olive)' }}>Builds</span>
            </h2>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: 'var(--text-muted)' }}>
              Technical Case Studies // System Architecture
            </p>
          </div>
          
          {/* Curved Navigation Controls */}
          <div className="flex items-center gap-4">
            <button 
              onClick={prev} 
              className="p-2.5 rounded-sm border transition-all duration-300"
              style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)', backgroundColor: 'transparent' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--bg-subtle-strong)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
            >
              <FaChevronLeft size={12} />
            </button>
            <div className="font-mono text-xs tracking-widest" style={{ color: 'var(--color-primary-olive)' }}>
              0{active + 1} / 0{projects.length}
            </div>
            <button 
              onClick={next} 
              className="p-2.5 rounded-sm border transition-all duration-300"
              style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)', backgroundColor: 'transparent' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--bg-subtle-strong)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
            >
              <FaChevronRight size={12} />
            </button>
          </div>
        </div>

        <div className="mb-8 grid gap-3 sm:grid-cols-3">
          <div className="rounded-md p-3" style={{ backgroundColor: 'var(--bg-subtle)' }}>
            <p className="text-[10px] font-mono uppercase tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>Workflow</p>
            <p className="mt-1 text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Research to Deployment</p>
          </div>
          <div className="rounded-md p-3" style={{ backgroundColor: 'var(--bg-subtle)' }}>
            <p className="text-[10px] font-mono uppercase tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>Focus</p>
            <p className="mt-1 text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Scalable Product Features</p>
          </div>
          <div className="rounded-md p-3" style={{ backgroundColor: 'var(--bg-subtle)' }}>
            <p className="text-[10px] font-mono uppercase tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>Delivery</p>
            <p className="mt-1 text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Production-ready Builds</p>
          </div>
        </div>

        {/* Main Display Area */}
        <div className="grid lg:grid-cols-12 gap-6 items-center">
          
          {/* LEFT: Project Metadata */}
          <div className="lg:col-span-5 space-y-5 rounded-md p-4 md:p-5" style={{ backgroundColor: 'var(--bg-subtle)' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <span className="font-mono text-xs uppercase tracking-wider" style={{ color: 'var(--color-primary-olive)' }}>Deployment Ready</span>
                  <h3 className="text-3xl md:text-5xl font-bold tracking-tight uppercase italic leading-tight">
                    {projects[active].title}
                  </h3>
                </div>

                <p className="text-base leading-snug font-light border-l-2 pl-4" style={{ borderColor: 'var(--color-primary-olive)', color: 'var(--text-secondary)' }}>
                  {projects[active].description}
                </p>

                {/* Curved Skill Tags */}
                <div className="flex flex-wrap gap-2">
                  {projects[active].skills.map((skill, i) => (
                    <span
                      key={i} 
                      className="text-[10px] px-2.5 py-1 rounded-sm font-mono"
                      style={{ backgroundColor: 'var(--bg-subtle-strong)', color: 'var(--text-secondary)' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="pt-2 flex gap-4">
                  <a href={projects[active].github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider transition-colors" style={{ color: 'var(--text-secondary)' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-primary-olive)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; }}>
                    <FaGithub size={14} /> <span>Source</span>
                  </a>
                  {projects[active].live && (
                    <a href={projects[active].live} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider transition-colors" style={{ color: 'var(--text-secondary)' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-primary-olive)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; }}>
                      <FaExternalLinkAlt size={12} /> <span>Live</span>
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: Visual Frame (Super Curved) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-video rounded-md overflow-hidden border" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-card)' }}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={projects[active].image}
                  initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_2px,3px_100%] opacity-20" />
            </div>
          </div>
        </div>

        {/* BOTTOM: Fully Curved Navigation Tabs */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-2.5">
          {projects.map((p, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`text-left p-2 rounded-sm border transition-all duration-300 flex flex-col justify-center ${
                active === i 
                ? 'opacity-100' 
                : 'opacity-70 hover:opacity-100'
              }`}
              style={active === i ? { backgroundColor: 'rgba(122, 157, 40, 0.12)', borderColor: 'var(--color-primary-olive)', borderWidth: '1px' } : { borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-subtle)' }}
            >
              <span className="text-[12px] font-bold camelCase tracking-tighter truncate block"> 0{i + 1}: {p.title}</span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}