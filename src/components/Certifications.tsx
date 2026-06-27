'use client';

import { motion } from 'framer-motion';
import { Award, ShieldCheck, Zap, GraduationCap, BookOpen, Heart } from 'lucide-react';

const CERTS = [
  {
    title: 'B.Tech. Computer Science & Engineering',
    issuer: 'UPES, Dehradun',
    date: '2023 - 2027',
    id: 'CGPA: 9.06/10',
    icon: GraduationCap,
  },
  {
    title: 'Senior Secondary (XII) (CBSE)',
    issuer: 'St. Mary’s Convent School',
    date: '2022 - 2023',
    id: 'Percentage: 85.40%',
    icon: BookOpen,
  },
  {
    title: 'Secondary (X) (CBSE)',
    issuer: 'St. Mary’s Convent School',
    date: '2020 - 2021',
    id: 'Percentage: 92.00%',
    icon: BookOpen,
  },
  {
    title: 'Academic Excellence Scholarship',
    issuer: 'UPES University',
    date: 'Merit Award',
    id: 'CGPA: 9.06/10 Merit',
    icon: Award,
  },
  {
    title: 'Hackathon 4.0 Finalist (Round 3)',
    issuer: 'UPES CSA',
    date: 'Oct 2024',
    id: 'CSA Hackathon Team',
    icon: Zap,
  },
  {
    title: 'AWS Cloud Quest: Cloud Practitioner',
    issuer: 'AWS Training & Certification',
    date: 'Credly Badge',
    id: 'Cloud Practitioner',
    icon: ShieldCheck,
  },
  {
    title: 'Machine Learning & Deep Learning',
    issuer: 'Udemy Certifications',
    date: 'Completed',
    id: 'Neural Network & Modeling',
    icon: Award,
  },
  {
    title: 'Social Work Intern (Volunteer)',
    issuer: 'Bhoot Purva Sainik Sanstha',
    date: 'Volunteer',
    id: 'Efficiency Boost: +15%',
    icon: Heart,
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative min-h-[50vh] w-full bg-primary-bg py-24 border-b border-border-soft overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full px-4 md:px-6 relative z-10">
        
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-xs font-display font-bold text-accent-primary uppercase tracking-widest mb-3">
            {"// EDUCATION & ACCREDITATIONS"}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight uppercase">
            EDUCATION & <span className="text-accent-primary text-glow-orange">ACHIEVEMENTS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTS.map((cert, index) => {
            const Icon = cert.icon;

            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                key={cert.title}
                className="group relative glassmorphism p-6 rounded-2xl border border-border-soft bg-surface-card/20 flex flex-col justify-between hover:border-accent-primary/40 transition-colors duration-300"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent-primary/5 rounded-full blur-2xl group-hover:bg-accent-primary/10 transition-colors duration-300" />

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary">
                    <Icon size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-display text-accent-glow uppercase tracking-widest mb-1">
                      {cert.issuer}
                    </span>
                    <h3 className="text-sm md:text-base font-display font-bold text-white tracking-wide">
                      {cert.title}
                    </h3>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-8 border-t border-border-soft/60 pt-4">
                  <span className="text-[9px] font-sans text-text-muted uppercase tracking-wider">
                    ID: {cert.id}
                  </span>
                  <span className="text-[9px] font-sans text-accent-primary font-bold uppercase tracking-wider">
                    {cert.date}
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
