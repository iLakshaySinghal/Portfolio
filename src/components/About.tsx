'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Counter({ value, suffix = '', decimals = 0 }: { value: number; suffix?: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const duration = 1500;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = value / steps;
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-display font-black text-5xl md:text-[56px] text-accent-primary text-glow-orange">
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

const STATS = [
  { value: 9.06, decimals: 2, suffix: '', label: 'UPES CGPA' },
  { value: 2, decimals: 0, suffix: '', label: 'Internships Done' },
  { value: 3, decimals: 0, suffix: '', label: 'Major Projects' },
  { value: 70, decimals: 0, suffix: '%', label: 'Scraping Efficiency' },
];

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-20% 0px' });

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center bg-secondary-bg border-y border-border-soft overflow-hidden py-24"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[300px] h-[300px] rounded-full bg-accent-primary/5 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[300px] h-[300px] rounded-full bg-accent-primary/5 blur-[100px] pointer-events-none" />
      </div>

      <div className="max-w-[1360px] mx-auto w-full px-4 md:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column - Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col"
        >
          <span className="text-sm font-display font-bold text-accent-primary uppercase tracking-widest mb-3">
            {"// COGNITIVE IDENTITY"}
          </span>
          <h2 className="text-4xl md:text-[54px] font-display font-black text-white mb-8 tracking-tight uppercase leading-none">
            MERGING SYSTEM LOGIC <br />
            WITH <span className="text-accent-primary text-glow-orange">CREATIVE SOUL</span>
          </h2>
          
          <div className="space-y-6 text-text-secondary font-sans font-light leading-loose text-[17px] md:text-[18.5px]">
            <p>
              I am a Computer Science undergraduate at UPES, Dehradun (CGPA: 9.06/10), specializing in full-stack development, automation scripting, and data engineering. With professional experience co-engineering full-stack applications as an SDE Intern at Xebia and frontend features at AK Technolabs, I build high-performance pipelines and database architectures. I focus on delivering robust, data-driven systems and automation workflows within collaborative Agile teams.
            </p>
          </div>
        </motion.div>

        {/* Right Column - Stats Grid */}
        <div className="lg:col-span-5 w-full">
          <div className="grid grid-cols-2 gap-6">
            {STATS.map((stat, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                key={stat.label}
                className="glassmorphism p-8 md:p-10 rounded-2xl border border-border-soft flex flex-col gap-3 justify-center items-center text-center"
              >
                <Counter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                <span className="text-sm md:text-[15px] font-display tracking-widest text-text-muted uppercase font-bold">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Core Focus Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="mt-8 glassmorphism p-8 md:p-10 rounded-2xl border border-border-soft flex flex-col gap-3"
          >
            <span className="text-[12px] font-display text-accent-primary uppercase tracking-widest font-bold">
              {"CURRENT FOCUS // ACTIVE SYSTEMS"}
            </span>
            <p className="text-sm md:text-[15px] text-text-secondary leading-relaxed">
              Full-stack MERN development, multi-threaded Playwright/Beautiful Soup data scraping, threat scoring log pipelines, and object-oriented Java modules.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
