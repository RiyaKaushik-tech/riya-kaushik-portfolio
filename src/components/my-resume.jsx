"use client";
import { motion } from "framer-motion";
import { 
  FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaMapMarkerAlt,
  FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaJs 
} from "react-icons/fa";
import { 
  SiNextdotjs, SiTailwindcss, SiRedux, SiExpress, SiMongodb, 
  SiTypescript, SiPostman, SiVercel, SiCplusplus 
} from "react-icons/si";

/* 
DESIGN DECISIONS:
- Color scheme: Primary #41431B, Accent #AEB784, Section BG #E3DBBB, Main BG #F8F3E1
- Typography: Clean sans-serif hierarchy with 3 weight levels
- Layout: Two-column for optimal space usage, single column on mobile
- Spacing: 8px base grid system for consistent rhythm
- Visual hierarchy: Section headers with accent border, skills as tags, projects with subtle cards
- ATS-friendly: Semantic HTML, clear headings, no complex layouts that break parsing
*/

const My_Resume = () => {
  
  // Contact info
  const contact = {
    name: "Riya Kaushik",
    title: "Full-Stack MERN Developer",
    email: "riyakaushik.dev@gmail.com",
    phone: "+91 XXX XXX XXXX",
    location: "India",
    github: "github.com/riya1807pro",
    linkedin: "linkedin.com/in/riyakaushik-webdev"
  };

  // Professional summary
  const summary = "Highly motivated Full-Stack MERN Developer specializing in crafting modern, scalable, and user-centric applications with a strong commitment to clean design and performance optimization.";

  // Skills organized by category
  const skillsData = {
    "Frontend": ["HTML5", "CSS3", "JavaScript ES6+", "React.js", "Next.js", "Tailwind CSS", "Redux Toolkit", "Bootstrap", "Framer Motion"],
    "Backend": ["Node.js", "Express.js", "RESTful APIs", "Socket.io"],
    "Database": ["MongoDB", "LocalStorage"],
    "Tools & Others": ["Git & GitHub", "Postman", "Vercel", "TypeScript", "C++ DSA"]
  };

  // Education
  const education = {
    degree: "Diploma in Computer Science",
    institution: "GBN Government Polytechnic, Nilokheri",
    details: "Relevant coursework: Web Development, Data Structures"
  };

  // Projects
  const projects = [
    {
      title: "TaskPulse - Project Management Tool",
      description: "Spearheaded full-stack development of a scalable MERN stack TaskPulse platform, implementing real-time notifications (Socket.io) and optimization techniques (caching, pagination) to reduce API latency and boost throughput.",
      tech: ["React/Vite", "Redux", "Node.js/Express", "MongoDB", "Socket.io"],
      github: "github.com/riya1807pro/datasync-dashboard"
    },
    {
      title: "Dashboard - Real-time Data Sync",
      description: "Engineered a dynamic, TypeScript-based Personalized Content Dashboard using Next.js, integrating external APIs (News/TMDB) and Redux Toolkit (RTK) for centralized state management and real-time data visualization.",
      tech: ["Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
      github: "github.com/riya1807pro/datasync-dashboard",
      live: "datasync-dashboard.vercel.app"
    },
    {
      title: "React Redux CRUD (Posts App)",
      description: "Developed a lightweight CRUD application using React and Redux Toolkit (RTK) to manage posts, implementing reliable state management and localStorage persistence for data continuity.",
      tech: ["React", "Redux Toolkit", "Tailwind CSS", "Vite"],
      github: "github.com/riya1807pro/redux-posts-app",
      live: "redux-posts-app-lake.vercel.app"
    },
    {
      title: "Developer Portfolio",
      description: "Designed and deployed a full-stack, responsive Personal Portfolio using Next.js and Framer Motion to showcase projects with high-performance animations and an integrated backend service for client communication.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      github: "github.com/riya1807pro/riya-kaushik-portfolio"
    }
  ];

  // Key achievements
  const achievements = [
    "Successfully developed and deployed 20+ projects, demonstrating comprehensive full-stack capability",
    "Solved 100+ Data Structures and Algorithms problems, reflecting continuous improvement in problem-solving",
    "Strong focus on intuitive UI/UX design and clean architecture",
    "Passionate about continuous learning and optimizing application performance"
  ];

  return (
    <div className="min-h-screen bg-[#F8F3E1] py-12 px-4 sm:px-6 lg:px-8 print:p-0">
      
      {/* Download/Print Button - Hidden on print */}
      <motion.div
        className="max-w-5xl mx-auto mb-8 flex justify-end gap-4 print:hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={() => window.print()}
          className="px-6 py-2.5 bg-[#41431B] hover:bg-[#2a2b12] text-[#F8F3E1] font-semibold rounded-lg shadow-md transition-all duration-300 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Print / Download PDF
        </button>
      </motion.div>

      {/* Resume Container */}
      <motion.div
        className="max-w-5xl mx-auto bg-white shadow-2xl print:shadow-none"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        
        {/* Header Section */}
        <header className="bg-[#41431B] text-[#F8F3E1] px-8 py-10 print:py-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">{contact.name}</h1>
            <p className="text-xl md:text-2xl text-[#AEB784] font-medium mb-6">{contact.title}</p>
            
            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm md:text-base">
              <div className="flex items-center gap-2.5">
                <FaEnvelope className="text-[#AEB784] flex-shrink-0" />
                <span className="break-all">{contact.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FaPhone className="text-[#AEB784] flex-shrink-0" />
                <span>{contact.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FaLinkedin className="text-[#AEB784] flex-shrink-0" />
                <span className="break-all">{contact.linkedin}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FaGithub className="text-[#AEB784] flex-shrink-0" />
                <span className="break-all">{contact.github}</span>
              </div>
            </div>
          </motion.div>
        </header>

        {/* Main Content */}
        <div className="px-8 py-8 print:py-6">
          
          {/* Professional Summary */}
          <section className="mb-8 print:mb-6">
            <h2 className="text-2xl font-bold text-[#41431B] mb-3 pb-2 border-b-2 border-[#AEB784]">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">{summary}</p>
          </section>

          {/* Skills Section */}
          <section className="mb-8 print:mb-6">
            <h2 className="text-2xl font-bold text-[#41431B] mb-4 pb-2 border-b-2 border-[#AEB784]">
              Technical Skills
            </h2>
            <div className="space-y-4">
              {Object.entries(skillsData).map(([category, skills]) => (
                <div key={category}>
                  <h3 className="text-base font-semibold text-[#41431B] mb-2">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-[#E3DBBB] text-[#41431B] text-sm font-medium rounded-md border border-[#AEB784]/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-8 print:mb-6">
            <h2 className="text-2xl font-bold text-[#41431B] mb-4 pb-2 border-b-2 border-[#AEB784]">
              Key Projects
            </h2>
            <div className="space-y-5">
              {projects.map((project, index) => (
                <div key={index} className="border-l-4 border-[#AEB784] pl-4 py-2">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-[#41431B]">{project.title}</h3>
                    {project.live && (
                      <span className="text-xs px-2 py-1 bg-[#AEB784] text-[#41431B] rounded-md font-medium">
                        Live
                      </span>
                    )}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-1">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-[#E3DBBB] text-[#41431B] text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 mt-1">
                    <FaGithub className="inline mr-1" />
                    {project.github}
                    {project.live && ` | ${project.live}`}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-8 print:mb-6">
            <h2 className="text-2xl font-bold text-[#41431B] mb-4 pb-2 border-b-2 border-[#AEB784]">
              Education
            </h2>
            <div className="border-l-4 border-[#AEB784] pl-4 py-2">
              <h3 className="text-lg font-bold text-[#41431B]">{education.degree}</h3>
              <p className="text-base text-gray-700 font-medium">{education.institution}</p>
              <p className="text-sm text-gray-600 mt-1">{education.details}</p>
            </div>
          </section>

          {/* Key Achievements */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold text-[#41431B] mb-4 pb-2 border-b-2 border-[#AEB784]">
              Key Achievements
            </h2>
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed">
                  <span className="text-[#AEB784] font-bold mt-1">▪</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </section>

        </div>

        {/* Footer */}
        <footer className="bg-[#E3DBBB] px-8 py-4 border-t-2 border-[#AEB784]">
          <p className="text-center text-sm text-[#41431B]">
            Portfolio: <span className="font-semibold">riya-kaushik-portfolio.vercel.app</span> | 
            Open to new opportunities and collaborations
          </p>
        </footer>

      </motion.div>
    </div>
  );
};

export default My_Resume;