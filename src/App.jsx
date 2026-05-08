import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  ExternalLink, Globe, Palette, ChevronRight,
  Sparkles, Layers, Box, Terminal, Code2, Rocket,
  Award, Heart, GraduationCap, MapPin
} from 'lucide-react';

// Brand icons removed from lucide-react v1.x — using inline SVG components instead
const Github = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const Linkedin = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const Twitter = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

import Background3D from './components/Background3D';
import Navbar from './components/Navbar';
import GlassCard from './components/GlassCard';
import GlassButton from './components/GlassButton';

// Data from CV
const PROJECTS = [
  {
    id: 1,
    title: "LPU NSS Management Website",
    category: "Full Stack",
    desc: "A comprehensive management system for NSS events, attendance (QR-based), and certificate generation.",
    tags: ["PHP", "Laravel", "MySQL", "Google OAuth"],
    icon: Terminal,
    link: "https://github.com/sakshamshakya319"
  },
  {
    id: 2,
    title: "Samarpan",
    category: "Real-Time Web",
    desc: "Real-time blood donor platform connecting donors and patients with secure JWT authentication.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind"],
    icon: Heart,
    link: "https://github.com/sakshamshakya319"
  },
  {
    id: 3,
    title: "Web Portfolio",
    category: "Frontend",
    desc: "Immersive 3D portfolio showcasing high-fidelity digital experiences and architectural design.",
    tags: ["React", "Framer Motion", "Tailwind"],
    icon: Palette,
    link: "#"
  }
];

const SKILLS = [
  "C++", "JavaScript", "TypeScript", "React.js", "Next.js", "Node.js", "Laravel", "MySQL", "MongoDB", "Data Structures", "REST APIs", "Tailwind CSS"
];

const ACHIEVEMENTS = [
  {
    title: "NSS Achiever - Parliament Visit",
    desc: "Selected as an NSS Achiever to visit the Parliament of India, representing the National Service Scheme.",
    icon: Award
  },
  {
    title: "250+ Service Hours",
    desc: "Dedicated over 250 hours to community service through the LPU National Service Scheme.",
    icon: Sparkles
  },
  {
    title: "Drug Awareness Week",
    desc: "Successfully completed and contributed to the Drug Awareness Week at Chandigarh University.",
    icon: Heart
  }
];

