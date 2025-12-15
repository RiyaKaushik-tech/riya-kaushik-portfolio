"use client";

import React from "react";
import ProjectCard from "../../components/projectCard";
import { motion } from "framer-motion";

const projects = [
  {
    "title": "TaskPulse -(Project Management Tool)",
    "description": "Spearheaded full-stack development of a scalable MERN stack TaskPulse platform, implementing real-time notifications (Socket.io) and optimization techniques (caching, pagination) to reduce API latency and boost throughput.",
    "github": "https://github.com/riya1807pro/datasync-dashboard",
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
] 


export default function Projects() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Glow effect background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(129,140,248,0.15),transparent_70%)]" />

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-14"
        >
          🚀 Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
