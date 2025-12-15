"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const aboutPoints = [
  "Enhanced: Expertly building responsive and interactive web applications using a modern frontend ecosystem, including React, Next.js, and advanced styling with Tailwind CSS.",
  "Enhanced: Possesses a strong academic foundation in Computer Science from GBN Government Polytechnic, Nilokheri, with relevant coursework in Web Development and Data Structures.",
  "Enhanced: Successfully developed and deployed 20+ projects, demonstrating comprehensive full-stack capability and a strong focus on intuitive UI/UX design and clean architecture.",
  "Enhanced: Achieved proficiency in Data Structures and Algorithms (DSA) by successfully solving 100+ problems (e.g., LeetCode), reflecting continuous improvement in logical reasoning and efficient problem-solving.",
  "Enhanced: Practical experience includes implementing robust state management with Redux Toolkit (RTK) and utilizing modern development tools like TRPC, Git, and Postman.",
"Enhanced: Passionate about continuous learning, dedicated to optimizing application performance (caching, latency reduction), and delivering measurable, user-focused solutions."];

export default function About() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Small intro line */}
        <motion.p
          className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
         Highly motivated Full-Stack MERN Developer specializing in crafting modern, scalable, and user-centric applications with a strong commitment to clean design and performance optimization.
        </motion.p>

        {/* Bullet Points with Animation */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {aboutPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="bg-gray-800/40 border border-gray-700 hover:bg-gray-800/60 transition-all duration-300 shadow-lg rounded-2xl">
                <CardContent className="p-4 text-gray-200 text-left text-base">
                  {point}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
