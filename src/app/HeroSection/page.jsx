"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [projects, setProjects] = useState(0);
  const [leetcode, setLeetcode] = useState(0);
  const [tech, setTech] = useState(0);

  // Counter animation
  useEffect(() => {
    let p = 0, l = 0, t = 0;
    const interval = setInterval(() => {
      if (p <  20) p++;
      if (l < 100) l++;
      if (t < 10) t++;
      setProjects(p);
      setLeetcode(l);
      setTech(t);
      if (p === 20 && l === 100 && t === 10) clearInterval(interval);
    }, 60);
  }, []);

  // ✅ Direct Resume Download from public folder
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Riya-Kaushik-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white px-6 overflow-hidden">
      {/* background circles */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-teal-600/30 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-6xl mx-auto text-center space-y-10 relative z-10">
        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-400 to-purple-500"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Riya Kaushik 👋 <br />
          <span className="text-gray-300">Full Stack Software Developer</span>
        </motion.h1>

        {/* Subheading */}
       <motion.p
  className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.3, duration: 1 }}
>
  I craft interactive, aesthetic, and professional web experiences using{" "}
  <span className="text-teal-400 font-semibold">
    React, Next.js & Tailwind CSS
  </span>{" "}
  for the frontend, and building scalable backends with the{" "}
  <span className="text-teal-400 font-semibold">
    MERN Stack (Node.js/Express & MongoDB)
  </span>
  .
</motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <Link href="#projects">
            <Button className="px-6 text-blue-900 py-3 text-lg font-medium bg-gradient-to-r from-blue-500 to-teal-400 hover:opacity-90">
              View My Work <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>

          <Button
            onClick={handleDownload}
            className="px-6 py-3 text-lg font-medium flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all"
          >
            <Download className="h-5 w-5" />
            Download Resume
          </Button>
        </motion.div>

        {/* Counters - Animated Glass Cards */}
        <motion.div
          className="flex justify-center gap-10 mt-14 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          {[
            { value: projects, label: "Projects Completed", color: "from-teal-400 to-blue-500" },
            { value: leetcode, label: "LeetCode Problems", color: "from-purple-400 to-pink-500" },
            { value: tech, label: "Technologies Learned", color: "from-orange-400 to-red-500" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-60 h-30 flex flex-col items-center justify-center rounded-2xl
                         bg-white/10 backdrop-blur-lg shadow-lg border border-white/20 p-4"
            >
              <h3
                className={`text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r ${item.color}`}
              >
                {item.value}+
              </h3>
              <p className="text-gray-300 text-sm mt-2">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
