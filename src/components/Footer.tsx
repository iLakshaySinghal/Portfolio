'use client';

import Magnetic from './ui/Magnetic';

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 40,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="relative w-full bg-primary-bg py-12 border-t border-border-soft overflow-hidden">
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[350px] h-[150px] rounded-full bg-accent-primary/10 blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
          <span className="text-sm font-display font-black tracking-widest text-white">
            LAKSHAY<span className="text-accent-primary">.</span>DEV
          </span>
          <span className="text-[10px] font-sans text-text-muted uppercase tracking-wider">
            &copy; {new Date().getFullYear()} Lakshay Singhal. All systems operational.
          </span>
        </div>

        <div className="flex gap-8 text-xs font-display uppercase tracking-widest">
          <Magnetic>
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="text-text-secondary hover:text-accent-primary transition-colors duration-300"
            >
              Back to Top //
            </a>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
}
