"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

export const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme, toggleTheme } = useTheme();

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

  if (!mounted) return null;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Riya-Kaushik-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="fixed w-full top-0 z-50 px-5 md:px-7 py-3 backdrop-blur-md border-b transition-all duration-300" style={{ backgroundColor: 'var(--glass-bg)', borderColor: 'var(--border-color)' }}>
      <div
        className="absolute left-0 top-0 h-[1px] transition-all duration-300"
        style={{ width: `${scrollProgress}%`, background: 'linear-gradient(to right, var(--color-primary-olive), var(--color-secondary-green))' }}
      />

      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="#home" className="group">
          <span className="text-xl md:text-2xl font-black bg-clip-text text-transparent tracking-tight transition-all duration-300" style={{ backgroundImage: 'linear-gradient(to right, var(--color-primary-olive), var(--color-secondary-green))' }}>
            Riya Kaushik
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-7">
          <div className="flex gap-5 text-sm font-semibold">
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
                className="relative group py-0.5 transition-all duration-300 font-medium"
                style={{ color: activeSection === href.slice(1) ? 'var(--color-primary-olive)' : 'var(--text-secondary)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-olive)'}
                onMouseLeave={(e) => e.currentTarget.style.color = activeSection === href.slice(1) ? 'var(--color-primary-olive)' : 'var(--text-secondary)'}
              >
                {label}
                <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                  activeSection === href.slice(1) ? "w-full" : "w-0 group-hover:w-full"
                }`}
                style={{ backgroundColor: 'var(--color-primary-olive)' }} />
              </Link>
            ))}
          </div>
          <button
            onClick={handleDownload}
              className="px-3.5 py-1.5 text-black text-xs font-semibold uppercase tracking-wide rounded-sm transition-all duration-300"
              style={{ backgroundColor: 'var(--color-primary-olive)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-olive-light)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-olive)'}
          >
            Resume
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 text-xl rounded-sm transition-all duration-300"
            style={{ backgroundColor: 'var(--color-primary-olive)', color: '#000' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-olive-light)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-olive)'}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-xl"
          style={{ color: 'var(--text-primary)' }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full border-t py-4 transition-all duration-300" style={{ backgroundColor: 'var(--bg-page)', borderColor: 'var(--border-color)' }}>
          <div className="flex flex-col items-center gap-3 max-w-2xl mx-auto">
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
                className="text-xs font-semibold uppercase tracking-wide transition-all duration-300 py-1"
                style={{ color: activeSection === href.slice(1) ? 'var(--color-primary-olive)' : 'var(--text-secondary)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-olive)'}
                onMouseLeave={(e) => e.currentTarget.style.color = activeSection === href.slice(1) ? 'var(--color-primary-olive)' : 'var(--text-secondary)'}
              >
                {label}
              </Link>
            ))}
            <button
              onClick={handleDownload}
              className="px-3.5 py-1.5 text-black text-xs font-semibold uppercase tracking-wide rounded-sm transition-all duration-300"
              style={{ backgroundColor: 'var(--color-primary-olive)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-olive-light)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-olive)'}
            >
              Resume
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 text-xl rounded-sm transition-all duration-300"
              style={{ backgroundColor: 'var(--color-primary-olive)', color: '#000' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-olive-light)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-olive)'}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};