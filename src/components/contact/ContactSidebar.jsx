"use client";

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/riya1807pro",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/riyakaushik-webdev",
    icon: FaLinkedin,
  },
];

export default function ContactSidebar() {
  return (
    <aside className="space-y-6 lg:pl-6">
      <div className="rounded-2xl border p-4" style={{ borderColor: 'var(--border-color)', backgroundImage: 'linear-gradient(to bottom right, rgba(122, 157, 40, 0.1), transparent, rgba(122, 157, 40, 0.05))' }}>
        <h3 className="text-[10px] font-mono uppercase tracking-[0.24em]" style={{ color: 'var(--text-muted)' }}>Connect</h3>
        <ul className="mt-3 space-y-2.5">
          {links.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-between rounded-xl border px-4 py-2.5 text-sm uppercase tracking-tight transition-colors"
                  style={{ color: 'var(--text-primary)', borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-subtle-strong)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-primary-olive)'; e.currentTarget.style.color = 'var(--color-primary-olive)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
                >
                  <span className="inline-flex items-center gap-3">
                    <Icon size={16} />
                    {item.label}
                  </span>
                  <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Open</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="rounded-2xl border p-4" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-subtle)' }}>
        <p className="text-[10px] font-mono uppercase tracking-[0.24em]" style={{ color: 'var(--text-muted)' }}>Response Time</p>
        <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          Usually within 24-48 hours for project inquiries.
        </p>
      </div>

      <div className="space-y-3 border-l pl-6" style={{ borderColor: 'var(--border-color)' }}>
        <h3 className="text-[10px] font-mono uppercase tracking-[0.24em]" style={{ color: 'var(--text-muted)' }}>Legal</h3>
        <p className="text-[10px] uppercase tracking-[0.16em]" style={{ color: 'var(--text-muted)' }}>
          © 2026 Riya Kaushik. All Rights Reserved.
        </p>
      </div>
    </aside>
  );
}
