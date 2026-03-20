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
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10 p-4">
        <h3 className="text-[10px] font-mono uppercase tracking-[0.24em] text-neutral-500">Connect</h3>
        <ul className="mt-3 space-y-2.5">
          {links.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-between rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm uppercase tracking-tight text-white transition-colors hover:border-indigo-400/40 hover:text-indigo-300"
                >
                  <span className="inline-flex items-center gap-3">
                    <Icon size={16} />
                    {item.label}
                  </span>
                  <span className="text-xs text-neutral-500">Open</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <p className="text-[10px] font-mono uppercase tracking-[0.24em] text-neutral-500">Response Time</p>
        <p className="mt-2 text-sm leading-relaxed text-neutral-300">
          Usually within 24-48 hours for project inquiries.
        </p>
      </div>

      <div className="space-y-3 border-l border-white/10 pl-6">
        <h3 className="text-[10px] font-mono uppercase tracking-[0.24em] text-neutral-500">Legal</h3>
        <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-600">
          © 2026 Riya Kaushik. All Rights Reserved.
        </p>
      </div>
    </aside>
  );
}
