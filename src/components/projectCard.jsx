"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ title, description, live, github, image, skills }) {
  return (
    <div className="relative w-[350px] md:w-[550px] shrink-0 group">
      {/* 3D Floating Shadow Effect */}
      <div className="absolute -inset-4 bg-indigo-500/5 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="relative h-full bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl">
        {/* Media Top Section */}
        <div className="relative h-64 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
          
          {/* Floating Actions */}
          <div className="absolute top-6 right-6 flex gap-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <a href={github} target="_blank" className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/10 hover:bg-white hover:text-black transition-all">
              <FaGithub size={18} />
            </a>
            {live && (
              <a href={live} target="_blank" className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/10 hover:bg-white hover:text-black transition-all">
                <FaExternalLinkAlt size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Info Bottom Section */}
        <div className="p-8 flex flex-col flex-grow">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-indigo-500" />
            <span className="text-[10px] font-mono text-indigo-500 uppercase tracking-widest">Build.exe</span>
          </div>
          
          <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-4 group-hover:text-indigo-400 transition-colors">
            {title}
          </h3>
          
          <p className="text-neutral-500 text-sm leading-relaxed mb-8 font-light line-clamp-2">
            {description}
          </p>

          <div className="mt-auto flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span key={i} className="text-[9px] px-3 py-1 rounded-full border border-white/5 bg-white/5 text-neutral-400 font-mono">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}