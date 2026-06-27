'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    id: 'loganalysis',
    title: 'LOG ANALYSIS AND IP BLACKLISTING',
    category: 'Systems',
    description: 'Developed a network log analysis and threat-scoring platform. Implemented manual IP blacklist management, reducing incident investigation times by 35–40%.',
    tags: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB'],
    image: '/log_analysis_blacklisting.png',
    link: 'https://github.com/iLakshaySinghal/Log-Analysis-and-IP-Blacklisting',
  },
  {
    id: 'webscraping',
    title: 'SCRAPING AUTOMATION PIPELINE',
    category: 'Systems',
    description: 'Engineered a multi-stage Python data pipeline automating search scraping and email parsing. Built a multi-threaded Tkinter UI, increasing productivity by 70%.',
    tags: ['Python', 'Playwright', 'Beautiful Soup', 'Tkinter'],
    image: '/web_scraping_pipeline.png',
    link: 'https://github.com/iLakshaySinghal/Web-Scraping-Automation-Tool',
  },
  {
    id: 'cafeops',
    title: 'CAFE MANAGEMENT SYSTEM',
    category: 'SaaS',
    description: 'Programmed a desktop cafe operations manager implementing robust OOP principles in Java. Managed user authentication, order billing, and exception handlers.',
    tags: ['Java', 'Swing', 'JDBC', 'MySQL'],
    image: '/cafe_management_system.png',
    link: 'https://github.com/iLakshaySinghal',
  },
];

const CATEGORIES = ['All', 'Systems', 'SaaS'];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = PROJECTS.filter(
    (project) => filter === 'All' || project.category === filter
  );

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full bg-primary-bg py-24 border-b border-border-soft overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto w-full px-4 md:px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col">
            <span className="text-xs font-display font-bold text-accent-primary uppercase tracking-widest mb-3">
              {"// WORK RECORDINGS"}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight uppercase">
              FEATURED <span className="text-accent-primary text-glow-orange">PROJECTS</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                suppressHydrationWarning
                className={`px-4 py-2 rounded-full font-display text-xs uppercase tracking-widest border transition-all duration-300 ${
                  filter === cat
                    ? 'bg-accent-primary text-white border-accent-primary glow-orange'
                    : 'bg-surface-card/40 border-border-soft text-text-secondary hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.a
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6 }}
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden glassmorphism border border-border-soft bg-surface-card/25 flex flex-col h-full interactive-card cursor-pointer"
                data-cursor-text="VIEW"
              >
                <div className="relative h-[280px] w-full overflow-hidden border-b border-border-soft">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-750 brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60" />
                  
                  <span className="absolute top-4 left-4 bg-primary-bg/80 border border-border-soft text-[11px] font-display font-semibold text-accent-glow px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-4 gap-4">
                    <h3 className="text-xl md:text-[22px] font-display font-black text-white tracking-wider leading-tight group-hover:text-accent-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="w-9 h-9 rounded-full border border-border-soft flex items-center justify-center text-text-secondary group-hover:text-accent-primary group-hover:border-accent-primary transition-all duration-300 flex-shrink-0">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                  <p className="text-sm md:text-[15.5px] text-text-secondary font-sans font-light leading-relaxed mb-8 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/5 border border-white/5 text-[11px] font-sans text-text-muted px-3 py-1 rounded uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
