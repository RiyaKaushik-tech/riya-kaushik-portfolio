"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "experience", "projects", "credentials", "contact"];
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-15% 0px -40% 0px" }
    );

    sectionElements.forEach((el) => observer.observe(el));

    const onScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!mounted) return "loading...";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Riya-Kaushik-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="fixed w-full top-0 z-50 px-6 md:px-8 py-5 backdrop-blur-xl bg-black/80 border-b border-white/10 shadow-2xl">
      <div
        className="absolute left-0 top-0 h-[2px] bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="#home" className="group">
          <span className="text-2xl md:text-3xl font-black bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent tracking-tight drop-shadow-lg group-hover:scale-105 transition-all duration-300">
            Riya Kaushik
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-12">
          <div className="flex gap-8 text-lg font-semibold">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#skills", label: "Skills" },
              { href: "#experience", label: "Experience" },
              { href: "#projects", label: "Projects" },
              { href: "#credentials", label: "Credentials" },
              { href: "#contact", label: "Contact" }
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`relative group text-white/90 hover:text-cyan-300 transition-all duration-300 font-medium ${
                  activeSection === href.slice(1) ? "text-cyan-300" : ""
                }`}
              >
                {label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 ${
                  activeSection === href.slice(1) ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
          </div>
          <button
            onClick={handleDownload}
            className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold rounded-xl border border-white/20 hover:scale-105 hover:shadow-lg transition-all duration-300 shadow-md"
          >
            View Resume
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10 py-8">
          <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#skills", label: "Skills" },
              { href: "#experience", label: "Experience" },
              { href: "#projects", label: "Projects" },
              { href: "#credentials", label: "Credentials" },
              { href: "#contact", label: "Contact" }
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-semibold text-white hover:text-cyan-300 transition-all duration-300 py-2 ${
                  activeSection === href.slice(1) ? "text-cyan-300" : ""
                }`}
              >
                {label}
              </Link>
            ))}
            <button
              onClick={handleDownload}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300"
            >
              View Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};