const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  return (
    <div className="min-h-screen bg-obsidian-void text-white font-outfit selection:bg-cyan-accent/30">
      <Background3D />
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <main className="relative z-10 pt-32 pb-20 px-6 overflow-hidden">
        <AnimatePresence mode="wait">
          {activePage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-7xl mx-auto"
            >
              {/* Hero Section */}
              <section className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh] py-20">
                <div className="relative z-20">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 px-4 py-2 glass-surface glass-refractive rounded-full w-fit mb-8"
                  >
                    <Sparkles className="text-cyan-accent animate-pulse" size={14} />
                    <span className="text-[10px] font-sora font-black tracking-[0.2em] uppercase text-white/60">
                      Full-Stack Architect & NSS Achiever
                    </span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-6xl sm:text-9xl font-sora font-extrabold leading-[0.9] mb-8 tracking-tighter"
                  >
                    SAKSHAM <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-primary via-cyan-accent to-indigo-primary bg-[length:200%_auto] animate-gradient-flow">
                      SHAKYA
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-white/40 text-lg sm:text-xl max-w-xl mb-12 leading-relaxed font-light"
                  >
                    Crafting scalable full-stack applications and immersive digital experiences. Currently pursuing MCA at LPU with a focus on engineering impact.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap gap-6"
                  >
                    <GlassButton primary onClick={() => setActivePage('projects')}>
                      Explore Archive
                    </GlassButton>
                    <GlassButton onClick={() => setActivePage('about')}>
                      Personal Story
                    </GlassButton>
                  </motion.div>
                </div>

                {/* 3D Visualizer */}
                <div className="relative flex justify-center perspective-[2000px]">
                  <motion.div
                    initial={{ rotateY: 20, rotateX: 10, opacity: 0, scale: 0.8 }}
                    animate={{ rotateY: -5, rotateX: 5, opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="relative w-full max-w-[450px] aspect-[4/5]"
                  >
                    <GlassCard className="absolute inset-0 z-20 border-white/20">
                      <div className="w-full h-full relative overflow-hidden rounded-xl">
                        <img
                          src="https://i.ibb.co/PnsgYc4/saksham.png"
                          alt="Saksham Shakya"
                          className="w-full h-full object-cover scale-110 grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-void via-transparent to-transparent opacity-60" />
                      </div>
                    </GlassCard>

                    <motion.div
                      animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -top-10 -right-12 z-30"
                    >
                      <GlassCard className="p-4 backdrop-blur-3xl border-white/20">
                        <Award className="text-cyan-accent mb-2" size={24} />
                        <div className="text-[10px] font-bold uppercase tracking-widest text-white/60">Achiever</div>
                        <div className="text-xs font-bold">NSS</div>
                      </GlassCard>
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -bottom-8 -left-12 z-10"
                    >
                      <GlassCard className="p-4 backdrop-blur-3xl border-white/20">
                        <Code2 className="text-indigo-primary mb-2" size={24} />
                        <div className="text-[10px] font-bold uppercase tracking-widest text-white/60">Logic</div>
                        <div className="text-xs font-bold">Scalable</div>
                      </GlassCard>
                    </motion.div>
                  </motion.div>
                </div>
              </section>

              {/* Achievements Section */}
              <section className="py-32 border-t border-white/5">
                <div className="mb-20">
                  <h2 className="text-4xl sm:text-6xl font-sora font-black tracking-tighter mb-4 uppercase">Key <span className="text-cyan-accent">Achievements</span></h2>
                  <div className="h-1 w-24 bg-gradient-to-r from-indigo-primary to-cyan-accent rounded-full" />
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  {ACHIEVEMENTS.map((item, i) => (
                    <GlassCard key={i} delay={i * 0.1}>
                      <item.icon className="text-cyan-accent mb-6" size={32} />
                      <h3 className="text-xl font-sora font-bold mb-4">{item.title}</h3>
                      <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                    </GlassCard>
                  ))}
                </div>
              </section>

              {/* Projects Grid Section (Added to Home) */}
              <section className="py-32 border-t border-white/5">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                  <div>
                    <h2 className="text-4xl sm:text-6xl font-sora font-black tracking-tighter mb-4 uppercase">Selected <span className="text-indigo-primary">Works</span></h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-cyan-accent to-indigo-primary rounded-full" />
                  </div>
                  <button
                    onClick={() => setActivePage('projects')}
                    className="text-[10px] font-black tracking-[0.3em] uppercase text-white/40 hover:text-cyan-accent transition-colors flex items-center gap-4"
                  >
                    VIEW FULL ARCHIVE <ChevronRight size={14} />
                  </button>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {PROJECTS.map((project, index) => (
                    <GlassCard key={project.id} delay={index * 0.1}>
                      <div className="group relative h-full flex flex-col">
                        <div className="mb-8 flex justify-between items-start">
                          <div className="p-4 glass-surface rounded-2xl text-cyan-accent group-hover:scale-110 transition-transform duration-500">
                            <project.icon size={28} />
                          </div>
                          <span className="text-[10px] font-black tracking-widest text-white/20 group-hover:text-cyan-accent transition-colors">0{index + 1}</span>
                        </div>
                        <h3 className="text-2xl font-sora font-extrabold mb-4 group-hover:text-cyan-accent transition-colors">{project.title}</h3>
                        <p className="text-white/40 text-sm mb-8 leading-relaxed line-clamp-3 flex-grow">{project.desc}</p>
                        <div className="flex gap-4">
                          <a href={project.link} target="_blank" rel="noopener noreferrer"><Github size={18} className="text-white/20 hover:text-white transition-colors" /></a>
                          <ExternalLink size={18} className="text-white/20 hover:text-white transition-colors cursor-pointer" />
                        </div>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </section>

              {/* Skills & Certifications Section */}
              <section className="py-32 border-t border-white/5">
                <div className="grid lg:grid-cols-2 gap-20">
                  {/* Skills Cloud */}
                  <div>
                    <div className="mb-12">
                      <h2 className="text-4xl font-sora font-black tracking-tighter mb-4 uppercase">Technical <span className="text-cyan-accent">Stack</span></h2>
                      <div className="h-1 w-16 bg-cyan-accent rounded-full" />
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {SKILLS.map((skill, i) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="px-5 py-3 glass-surface glass-refractive rounded-2xl text-[11px] font-bold tracking-widest text-white/60 hover:text-white hover:border-cyan-accent/50 transition-all cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>

                    <div className="mt-12">
                      <h3 className="font-sora font-black text-[10px] uppercase tracking-[0.3em] text-white/20 mb-6">Soft Capabilities</h3>
                      <div className="flex flex-wrap gap-2">
                        {["Problem Solving", "Adaptability", "Leadership", "Team Player", "Project Management"].map(s => (
                          <span key={s} className="px-3 py-1 border border-white/5 rounded-full text-[9px] font-bold text-white/30 uppercase tracking-widest">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div>
                    <div className="mb-12">
                      <h2 className="text-4xl font-sora font-black tracking-tighter mb-4 uppercase">Certifications</h2>
                      <div className="h-1 w-16 bg-indigo-primary rounded-full" />
                    </div>
                    <div className="space-y-6">
                      <div className="p-6 glass-surface rounded-2xl border border-white/5 flex gap-6 items-center group">
                        <div className="p-4 glass-surface rounded-xl text-cyan-accent group-hover:bg-cyan-accent group-hover:text-obsidian-void transition-all">
                          <Award size={24} />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white mb-1">Hone Communication Skills</div>
                          <div className="text-[10px] text-white/40 uppercase tracking-widest">LPU · Mar 2026</div>
                        </div>
                      </div>
                      <div className="p-6 glass-surface rounded-2xl border border-white/5 flex gap-6 items-center group">
                        <div className="p-4 glass-surface rounded-xl text-indigo-primary group-hover:bg-indigo-primary group-hover:text-white transition-all">
                          <Code2 size={24} />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white mb-1">Web Development (Full Stack)</div>
                          <div className="text-[10px] text-white/40 uppercase tracking-widest">Placify Technologies · July 2024</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {activePage === 'projects' && (
            <motion.section
              key="projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-7xl mx-auto py-20"
            >
              {/* Projects Hero */}
              <div className="text-center mb-32">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-block px-4 py-1 glass-surface rounded-full text-[10px] font-black tracking-[0.4em] text-cyan-accent uppercase mb-8"
                >
                  Project Archive
                </motion.div>
                <h2 className="text-6xl sm:text-9xl font-sora font-black tracking-tighter mb-12 uppercase leading-[0.8]">
                  ENGINEERING <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-primary to-cyan-accent">IMPACT.</span>
                </h2>
                <p className="text-white/40 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                  A curated collection of production-grade applications, full-stack architectures, and experimental prototypes built with modern technologies.
                </p>
              </div>

              {/* Featured Project */}
              <div className="mb-40">
                <div className="flex items-center gap-4 mb-12">
                  <div className="h-[1px] flex-grow bg-white/5" />
                  <span className="text-[10px] font-black tracking-[0.3em] text-white/20 uppercase">Featured Release</span>
                  <div className="h-[1px] flex-grow bg-white/5" />
                </div>

                <GlassCard className="overflow-hidden border-white/10">
                  <div className="grid lg:grid-cols-2">
                    <div className="p-12 lg:p-20 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-8">
                        <Terminal className="text-cyan-accent" size={20} />
                        <span className="text-xs font-bold tracking-widest text-white/60 uppercase">System Architecture</span>
                      </div>
                      <h3 className="text-4xl sm:text-5xl font-sora font-black mb-8 leading-tight">LPU NSS <br />Management Portal</h3>
                      <p className="text-white/50 text-lg leading-relaxed mb-12 font-light">
                        A robust full-stack solution engineered to streamline event coordination, volunteer tracking, and certificate automation for the National Service Scheme. Featuring QR-based attendance and Razorpay integration.
                      </p>
                      <div className="flex flex-wrap gap-3 mb-12">
                        {["Laravel", "PHP", "MySQL", "Razorpay", "Google OAuth"].map(tag => (
                          <span key={tag} className="px-3 py-1 glass-surface rounded-lg text-[10px] font-bold text-cyan-accent/80 tracking-widest uppercase">{tag}</span>
                        ))}
                      </div>
                      <div className="flex gap-6">
                        <GlassButton primary onClick={() => window.open('https://github.com/sakshamshakya319', '_blank')}>
                          Source Code
                        </GlassButton>
                        <GlassButton onClick={() => { }}>
                          Case Study
                        </GlassButton>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-primary/20 to-cyan-accent/20 relative min-h-[400px] flex items-center justify-center border-l border-white/5">
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30 grayscale" />
                      <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="relative z-10 w-3/4 aspect-video glass-surface rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
                      >
                        <div className="h-6 bg-white/5 flex items-center px-4 gap-2 border-b border-white/5">
                          <div className="w-2 h-2 rounded-full bg-red-500/50" />
                          <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                          <div className="w-2 h-2 rounded-full bg-green-500/50" />
                        </div>
                        <div className="p-8">
                          <div className="h-4 w-1/2 bg-white/5 rounded mb-4" />
                          <div className="h-32 w-full bg-white/5 rounded mb-4" />
                          <div className="grid grid-cols-3 gap-4">
                            <div className="h-20 bg-white/5 rounded" />
                            <div className="h-20 bg-white/5 rounded" />
                            <div className="h-20 bg-white/5 rounded" />
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </GlassCard>
              </div>

              {/* Project Archive Grid */}
              <div className="mb-40">
                <div className="flex justify-between items-end mb-20">
                  <div>
                    <h3 className="text-4xl font-sora font-black tracking-tighter uppercase mb-4">The <span className="text-cyan-accent">Archive</span></h3>
                    <div className="h-1 w-12 bg-cyan-accent rounded-full" />
                  </div>
                  <div className="hidden sm:flex gap-4">
                    {["All", "Full Stack", "Web3", "UI/UX"].map(filter => (
                      <button key={filter} className="text-[10px] font-black tracking-widest text-white/20 hover:text-white transition-colors uppercase">{filter}</button>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {PROJECTS.map((project, index) => (
                    <GlassCard key={project.id} delay={index * 0.1}>
                      <div className="group relative h-full flex flex-col">
                        <div className="mb-10 flex justify-between items-start">
                          <div className="p-4 glass-surface rounded-2xl text-cyan-accent group-hover:bg-cyan-accent group-hover:text-obsidian-void transition-all duration-500">
                            <project.icon size={32} />
                          </div>
                          <span className="text-[10px] font-black tracking-widest text-white/10 uppercase">v2.0.4</span>
                        </div>

                        <h4 className="text-2xl font-sora font-extrabold mb-4 group-hover:text-cyan-accent transition-colors">{project.title}</h4>
                        <p className="text-white/40 text-sm mb-12 leading-relaxed flex-grow">{project.desc}</p>

                        <div className="space-y-6">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                              <span key={tag} className="px-2 py-1 border border-white/5 rounded text-[9px] font-bold text-white/30 uppercase tracking-widest">{tag}</span>
                            ))}
                          </div>
                          <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                            <div className="flex gap-4">
                              <a href={project.link} target="_blank" rel="noopener noreferrer"><Github size={18} className="text-white/20 hover:text-white transition-colors" /></a>
                              <ExternalLink size={18} className="text-white/20 hover:text-white transition-colors" />
                            </div>
                            <span className="text-[10px] font-bold text-indigo-primary uppercase tracking-widest group-hover:translate-x-2 transition-transform cursor-pointer flex items-center gap-2">
                              Explore <ChevronRight size={12} />
                            </span>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </div>

              {/* GitHub Collaboration CTA */}
              <div className="relative text-center py-40 overflow-hidden rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-primary/5 via-cyan-accent/5 to-transparent" />
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="relative z-10"
                >
                  <Github className="mx-auto mb-12 text-white/10" size={80} />
                  <h3 className="text-4xl sm:text-6xl font-sora font-black tracking-tighter mb-8 uppercase leading-tight">Want to see the <br /> <span className="text-cyan-accent">Full Codebase?</span></h3>
                  <p className="text-white/40 max-w-xl mx-auto mb-12 text-lg font-light">Visit my GitHub to explore 50+ repositories, experimental prototypes, and open-source contributions.</p>
                  <GlassButton primary onClick={() => window.open('https://github.com/sakshamshakya319', '_blank')}>
                    Visit GitHub Profile
                  </GlassButton>
                </motion.div>
              </div>
            </motion.section>
          )}

          {activePage === 'about' && (
            <motion.section
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-7xl mx-auto py-20"
            >
              {/* Story Intro */}
              <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-6xl sm:text-8xl font-sora font-black tracking-tighter mb-12 uppercase leading-[0.8]">
                    THE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-primary to-cyan-accent">ARCHITECT'S</span> <br /> STORY
                  </h2>
                  <div className="space-y-6 text-white/50 text-xl font-light leading-relaxed">
                    <p>
                      I am <strong className="text-white font-bold">Saksham Shakya</strong>, a software engineer who believes that code is not just about solving problems, but about creating experiences that matter.
                    </p>
                    <p>
                      My journey is fueled by a dual obsession: the mathematical precision of high-performance backend systems and the refractive beauty of immersive frontend interfaces.
                    </p>
                    <p>
                      Beyond the screen, my work as an NSS Achiever has taught me that technology is most powerful when it serves a community. From leading drug awareness campaigns to visiting the Parliament, my focus has always been on impact.
                    </p>
                  </div>
                </motion.div>

                <div className="relative">
                  <div className="absolute -inset-20 bg-indigo-primary/10 blur-[120px] rounded-full animate-pulse" />
                  <GlassCard className="p-8 aspect-square flex items-center justify-center relative z-10">
                    <div className="text-center">
                      <div className="text-[120px] font-sora font-black text-white/5 leading-none mb-4">2025</div>
                      <div className="text-xs font-bold tracking-[0.5em] text-cyan-accent uppercase">Current Milestone</div>
                      <div className="mt-8 px-6 py-3 glass-surface rounded-2xl border border-white/5">
                        <span className="text-white font-bold">MCA @ Lovely Professional University</span>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </div>

              {/* Core Philosophy Section */}
              <div className="mb-40">
                <div className="text-center mb-20">
                  <h3 className="text-xs font-black tracking-[0.4em] text-white/20 uppercase mb-4">Core Philosophy</h3>
                  <div className="h-[1px] w-12 bg-white/10 mx-auto" />
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Technical Excellence",
                      desc: "Engineering systems that aren't just functional, but scalable and future-proof.",
                      icon: Terminal
                    },
                    {
                      title: "Visual Impact",
                      desc: "Creating interfaces that wows at first glance through light, depth, and motion.",
                      icon: Palette
                    },
                    {
                      title: "Social Purpose",
                      desc: "Leveraging technology to solve real-world problems and drive community growth.",
                      icon: Heart
                    }
                  ].map((item, i) => (
                    <GlassCard key={i} delay={i * 0.1} className="p-10">
                      <item.icon className="text-cyan-accent mb-8" size={32} />
                      <h4 className="text-xl font-sora font-bold mb-4">{item.title}</h4>
                      <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                    </GlassCard>
                  ))}
                </div>
              </div>

              {/* Education Timeline */}
              <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />

                <div className="text-center mb-24">
                  <h2 className="text-4xl sm:text-6xl font-sora font-black tracking-tighter uppercase mb-4">Academic <span className="text-indigo-primary">Journey</span></h2>
                  <p className="text-white/30 text-sm tracking-widest uppercase font-bold">From fundamentals to mastery</p>
                </div>

                <div className="space-y-32">
                  {[
                    {
                      year: "2025 — 2027",
                      title: "Master of Computer Applications",
                      inst: "Lovely Professional University",
                      details: "Pursuing advanced studies in software architecture and algorithms.",
                      score: "TGPA: 6.78",
                      icon: GraduationCap,
                      side: 'left'
                    },
                    {
                      year: "2022 — 2025",
                      title: "Bachelor of Computer Applications",
                      inst: "Lovely Professional University",
                      details: "Foundation in computer science, web technologies, and systems.",
                      score: "CGPA: 7.24",
                      icon: Layers,
                      side: 'right'
                    },
                    {
                      year: "2020 — 2022",
                      title: "12th Grade (Science)",
                      inst: "Dr Kiran Saujiya Sr. Sec. Edu. Academy",
                      details: "Higher secondary education with a focus on physics and mathematics.",
                      score: "Result: 68%",
                      icon: Box,
                      side: 'left'
                    },
                    {
                      year: "2018 — 2020",
                      title: "10th Grade",
                      inst: "St. Thomas Sr. Sec. School Mainpuri",
                      details: "Secondary education covering foundational academic disciplines.",
                      score: "Result: 62%",
                      icon: Rocket,
                      side: 'right'
                    }
                  ].map((item, i) => (
                    <div key={i} className={`flex flex-col md:flex-row items-center gap-12 md:gap-0 ${item.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                      <div className="flex-1 w-full md:px-20 text-center md:text-left">
                        <motion.div
                          initial={{ opacity: 0, x: item.side === 'left' ? -20 : 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                        >
                          <div className="text-[10px] font-black text-cyan-accent tracking-[0.4em] uppercase mb-4">{item.year}</div>
                          <h4 className="text-3xl font-sora font-black mb-4 leading-tight">{item.title}</h4>
                          <div className="text-white/60 font-bold mb-4">{item.inst}</div>
                          <p className="text-white/30 text-sm leading-relaxed mb-6">{item.details}</p>
                          <div className="inline-block px-4 py-2 glass-surface rounded-lg text-xs font-bold text-white/60 border border-white/5">
                            {item.score}
                          </div>
                        </motion.div>
                      </div>

                      <div className="relative z-10">
                        <div className="w-16 h-16 rounded-2xl glass-surface glass-refractive flex items-center justify-center text-indigo-primary shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                          <item.icon size={28} />
                        </div>
                      </div>

                      <div className="flex-1 hidden md:block" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-60 text-center">
                <GlassCard className="p-20 border-white/10 relative overflow-hidden">
                  <div className="absolute -top-40 -left-40 w-80 h-80 bg-indigo-primary/10 blur-[100px] rounded-full" />
                  <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-accent/10 blur-[100px] rounded-full" />

                  <h3 className="text-4xl sm:text-5xl font-sora font-black tracking-tighter mb-8 leading-tight uppercase">Ready to start the <br /> next chapter <span className="text-cyan-accent">together?</span></h3>
                  <GlassButton primary onClick={() => setActivePage('contact')}>
                    Get In Touch
                  </GlassButton>
                </GlassCard>
              </div>
            </motion.section>
          )}

          {activePage === 'hire' && (
            <motion.section 
              key="hire"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-7xl mx-auto py-20"
            >
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success-hire"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="h-full min-h-[600px] flex items-center justify-center"
                  >
                    <GlassCard className="w-full max-w-2xl p-20 border-cyan-accent/20 text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[500px]">
                      {/* Animated background glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-primary/10 via-transparent to-cyan-accent/10" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-accent/5 blur-[120px] rounded-full animate-pulse" />
                      
                      <motion.div
                        initial={{ rotate: -180, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ type: "spring", stiffness: 100, damping: 10 }}
                        className="relative z-10 mb-12"
                      >
                        <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-indigo-primary to-cyan-accent p-[2px]">
                          <div className="w-full h-full bg-obsidian-void rounded-[22px] flex items-center justify-center">
                            <Rocket className="text-cyan-accent" size={48} />
                          </div>
                        </div>
                        <div className="absolute inset-0 border border-cyan-accent/20 rounded-3xl -m-4 animate-ping" />
                        <div className="absolute inset-0 border border-indigo-primary/20 rounded-3xl -m-8 animate-pulse" />
                      </motion.div>
                      
                      <h3 className="text-5xl font-sora font-black mb-6 tracking-tighter relative z-10 uppercase">
                        PROPOSAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-primary to-cyan-accent">DISPATCHED.</span>
                      </h3>
                      
                      <p className="text-white/40 text-lg max-w-sm mb-12 font-light leading-relaxed relative z-10">
                        Your inquiry has reached the safe-lane. I will architect a formal response shortly.
                      </p>

                      <div className="w-64 space-y-4 relative z-10">
                        <div className="flex justify-between text-[10px] font-black tracking-widest text-white/20 uppercase mb-2">
                          <span>Redirection</span>
                          <span>3.0s</span>
                        </div>
                        <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 3, ease: "linear" }}
                            className="h-full bg-gradient-to-r from-indigo-primary to-cyan-accent"
                          />
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                ) : (
                  <motion.div
                    key="hire-content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="text-center mb-32">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1 glass-surface rounded-full text-[10px] font-black tracking-[0.4em] text-indigo-primary uppercase mb-8"
                      >
                        Collaboration
                      </motion.div>
                      <h2 className="text-6xl sm:text-9xl font-sora font-black tracking-tighter mb-12 uppercase leading-[0.8]">
                        HIRE THE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-primary to-cyan-accent">ARCHITECT.</span>
                      </h2>
                      <p className="text-white/40 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                        Select the engagement model that fits your goals. From rapid prototypes to long-term architectural scaling.
                      </p>
                    </div>

                    {/* Engagement Tiers */}
                    <div className="grid md:grid-cols-3 gap-8 mb-40">
                      {[
                        { 
                          title: "Project Based", 
                          price: "Fixed Scope", 
                          desc: "Perfect for rapid prototypes, MVP development, or specific feature implementations.",
                          features: ["Refined UI/UX", "Scalable Backend", "API Integration", "2 Weeks Support"],
                          icon: Box
                        },
                        { 
                          title: "Monthly Retainer", 
                          price: "Starting $X/mo", 
                          desc: "Dedicated architectural support for evolving products and ongoing technical maintenance.",
                          features: ["Priority Support", "Performance Audits", "Feature Roadmap", "Unlimited Consult"],
                          icon: Layers,
                          featured: true
                        },
                        { 
                          title: "Full-Time / Intern", 
                          price: "Role Based", 
                          desc: "Seeking high-impact roles starting 2025. Available for MCA internships and SWE positions.",
                          features: ["Agile Development", "System Design", "Cloud Architecture", "Team Leadership"],
                          icon: Rocket
                        }
                      ].map((tier, i) => (
                        <GlassCard key={i} delay={i * 0.1} className={`p-12 relative overflow-hidden ${tier.featured ? 'border-cyan-accent/30 scale-105 z-10' : 'border-white/5'}`}>
                          {tier.featured && <div className="absolute top-0 right-0 bg-cyan-accent text-obsidian-void text-[8px] font-black px-4 py-1 tracking-widest uppercase">Popular</div>}
                          <tier.icon className={tier.featured ? 'text-cyan-accent mb-8' : 'text-white/20 mb-8'} size={40} />
                          <h3 className="text-2xl font-sora font-black mb-2">{tier.title}</h3>
                          <div className="text-sm font-bold text-cyan-accent mb-6">{tier.price}</div>
                          <p className="text-white/40 text-sm mb-10 leading-relaxed">{tier.desc}</p>
                          <ul className="space-y-4 mb-12">
                            {tier.features.map(f => (
                              <li key={f} className="text-[10px] font-bold text-white/60 flex items-center gap-3">
                                <Sparkles size={10} className="text-indigo-primary" /> {f}
                              </li>
                            ))}
                          </ul>
                          <button 
                            onClick={() => {
                              const el = document.getElementById('hire-form');
                              el?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className={`w-full py-4 rounded-xl text-[10px] font-black tracking-widest uppercase transition-all ${tier.featured ? 'bg-cyan-accent text-obsidian-void' : 'glass-surface text-white hover:border-cyan-accent'}`}
                          >
                            Select Plan
                          </button>
                        </GlassCard>
                      ))}
                    </div>

                    {/* Detailed Hire Form */}
                    <div id="hire-form" className="grid lg:grid-cols-5 gap-20">
                      <div className="lg:col-span-2">
                        <h3 className="text-4xl font-sora font-black tracking-tighter uppercase mb-8">Service <br /><span className="text-indigo-primary">Agreement</span></h3>
                        <p className="text-white/40 text-lg font-light leading-relaxed mb-12">
                          Please provide detailed project requirements. Once dispatched, I will architect a formal proposal within 24-48 business hours.
                        </p>
                        
                        <div className="space-y-8">
                          <div className="flex gap-6 items-center">
                            <div className="w-12 h-12 rounded-xl glass-surface flex items-center justify-center text-cyan-accent"><Terminal size={20} /></div>
                            <div>
                              <div className="text-sm font-bold">Tech-First Approach</div>
                              <div className="text-[10px] text-white/40 uppercase tracking-widest">Optimized for performance</div>
                            </div>
                          </div>
                          <div className="flex gap-6 items-center">
                            <div className="w-12 h-12 rounded-xl glass-surface flex items-center justify-center text-indigo-primary"><Palette size={20} /></div>
                            <div>
                              <div className="text-sm font-bold">Refractive Design</div>
                              <div className="text-[10px] text-white/40 uppercase tracking-widest">Wowed users guaranteed</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-3">
                        <GlassCard className="p-10 sm:p-16 border-white/10 relative overflow-hidden">
                          <form 
                            onSubmit={async (e) => {
                              e.preventDefault();
                              const formData = new FormData(e.target);
                              formData.append("access_key", "731279f7-bd59-47d9-994c-588812547ecb");
                              formData.append("subject", `HIRE INQUIRY: ${formData.get('project_type')}`);
                              
                              try {
                                const response = await fetch("https://api.web3forms.com/submit", {
                                  method: "POST",
                                  body: formData
                                });
                                if (response.ok) {
                                  setIsSubmitted(true);
                                  setTimeout(() => {
                                    setIsSubmitted(false);
                                    setActivePage('home');
                                  }, 3000);
                                }
                              } catch (error) {
                                console.error("Dispatch Error:", error);
                              }
                            }}
                            className="space-y-8"
                          >
                            <div className="grid sm:grid-cols-2 gap-8">
                              <div className="space-y-4">
                                <label className="text-[10px] font-black tracking-widest text-white/40 uppercase ml-1">Engagement Type</label>
                                <select 
                                  name="project_type"
                                  className="w-full px-6 py-4 glass-surface rounded-xl border border-white/5 focus:border-cyan-accent/50 outline-none transition-all text-sm appearance-none"
                                >
                                  <option value="project">Project Based</option>
                                  <option value="monthly">Monthly Retainer</option>
                                  <option value="career">Full-Time / Intern</option>
                                </select>
                              </div>
                              <div className="space-y-4">
                                <label className="text-[10px] font-black tracking-widest text-white/40 uppercase ml-1">Budget Range</label>
                                <input 
                                  type="text" 
                                  name="budget"
                                  placeholder="e.g. $1k - $5k"
                                  className="w-full px-6 py-4 glass-surface rounded-xl border border-white/5 focus:border-cyan-accent/50 outline-none transition-all text-sm"
                                />
                              </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-8">
                              <div className="space-y-4">
                                <label className="text-[10px] font-black tracking-widest text-white/40 uppercase ml-1">Your Name</label>
                                <input 
                                  type="text" 
                                  name="name"
                                  required
                                  placeholder="Company or Individual"
                                  className="w-full px-6 py-4 glass-surface rounded-xl border border-white/5 focus:border-cyan-accent/50 outline-none transition-all text-sm"
                                />
                              </div>
                              <div className="space-y-4">
                                <label className="text-[10px] font-black tracking-widest text-white/40 uppercase ml-1">Email Address</label>
                                <input 
                                  type="email" 
                                  name="email"
                                  required
                                  placeholder="your@email.com"
                                  className="w-full px-6 py-4 glass-surface rounded-xl border border-white/5 focus:border-cyan-accent/50 outline-none transition-all text-sm"
                                />
                              </div>
                            </div>

                            <div className="space-y-4">
                              <label className="text-[10px] font-black tracking-widest text-white/40 uppercase ml-1">Project Brief</label>
                              <textarea 
                                name="message"
                                required
                                rows="6"
                                placeholder="Tell me about your goals and technical requirements..."
                                className="w-full px-6 py-4 glass-surface rounded-xl border border-white/5 focus:border-cyan-accent/50 outline-none transition-all text-sm resize-none"
                              ></textarea>
                            </div>

                            <div className="pt-4">
                              <button 
                                type="submit"
                                className="w-full py-5 bg-gradient-to-r from-indigo-primary to-cyan-accent rounded-xl font-sora font-black text-xs uppercase tracking-[0.3em] hover:shadow-[0_20px_40px_rgba(99,102,241,0.3)] transition-all active:scale-95"
                              >
                                Request Proposal
                              </button>
                            </div>
                          </form>
                        </GlassCard>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.section>
          )}

          {activePage === 'contact' && (
            <motion.section
              key="contact"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="max-w-7xl mx-auto py-20"
            >
              <div className="grid lg:grid-cols-2 gap-20">
                {/* Contact Info */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <h2 className="text-6xl sm:text-8xl font-sora font-black tracking-tighter mb-12 uppercase leading-[0.8]">
                      LET'S <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-primary to-cyan-accent">CONNECT.</span>
                    </h2>
                    <p className="text-white/40 text-xl font-light leading-relaxed mb-16 max-w-md">
                      Whether you have a project in mind, a question, or just want to say hi, I'm always open to discussing new opportunities.
                    </p>

                    <div className="space-y-12">
                      <div className="flex gap-8 items-center group">
                        <div className="w-16 h-16 rounded-2xl glass-surface flex items-center justify-center text-cyan-accent group-hover:bg-cyan-accent group-hover:text-obsidian-void transition-all">
                          <Mail size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-black tracking-[0.3em] text-white/20 uppercase mb-1">Direct Email</div>
                          <a href="mailto:sakshamshakya319@gmail.com" className="text-xl font-bold hover:text-cyan-accent transition-colors">sakshamshakya319@gmail.com</a>
                        </div>
                      </div>

                      <div className="flex gap-8 items-center group">
                        <div className="w-16 h-16 rounded-2xl glass-surface flex items-center justify-center text-indigo-primary group-hover:bg-indigo-primary group-hover:text-white transition-all">
                          <MapPin size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-black tracking-[0.3em] text-white/20 uppercase mb-1">Location</div>
                          <div className="text-xl font-bold">Jalandhar, PB / Mainpuri, UP</div>
                        </div>
                      </div>

                      <div className="pt-12 border-t border-white/5">
                        <div className="text-[10px] font-black tracking-[0.3em] text-white/20 uppercase mb-8">Social Ecosystem</div>
                        <div className="flex gap-6">
                          <a href="https://github.com/sakshamshakya319" target="_blank" rel="noopener noreferrer" className="p-4 glass-surface rounded-xl hover:text-cyan-accent transition-all"><Github size={20} /></a>
                          <a href="https://linkedin.com/in/sakshamshakya" target="_blank" rel="noopener noreferrer" className="p-4 glass-surface rounded-xl hover:text-indigo-primary transition-all"><Linkedin size={20} /></a>
                          <a href="#" className="p-4 glass-surface rounded-xl hover:text-white transition-all"><Twitter size={20} /></a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="h-full min-h-[600px] flex items-center"
                      >
                        <GlassCard className="w-full p-20 border-cyan-accent/20 text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[500px]">
                          {/* Animated background glow */}
                          <div className="absolute inset-0 bg-gradient-to-br from-indigo-primary/10 via-transparent to-cyan-accent/10" />
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-accent/5 blur-[120px] rounded-full animate-pulse" />
                          
                          <motion.div
                            initial={{ rotate: -180, scale: 0 }}
                            animate={{ rotate: 0, scale: 1 }}
                            transition={{ type: "spring", stiffness: 100, damping: 10 }}
                            className="relative z-10 mb-12"
                          >
                            <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-indigo-primary to-cyan-accent p-[2px]">
                              <div className="w-full h-full bg-obsidian-void rounded-[22px] flex items-center justify-center">
                                <Rocket className="text-cyan-accent" size={48} />
                              </div>
                            </div>
                            {/* Refractive rings */}
                            <div className="absolute inset-0 border border-cyan-accent/20 rounded-3xl -m-4 animate-ping" />
                            <div className="absolute inset-0 border border-indigo-primary/20 rounded-3xl -m-8 animate-pulse" />
                          </motion.div>
                          
                          <h3 className="text-5xl font-sora font-black mb-6 tracking-tighter relative z-10">
                            SIGNAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-primary to-cyan-accent">DISPATCHED.</span>
                          </h3>
                          
                          <p className="text-white/40 text-lg max-w-sm mb-12 font-light leading-relaxed relative z-10">
                            Your message has entered the safe-lane. A response is being architected as we speak.
                          </p>

                          <div className="w-64 space-y-4 relative z-10">
                            <div className="flex justify-between text-[10px] font-black tracking-widest text-white/20 uppercase mb-2">
                              <span>Redirection</span>
                              <span>3.0s</span>
                            </div>
                            <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 3, ease: "linear" }}
                                className="h-full bg-gradient-to-r from-indigo-primary to-cyan-accent"
                              />
                            </div>
                          </div>
                        </GlassCard>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <GlassCard className="p-10 sm:p-16 border-white/10 relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-accent/5 blur-[80px] rounded-full" />
                          
                          <form 
                            onSubmit={async (e) => {
                              e.preventDefault();
                              const formData = new FormData(e.target);
                              formData.append("access_key", "731279f7-bd59-47d9-994c-588812547ecb");
                              
                              try {
                                const response = await fetch("https://api.web3forms.com/submit", {
                                  method: "POST",
                                  body: formData
                                });
                                if (response.ok) {
                                  setIsSubmitted(true);
                                  setTimeout(() => {
                                    setIsSubmitted(false);
                                    setActivePage('home');
                                  }, 3000);
                                }
                              } catch (error) {
                                console.error("Dispatch Error:", error);
                              }
                            }}
                            className="space-y-8 relative z-10"
                          >
                            <div className="grid sm:grid-cols-2 gap-8">
                              <div className="space-y-4">
                                <label className="text-[10px] font-black tracking-widest text-white/40 uppercase ml-1">Full Name</label>
                                <input 
                                  type="text" 
                                  name="name"
                                  required
                                  placeholder="John Doe"
                                  className="w-full px-6 py-4 glass-surface rounded-xl border border-white/5 focus:border-cyan-accent/50 outline-none transition-all text-sm"
                                />
                              </div>
                              <div className="space-y-4">
                                <label className="text-[10px] font-black tracking-widest text-white/40 uppercase ml-1">Email Address</label>
                                <input 
                                  type="email" 
                                  name="email"
                                  required
                                  placeholder="john@example.com"
                                  className="w-full px-6 py-4 glass-surface rounded-xl border border-white/5 focus:border-cyan-accent/50 outline-none transition-all text-sm"
                                />
                              </div>
                            </div>

                            <div className="space-y-4">
                              <label className="text-[10px] font-black tracking-widest text-white/40 uppercase ml-1">Subject</label>
                              <input 
                                type="text" 
                                name="subject"
                                required
                                placeholder="Project Inquiry"
                                className="w-full px-6 py-4 glass-surface rounded-xl border border-white/5 focus:border-cyan-accent/50 outline-none transition-all text-sm"
                              />
                            </div>

                            <div className="space-y-4">
                              <label className="text-[10px] font-black tracking-widest text-white/40 uppercase ml-1">Message</label>
                              <textarea 
                                name="message"
                                required
                                rows="6"
                                placeholder="Tell me about your project..."
                                className="w-full px-6 py-4 glass-surface rounded-xl border border-white/5 focus:border-cyan-accent/50 outline-none transition-all text-sm resize-none"
                              ></textarea>
                            </div>

                            <div className="pt-4">
                              <button 
                                type="submit"
                                className="w-full py-5 bg-gradient-to-r from-indigo-primary to-cyan-accent rounded-xl font-sora font-black text-xs uppercase tracking-[0.3em] hover:shadow-[0_20px_40px_rgba(99,102,241,0.3)] transition-all active:scale-95"
                              >
                                Dispatch Message
                              </button>
                            </div>
                          </form>
                        </GlassCard>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      <footer className="relative z-10 border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-white/20 text-[10px] font-black tracking-[0.4em] uppercase">
            © 2025 SAKSHAM SHAKYA · DIGITAL ARCHITECT
          </div>
          <div className="flex gap-10">
            <button onClick={() => setActivePage('about')} className="text-white/20 hover:text-white text-[10px] font-black transition-colors uppercase tracking-[0.2em]">Story</button>
            <button onClick={() => setActivePage('projects')} className="text-white/20 hover:text-white text-[10px] font-black transition-colors uppercase tracking-[0.2em]">Archive</button>
            <button onClick={() => setActivePage('contact')} className="text-white/20 hover:text-white text-[10px] font-black transition-colors uppercase tracking-[0.2em]">Contact</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
