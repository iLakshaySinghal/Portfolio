'use client';
 
import { motion } from 'framer-motion';
import { Award, Zap, ShieldCheck, Heart, Star, CheckCircle, GitBranch, Cpu } from 'lucide-react';
import Image from 'next/image';

const ACHIEVEMENTS = [
  {
    title: 'Academic Merit Scholarship',
    issuer: 'UPES University',
    description: 'Awarded the UPES Merit Scholarship for maintaining outstanding academic performance (CGPA: 9.06/10).',
    tag: 'Academic Excellence',
    icon: Award,
  },
  {
    title: 'Hackathon 4.0 Finalist',
    issuer: 'UPES CSA',
    description: 'Ranked as a top finalist (Round 3) in Hackathon 4.0, designing multidisciplinary prototypes alongside engineering teams.',
    tag: 'Hackathon Finalist',
    icon: Zap,
  },
  {
    title: 'AWS Cloud Quest: Cloud Practitioner',
    issuer: 'AWS Training & Certification',
    description: 'Earned the AWS Cloud Quest: Cloud Practitioner credential (Credly Badge) verifying cloud foundations and architecture knowledge.',
    tag: 'Cloud Credential',
    icon: ShieldCheck,
    link: 'https://www.credly.com/badges/a88379d1-e395-442f-8432-85b3c6c79cd7/public_url',
    image: '/aws_certificate.png',
  },
  {
    title: 'GitHub Foundations',
    issuer: 'Microsoft',
    description: 'Successfully completed the GitHub Foundations certification, validating core knowledge of Git version control, collaborative repositories, and automation workflows on GitHub.',
    tag: 'Git & Collaboration',
    icon: GitBranch,
    image: '/github_cert.png',
    link: 'https://learn.microsoft.com/api/achievements/share/en-us/LakshaySinghal-7450/WMVW38YN?sharingId=8024B7ED6FC5A462',
  },
  {
    title: 'Microsoft 365 & AI Administration',
    issuer: 'Microsoft',
    description: 'Successfully completed the Introduction to Microsoft 365 and AI administration, verifying foundational cloud administration and AI services integration.',
    tag: 'AI & Cloud Admin',
    icon: Cpu,
    image: '/m365_ai_cert.png',
    link: 'https://learn.microsoft.com/api/achievements/share/en-us/LakshaySinghal-7450/3ZZMABMH?sharingId=8024B7ED6FC5A462',
  },
  {
    title: 'ML & Deep Learning Certifications',
    issuer: 'Udemy Accreditations',
    description: 'Completed certifications in Machine Learning and Deep Learning, mastering neural network modeling, data analysis, and predictive models.',
    tag: 'AI/ML Specialization',
    icon: Star,
  },
  {
    title: 'Social Work Intern (Volunteer)',
    issuer: 'Bhoot Purva Sainik Sanstha',
    description: 'Volunteered as a Social Intern, optimizing resource allocation and feeding routines to improve operational efficiency by 15%.',
    tag: 'Social Service',
    icon: Heart,
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative min-h-screen w-full bg-secondary-bg py-24 border-b border-border-soft overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-[20%] right-[5%] w-[300px] h-[300px] rounded-full bg-accent-primary/5 blur-[120px]" />
      </div>

      <div className="max-w-[1360px] mx-auto w-full px-4 md:px-6 relative z-10">
        
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-xs font-display font-bold text-accent-primary uppercase tracking-widest mb-3">
            {"// SYSTEM RECOGNITIONS"}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight uppercase">
            KEY <span className="text-accent-primary text-glow-orange">ACHIEVEMENTS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((ach, index) => {
            const Icon = ach.icon;

            const CardContent = (
              <>
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent-primary/5 rounded-full blur-2xl group-hover:bg-accent-primary/10 transition-colors duration-300" />

                <div className="flex gap-4 items-start relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary flex-shrink-0">
                    <Icon size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] font-display text-accent-glow uppercase tracking-widest mb-1 font-bold">
                      {ach.issuer}
                    </span>
                    <h3 className="text-lg md:text-[21px] font-display font-black text-white tracking-wide leading-snug group-hover:text-accent-primary transition-colors duration-300">
                      {ach.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm md:text-[15.5px] text-text-secondary font-sans font-light leading-relaxed mt-6 mb-8 relative z-10">
                  {ach.description}
                </p>

                <div className="flex justify-between items-center mt-auto border-t border-border-soft/60 pt-4 relative z-10 w-full">
                  <span className={`text-[11px] font-sans uppercase tracking-wider flex items-center gap-1.5 ${
                    ach.link ? 'text-accent-primary font-bold hover:text-accent-hover transition-colors duration-300' : 'text-text-muted'
                  }`}>
                    <CheckCircle size={13} className="text-accent-primary" />
                    {ach.link ? (ach.link.includes('credly') ? 'VERIFIED // VIEW CREDLY' : 'VERIFIED // VIEW MICROSOFT') : 'VERIFIED'}
                  </span>
                  <span className="text-[11px] font-sans text-accent-primary font-bold uppercase tracking-wider">
                    {ach.tag}
                  </span>
                </div>

                {/* Floating Certificate Preview (Desktop only) */}
                {ach.image && (
                  <div 
                    className={`hidden lg:block absolute lg:w-[450px] lg:h-[318px] xl:w-[520px] xl:h-[368px] 2xl:w-[600px] 2xl:h-[424px] rounded-2xl border border-accent-primary/30 bg-[#0B0B0B]/95 p-2 shadow-[0_25px_60px_rgba(0,0,0,0.95)] pointer-events-none opacity-0 scale-0 transition-all duration-500 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] z-50 ${
                      index % 3 === 2 
                        ? 'right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 origin-right group-hover:right-[105%] group-hover:top-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-100' 
                        : 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 origin-left group-hover:left-[105%] group-hover:top-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-100'
                    }`}
                  >
                    <div className="relative w-full h-full rounded-xl overflow-hidden border border-border-soft/60">
                      <Image
                        src={ach.image}
                        alt="Certificate Preview"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}
              </>
            );

            if (ach.link) {
              return (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10% 0px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  key={ach.title}
                  href={ach.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative glassmorphism p-8 md:p-10 rounded-2xl border border-border-soft bg-surface-card/25 flex flex-col justify-between hover:border-accent-primary/40 hover:z-50 transition-all duration-300 cursor-pointer"
                >
                  {CardContent}
                </motion.a>
              );
            }

            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                key={ach.title}
                className="group relative glassmorphism p-8 md:p-10 rounded-2xl border border-border-soft bg-surface-card/25 flex flex-col justify-between hover:border-accent-primary/40 hover:z-50 transition-all duration-300"
              >
                {CardContent}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
