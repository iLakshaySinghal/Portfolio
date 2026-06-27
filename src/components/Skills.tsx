'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { motion } from 'framer-motion';
import { Monitor, Cpu, Database, Wrench } from 'lucide-react';

function getSkillLogo(name: string) {
  switch (name) {
    case 'ReactJS':
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-5 h-5 text-[#61DAFB] group-hover:scale-110 transition-transform duration-300" fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case 'HTML & CSS':
    case 'HTML5 & CSS3':
      return (
        <div className="flex gap-1 items-center">
          {/* HTML5 */}
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#E34F26] group-hover:scale-110 transition-transform duration-300" fill="currentColor">
            <path d="M1.5 22L0 2.45h24L22.5 22L12 24.93L1.5 22zm19.16-16.7H3.34l.83 9.25L12 16.92l7.83-2.37l.83-9.25z" />
          </svg>
          {/* CSS3 */}
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#1572B6] group-hover:scale-110 transition-transform duration-300" fill="currentColor">
            <path d="M1.5 22L0 2.45h24L22.5 22L12 24.93L1.5 22zm19.16-16.7H3.34l.83 9.25L12 16.92l7.83-2.37l.83-9.25z" />
          </svg>
        </div>
      );
    case 'Responsive Design':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-accent-primary group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="12" height="8" rx="1" />
          <rect x="15" y="7" width="7" height="12" rx="1" />
          <path d="M8 11v2a1 1 0 0 0 1 1h4" />
        </svg>
      );
    case 'Bootstrap / jQuery':
    case 'Bootstrap & jQuery':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#7952B3] group-hover:scale-110 transition-transform duration-300" fill="currentColor">
          <path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-12.87-4.47c0-.28-.21-.49-.52-.49H8.4v4.54h2.1c.36 0 .58-.23.58-.55V7.53zm.18 5.7c0-.3-.21-.55-.61-.55H8.4v4.75h2.24c.33 0 .59-.22.59-.51v-3.69zm3.5-3.32c0-1.85-1.54-2.82-3.8-2.82H6v16h6.73c2.23 0 3.97-.93 3.97-3.08 0-1.5-.93-2.35-2.12-2.58 1.5-.27 2.24-1.28 2.24-2.52v-2.5z" />
        </svg>
      );
    case 'C / C++':
    case 'C / C++ Programming':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#00599C] group-hover:scale-110 transition-transform duration-300" fill="currentColor">
          <path d="M22.03 10.3h-1.9V8.4h-1.4v1.9h-1.9v1.4h1.9v1.9h1.4v-1.9h1.9v-1.4zm-4.7 0h-1.9V8.4h-1.4v1.9h-1.9v1.4h1.9v1.9h1.4v-1.9h1.9v-1.4zM9.4 6.7c-2.9 0-5.3 2.4-5.3 5.3s2.4 5.3 5.3 5.3c1.7 0 3.3-.8 4.2-2.2l-2-1.2c-.5.8-1.3 1.2-2.2 1.2-1.7 0-3.1-1.4-3.1-3.1s1.4-3.1 3.1-3.1c.9 0 1.7.4 2.2 1.2l2-1.2c-.9-1.4-2.5-2.2-4.2-2.2z" />
        </svg>
      );
    case 'JavaScript & Python':
      return (
        <div className="flex gap-1.5 items-center">
          {/* JS */}
          <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 text-[#F7DF1E] group-hover:scale-110 transition-transform duration-300" fill="currentColor">
            <path d="M2.5 2.5v19h19v-19h-19zm15.48 13.91c-.13.78-.65 1.35-1.6 1.35-.91 0-1.54-.51-1.54-1.53h1.37c0 .32.18.51.5.51.27 0 .44-.13.44-.38 0-.25-.19-.35-.63-.51-.95-.31-1.75-.62-1.75-1.75 0-1.02.82-1.65 1.77-1.65 1.02 0 1.62.51 1.7 1.37h-1.3c-.06-.32-.23-.48-.53-.48-.25 0-.41.13-.41.35 0 .22.14.32.54.48 1.05.35 1.78.67 1.78 1.83 0 .34-.07.69-.37.91v.01zm-5.75-.61c0 1-.55 1.45-1.34 1.45-.51 0-.9-.23-1.12-.6v.48H8.8v-7.14h1.22v3.74c0 .76.32 1.15.93 1.15.38 0 .61-.22.61-.64v-4.25h1.22v5.81z" />
          </svg>
          {/* Python */}
          <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 text-[#3776AB] group-hover:scale-110 transition-transform duration-300" fill="currentColor">
            <path d="M11.91 0c-1.8 0-3.32.16-4.56.45L7.3 1.63v1.8h4.63c2.47 0 4.47 2 4.47 4.47v2.1c0 1.25-.52 2.37-1.36 3.16l1.37 1.38c1.36-1.17 2.22-2.9 2.22-4.82v-2.1C18.63 3.4 15.62 0 11.91 0zM6.73 4.88c-1.37 1.17-2.22 2.9-2.22 4.82v2.1c0 4.22 3.01 7.62 6.72 7.62c1.8 0 3.32-.16 4.56-.45l.06-1.18v-1.8h-4.63c-2.47 0-4.47-2-4.47-4.47v-2.1c0-1.25.52-2.37 1.36-3.16L6.73 4.88z" />
          </svg>
        </div>
      );
    case 'NodeJS & ExpressJS':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#339933] group-hover:scale-110 transition-transform duration-300" fill="currentColor">
          <path d="M12 0L2.5 5.5v11L12 22l9.5-5.5v-11L12 0zm-1 18.5V9h-3v-2.5h8.5V9H13v9.5h-2z" />
        </svg>
      );
    case 'Java Programming':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#007396] group-hover:scale-110 transition-transform duration-300" fill="currentColor">
          <path d="M2.5 19.5c0 1 1 2 2.5 2.5h14c1.5-.5 2.5-1.5 2.5-2.5V17H2.5v2.5zM12 1c-1.5 2-1 4.5 0 6s2.5 3 2.5 5c0 1.5-.5 3-1.5 4h2c1.5-1.5 2-3.5 2-5 0-2.5-1.5-4-2.5-5.5S11.5 3 12 1z" />
        </svg>
      );
    case 'MySQL Database':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#4479A1] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      );
    case 'MongoDB Database':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#47A248] group-hover:scale-110 transition-transform duration-300" fill="currentColor">
          <path d="M12 0C12 0 7 6 7 12c0 3 2 6 5 12c3-6 5-9 5-12c0-6-5-12-5-12zm-1.5 12c0-1.5.7-3.5 1.5-5c.8 1.5 1.5 3.5 1.5 5c0 1.5-.7 3-1.5 3.5c-.8-.5-1.5-2-1.5-3.5z" />
        </svg>
      );
    case 'Redis Cache':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#DC382D] group-hover:scale-110 transition-transform duration-300" fill="currentColor">
          <path d="M12 0L1.5 5v10L12 20l10.5-5V5L12 0zm-7.5 6.8L12 3.3l7.5 3.5L12 10.3 4.5 6.8zm0 5.4l7.5 3.5 7.5-3.5L12 15.7 4.5 12.2z" />
        </svg>
      );
    case 'Web Scraping (Playwright/BS4)':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-accent-primary group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
          <polyline points="7.5 19.79 7.5 14.6 12 12 16.5 14.6 16.5 19.79" />
          <polyline points="7.5 14.6 12 17.2 16.5 14.6" />
          <line x1="12" y1="2.19" x2="12" y2="6.81" />
          <line x1="12" y1="12" x2="12" y2="17.2" />
          <line x1="12" y1="22.01" x2="12" y2="17.2" />
        </svg>
      );
    case 'GitHub Version Control':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385c.6.11.82-.26.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      );
    case 'Docker Containers':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#2496ED] group-hover:scale-110 transition-transform duration-300" fill="currentColor">
          <path d="M13.983 11.078h2.119v-2h-2.119zm-2.437 0h2.119v-2h-2.119zm-2.438 0h2.12v-2h-2.12zm-2.438 0h2.119v-2H6.67zm-.002-2.236h2.12v-2H6.668zm2.437 0h2.12v-2h-2.12zm2.437 0h2.12v-2h-2.12zm0-2.236h2.12v-2h-2.12zM2.69 12.74c-.03.25-.03.48-.03.71c0 4.14 3.74 7.5 8.35 7.5c4.12 0 7.54-2.67 8.19-6.22c.86-.14 1.76-.53 2.5-1.12c-.52-.16-1.16-.27-1.8-.2c-.08-.16-.17-.32-.27-.47c-.82-1.25-2.26-2.01-3.64-2.01h-.32v.03c-.22-1.39-1.25-2.52-2.58-2.82c-.18-.04-.37-.06-.56-.06V8.1h.03c-.15-1.57-1.19-2.91-2.65-3.39c-.2-.07-.41-.1-.63-.1v4.71H8.08c-.14-1.21-.92-2.23-2.01-2.63c-.17-.06-.35-.09-.54-.09v2.85h-.02c-.54-.01-1.07.12-1.52.37c-.16.09-.31.2-.44.33l-.04.03l.03.02a2.3 2.3 0 0 0 .54.51c.36.23.82.35 1.28.31h.02v2.12H2.69z" />
        </svg>
      );
    case 'Prompt Engineering':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-accent-primary group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 0 1 7.54 16.59c-.24.28-.34.66-.27 1.03l.63 3.14a.5.5 0 0 1-.72.53l-2.88-1.52a1.05 1.05 0 0 0-1 0A10 10 0 1 1 12 2z" />
          <path d="M12 7v5" />
          <path d="M12 16h.01" />
        </svg>
      );
    case 'OOP & Agile Development':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-accent-primary group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
        </svg>
      );
    case 'RESTful APIs':
    case 'RESTful APIs & Integration':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-accent-primary group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      );
    case 'Socket.io (Real-time)':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#010101] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M2 12h20" />
        </svg>
      );
    case 'TypeScript Development':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#3178C6] group-hover:scale-110 transition-transform duration-300" fill="currentColor">
          <path d="M0 0h24v24H0V0zm21.6 19.2c0-1.2-.6-1.8-2.4-2.4-1.2-.6-1.8-.6-1.8-1.2 0-.6.6-.6 1.2-.6.6 0 1.2.3 1.5.9l1.8-1.2c-.6-1.2-1.8-1.8-3.3-1.8-2.4 0-3.6 1.2-3.6 3 0 1.8 1.2 2.4 3 3 1.2.6 1.8.9 1.8 1.5 0 .6-.6.9-1.5.9-1.2 0-1.8-.6-2.1-1.2l-1.8 1.2c.6 1.5 1.8 2.1 3.9 2.1 2.7 0 4.2-1.2 4.2-3.3zm-8.4-8.4h-6v2.1h1.95v11.1h2.1V12.9H13.2v-2.1z" />
        </svg>
      );
    case 'AWS Cloud Services':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#FF9900] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19A3.5 3.5 0 0 0 13 15.5a5 5 0 0 0-9.5 1.5 3.5 3.5 0 0 0 0 7h14a3.5 3.5 0 0 0 0-7z" />
        </svg>
      );
    case 'Algorithms & Structures':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-accent-primary group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="3" />
          <circle cx="6" cy="19" r="3" />
          <circle cx="18" cy="19" r="3" />
          <path d="M9 8l-2 8M15 8l2 8" />
        </svg>
      );
    case 'Machine Learning & DL':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-accent-primary group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 2.5 2.5 0 0 1 0-3.12 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2zM14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 2.5 2.5 0 0 0 0-3.12 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2z" />
        </svg>
      );
    default:
      return null;
  }
}

