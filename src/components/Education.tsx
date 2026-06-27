'use client';

import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

const EDUCATION = [
  {
    degree: 'B.Tech. Computer Science & Engineering',
    institution: 'UPES, Dehradun',
    period: '2023 – 2027',
    details: 'Specializing in full-stack development, automation scripting, and data engineering.',
    grade: 'CGPA: 9.06 / 10',
    icon: GraduationCap,
  },
  {
    degree: 'Senior Secondary (XII) (CBSE)',
    institution: 'St. Mary’s Convent School',
    period: '2022 – 2023',
    details: 'Focus on Science stream (Physics, Chemistry, Mathematics, Computer Science).',
    grade: 'Percentage: 81.83%',
    icon: BookOpen,
  },
  {
    degree: 'Secondary (X) (CBSE)',
    institution: 'St. Mary’s Convent School',
    period: '2020 – 2021',
    details: 'General curriculum focusing on foundational science, mathematics, and computers.',
    grade: 'Percentage: 92.00%',
    icon: BookOpen,
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative min-h-[60vh] w-full bg-primary-bg py-24 border-b border-border-soft overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[5%] w-[250px] h-[250px] rounded-full bg-accent-primary/5 blur-[100px]" />
      </div>

      <div className="max-w-[1360px] mx-auto w-full px-4 md:px-6 relative z-10">
        
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-xs font-display font-bold text-accent-primary uppercase tracking-widest mb-3">
            {"// LEARNING PATHWAY"}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight uppercase">
            EDUCATION <span className="text-accent-primary text-glow-orange">PROFILE</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EDUCATION.map((edu, index) => {
            const Icon = edu.icon;

            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                key={edu.degree}
                className="group relative glassmorphism p-8 md:p-10 rounded-2xl border border-border-soft bg-surface-card/15 flex flex-col justify-between hover:border-accent-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(253,90,30,0.1)]"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent-primary/5 rounded-full blur-2xl group-hover:bg-accent-primary/10 transition-colors duration-300" />

                <div className="flex flex-col gap-5">
                  <div className="flex justify-between items-start">
                    <div className="w-14 h-14 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary flex-shrink-0">
                      <Icon size={28} />
                    </div>
                    <span className="text-[11.5px] font-sans font-bold text-accent-glow bg-accent-primary/5 border border-accent-primary/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                      {edu.period}
                    </span>
                  </div>

                  <div className="flex flex-col mt-2">
                    <span className="text-[12px] font-display text-text-muted uppercase tracking-widest mb-1 font-bold">
                      {edu.institution}
                    </span>
                    <h3 className="text-xl md:text-[22px] font-display font-black text-white tracking-wide leading-snug">
                      {edu.degree}
                    </h3>
                  </div>

                  <p className="text-sm md:text-[15.5px] text-text-secondary font-sans font-light leading-relaxed mt-2">
                    {edu.details}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-border-soft/60 flex flex-col gap-1">
                  <span className="text-[11px] font-sans text-text-muted uppercase tracking-widest flex items-center gap-1">
                    <Award size={14} className="text-accent-primary" />
                    ACADEMIC SCORE
                  </span>
                  <span className="text-2xl md:text-3xl font-display font-black text-white text-glow-orange tracking-wide">
                    {edu.grade.replace('CGPA: ', '').replace('Percentage: ', '')}
                  </span>
                  <span className="text-[11px] font-sans text-accent-primary font-bold uppercase tracking-wider">
                    {edu.grade.includes('CGPA') ? 'CGPA SCALE' : 'BOARD PERCENTAGE'}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
