"use client"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.38, ease: "easeOut" }}
      className="w-full border-t border-white/10 bg-[#04070d] text-white py-3"
    >
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-6 text-sm gap-2">
        
        {/* Left text */}
        <div className="mb-1 sm:mb-0 text-neutral-400">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 font-semibold">
            Riya Kaushik
          </span>
          . All rights reserved.
        </div>

        {/* Right social links */}
        <div className="flex space-x-4 text-base">
          <a
            href="https://github.com/riya1807pro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-cyan-300 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/riyakaushik-webdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-blue-300 transition duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};
