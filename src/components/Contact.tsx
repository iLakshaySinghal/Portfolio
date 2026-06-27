'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Mail } from 'lucide-react';
import Magnetic from './ui/Magnetic';

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focused, setFocused] = useState({ name: false, email: false, message: false });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFocus = (field: string) => {
    setFocused((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: string) => {
    if (!formData[field as keyof typeof formData]) {
      setFocused((prev) => ({ ...prev, [field]: false }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Identification record required.';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Comms coordinate required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Comms format invalid.';
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Core transmission content required.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-secondary-bg py-24 overflow-hidden border-b border-border-soft"
    >
      <div className="max-w-[1360px] mx-auto w-full px-4 md:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        <div className="lg:col-span-5 flex flex-col">
          <span className="text-sm font-display font-bold text-accent-primary uppercase tracking-widest mb-3">
            {"// DATA COORDINATES"}
          </span>
          <h2 className="text-4xl md:text-[54px] font-display font-black text-white mb-6 tracking-tight uppercase leading-none">
            ESTABLISH <br />
            <span className="text-accent-primary text-glow-orange">COMMUNICATION</span>
          </h2>
          <p className="text-[16.5px] md:text-[18px] text-text-secondary font-sans font-light leading-relaxed mb-10">
            Have a project in mind, want to discuss system architectures, or simply talk creative design? Send a transmission and let&apos;s build something memorable.
          </p>

          <div className="flex gap-4">
            {[
              { icon: Github, link: 'https://github.com/iLakshaySinghal', label: 'GitHub' },
              { icon: Linkedin, link: 'https://linkedin.com/in/lakshay-singhal', label: 'LinkedIn' },
              { icon: Mail, link: 'mailto:lakshaysinghal.5002@gmail.com', label: 'Email' },
            ].map((soc, index) => {
              const Icon = soc.icon;
              return (
                <Magnetic key={index}>
                  <a
                    href={soc.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-full border border-border-soft hover:border-accent-primary bg-surface-card/40 flex items-center justify-center text-text-secondary hover:text-accent-primary transition-all duration-300"
                    aria-label={soc.label}
                  >
                    <Icon size={20} />
                  </a>
                </Magnetic>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-7 w-full">
          <div className="glassmorphism p-10 md:p-12 rounded-3xl border border-border-soft bg-surface-card/20 relative min-h-[500px] flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-8"
                  noValidate
                >
                  <div className="relative w-full">
                    <motion.label
                      className={`absolute left-0 pointer-events-none font-display uppercase tracking-widest text-[14px] transition-all duration-300 ${
                        focused.name || formData.name
                          ? '-top-5 text-[11.5px] text-accent-primary font-semibold'
                          : 'top-3 text-text-muted'
                      }`}
                    >
                      Your Designation Name
                    </motion.label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onFocus={() => handleFocus('name')}
                      onBlur={() => handleBlur('name')}
                      onChange={handleChange}
                      suppressHydrationWarning
                      className="w-full bg-transparent border-b border-border-soft focus:border-accent-primary text-[17px] py-3 text-white outline-none transition-colors duration-300"
                    />
                    {errors.name && (
                      <span className="text-[12px] font-sans text-accent-glow mt-1 block">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="relative w-full">
                    <motion.label
                      className={`absolute left-0 pointer-events-none font-display uppercase tracking-widest text-[14px] transition-all duration-300 ${
                        focused.email || formData.email
                          ? '-top-5 text-[11.5px] text-accent-primary font-semibold'
                          : 'top-3 text-text-muted'
                      }`}
                    >
                      Comms Coordinate (Email)
                    </motion.label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onFocus={() => handleFocus('email')}
                      onBlur={() => handleBlur('email')}
                      onChange={handleChange}
                      suppressHydrationWarning
                      className="w-full bg-transparent border-b border-border-soft focus:border-accent-primary text-[17px] py-3 text-white outline-none transition-colors duration-300"
                    />
                    {errors.email && (
                      <span className="text-[12px] font-sans text-accent-glow mt-1 block">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  <div className="relative w-full">
                    <motion.label
                      className={`absolute left-0 pointer-events-none font-display uppercase tracking-widest text-[14px] transition-all duration-300 ${
                        focused.message || formData.message
                          ? '-top-5 text-[11.5px] text-accent-primary font-semibold'
                          : 'top-3 text-text-muted'
                      }`}
                    >
                      Transmission Brief (Message)
                    </motion.label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onFocus={() => handleFocus('message')}
                      onBlur={() => handleBlur('message')}
                      onChange={handleChange}
                      rows={4}
                      suppressHydrationWarning
                      className="w-full bg-transparent border-b border-border-soft focus:border-accent-primary text-[17px] py-3 text-white outline-none resize-none transition-colors duration-300"
                    />
                    {errors.message && (
                      <span className="text-[12px] font-sans text-accent-glow mt-1 block">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  <div className="mt-4">
                    <Magnetic>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        suppressHydrationWarning
                        className="inline-flex items-center gap-2.5 bg-accent-primary hover:bg-accent-hover disabled:bg-border-soft text-white font-display uppercase tracking-widest text-sm font-bold px-10 py-4.5 rounded-full glow-orange transition-all duration-300 select-none"
                      >
                        {isSubmitting ? 'Transmitting...' : 'Transmit Packet'} <Send size={16} />
                      </button>
                    </Magnetic>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center gap-4 py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="w-16 h-16 rounded-full bg-accent-primary/10 border border-accent-primary flex items-center justify-center text-accent-primary glow-orange"
                  >
                    <CheckCircle2 size={36} />
                  </motion.div>
                  <h3 className="text-xl font-display font-black text-white uppercase tracking-wider mt-2">
                    TRANSMISSION SUCCESSFUL
                  </h3>
                  <p className="text-xs md:text-sm text-text-secondary font-sans font-light max-w-sm leading-relaxed">
                    Your packet has been routed through my cognitive network. I will initiate connection protocols shortly.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-4 text-xs font-display uppercase tracking-widest text-accent-primary hover:text-accent-glow font-bold transition-colors duration-300"
                  >
                    [ Transmit Another Packet ]
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
