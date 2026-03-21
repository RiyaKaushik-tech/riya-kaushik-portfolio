"use client"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full 
        bg-gradient-to-r from-black/90 via-blue-900/80 to-gray-900/90 
        backdrop-blur-md border-t border-blue-500/30 
        text-white py-3 shadow-lg"
    >
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-6 text-sm">
        
        {/* Left text */}
        <div className="mb-2 sm:mb-0 text-gray-300">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 font-semibold">
            Riya Kaushik
          </span>
          . All rights reserved.
        </div>

        {/* Right social links */}
        <div className="flex space-x-6 text-xl">
          <a
            href="https://github.com/riya1807pro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-pink-400 hover:drop-shadow-[0_0_6px_rgba(236,72,153,0.8)] transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/riyakaushik-webdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.8)] transition duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};
