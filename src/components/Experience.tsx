'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const EXPERIENCES = [
  {
    period: 'Jun 2026 – Present',
    role: 'Software Development Engineer Intern',
    company: 'XEBIA',
    description: 'Co-engineered scalable full-stack applications within an Agile team, delivering high-impact projects including an Automated Task Management system and the Xebia Exam Platform using ReactJS, NodeJS, MongoDB, and Python. Utilized advanced AI tools and prompt engineering methodologies to build intelligent, data-driven features and automate development workflows, significantly boosting software delivery efficiency and code quality.',
  },
  {
    period: 'Jun 2025 – Jul 2025',
    role: 'Software Development Intern',
    company: 'AK TECHNOLABS',
    description: 'Designed and implemented responsive web interfaces and frontend features using modern web technologies, enhancing user experience and usability across diverse devices. Collaborated in an Agile development team using Git-based workflows to test, debug, and optimize application code, improving execution performance and system reliability.',
  },
];

// Helper to generate vertical zipper teeth that interlock
const generateVerticalTeethPath = (isLeft: boolean) => {
  let d = '';
  const step = 8;
  const h = 1200; // tall enough to cover screens
  for (let y = 0; y < h; y += step) {
    if (isLeft) {
      // Left teeth on the right edge of left panel (points right)
      d += `M 0,${y} L 0,${y+3} L 6,${y+3} L 6,${y+5} L 0,${y+5} L 0,${y+8} `;
    } else {
      // Right teeth on the left edge of right panel (points left, offset by 4px to interlock)
      d += `M 12,${y+4} L 12,${y+7} L 6,${y+7} L 6,${y+9} L 12,${y+9} L 12,${y+12} `;
    }
  }
  return d;
};

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  // Normal non-pinned trigger for mobile scroll progress line
  const mobileProgressLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop layout transitions (Vertical zip)
      mm.add("(min-width: 1024px)", () => {
        const container = containerRef.current;
        const nameEl = nameRef.current;
        const leftPanel = leftPanelRef.current;
        const rightPanel = rightPanelRef.current;
        const timelineContainer = timelineContainerRef.current;
        const shadow = shadowRef.current;
        const slider = sliderRef.current;
        const progressLine = progressLineRef.current;

        if (!container || !nameEl || !leftPanel || !rightPanel || !timelineContainer || !shadow || !slider || !progressLine) return;

        // Reset elements initial positions
        gsap.set([leftPanel, rightPanel], { xPercent: 0 });
        gsap.set(container, { backgroundColor: '#0B0B0B' });
        gsap.set(nameEl, { color: '#FFFFFF', textShadow: '0 0 10px rgba(253, 90, 30, 0.6)', y: 0 });
        gsap.set(shadow, { opacity: 0 });
        gsap.set(timelineContainer, { yPercent: 40, opacity: 0 });
        gsap.set(slider, { top: '0%', yPercent: 0, opacity: 1 });
        gsap.set(progressLine, { height: '0%' });

        // Reset zipper clip paths to closed state (center seam at x=1 for left, x=0 for right)
        gsap.set('#left-zipper-path', { attr: { d: 'M 0,0 L 1,0 L 1,0.5 L 1,1 L 0,1 Z' } });
        gsap.set('#right-zipper-path', { attr: { d: 'M 0,0 L 1,0 L 1,1 L 0,1 L 0,0.5 Z' } });

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
          top: '100%',
          yPercent: -100,
          ease: 'none',
          duration: 1,
        }, 0)
        .to('.experience-scroll-prompt', {
          opacity: 0,
          ease: 'power2.out',
        }, 0)
        
        // Morph clipPaths to create a vertical V-shape opening behind the slider
        // Step 1: Open up to 33%
        .to('#left-zipper-path', {
          attr: { d: 'M 0,0 L 0,0 L 1,0.33 L 1,1 L 0,1 Z' },
          duration: 0.33,
          ease: 'none',
        }, 0)
        .to('#right-zipper-path', {
          attr: { d: 'M 1,0 L 1,0 L 1,1 L 0,1 L 0,0.33 Z' },
          duration: 0.33,
          ease: 'none',
        }, 0)

        // Step 2: Open up to 66%
        .to('#left-zipper-path', {
          attr: { d: 'M 0,0 L 0,0 L 1,0.66 L 1,1 L 0,1 Z' },
          duration: 0.33,
          ease: 'none',
        }, 0.33)
        .to('#right-zipper-path', {
          attr: { d: 'M 1,0 L 1,0 L 1,1 L 0,1 L 0,0.66 Z' },
          duration: 0.33,
          ease: 'none',
        }, 0.33)

        // Step 3: Fully unzipped to 100%
        .to('#left-zipper-path', {
          attr: { d: 'M 0,0 L 0,0 L 0,1 L 0,1 L 0,1 Z' },
          duration: 0.34,
          ease: 'none',
        }, 0.66)
        .to('#right-zipper-path', {
          attr: { d: 'M 1,0 L 1,0 L 1,1 L 1,1 L 1,1 Z' },
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
          y: '-32vh',
          ease: 'power2.inOut',
        }, 0.3)
        .to(shadow, {
          opacity: 0.12,
          ease: 'power1.inOut',
        }, 0.3)

        // 3. Slide up the timeline grid cards and animate progress line drawing
        .to(timelineContainer, {
          yPercent: 0,
          opacity: 1,
          ease: 'power2.out',
          duration: 0.4,
        }, 0.6)
        .to(progressLine, {
          height: '100%',
          ease: 'none',
          duration: 0.8,
        }, 0.7);
      });

      // Mobile scroll reveals
      mm.add("(max-width: 1023px)", () => {
        const container = containerRef.current;
        const progressLine = mobileProgressLineRef.current;
        if (!container || !progressLine) return;

        gsap.fromTo(
          progressLine,
          { height: '0%' },
          {
            height: '100%',
            ease: 'none',
            scrollTrigger: {
              trigger: container,
              start: 'top 30%',
              end: 'bottom 70%',
              scrub: true,
            },
          }
        );

        gsap.utils.toArray<HTMLElement>('.experience-card-mobile').forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none none',
              },
            }
          );
        });
      });

    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const renderMobileLayout = () => {
    return (
      <div className="max-w-[1100px] mx-auto w-full px-4 py-24 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 flex flex-col items-center">
          <span className="text-xs font-display font-bold text-accent-primary uppercase tracking-widest mb-3">
            {"// HISTORY LOG"}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight uppercase">
            EXPERIENCE <span className="text-accent-primary text-glow-orange">TIMELINE</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full flex flex-col mt-12 pl-6">
          <div className="absolute left-[6px] top-0 bottom-0 w-[2px] bg-border-soft z-0" />
          <div
            ref={mobileProgressLineRef}
            className="absolute left-[6px] top-0 w-[2px] bg-gradient-to-b from-accent-primary to-accent-glow z-10 text-glow-orange shadow-[0_0_10px_rgba(253,90,30,0.6)]"
            style={{ height: '0%' }}
          />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <div key={index} className="experience-card-mobile flex flex-col items-start relative z-20 w-full">
                <div className="absolute left-[-26px] w-4 h-4 rounded-full bg-secondary-bg border-[3px] border-accent-primary z-30 glow-orange" />
                <div className="glassmorphism p-6 rounded-2xl border border-border-soft bg-surface-card/30 flex flex-col gap-3 w-full">
                  <span className="text-xs font-display font-semibold text-accent-glow tracking-wider uppercase">
                    {exp.period}
                  </span>
                  <span className="text-[12px] font-display text-accent-primary tracking-widest uppercase font-bold">
                    {exp.company}
                  </span>
                  <h3 className="text-xl font-display font-black text-white tracking-wide">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-text-secondary font-sans font-light leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderDesktopLayout = () => {
    return (
      <div 
        ref={containerRef} 
        className="w-full min-h-screen relative overflow-hidden bg-[#0B0B0B] flex items-center justify-center"
      >
        {/* Palm Leaf Shadow Overlay */}
        <div 
          ref={shadowRef}
          className="absolute inset-0 bg-[url('/palm_leaf_shadow.png')] bg-cover bg-center pointer-events-none z-2 opacity-0 mix-blend-multiply transition-opacity duration-300"
        />

        {/* Centerpiece title ("EXPERIENCE TIMELINE") */}
        <div className="absolute inset-0 flex items-center justify-center z-1">
          <h2 
            ref={nameRef}
            className="experience-big-title text-[7vw] font-display font-black leading-none text-white text-glow-orange uppercase tracking-tighter select-none text-center"
          >
            EXPERIENCE TIMELINE
          </h2>
        </div>

        {/* Sliding Zipper Fabric Panels */}
        {/* Left Panel */}
        <div 
          ref={leftPanelRef}
          className="absolute top-0 left-0 w-[50vw] h-full z-10 overflow-hidden"
          style={{
            clipPath: 'url(#clip-left-zipper)',
            WebkitClipPath: 'url(#clip-left-zipper)',
            backgroundColor: '#0B0B0B',
            backgroundImage: 'radial-gradient(circle, #151515 20%, transparent 20%), radial-gradient(circle, #151515 20%, transparent 20%)',
            backgroundSize: '8px 8px',
            backgroundPosition: '0 0, 4px 4px',
          }}
        >
          {/* Left Zipper Teeth Line on its right edge */}
          <svg className="absolute top-0 right-0 w-[12px] h-full overflow-visible text-[#8A8A8A]" viewBox="0 0 12 1080" preserveAspectRatio="none">
            <path d={generateVerticalTeethPath(true)} fill="currentColor" />
          </svg>
        </div>

        {/* Right Panel */}
        <div 
          ref={rightPanelRef}
          className="absolute top-0 right-0 w-[50vw] h-full z-10 overflow-hidden"
          style={{
            clipPath: 'url(#clip-right-zipper)',
            WebkitClipPath: 'url(#clip-right-zipper)',
            backgroundColor: '#0B0B0B',
            backgroundImage: 'radial-gradient(circle, #151515 20%, transparent 20%), radial-gradient(circle, #151515 20%, transparent 20%)',
            backgroundSize: '8px 8px',
            backgroundPosition: '0 0, 4px 4px',
          }}
        >
          {/* Right Zipper Teeth Line on its left edge */}
          <svg className="absolute top-0 left-0 w-[12px] h-full overflow-visible text-[#8A8A8A]" viewBox="0 0 12 1080" preserveAspectRatio="none">
            <path d={generateVerticalTeethPath(false)} fill="currentColor" />
          </svg>
        </div>

        {/* Zipper Pull Slider */}
        <div 
          ref={sliderRef}
          className="absolute left-1/2 -translate-x-1/2 top-0 h-16 w-12 z-20 pointer-events-none opacity-0"
        >
          <svg viewBox="0 0 24 32" className="w-full h-full text-accent-primary filter drop-shadow-[0_0_8px_rgba(253,90,30,0.6)]">
            <path d="M 4,0 L 20,0 L 22,8 L 16,10 L 16,28 C 16,30 14,32 12,32 C 10,32 8,30 8,28 L 8,10 L 2,8 Z" fill="currentColor" />
            <circle cx="12" cy="18" r="3" fill="#050505" />
          </svg>
        </div>

        {/* Scroll to Split Prompt */}
        <div className="experience-scroll-prompt absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none text-white/50 text-[10px] font-display tracking-widest uppercase">
          <span>Scroll to unzip</span>
          <div className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-ping" />
        </div>

        {/* Experience Timeline Grid */}
        <div 
          ref={timelineContainerRef}
          className="absolute inset-0 max-w-[1100px] mx-auto w-full px-6 z-5 opacity-0 flex flex-col items-center justify-center pt-24"
        >
          {/* Section Header */}
          <div className="w-full text-center mb-10 flex flex-col items-center">
            <span className="experience-sub-header text-xs font-display font-bold text-accent-primary/80 uppercase tracking-widest mb-1.5">
              {"// HISTORY LOG"}
            </span>
          </div>

          <div className="relative w-full flex flex-col pl-6 md:pl-0 h-[65vh] overflow-y-visible">
            {/* Default background track line */}
            <div className="absolute left-[6px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[#C5BBAA]/40 transform md:-translate-x-1/2 z-0" />
            
            {/* Animated active progress fill line */}
            <div
              ref={progressLineRef}
              className="absolute left-[6px] md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-accent-primary to-accent-glow transform md:-translate-x-1/2 z-10 text-glow-orange shadow-[0_0_10px_rgba(253,90,30,0.6)]"
              style={{ height: '0%' }}
            />

            {/* Milestones */}
            <div className="space-y-12 md:space-y-20 mt-8">
              {EXPERIENCES.map((exp, index) => {
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row items-start md:items-center relative z-20 w-full"
                  >
                    {/* Bullet indicator */}
                    <div className="absolute left-[-26px] md:left-1/2 w-4 h-4 rounded-full bg-[#EAE6DF] border-[3px] border-accent-primary transform md:-translate-x-1/2 z-30 glow-orange" />

                    {/* Left Column (50% on desktop) */}
                    <div className="w-full md:w-1/2 px-0 md:px-8 order-2 md:order-1">
                      {isEven ? (
                        <div className="experience-card bg-[#E2DBD1]/40 border border-[#C5BBAA] p-6 md:p-8 rounded-2xl flex flex-col gap-3 shadow-sm transition-all duration-300">
                          <span className="text-[12px] font-display text-accent-primary tracking-widest uppercase font-bold">
                            {exp.company}
                          </span>
                          <h3 className="text-xl md:text-[22px] font-display font-black text-[#1C1C1C] tracking-wide">
                            {exp.role}
                          </h3>
                          <p className="text-sm md:text-[15.5px] text-[#4A4A4A] font-sans font-light leading-relaxed">
                            {exp.description}
                          </p>
                        </div>
                      ) : (
                        <div className="hidden md:block text-right font-display text-base font-bold text-accent-primary uppercase tracking-wider">
                          {exp.period}
                        </div>
                      )}
                    </div>

                    {/* Right Column (50% on desktop) */}
                    <div className="w-full md:w-1/2 px-0 md:px-8 order-3 md:order-2">
                      {isEven ? (
                        <div className="hidden md:block text-left font-display text-base font-bold text-accent-primary uppercase tracking-wider">
                          {exp.period}
                        </div>
                      ) : (
                        <div className="experience-card bg-[#E2DBD1]/40 border border-[#C5BBAA] p-6 md:p-8 rounded-2xl flex flex-col gap-3 shadow-sm transition-all duration-300">
                          <span className="text-[12px] font-display text-accent-primary tracking-widest uppercase font-bold">
                            {exp.company}
                          </span>
                          <h3 className="text-xl md:text-[22px] font-display font-black text-[#1C1C1C] tracking-wide">
                            {exp.role}
                          </h3>
                          <p className="text-sm md:text-[15.5px] text-[#4A4A4A] font-sans font-light leading-relaxed">
                            {exp.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* SVG ClipPaths for Zipper Open Mask */}
        <svg width="0" height="0" className="absolute pointer-events-none">
          <defs>
            <clipPath id="clip-left-zipper" clipPathUnits="objectBoundingBox">
              <path 
                id="left-zipper-path" 
                d="M 0,0 L 1,0 L 1,0.5 L 1,1 L 0,1 Z" 
              />
            </clipPath>
            <clipPath id="clip-right-zipper" clipPathUnits="objectBoundingBox">
              <path 
                id="right-zipper-path" 
                d="M 0,0 L 1,0 L 1,1 L 0,1 L 0,0.5 Z" 
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    );
  };

  return (
    <section id="experience" className="relative w-full overflow-hidden bg-secondary-bg">
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