const CATEGORIES = [
  {
    id: 'frontend',
    title: 'Frontend & Web',
    icon: Monitor,
    skills: ['ReactJS', 'HTML5 & CSS3', 'Responsive Design', 'Bootstrap & jQuery', 'RESTful APIs & Integration', 'Socket.io (Real-time)']
  },
  {
    id: 'backend',
    title: 'Languages & Backend',
    icon: Cpu,
    skills: ['C / C++ Programming', 'JavaScript & Python', 'NodeJS & ExpressJS', 'Java Programming', 'TypeScript Development']
  },
  {
    id: 'databases',
    title: 'Databases & Web Scraping',
    icon: Database,
    skills: ['MySQL Database', 'MongoDB Database', 'Redis Cache', 'Web Scraping (Playwright/BS4)', 'AWS Cloud Services']
  },
  {
    id: 'tooling',
    title: 'Tools & Concepts',
    icon: Wrench,
    skills: ['GitHub Version Control', 'Docker Containers', 'Prompt Engineering', 'OOP & Agile Development', 'Algorithms & Structures', 'Machine Learning & DL']
  }
];

// Helper to programmatically generate metal zipper teeth that interlock
const generateTeethPath = (isTop: boolean) => {
  let d = '';
  const step = 8;
  const w = 2200; // wide enough to cover all desktop screens
  for (let x = 0; x < w; x += step) {
    if (isTop) {
      // Top teeth project down
      d += `M ${x},0 L ${x+3},0 L ${x+3},6 L ${x+5},6 L ${x+5},0 L ${x+8},0 `;
    } else {
      // Bottom teeth project up (offset by 4px to interlock)
      d += `M ${x+4},12 L ${x+7},12 L ${x+7},6 L ${x+9},6 L ${x+9},12 L ${x+12},12 `;
    }
  }
  return d;
};

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const topPanelRef = useRef<HTMLDivElement>(null);
  const bottomPanelRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const container = containerRef.current;
        const nameEl = nameRef.current;
        const topPanel = topPanelRef.current;
        const bottomPanel = bottomPanelRef.current;
        const cardsContainer = cardsContainerRef.current;
        const shadow = shadowRef.current;
        const slider = sliderRef.current;

        if (!container || !nameEl || !topPanel || !bottomPanel || !cardsContainer || !shadow || !slider) return;

        // Reset elements initial positions & properties
        gsap.set([topPanel, bottomPanel], { yPercent: 0 });
        gsap.set(container, { backgroundColor: '#050505' });
        gsap.set(nameEl, { color: '#FFFFFF', textShadow: '0 0 10px rgba(253, 90, 30, 0.6)', y: 0 });
        gsap.set(shadow, { opacity: 0 });
        gsap.set(cardsContainer, { yPercent: 80, opacity: 0 });
        gsap.set(slider, { left: '0%', xPercent: 0, opacity: 1 });

        // Reset zipper clip paths to closed state
        gsap.set('#top-zipper-path', { attr: { d: 'M 0,0 L 1,0 L 1,1 L 0,1 L 0,0 Z' } });
        gsap.set('#bottom-zipper-path', { attr: { d: 'M 0,1 L 1,1 L 1,0 L 0,0 L 0,1 Z' } });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: '+=250%',
            scrub: true,
            pin: true,
            invalidateOnRefresh: true,
          }
        });

        // 1. Unzipping sequence: Slide pull slider + Morph clipPaths in sync
        tl.to(slider, {
          left: '100%',
          xPercent: -100,
          ease: 'none',
          duration: 1,
        }, 0)
        .to('.skills-scroll-prompt', {
          opacity: 0,
          ease: 'power2.out',
        }, 0)
        
        // Morph clipPaths to create a horizontal V-shape opening behind the slider
        // Step 1: Open up to 33%
        .to('#top-zipper-path', {
          attr: { d: 'M 0,0 L 1,0 L 1,1 L 0.33,1 L 0,0 Z' },
          duration: 0.33,
          ease: 'none',
        }, 0)
        .to('#bottom-zipper-path', {
          attr: { d: 'M 0,1 L 1,1 L 1,0 L 0.33,0 L 0,1 Z' },
          duration: 0.33,
          ease: 'none',
        }, 0)

        // Step 2: Open up to 66%
        .to('#top-zipper-path', {
          attr: { d: 'M 0,0 L 1,0 L 1,1 L 0.66,1 L 0,0 Z' },
          duration: 0.33,
          ease: 'none',
        }, 0.33)
        .to('#bottom-zipper-path', {
          attr: { d: 'M 0,1 L 1,1 L 1,0 L 0.66,0 L 0,1 Z' },
          duration: 0.33,
          ease: 'none',
        }, 0.33)

        // Step 3: Fully unzipped to 100%
        .to('#top-zipper-path', {
          attr: { d: 'M 0,0 L 1,0 L 1,0 L 1,0 L 0,0 Z' },
          duration: 0.34,
          ease: 'none',
        }, 0.66)
        .to('#bottom-zipper-path', {
          attr: { d: 'M 0,1 L 1,1 L 1,1 L 1,1 L 0,1 Z' },
          duration: 0.34,
          ease: 'none',
        }, 0.66)
        .to(slider, {
          opacity: 0,
          duration: 0.1,
          ease: 'none',
        }, 0.9)

        // 2. Transition background theme to light-beige
        .to(container, {
          backgroundColor: '#EAE6DF',
          ease: 'power1.inOut',
        }, 0.3)
        .to(nameEl, {
          color: '#1C1C1C',
          textShadow: 'none',
          y: '-34vh',
          ease: 'power2.inOut',
        }, 0.3)
        .to(shadow, {
          opacity: 0.12,
          ease: 'power1.inOut',
        }, 0.3)

        // 3. Slide up the skills grid cards
        .to(cardsContainer, {
          yPercent: 0,
          opacity: 1,
          ease: 'power2.out',
        }, 0.6);
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  // Mobile rendering (static grid layout with viewport triggers)
  const renderMobileLayout = () => {
    return (
      <div className="max-w-6xl mx-auto w-full px-4 py-20 relative z-10 flex flex-col items-center">
        <div className="text-center mb-12 flex flex-col items-center">
          <span className="text-xs font-display font-bold text-accent-primary uppercase tracking-widest mb-3">
            {"// COGNITIVE CAPABILITIES"}
          </span>
          <h2 className="text-4xl font-display font-black text-white tracking-tight uppercase text-glow-orange">
            CAPABILITIES
          </h2>
          <p className="text-xs text-text-secondary max-w-md mt-4 font-sans font-light leading-relaxed">
            A comprehensive look at my primary logic systems, databases, and development tooling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-4">
          {CATEGORIES.map((category, catIdx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: catIdx * 0.1 }}
                className="rounded-2xl border border-border-soft bg-surface-card/40 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary">
                      <Icon size={20} />
                    </div>
                    <span className="font-display text-sm uppercase tracking-wider text-white font-bold">
                      {category.title}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {category.skills.map((skillName) => (
                      <div 
                        key={skillName} 
                        className="group flex items-center gap-3.5 p-3 rounded-xl border border-border-soft/60 bg-surface-card/20 hover:border-accent-primary/45 hover:bg-surface-card/35 transition-all duration-300"
                      >
                        <div className="w-9 h-9 rounded-lg bg-surface-card/40 border border-border-soft flex items-center justify-center text-text-muted group-hover:border-accent-primary/20 transition-all duration-300 flex-shrink-0">
                          {getSkillLogo(skillName)}
                        </div>
                        <span className="text-[15px] font-sans font-bold text-white transition-colors duration-300">
                          {skillName}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  };

  // Desktop layout rendering
  const renderDesktopLayout = () => {
    return (
      <div 
        ref={containerRef} 
        className="w-full min-h-screen relative overflow-hidden bg-[#050505] flex items-center justify-center"
      >
        {/* Palm Leaf Shadow Overlay */}
        <div 
          ref={shadowRef}
          className="absolute inset-0 bg-[url('/palm_leaf_shadow.png')] bg-cover bg-center pointer-events-none z-2 opacity-0 mix-blend-multiply transition-opacity duration-300"
        />

        {/* Centerpiece title ("CAPABILITIES") */}
        <div className="absolute inset-0 flex items-center justify-center z-1">
          <h2 
            ref={nameRef}
            className="skills-big-title text-[9vw] font-display font-black leading-none text-white text-glow-orange uppercase tracking-tighter select-none text-center"
          >
            CAPABILITIES
          </h2>
        </div>

        {/* Sliding Zipper Fabric Panels */}
        {/* Top Panel */}
        <div 
          ref={topPanelRef}
          className="absolute top-0 left-0 w-full h-[50vh] z-10 overflow-hidden"
          style={{
            clipPath: 'url(#clip-top-zipper)',
            WebkitClipPath: 'url(#clip-top-zipper)',
            backgroundColor: '#0B0B0B',
            backgroundImage: 'radial-gradient(circle, #151515 20%, transparent 20%), radial-gradient(circle, #151515 20%, transparent 20%)',
            backgroundSize: '8px 8px',
            backgroundPosition: '0 0, 4px 4px',
          }}
        >
          {/* Top Zipper Teeth Line */}
          <svg className="absolute bottom-0 left-0 w-full h-[12px] overflow-visible text-[#8A8A8A]" viewBox="0 0 1920 12" preserveAspectRatio="none">
            <path d={generateTeethPath(true)} fill="currentColor" />
          </svg>
        </div>

        {/* Bottom Panel */}
        <div 
          ref={bottomPanelRef}
          className="absolute bottom-0 left-0 w-full h-[50vh] z-10 overflow-hidden"
          style={{
            clipPath: 'url(#clip-bottom-zipper)',
            WebkitClipPath: 'url(#clip-bottom-zipper)',
            backgroundColor: '#0B0B0B',
            backgroundImage: 'radial-gradient(circle, #151515 20%, transparent 20%), radial-gradient(circle, #151515 20%, transparent 20%)',
            backgroundSize: '8px 8px',
            backgroundPosition: '0 0, 4px 4px',
          }}
        >
          {/* Bottom Zipper Teeth Line */}
          <svg className="absolute top-0 left-0 w-full h-[12px] overflow-visible text-[#8A8A8A]" viewBox="0 0 1920 12" preserveAspectRatio="none">
            <path d={generateTeethPath(false)} fill="currentColor" />
          </svg>
        </div>

        {/* Zipper Pull Slider */}
        <div 
          ref={sliderRef}
          className="absolute top-1/2 -translate-y-1/2 left-0 h-16 w-12 z-20 pointer-events-none opacity-0"
        >
          <svg viewBox="0 0 24 32" className="w-full h-full text-accent-primary filter drop-shadow-[0_0_8px_rgba(253,90,30,0.6)]">
            <path d="M 4,0 L 20,0 L 22,8 L 16,10 L 16,28 C 16,30 14,32 12,32 C 10,32 8,30 8,28 L 8,10 L 2,8 Z" fill="currentColor" />
            <circle cx="12" cy="18" r="3" fill="#050505" />
          </svg>
        </div>

        {/* Scroll to Split Prompt */}
        <div className="skills-scroll-prompt absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none text-white/50 text-[10px] font-display tracking-widest uppercase">
          <span>Scroll to unzip</span>
          <div className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-ping" />
        </div>

        <div 
          ref={cardsContainerRef}
          className="absolute inset-x-0 bottom-16 max-w-[1360px] mx-auto w-full px-6 z-5 opacity-0 flex flex-col items-center"
        >
          <div className="w-full text-center mb-5 flex flex-col items-center">
            <span className="skills-sub-header text-xs font-display font-bold text-accent-primary/80 uppercase tracking-widest mb-1.5">
              {"// SYSTEM METRICS"}
            </span>
            <p className="skills-description text-[11px] text-[#4A4A4A] max-w-md font-sans font-light uppercase tracking-wider">
              Primary Logic Systems and Technology Stacks
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6 w-full">
            {CATEGORIES.map((category) => {
              const Icon = category.icon;
              return (
                <div 
                  key={category.id} 
                  className="skills-card bg-[#E2DBD1]/40 border border-[#C5BBAA] rounded-2xl p-6 backdrop-blur-md flex flex-col justify-between h-[590px] shadow-sm transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center gap-3.5 mb-6">
                      <div className="w-9 h-9 rounded-lg bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary">
                        <Icon size={18} />
                      </div>
                      <span className="skills-card-title font-display text-xs uppercase tracking-wider text-[#1C1C1C] font-bold">
                        {category.title}
                      </span>
                    </div>

                     <div className="space-y-3">
                      <div className="grid grid-cols-1 gap-2.5">
                        {category.skills.map((skillName) => (
                          <div 
                            key={skillName} 
                            className="skill-item-card group flex items-center gap-3.5 py-2.5 px-4 rounded-xl border border-[#D5CBB8] bg-[#EBE5DC]/80 hover:border-accent-primary/45 hover:bg-[#F5EFE5] transition-[border-color,background-color] duration-300"
                          >
                            <div className="w-9 h-9 rounded-lg bg-white/70 border border-[#D5CBB8]/60 flex items-center justify-center text-[#4A4A4A] group-hover:border-accent-primary/20 transition-all duration-300 flex-shrink-0">
                              {getSkillLogo(skillName)}
                            </div>
                            <span className="text-[17px] font-sans font-bold text-[#1C1C1C] group-hover:text-black transition-colors duration-300">
                              {skillName}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>


                </div>
              );
            })}
          </div>
        </div>

        {/* SVG ClipPaths for Zipper Open Mask */}
        <svg width="0" height="0" className="absolute pointer-events-none">
          <defs>
            <clipPath id="clip-top-zipper" clipPathUnits="objectBoundingBox">
              <path 
                id="top-zipper-path" 
                d="M 0,0 L 1,0 L 1,1 L 0,1 L 0,0 Z" 
              />
            </clipPath>
            <clipPath id="clip-bottom-zipper" clipPathUnits="objectBoundingBox">
              <path 
                id="bottom-zipper-path" 
                d="M 0,1 L 1,1 L 1,0 L 0,0 L 0,1 Z" 
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    );
  };

  return (
    <section id="skills" className="relative w-full overflow-hidden bg-[#050505]">
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        {renderDesktopLayout()}
      </div>

      {/* Mobile Layout */}
      <div className="block lg:hidden">
        {renderMobileLayout()}
      </div>
    </section>
  );
}
