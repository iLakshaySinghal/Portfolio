'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import Magnetic from './ui/Magnetic';
import { ArrowRight, Code } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const charWrapperRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { damping: 40, stiffness: 220 });
  const springY = useSpring(mouseY, { damping: 40, stiffness: 220 });

  const floatingX = useSpring(useMotionValue(0), { damping: 50, stiffness: 180 });
  const floatingY = useSpring(useMotionValue(0), { damping: 50, stiffness: 180 });

  useEffect(() => {
    // Parallax mouse movements
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { width, height, left, top } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / (width / 2);
      const y = (e.clientY - top - height / 2) / (height / 2);
      
      mouseX.set(x * 25);
      mouseY.set(y * 25);
      
      floatingX.set(x * -40);
      floatingY.set(y * -40);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const nameEl = nameRef.current;
        const charEl = charWrapperRef.current;
        const container = containerRef.current;

        if (!nameEl || !charEl || !container) return;

        const setupScrollAnimation = () => {
          // Reset properties to measure real layout positions
          gsap.set([nameEl, charEl], { x: 0, y: 0, scale: 1 });

          const nameRect = nameEl.getBoundingClientRect();
          const charRect = charEl.getBoundingClientRect();
          
          const centerX = window.innerWidth / 2;
          const centerY = window.innerHeight / 2;

          // Calculate offset to place in screen center
          const nameOffsetX = centerX - (nameRect.left + nameRect.width / 2);
          // Shift the start vertical offset upwards by 24% of window height so it sits above the head
          const nameOffsetY = centerY - (nameRect.top + nameRect.height / 2) - (window.innerHeight * 0.24);

          const charOffsetX = centerX - (charRect.left + charRect.width / 2);
          const charOffsetY = centerY - (charRect.top + charRect.height / 2);

          // Dynamically scale the name to fill 96% of the viewport width at start (slightly larger)
          const targetScale = (window.innerWidth * 0.96) / nameRect.width;

          // Apply initial offset centering states
          gsap.set(nameEl, {
            x: nameOffsetX,
            y: nameOffsetY,
            scale: targetScale,
          });

          gsap.set(charEl, {
            x: charOffsetX,
            y: charOffsetY + 120,
            scale: 1.15,
          });

          // GSAP Timeline scrubbed by scroll pinning with smooth catch-up
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: container,
              start: 'top top',
              end: '+=100%',
              scrub: 1.5,
              pin: true,
              invalidateOnRefresh: true,
            }
          });

          tl.to(nameEl, {
            x: 0,
            y: 0,
            scale: 1,
            ease: 'power2.inOut',
          })
          .to(charEl, {
            x: 0,
            y: 0,
            scale: 1,
            ease: 'power2.inOut',
          }, 0)
          .to('.hero-name-startup', {
            opacity: 0,
            ease: 'power2.inOut',
          }, 0)
          .to('.hero-name-final', {
            opacity: 1,
            ease: 'power2.inOut',
          }, 0)
          .fromTo('.hero-content-fade', 
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, stagger: 0.1, ease: 'power2.out' },
            0.45
          )
          .fromTo('.hero-cyberspin',
            { scale: 1 },
            { scale: 0.7, ease: 'power2.inOut' },
            0
          );
        };

        setupScrollAnimation();
        
        // Recalculate boundaries on window resize
        window.addEventListener('resize', setupScrollAnimation);
        return () => {
          window.removeEventListener('resize', setupScrollAnimation);
        };
      });

      // Mobile/Tablet fallbacks (renders pre-scrolled directly with basic entrance reveals)
      mm.add("(max-width: 1023px)", () => {
        const container = containerRef.current;
        if (!container) return;

        const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1 } });
        tl.fromTo('.hero-big-title', { opacity: 0, y: 40 }, { opacity: 1, y: 0, delay: 0.2 })
          .fromTo('.hero-content-fade', { opacity: 0, y: 30 }, { opacity: 1, y: 0, stagger: 0.1 }, '-=0.7')
          .fromTo('.hero-char-mobile', { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2 }, '-=0.9');
      });

    }, containerRef);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      ctx.revert();
    };
  }, []);

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 40,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center bg-primary-bg overflow-hidden pt-20"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[40%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[320px] h-[320px] md:w-[600px] md:h-[600px] rounded-full bg-accent-primary/10 blur-[130px] animate-pulse-slow pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      </div>

      <div className="max-w-[1360px] mx-auto w-full px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 py-12 md:py-24">
        
        {/* Left Column content details */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left order-2 lg:order-1">
          <div className="hero-content-fade inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-soft bg-surface-card/40 w-fit mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
            <span className="text-[12px] font-display font-bold tracking-wider text-accent-glow uppercase">
              STATUS: DEVELOPING COGNITIVE MERN STACKS
            </span>
          </div>

          {/* Centering / Transition Name Text Header */}
          <div className="overflow-visible mb-6 relative flex justify-center lg:justify-start">
            <h1 
              ref={nameRef}
              className="hero-big-title text-[10vw] sm:text-6xl lg:text-[5vw] xl:text-[4.6vw] 2xl:text-[4.8rem] leading-none uppercase whitespace-nowrap origin-center select-none w-fit block tracking-tighter"
            >
              {/* Startup Font (Bebas Neue) */}
              <span className="hero-name-startup font-bebas-neue font-normal tracking-wider text-white text-glow-orange absolute inset-0 block text-center">
                LAKSHAY SINGHAL
              </span>
              {/* Final Font (Orbitron / Original) */}
              <span className="hero-name-final font-display font-black tracking-tighter text-white text-glow-orange block text-center opacity-0">
                LAKSHAY SINGHAL
              </span>
            </h1>
          </div>

          <p className="hero-content-fade text-[17.5px] md:text-[20px] text-text-secondary font-sans font-light max-w-xl mb-10 leading-relaxed">
            I am a Computer Science undergraduate and UI/UX Intern at Xebia. I build scalable full-stack MERN applications, robust web scraping pipelines, and clean, responsive user interfaces.
          </p>

          <div className="hero-content-fade flex flex-wrap gap-4 items-center">
            <Magnetic>
              <a
                href="#projects"
                onClick={(e) => handleCtaClick(e, '#projects')}
                className="inline-flex items-center gap-2.5 bg-accent-primary hover:bg-accent-hover text-white font-display uppercase tracking-wider text-sm font-bold px-10 py-4.5 rounded-full glow-orange transition-all duration-300"
              >
                View Projects <ArrowRight size={18} />
              </a>
            </Magnetic>

            <Magnetic>
              <a
                href="#contact"
                onClick={(e) => handleCtaClick(e, '#contact')}
                className="inline-flex items-center gap-2.5 border border-border-soft hover:border-accent-primary/50 bg-surface-card/50 text-white font-display uppercase tracking-wider text-sm font-bold px-10 py-4.5 rounded-full transition-all duration-300"
              >
                Contact Me <Code size={18} />
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Right Column centerpiece character (wrapped for parent GSAP transition and child mouse-parallax) */}
        <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
          <div ref={charWrapperRef} className="hero-char-mobile relative w-[340px] h-[410px] md:w-[410px] md:h-[500px] lg:w-[480px] lg:h-[570px] origin-center z-20">
            
            {/* Holographic circular backdrop spinning - translates in scale via timeline */}
            <div className="hero-cyberspin absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[370px] h-[370px] md:w-[540px] md:h-[540px] lg:w-[650px] lg:h-[650px] rounded-full border border-accent-primary/10 border-dashed animate-[spin_60s_linear_infinite] z-0 pointer-events-none" />

            <div className="absolute inset-0 bg-accent-primary/20 rounded-full blur-[60px] transform scale-75 z-0" />

            {/* Micro-parallax target (child) */}
            <motion.div
              className="w-full h-full relative rounded-2xl overflow-hidden glassmorphism border border-border-soft flex items-center justify-center p-2.5 animate-float z-10"
              style={{
                x: springX,
                y: springY,
              }}
            >
              <Image
                src="/lakshay_portrait.png"
                alt="Lakshay Singhal Portrait"
                fill
                priority
                className="object-cover rounded-xl transition-all duration-700 brightness-95"
              />

              <div className="absolute bottom-4 left-4 right-4 bg-primary-bg/85 backdrop-blur-md border border-border-soft p-4 rounded-lg flex flex-col gap-1">
                <span className="text-[12px] font-display font-bold text-accent-primary uppercase tracking-widest">
                  SYS.ID // LAKSHAY_SINGHAL
                </span>
                <span className="text-[11px] font-sans text-text-muted uppercase tracking-wider font-semibold">
                  UPES CSE // CGPA 9.06
                </span>
              </div>
            </motion.div>

            {/* Floating Glass Tags */}
            <motion.div
              className="absolute glassmorphism border border-border-soft p-4 rounded-xl hidden md:flex items-center gap-3.5 z-20 pointer-events-none"
              style={{
                top: '-24px',
                left: '-24px',
                x: floatingX,
                y: floatingY,
              }}
            >
              <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary flex-shrink-0">
                <span className="font-display font-black text-sm">JSX</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-display text-white uppercase tracking-wider font-bold">React 19 Core</span>
                <span className="text-[9px] font-sans text-text-muted uppercase">Compiler Optimized</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute glassmorphism border border-border-soft p-4 rounded-xl hidden md:flex items-center gap-3.5 z-20 pointer-events-none"
              style={{
                bottom: '-24px',
                right: '-24px',
                x: floatingX,
                y: floatingY,
              }}
            >
              <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary flex-shrink-0">
                <span className="font-display font-black text-sm">TS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-display text-white uppercase tracking-wider font-bold">TypeScript</span>
                <span className="text-[9px] font-sans text-text-muted uppercase">Strictly Typed</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
