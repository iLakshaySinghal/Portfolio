'use client';

import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Load 3D Scene client-side only to prevent SSR compilation errors
const Scene3D = dynamic(() => import('@/components/3d/Scene3D'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-primary-bg overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Scene3D />
      </div>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
