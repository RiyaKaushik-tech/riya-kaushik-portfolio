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
      className="w-full border-t py-3"
      style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)' }}
    >
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-6 text-sm gap-2">
        
        {/* Left text */}
        <div className="mb-1 sm:mb-0" style={{ color: 'var(--text-secondary)' }}>
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-transparent bg-clip-text font-semibold" style={{ backgroundImage: 'linear-gradient(to right, var(--color-primary-olive), var(--color-secondary-green))' }}>
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
            className="transition duration-300"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-olive)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/riyakaushik-webdev"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-olive)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};
