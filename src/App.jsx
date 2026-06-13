import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import {
  Mail, ArrowRight,
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
    title: "Samaparka",
    category: "Frontend",
    desc: "Real-Time User Rating System for a University Food Kiosk",
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
  const navigate = useNavigate();
  const location = useLocation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [samarpanSubmitted, setSamarpanSubmitted] = useState(false);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-obsidian-void text-white font-outfit selection:bg-cyan-accent/30">
      <Background3D />
      <Navbar />

      <main className="relative z-10 pt-28 sm:pt-40 pb-20 px-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <Routes location={location}>
            <Route 
              path="/" 
              element={
                <motion.div
                  key="home"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="max-w-7xl mx-auto px-4 sm:px-6"
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
                    className="text-4xl sm:text-7xl lg:text-9xl font-sora font-extrabold leading-[1.1] mb-6 sm:mb-8 tracking-tighter"
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
                    className="text-white/40 text-sm sm:text-lg lg:text-xl max-w-xl mb-10 sm:mb-12 leading-relaxed font-light px-1"
                  >
                    Crafting scalable full-stack applications and immersive digital experiences. Currently pursuing MCA at LPU with a focus on engineering impact.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                      <GlassButton primary onClick={() => navigate('/projects')} className="w-full sm:w-auto text-center">
                        Explore Works
                      </GlassButton>
                      <GlassButton onClick={() => navigate('/contact')} className="w-full sm:w-auto text-center">
                        Architect Proposal
                      </GlassButton>
                    </div>
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
                          src="/saksham.jpg"
                          alt="Saksham Shakya"
                          className="w-full h-full object-cover scale-110 grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-void via-transparent to-transparent opacity-60" />
                      </div>
                    </GlassCard>

                    <motion.div
                      animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -top-4 -right-4 sm:-top-10 sm:-right-12 z-30"
                    >
                      <GlassCard className="p-3 sm:p-4 backdrop-blur-3xl border-white/20">
                        <Award className="text-cyan-accent mb-2" size={20} />
                        <div className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-white/60">Achiever</div>
                        <div className="text-[10px] sm:text-xs font-bold">NSS</div>
                      </GlassCard>
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-12 z-10"
                    >
                      <GlassCard className="p-3 sm:p-4 backdrop-blur-3xl border-white/20">
                        <Code2 className="text-indigo-primary mb-2" size={20} />
                        <div className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-white/60">Logic</div>
                        <div className="text-[10px] sm:text-xs font-bold">Scalable</div>
                      </GlassCard>
                    </motion.div>
                  </motion.div>
                </div>
              </section>

              {/* Achievements Section */}
              <section className="py-20 sm:py-32 border-t border-white/5">
                <div className="mb-12 sm:mb-20 px-4 sm:px-0">
                  <h2 className="text-2xl sm:text-6xl font-sora font-black tracking-tighter mb-4 uppercase">Key <span className="text-cyan-accent">Achievements</span></h2>
                  <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-indigo-primary to-cyan-accent rounded-full" />
                </div>
                <div className="grid md:grid-cols-3 gap-8 px-4 sm:px-0">
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
              <section className="py-20 sm:py-32 border-t border-white/5">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-20 gap-8 px-4 sm:px-0">
                  <div>
                    <h2 className="text-2xl sm:text-6xl font-sora font-black tracking-tighter mb-4 uppercase">Selected <span className="text-indigo-primary">Works</span></h2>
                    <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-cyan-accent to-indigo-primary rounded-full" />
                  </div>
                  <button
                    onClick={() => navigate('/projects')}
                    className="text-[10px] font-black tracking-[0.3em] uppercase text-white/40 hover:text-cyan-accent transition-colors flex items-center gap-4"
                  >
                    VIEW FULL ARCHIVE <ChevronRight size={14} />
                  </button>
                </div>

                <div className="grid md:grid-cols-3 gap-8 px-4 sm:px-0">
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
              <section className="py-20 sm:py-32 border-t border-white/5">
                <div className="grid lg:grid-cols-2 gap-12 sm:gap-20">
                  {/* Skills Cloud */}
                  <div className="px-4 sm:px-0">
                    <div className="mb-12">
                      <h2 className="text-2xl sm:text-4xl font-sora font-black tracking-tighter mb-4 uppercase">Technical <span className="text-cyan-accent">Stack</span></h2>
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
                  <div className="px-4 sm:px-0">
                    <div className="mb-12">
                      <h2 className="text-2xl sm:text-4xl font-sora font-black tracking-tighter mb-4 uppercase">Certifications</h2>
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
              }
            />
            <Route 
              path="/projects" 
              element={
                <motion.section
                  key="projects"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="max-w-7xl mx-auto py-12 sm:py-20 px-4 sm:px-6"
                >
              {/* Projects Hero */}
              <div className="text-center mb-20 sm:mb-40">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="inline-block px-6 py-2 glass-surface rounded-full border border-white/10 text-[10px] font-black tracking-[0.3em] uppercase text-cyan-accent mb-8"
                >
                  Project Archive
                </motion.div>
                <h2 className="text-3xl sm:text-6xl lg:text-9xl font-sora font-black tracking-tighter mb-8 sm:mb-12 uppercase leading-[1.1] sm:leading-[0.8] px-2">
                  ENGINEERING <br className="hidden xs:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-primary to-cyan-accent">IMPACT.</span>
                </h2>
                <p className="text-white/40 max-w-2xl mx-auto text-sm sm:text-lg font-light leading-relaxed px-4">
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
                    <div className="p-6 sm:p-12 lg:p-20 flex flex-col justify-center order-2 lg:order-1">
                      <div className="flex items-center gap-3 mb-6 sm:mb-8">
                        <Terminal className="text-cyan-accent" size={18} />
                        <span className="text-[10px] font-bold tracking-widest text-white/60 uppercase">System Architecture</span>
                      </div>
                      <h3 className="text-2xl sm:text-5xl font-sora font-black mb-6 sm:mb-8 leading-tight">LPU NSS <br />Management Portal</h3>
                      <p className="text-white/50 text-sm sm:text-lg leading-relaxed mb-8 sm:mb-12 font-light">
                        A robust full-stack solution engineered to streamline event coordination, volunteer tracking, and certificate automation for the National Service Scheme. Featuring QR-based attendance and Razorpay integration.
                      </p>
                      <div className="flex flex-wrap gap-3 mb-12">
                        {["Laravel", "PHP", "MySQL", "Razorpay", "Google OAuth"].map(tag => (
                          <span key={tag} className="px-3 py-1 glass-surface rounded-lg text-[10px] font-bold text-cyan-accent/80 tracking-widest uppercase">{tag}</span>
                        ))}
                      </div>
                      <div className="flex gap-6">
                        <GlassButton primary onClick={() => window.open('https://lpunss.in/', '_blank')}>
                          Visit
                        </GlassButton>
                        
                      </div>
                    </div>
                    <div className="relative min-h-[250px] sm:min-h-[500px] bg-gradient-to-br from-indigo-primary/20 to-cyan-accent/20 flex items-center justify-center p-6 sm:p-12 order-1 lg:order-2">
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        className="w-full aspect-video bg-obsidian-void rounded-2xl border border-white/10 shadow-2xl overflow-hidden relative group"
                      >
                        <img src="https://i.ibb.co/xtNq9QvS/Screenshot-2026-06-14-005020.png" alt="Featured Project" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-void to-transparent opacity-60" />
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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
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
                  <Github className="mx-auto mb-8 text-white/10" size={60} />
                  <h3 className="text-3xl sm:text-6xl font-sora font-black tracking-tighter mb-8 uppercase leading-tight px-4">Want to see the <br /> <span className="text-cyan-accent">Full Codebase?</span></h3>
                  <p className="text-white/40 max-w-xl mx-auto mb-12 text-sm sm:text-lg font-light px-6">Visit my GitHub to explore 50+ repositories, experimental prototypes, and open-source contributions.</p>
                  <GlassButton primary onClick={() => window.open('https://github.com/sakshamshakya319', '_blank')}>
                    Visit GitHub Profile
                  </GlassButton>
                </motion.div>
              </div>
            </motion.section>
              }
            />
            <Route 
              path="/about" 
              element={
                <motion.section
                  key="about"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="max-w-7xl mx-auto py-12 sm:py-20 px-4 sm:px-6"
                >
              {/* Story Intro */}
              <div className="grid lg:grid-cols-2 gap-12 sm:gap-20 items-center mb-20 sm:mb-40">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl sm:text-6xl lg:text-8xl font-sora font-black tracking-tighter mb-8 sm:mb-12 uppercase leading-[1.1] sm:leading-[0.8]">
                    THE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-primary to-cyan-accent">ARCHITECT'S</span> <br /> STORY
                  </h2>
                  <div className="space-y-4 sm:space-y-6 text-white/50 text-base sm:text-xl font-light leading-relaxed">
                    <p>
                      Based in India, I am a software engineer focused on building digital products that balance technical complexity with intuitive simplicity.
                    </p>
                    <p>
                      My journey began with a curiosity for how systems work, which evolved into a career centered on full-stack engineering and cloud architecture.
                    </p>
                  </div>
                </motion.div>

                <div className="relative group">
                  <div className="absolute -inset-10 sm:-inset-20 bg-indigo-primary/10 blur-[80px] sm:blur-[120px] rounded-full animate-pulse" />
                  <GlassCard className="p-8 sm:p-12 aspect-square flex flex-col items-center justify-center relative z-10 overflow-hidden">
                    <div className="text-center w-full">
                      <div className="text-6xl sm:text-8xl lg:text-[120px] font-sora font-black text-white/5 leading-none mb-2 sm:mb-4 tracking-tighter">2026</div>
                      <div className="text-[9px] sm:text-[10px] font-black tracking-[0.4em] sm:tracking-[0.5em] text-cyan-accent uppercase mb-6 sm:mb-8">Current Milestone</div>
                      <div className="px-4 sm:px-6 py-3 sm:py-4 glass-surface rounded-xl sm:rounded-2xl border border-white/5 mx-auto w-full max-w-[280px] sm:max-w-none">
                        <span className="text-white text-[11px] sm:text-base font-bold leading-relaxed">MCA @ Lovely Professional University</span>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </div>

              {/* Core Philosophy Section */}
              <div className="mb-20 sm:mb-40">
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
                    <GlassCard key={i} delay={i * 0.1} className="p-8 sm:p-10">
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
                  <h2 className="text-3xl sm:text-6xl font-sora font-black tracking-tighter uppercase mb-4">Academic <span className="text-indigo-primary">Journey</span></h2>
                  <p className="text-white/30 text-[10px] sm:text-sm tracking-widest uppercase font-bold">From fundamentals to mastery</p>
                </div>

                <div className="space-y-20 sm:space-y-32">
                  {[
                    {
                      year: "2026 — 2027",
                      title: "Master of Computer Applications",
                      inst: "Lovely Professional University",
                      details: "Pursuing advanced studies in software architecture and algorithms.",
                      score: "TGPA: 6.78",
                      icon: GraduationCap,
                      side: 'left'
                    },
                    {
                      year: "2022 — 2026",
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
                    <div key={i} className={`flex flex-col md:flex-row items-center gap-12 sm:gap-20 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                      <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        <motion.div
                          initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                        >
                          <div className="text-[10px] font-black text-cyan-accent tracking-[0.4em] uppercase mb-4">{item.year}</div>
                          <h4 className="text-xl sm:text-3xl font-sora font-black mb-4 leading-tight">{item.title}</h4>
                          <div className="text-xs sm:text-base text-white/60 font-bold mb-4">{item.inst}</div>
                          <p className="text-white/30 text-xs sm:text-sm leading-relaxed mb-6">{item.details}</p>
                          <div className="inline-block px-4 py-2 glass-surface rounded-lg text-[10px] font-bold text-white/60 border border-white/5">
                            {item.score}
                          </div>
                        </motion.div>
                      </div>

                      <div className="relative z-10">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-obsidian-void border border-white/10 flex items-center justify-center shadow-2xl group-hover:border-cyan-accent/50 transition-colors">
                          <item.icon size={28} className="text-cyan-accent" />
                        </div>
                      </div>

                      <div className="hidden md:block md:w-1/2" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-32 sm:mt-60 text-center px-4 sm:px-0">
                <div className="relative py-16 sm:py-32 px-4 sm:px-12 glass-surface rounded-3xl sm:rounded-[40px] border border-white/5 overflow-hidden text-center">
                  <div className="absolute -top-40 -left-40 w-80 h-80 bg-indigo-primary/10 blur-[100px] rounded-full" />
                  <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-accent/10 blur-[100px] rounded-full" />

                  <h3 className="text-xl sm:text-5xl font-sora font-black tracking-tighter mb-8 leading-tight uppercase px-2">Ready to start the <br className="hidden sm:block" /> next chapter <span className="text-cyan-accent">together?</span></h3>
                  <GlassButton primary onClick={() => navigate('/contact')}>
                    Get In Touch
                  </GlassButton>
                </div>
              </div>
            </motion.section>
              }
            />
            <Route 
              path="/hire" 
              element={
                <motion.section 
                  key="hire"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="max-w-7xl mx-auto py-12 sm:py-20 px-4 sm:px-6"
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
                      
                      <h3 className="text-3xl sm:text-5xl font-sora font-black mb-6 tracking-tighter relative z-10 uppercase">
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
                      <h2 className="text-3xl sm:text-6xl lg:text-9xl font-sora font-black tracking-tighter mb-12 uppercase leading-[1.1] sm:leading-[0.8] px-2">
                        HIRE THE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-primary to-cyan-accent">ARCHITECT.</span>
                      </h2>
                      <p className="text-white/40 max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed px-4">
                        Select the engagement model that fits your goals. From rapid prototypes to long-term architectural scaling.
                      </p>
                    </div>

                    {/* Engagement Tiers */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40 px-4 sm:px-0">
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
                          desc: "Seeking high-impact roles starting 2026. Available for MCA internships and SWE positions.",
                          features: ["Agile Development", "System Design", "Cloud Architecture", "Team Leadership"],
                          icon: Rocket
                        }
                      ].map((tier, i) => (
                        <GlassCard key={i} delay={i * 0.1} className={`relative overflow-hidden ${tier.featured ? 'border-cyan-accent/30 sm:scale-105 z-10' : 'border-white/5'}`}>
                          {tier.featured && <div className="absolute top-0 right-0 bg-cyan-accent text-obsidian-void text-[8px] font-black px-4 py-1 tracking-widest uppercase">Popular</div>}
                          <tier.icon className={tier.featured ? 'text-cyan-accent mb-8' : 'text-white/20 mb-8'} size={32} />
                          <h3 className="text-xl sm:text-2xl font-sora font-black mb-2">{tier.title}</h3>
                          <div className="text-[12px] font-bold text-cyan-accent mb-6">{tier.price}</div>
                          <p className="text-white/40 text-[13px] mb-10 leading-relaxed">{tier.desc}</p>
                          <ul className="space-y-4 mb-12">
                            {tier.features.map(f => (
                              <li key={f} className="text-[9px] sm:text-[10px] font-bold text-white/60 flex items-center gap-3">
                                <Sparkles size={8} className="text-indigo-primary" /> {f}
                              </li>
                            ))}
                          </ul>
                          <button 
                            onClick={() => {
                              const el = document.getElementById('hire-form');
                              el?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className={`w-full py-4 rounded-xl text-[9px] sm:text-[10px] font-black tracking-widest uppercase transition-all ${tier.featured ? 'bg-cyan-accent text-obsidian-void' : 'glass-surface text-white hover:border-cyan-accent'}`}
                          >
                            Select Plan
                          </button>
                        </GlassCard>
                      ))}
                    </div>

                    {/* Detailed Hire Form */}
                    <div id="hire-form" className="grid lg:grid-cols-5 gap-12 sm:gap-20">
                      {/* Form Side */}
                      <div className="lg:col-span-3 order-2 lg:order-1 px-4 sm:px-0">
                        <GlassCard className="relative overflow-hidden group">
                          <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-cyan-accent/10 transition-colors">
                            <Mail size={120} />
                          </div>
                          
                          <form action="https://api.web3forms.com/submit" method="POST" className="relative z-10 space-y-8 sm:space-y-12">
                            <input type="hidden" name="access_key" value="731279f7-bd59-47d9-994c-588812547ecb" />
                            <input type="hidden" name="from_name" value="Portfolio Inquiry" />
                            <input type="hidden" name="subject" value="New Hire Inquiry from Portfolio" />
                            <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                            
                            <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
                              <div className="space-y-4">
                                <label className="text-[10px] font-black tracking-widest text-white/40 uppercase ml-1">Identity</label>
                                <input 
                                  type="text" 
                                  name="name"
                                  required
                                  placeholder="YOUR NAME" 
                                  className="w-full bg-white/5 border-b border-white/10 px-0 py-4 focus:border-cyan-accent transition-colors outline-none text-white font-sora placeholder:text-white/10"
                                />
                              </div>
                              <div className="space-y-4">
                                <label className="text-[10px] font-black tracking-widest text-white/40 uppercase ml-1">Digital Address</label>
                                <input 
                                  type="email" 
                                  name="email"
                                  required
                                  placeholder="EMAIL@EXAMPLE.COM" 
                                  className="w-full bg-white/5 border-b border-white/10 px-0 py-4 focus:border-cyan-accent transition-colors outline-none text-white font-sora placeholder:text-white/10"
                                />
                              </div>
                            </div>

                            <div className="space-y-4">
                              <label className="text-[10px] font-black tracking-widest text-white/40 uppercase ml-1">The Proposal</label>
                              <textarea 
                                name="message"
                                required
                                rows={4}
                                placeholder="TELL ME ABOUT YOUR PROJECT..." 
                                className="w-full bg-white/5 border-b border-white/10 px-0 py-4 focus:border-cyan-accent transition-colors outline-none text-white font-sora placeholder:text-white/10 resize-none"
                              />
                            </div>

                            <button 
                              type="submit"
                              className="group flex items-center gap-6 bg-cyan-accent text-obsidian-void px-8 sm:px-12 py-5 sm:py-6 rounded-2xl font-black text-xs sm:text-sm tracking-widest uppercase hover:scale-[1.02] active:scale-[0.98] transition-all"
                            >
                              Send Message
                              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
                            </button>
                          </form>
                        </GlassCard>
                      </div>

                      {/* Details Side */}
                      <div className="lg:col-span-2 order-1 lg:order-2 space-y-12 sm:space-y-20 px-4 sm:px-0">
                        <div>
                          <h3 className="text-xs font-black tracking-widest text-cyan-accent uppercase mb-8">Contact Nodes</h3>
                          <div className="space-y-8 sm:space-y-12">
                            {[
                              { icon: Mail, label: 'Primary Email', value: 'sakshamshakya@gmail.com' },
                              { icon: Github, label: 'Open Source', value: 'github.com/saksham' },
                              { icon: Linkedin, label: 'Professional Network', value: 'linkedin.com/in/saksham' }
                            ].map((item, i) => (
                              <div key={i} className="group cursor-pointer">
                                <div className="flex items-center gap-4 mb-2">
                                  <item.icon className="text-white/20 group-hover:text-indigo-primary transition-colors" size={16} />
                                  <span className="text-[10px] font-black tracking-widest text-white/20 uppercase">{item.label}</span>
                                </div>
                                <div className="text-lg sm:text-xl font-sora font-bold text-white/60 group-hover:text-white transition-colors truncate">{item.value}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.section>
              }
            />
            <Route 
              path="/samarpan-proposal" 
              element={
                <motion.section
                  key="samarpan"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="max-w-7xl mx-auto py-12 sm:py-20 px-4 sm:px-6"
                >
              {/* Hero Section */}
              <div className="min-h-[80vh] flex flex-col justify-center mb-20 sm:mb-40">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-block px-4 py-1 glass-surface rounded-full text-[10px] font-black tracking-[0.4em] text-cyan-accent uppercase mb-8"
                >
                  Samarpan · Blood Donor Connection Platform
                </motion.div>
                <h1 className="text-3xl sm:text-6xl lg:text-9xl font-sora font-black tracking-tighter mb-8 uppercase leading-[1.1] sm:leading-[0.8]">
                  India has enough blood.<br />
                  People still die because<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">it doesn't reach them.</span>
                </h1>
                <p className="text-white/40 max-w-2xl text-base sm:text-lg font-light leading-relaxed mb-12">
                  We're building the infrastructure that connects donors, patients, hospitals, and NGOs — in real time, across India's blood deserts. Samarpan is an open, full-stack platform already in active use. We're looking for people who want to solve this with us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12">
                  <GlassButton primary onClick={() => document.getElementById('samarpan-connect')?.scrollIntoView({ behavior: 'smooth' })}>
                    Share your expertise →
                  </GlassButton>
                  <GlassButton onClick={() => document.getElementById('samarpan-roadmap')?.scrollIntoView({ behavior: 'smooth' })}>
                    See the roadmap
                  </GlassButton>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-white/5">
                  {[
                    { num: "12K", label: "Lives lost daily to blood shortage" },
                    { num: "85%", label: "Indian youth aged 18–25 never donated" },
                    { num: "40%", label: "Of India is a 'blood desert'" },
                    { num: "14.6M", label: "Units needed annually in India" },
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="text-2xl sm:text-3xl font-sora font-black text-white mb-2">{stat.num}</div>
                      <div className="text-[9px] sm:text-[10px] font-bold tracking-widest text-white/30 uppercase">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Crisis Section */}
              <div id="samarpan-crisis" className="mb-20 sm:mb-40">
                <div className="flex items-center gap-4 mb-12">
                  <span className="text-[10px] font-black tracking-[0.4em] text-white/20 uppercase">The Problem</span>
                  <div className="h-[1px] flex-grow bg-white/10" />
                </div>
                <h2 className="text-2xl sm:text-5xl font-sora font-black tracking-tighter mb-4 uppercase leading-[1.1]">
                  The government says we have enough.<br />
                  The ground says otherwise.
                </h2>
                <p className="text-white/40 max-w-2xl text-base sm:text-lg font-light leading-relaxed mb-12">
                  In 2024–25, India collected 14.6 million blood units — technically enough. But distribution is broken. Research maps vast "blood deserts" across UP, Bihar, MP, and rural Rajasthan where no blood reaches on time.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                  {[
                    { num: "1M+", desc: "Chronic annual shortage even at official estimates — leaving cancer patients, accident victims, and mothers in crisis" },
                    { num: "2 sec", desc: "Someone in India needs blood every 2 seconds — most have no fast way to find a matching donor nearby" },
                    { num: "51%", desc: "Of blood banks have component separation — whole blood is still being transfused where plasma, RBC, or platelets would work" },
                    { num: "4000+", desc: "Rare blood group donors registered nationally — but no consumer app lets patients search or reach them in emergencies" },
                  ].map((item, i) => (
                    <GlassCard key={i} delay={i * 0.1}>
                      <div className="text-3xl font-sora font-black text-red-500 mb-4">{item.num}</div>
                      <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                    </GlassCard>
                  ))}
                </div>
                <div className="space-y-4">
                  <GlassCard className="border-l-4 border-l-red-500">
                    <p className="text-white/50 text-base leading-relaxed">
                      <strong className="text-red-400">The real insight:</strong> This is a logistics and community problem, not a supply problem. Blood is collected in cities. People die in districts. No platform today bridges that gap with real-time donor matching, emergency SOS broadcast, or rural-first offline access.
                    </p>
                  </GlassCard>
                  <GlassCard className="border-l-4 border-l-red-500">
                    <p className="text-white/50 text-base leading-relaxed">
                      <strong className="text-red-400">Why now:</strong> India just launched a national Rare Donor Registry (RDRI). e-RaktKosh is now being integrated with hospital systems. The government has created the infrastructure layer — but the community and last-mile layer is completely absent. That's the gap Samarpan fills.
                    </p>
                  </GlassCard>
                </div>
              </div>

              {/* What We've Built Section */}
              <div id="samarpan-built" className="mb-20 sm:mb-40">
                <div className="flex items-center gap-4 mb-12">
                  <span className="text-[10px] font-black tracking-[0.4em] text-white/20 uppercase">What We've Built</span>
                  <div className="h-[1px] flex-grow bg-white/10" />
                </div>
                <h2 className="text-2xl sm:text-5xl font-sora font-black tracking-tighter mb-4 uppercase leading-[1.1]">
                  A full-stack platform already in use
                </h2>
                <p className="text-white/40 max-w-2xl text-base sm:text-lg font-light leading-relaxed mb-12">
                  Built with Next.js, MongoDB, TypeScript, and deployed on Vercel. Not a concept — a working system with real admin panels, donor flows, event management, and QR-based attendance.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { icon: "🩸", title: "Donor & Patient Portal", desc: "Registration, blood request creation with priority levels, real-time notifications, and donation history tracking" },
                    { icon: "🎟️", title: "Certificate Generation", desc: "Automatic, downloadable donor certificates with PDF generation — building recognition and encouraging repeat donation" },
                    { icon: "📋", title: "NGO Admin Panel", desc: "Full event management, donor lists, QR check-in scanning, blood test result updates, and bulk notifications" },
                    { icon: "📱", title: "Mobile-First Design", desc: "Adaptive layouts — card view on mobile, table view on desktop. Touch-optimized forms and dialogs for field workers" },
                    { icon: "🔒", title: "Production Security", desc: "Rate limiting, CSRF protection, XSS headers, Cloudflare WAF, audit logging, and Sanctum API security" },
                    { icon: "🌐", title: "Maintenance Infrastructure", desc: "Professional maintenance mode with route protection, priority levels, IP whitelisting, and real-time monitoring" },
                  ].map((item, i) => (
                    <GlassCard key={i} delay={i * 0.1}>
                      <div className="text-4xl mb-6">{item.icon}</div>
                      <h3 className="text-xl font-sora font-bold mb-4">{item.title}</h3>
                      <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                    </GlassCard>
                  ))}
                </div>
              </div>

              {/* Roadmap Section */}
              <div id="samarpan-roadmap" className="mb-20 sm:mb-40">
                <div className="flex items-center gap-4 mb-12">
                  <span className="text-[10px] font-black tracking-[0.4em] text-white/20 uppercase">What We Want To Build Next</span>
                  <div className="h-[1px] flex-grow bg-white/10" />
                </div>
                <h2 className="text-2xl sm:text-5xl font-sora font-black tracking-tighter mb-4 uppercase leading-[1.1]">
                  8 features that make this<br />
                  genuinely life-saving
                </h2>
                <p className="text-white/40 max-w-2xl text-base sm:text-lg font-light leading-relaxed mb-12">
                  Prioritized by real-world impact. These aren't nice-to-haves — each one directly closes a gap that currently costs lives.
                </p>
                <div className="space-y-6 mb-16">
                  {[
                    {
                      num: "01",
                      title: "Emergency SOS blood request broadcast",
                      desc: "One-tap broadcast to all matching donors within a radius via WhatsApp, SMS, and push. The donor can accept in one click. This is the Uber-for-blood moment — and no Indian platform has built it yet.",
                      tags: ["WhatsApp Business API", "Twilio SMS", "Geofenced radius", "Accept/decline flow"],
                      priority: "CRITICAL"
                    },
                    {
                      num: "02",
                      title: "Real-time hospital blood inventory API",
                      desc: "Connect with nearby hospitals and blood banks to show live per-group stock. Integrate with e-RaktKosh at the district level. What eRaktKosh shows at the blood-bank level — Samarpan shows at the patient's doorstep.",
                      tags: ["eRaktKosh API", "Hospital webhooks", "Live inventory maps"],
                      priority: "CRITICAL"
                    },
                    {
                      num: "03",
                      title: "Donor gamification & loyalty system",
                      desc: "Points, streaks, 'Hero Donor' badges, leaderboards. Local partner perks — free health check-ups, discount coupons. This directly attacks the 85.5% non-donation rate among Indian youth aged 18–25.",
                      tags: ["Gamification engine", "Partner perks API", "Social leaderboards", "Health screening integration"],
                      priority: "HIGH"
                    },
                    {
                      num: "04",
                      title: "Rare blood group registry",
                      desc: "India's RDRI has 4000+ rare donors — but zero consumer access. Build a verified rare donor module (Bombay blood group, rh-null, negative types) with extra privacy protections. A unique, defensible niche.",
                      tags: ["Voluntary enrollment", "Privacy consent layer", "RDRI integration potential"],
                      priority: "HIGH"
                    },
                    {
                      num: "05",
                      title: "Blood component differentiation",
                      desc: "Track platelets, plasma, RBCs, and FFP separately. Thalassemia and cancer patients need platelets every 10–14 days. This unlocks clinical hospital partnerships and makes Samarpan the only NGO platform with clinical-grade blood management.",
                      tags: ["Platelets / RBC / Plasma", "Apheresis scheduling", "Oncology ward matching"],
                      priority: "HIGH"
                    },
                    {
                      num: "06",
                      title: "Offline-first PWA for rural India",
                      desc: "Blood deserts exist where 4G doesn't. A Progressive Web App that caches donor lists, works on 2G/edge, and syncs when connected — with Hindi and regional language UI. This unlocks UP, Bihar, MP, Jharkhand: where deaths actually happen.",
                      tags: ["Service Workers", "IndexedDB cache", "Background sync", "Hindi UI"],
                      priority: "HIGH"
                    },
                    {
                      num: "07",
                      title: "NGO network marketplace",
                      desc: "Let other NGOs onboard Samarpan as their blood camp management system. Become the Shopify for blood donation organizations. White-label panels, federated donor pools, shared event discovery. Scalable revenue through SaaS per NGO.",
                      tags: ["Multi-tenant architecture", "White-label branding", "Shared donor API"],
                      priority: "MEDIUM"
                    },
                    {
                      num: "08",
                      title: "AI donor eligibility pre-screener",
                      desc: "An AI chatbot that checks WHO eligibility criteria before a donor travels to camp — reducing wasted trips, building trust. Collects anonymized health data that makes Samarpan's dataset uniquely valuable to researchers and funders.",
                      tags: ["WHO eligibility criteria", "Symptom checker", "Hemoglobin self-test prompts"],
                      priority: "MEDIUM"
                    },
                  ].map((item, i) => (
                    <GlassCard key={i} delay={i * 0.1} className="group">
                      <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="text-4xl font-sora font-black text-white/10 flex-shrink-0">{item.num}</div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-4 mb-4">
                            <h3 className="text-xl font-sora font-bold group-hover:text-cyan-accent transition-colors">{item.title}</h3>
                            <span className={`
                              px-3 py-1 rounded-full text-[8px] font-black tracking-widest uppercase
                              ${item.priority === "CRITICAL" ? "bg-red-500/20 text-red-400" : 
                                item.priority === "HIGH" ? "bg-yellow-500/20 text-yellow-400" : 
                                "bg-blue-500/20 text-blue-400"}
                            `}>{item.priority}</span>
                          </div>
                          <p className="text-white/40 text-sm leading-relaxed mb-4">{item.desc}</p>
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag, j) => (
                              <span key={j} className="px-3 py-1 glass-surface rounded-full text-[8px] font-bold text-white/30 uppercase tracking-wider">{tag}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  ))}
                </div>
                {/* Timeline */}
                <h3 className="text-lg sm:text-xl font-sora font-black mb-12 uppercase tracking-widest">Build Phases</h3>
                <div className="relative pl-8 space-y-12 border-l border-white/10 ml-2">
                  {[
                    {
                      phase: "Phase 1 · 0–3 months",
                      title: "Complete the core loop",
                      desc: "Make Samarpan genuinely life-saving in emergencies — not just a donor directory. Proof metric: average time from SOS to donor acceptance.",
                      items: ["Emergency SOS broadcast", "WhatsApp integration", "Blood component differentiation"],
                      color: "text-green-500",
                      bg: "bg-green-500"
                    },
                    {
                      phase: "Phase 2 · 3–9 months",
                      title: "Own the supply side",
                      desc: "Grow and retain the donor base while becoming indispensable to hospitals. KPI: repeat donation rate, monthly active donors, hospital integrations live.",
                      items: ["Donor gamification", "Rare blood registry", "Hospital inventory API"],
                      color: "text-yellow-500",
                      bg: "bg-yellow-500"
                    },
                    {
                      phase: "Phase 3 · 9–18 months",
                      title: "Scale across India",
                      desc: "Become the infrastructure other NGOs run on. Target: 10+ NGOs onboarded, 5+ states covered, CSR / impact investment round.",
                      items: ["Offline PWA", "NGO marketplace", "Hindi + regional languages", "AI eligibility screener"],
                      color: "text-red-500",
                      bg: "bg-red-500"
                    },
                  ].map((item, i) => (
                    <div key={i} className="relative">
                      <div className={`absolute -left-[41px] top-2 w-4 h-4 rounded-full border-4 border-obsidian-void ${item.bg}`} />
                      <div className="text-[10px] font-black tracking-widest uppercase text-white/30 mb-2">{item.phase}</div>
                      <h4 className="text-xl font-sora font-bold mb-4">{item.title}</h4>
                      <p className="text-white/40 text-sm leading-relaxed mb-6">{item.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.items.map((tag, j) => (
                          <span key={j} className="px-4 py-2 glass-surface rounded-full text-xs font-bold text-white/50">{tag}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Competitor Table */}
              <div className="mb-20 sm:mb-40">
                <div className="flex items-center gap-4 mb-12">
                  <span className="text-[10px] font-black tracking-[0.4em] text-white/20 uppercase">Landscape</span>
                  <div className="h-[1px] flex-grow bg-white/10" />
                </div>
                <h2 className="text-2xl sm:text-5xl font-sora font-black tracking-tighter mb-4 uppercase leading-[1.1]">
                  Where Samarpan fits
                </h2>
                <p className="text-white/40 max-w-2xl text-base sm:text-lg font-light leading-relaxed mb-12">
                  No other platform does what Samarpan does — end-to-end NGO blood management with a donor-facing community layer.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-4 px-4 text-[10px] font-black tracking-widest text-white/40 uppercase">Platform</th>
                        <th className="text-left py-4 px-4 text-[10px] font-black tracking-widest text-white/40 uppercase">Emergency SOS</th>
                        <th className="text-left py-4 px-4 text-[10px] font-black tracking-widest text-white/40 uppercase">NGO Admin</th>
                        <th className="text-left py-4 px-4 text-[10px] font-black tracking-widest text-white/40 uppercase">Certificates</th>
                        <th className="text-left py-4 px-4 text-[10px] font-black tracking-widest text-white/40 uppercase">Rare Blood</th>
                        <th className="text-left py-4 px-4 text-[10px] font-black tracking-widest text-white/40 uppercase">Events</th>
                        <th className="text-left py-4 px-4 text-[10px] font-black tracking-widest text-white/40 uppercase">Open Source</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/5 bg-red-500/5">
                        <td className="py-4 px-4 font-bold text-white">Samarpan ← us</td>
                        <td className="py-4 px-4 text-yellow-400">Building</td>
                        <td className="py-4 px-4 text-green-400">✓ Full</td>
                        <td className="py-4 px-4 text-green-400">✓ Auto</td>
                        <td className="py-4 px-4 text-yellow-400">Building</td>
                        <td className="py-4 px-4 text-green-400">✓ Full</td>
                        <td className="py-4 px-4 text-green-400">✓ Yes</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-4 px-4 text-white/60">e-RaktKosh (Govt)</td>
                        <td className="py-4 px-4 text-white/30">✗</td>
                        <td className="py-4 px-4 text-white/30">✗</td>
                        <td className="py-4 px-4 text-white/30">✗</td>
                        <td className="py-4 px-4 text-white/30">✗</td>
                        <td className="py-4 px-4 text-white/30">✗</td>
                        <td className="py-4 px-4 text-white/30">✗</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-4 px-4 text-white/60">Simply Blood</td>
                        <td className="py-4 px-4 text-yellow-400">Partial</td>
                        <td className="py-4 px-4 text-white/30">✗</td>
                        <td className="py-4 px-4 text-white/30">✗</td>
                        <td className="py-4 px-4 text-white/30">✗</td>
                        <td className="py-4 px-4 text-white/30">✗</td>
                        <td className="py-4 px-4 text-white/30">✗</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-4 px-4 text-white/60">ModFx Labs</td>
                        <td className="py-4 px-4 text-white/30">✗</td>
                        <td className="py-4 px-4 text-white/30">✗</td>
                        <td className="py-4 px-4 text-white/30">✗</td>
                        <td className="py-4 px-4 text-white/30">✗</td>
                        <td className="py-4 px-4 text-white/30">✗</td>
                        <td className="py-4 px-4 text-white/30">✗</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 text-white/60">Circulate</td>
                        <td className="py-4 px-4 text-white/30">✗</td>
                        <td className="py-4 px-4 text-white/30">Partial</td>
                        <td className="py-4 px-4 text-white/30">✗</td>
                        <td className="py-4 px-4 text-white/30">✗</td>
                        <td className="py-4 px-4 text-white/30">✗</td>
                        <td className="py-4 px-4 text-white/30">✗</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Who We're Looking For */}
              <div className="mb-20 sm:mb-40">
                <div className="flex items-center gap-4 mb-12">
                  <span className="text-[10px] font-black tracking-[0.4em] text-white/20 uppercase">Who We're Looking For</span>
                  <div className="h-[1px] flex-grow bg-white/10" />
                </div>
                <h2 className="text-2xl sm:text-5xl font-sora font-black tracking-tighter mb-4 uppercase leading-[1.1]">
                  Help us build this.<br />
                  Any way you can.
                </h2>
                <p className="text-white/40 max-w-2xl text-base sm:text-lg font-light leading-relaxed mb-12">
                  We're not asking for funding — yet. We're asking for knowledge, connections, and perspective. If you know something that would make Samarpan better, we want to hear it.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { role: "Healthcare professionals", desc: "Doctors, transfusion medicine specialists, hospital administrators who can advise on clinical workflows, blood component protocols, and hospital integration priorities" },
                    { role: "NGO / social sector leaders", desc: "Blood camp organizers, NSS/NCC coordinators, and health NGO founders who can share on-ground realities and potentially pilot Samarpan in their networks" },
                    { role: "Tech contributors", desc: "Full-stack developers, mobile devs (React Native), WhatsApp API developers, PWA specialists, and anyone who wants to contribute open source code" },
                    { role: "Impact investors & CSR teams", desc: "Organizations aligned with healthcare access, particularly those funding health tech in tier-2/3 India. We're building toward a fundable Phase 3." },
                    { role: "Researchers & policy advisors", desc: "Public health researchers, policy advisors working with NHM or state health departments who can help us position Samarpan as a government-compatible layer" },
                    { role: "Product & UX designers", desc: "Designers who've worked on health or civic products in India — especially with rural or low-digital-literacy user bases in mind" },
                  ].map((item, i) => (
                    <GlassCard key={i} delay={i * 0.1} className="group relative overflow-hidden">
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-500/10 blur-3xl rounded-full" />
                      <h3 className="text-lg font-sora font-bold mb-4 group-hover:text-red-400 transition-colors">{item.role}</h3>
                      <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                    </GlassCard>
                  ))}
                </div>
              </div>

              {/* Connect Form */}
              <div id="samarpan-connect">
                <div className="text-center mb-16">
                  <div className="inline-block px-4 py-1 glass-surface rounded-full text-[10px] font-black tracking-[0.4em] text-white/30 uppercase mb-8">
                    Get Involved
                  </div>
                  <h2 className="text-3xl sm:text-6xl font-sora font-black tracking-tighter mb-8 uppercase leading-[1.1]">
                    Have a thought?<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Tell us directly.</span>
                  </h2>
                  <p className="text-white/40 max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed">
                    A suggestion, a connection, a critique, an offer to help. All of it is welcome. We read every message.
                  </p>
                </div>
                <AnimatePresence mode="wait">
                  {samarpanSubmitted ? (
                    <motion.div
                      key="success-samarpan"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="h-full min-h-[500px] sm:min-h-[600px] flex items-center justify-center"
                    >
                      <GlassCard className="w-full max-w-2xl p-8 sm:p-20 border-red-500/20 text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[450px] sm:min-h-[500px]">
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-red-500/5 blur-[120px] rounded-full animate-pulse" />
                        <motion.div
                          initial={{ rotate: -180, scale: 0 }}
                          animate={{ rotate: 0, scale: 1 }}
                          transition={{ type: "spring", stiffness: 100, damping: 10 }}
                          className="relative z-10 mb-12"
                        >
                          <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-red-500 to-red-400 p-[2px]">
                            <div className="w-full h-full bg-obsidian-void rounded-[22px] flex items-center justify-center">
                              <Heart className="text-red-500" size={48} />
                            </div>
                          </div>
                          <div className="absolute inset-0 border border-red-500/20 rounded-3xl -m-4 animate-ping" />
                          <div className="absolute inset-0 border border-red-500/10 rounded-3xl -m-8 animate-pulse" />
                        </motion.div>
                        <h3 className="text-3xl sm:text-5xl font-sora font-black mb-6 tracking-tighter relative z-10 uppercase">
                          Message <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Received.</span>
                        </h3>
                        <p className="text-white/40 text-base sm:text-lg max-w-sm mb-12 font-light leading-relaxed relative z-10 px-4">
                          Thank you — we'll be in touch soon. Your input genuinely matters to how Samarpan gets built.
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
                              className="h-full bg-gradient-to-r from-red-500 to-red-400"
                            />
                          </div>
                        </div>
                      </GlassCard>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form-samarpan"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <GlassCard className="p-6 sm:p-16 border-white/10 relative overflow-hidden max-w-3xl mx-auto">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/5 blur-[80px] rounded-full" />
                        <form
                          onSubmit={async (e) => {
                            e.preventDefault();
                            const formData = new FormData(e.target);
                            formData.append("access_key", "731279f7-bd59-47d9-994c-588812547ecb");
                            formData.append("subject", "Samarpan Collaboration Inquiry");
                            try {
                              const response = await fetch("https://api.web3forms.com/submit", {
                                method: "POST",
                                body: formData
                              });
                              if (response.ok) {
                                setSamarpanSubmitted(true);
                                setTimeout(() => {
                                  setSamarpanSubmitted(false);
                                }, 3000);
                              }
                            } catch (error) {
                              console.error("Samarpan Form Error:", error);
                            }
                          }}
                          className="space-y-8 relative z-10"
                        >
                          <div className="grid sm:grid-cols-2 gap-8">
                            <div className="space-y-4">
                              <label className="text-[10px] font-black tracking-widest text-white/40 uppercase ml-1">Your Name</label>
                              <input
                                type="text"
                                name="name"
                                required
                                placeholder="Riya Sharma"
                                className="w-full px-6 py-4 glass-surface rounded-xl border border-white/5 focus:border-red-500/50 outline-none transition-all text-sm"
                              />
                            </div>
                            <div className="space-y-4">
                              <label className="text-[10px] font-black tracking-widest text-white/40 uppercase ml-1">Email</label>
                              <input
                                type="email"
                                name="email"
                                required
                                placeholder="riya@example.com"
                                className="w-full px-6 py-4 glass-surface rounded-xl border border-white/5 focus:border-red-500/50 outline-none transition-all text-sm"
                              />
                            </div>
                          </div>
                          <div className="grid sm:grid-cols-2 gap-8">
                            <div className="space-y-4">
                              <label className="text-[10px] font-black tracking-widest text-white/40 uppercase ml-1">Your Background</label>
                              <select
                                name="background"
                                className="w-full px-6 py-4 glass-surface rounded-xl border border-white/5 focus:border-red-500/50 outline-none transition-all text-sm text-white/70"
                              >
                                <option value="">Select one</option>
                                <option>Healthcare professional</option>
                                <option>NGO / Social sector</option>
                                <option>Software developer</option>
                                <option>Impact investor / CSR</option>
                                <option>Researcher / Policy</option>
                                <option>UX / Product designer</option>
                                <option>Student</option>
                                <option>Other</option>
                              </select>
                            </div>
                            <div className="space-y-4">
                              <label className="text-[10px] font-black tracking-widest text-white/40 uppercase ml-1">How You'd Like To Help</label>
                              <select
                                name="help_type"
                                className="w-full px-6 py-4 glass-surface rounded-xl border border-white/5 focus:border-red-500/50 outline-none transition-all text-sm text-white/70"
                              >
                                <option value="">Select one</option>
                                <option>Advise on a specific feature</option>
                                <option>Contribute code / design</option>
                                <option>Connect us with someone</option>
                                <option>Pilot with my organization</option>
                                <option>Discuss funding / grant</option>
                                <option>Just share feedback</option>
                              </select>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <label className="text-[10px] font-black tracking-widest text-white/40 uppercase ml-1">Your Message or Suggestion</label>
                            <textarea
                              name="message"
                              required
                              rows="6"
                              placeholder="What do you think we should prioritize? What have you seen work in similar spaces? What are we missing?"
                              className="w-full px-6 py-4 glass-surface rounded-xl border border-white/5 focus:border-red-500/50 outline-none transition-all text-sm resize-none"
                            />
                          </div>
                          <div className="pt-4">
                            <button
                              type="submit"
                              className="w-full py-5 bg-gradient-to-r from-red-500 to-red-400 rounded-xl font-sora font-black text-xs uppercase tracking-[0.3em] hover:shadow-[0_20px_40px_rgba(239,68,68,0.3)] transition-all active:scale-95"
                            >
                              Send Message →
                            </button>
                          </div>
                          <p className="text-center text-white/20 text-[10px] font-bold tracking-widest">
                            No spam. No newsletters. Just a conversation about saving lives.
                          </p>
                        </form>
                      </GlassCard>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.section>
              }
            />
            <Route 
              path="/contact" 
              element={
                <motion.section
                  key="contact"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  className="max-w-7xl mx-auto py-12 sm:py-20 px-4 sm:px-6"
                >
              <div className="grid lg:grid-cols-2 gap-12 sm:gap-20">
                {/* Contact Info */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <h2 className="text-5xl sm:text-8xl font-sora font-black tracking-tighter mb-8 sm:mb-12 uppercase leading-[0.9] sm:leading-[0.8]">
                      LET'S <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-primary to-cyan-accent">CONNECT.</span>
                    </h2>
                    <p className="text-white/40 text-base sm:text-xl font-light leading-relaxed mb-12 sm:mb-16 max-w-md">
                      Whether you have a project in mind, a question, or just want to say hi, I'm always open to discussing new opportunities.
                    </p>

                    <div className="space-y-12">
                      <div className="flex gap-4 sm:gap-8 items-center group">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl glass-surface flex items-center justify-center text-cyan-accent group-hover:bg-cyan-accent group-hover:text-obsidian-void transition-all flex-shrink-0">
                          <Mail size={24} className="sm:w-7 sm:h-7" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-[9px] sm:text-[10px] font-black tracking-[0.3em] text-white/20 uppercase mb-1">Direct Email</div>
                          <a href="mailto:sakshamshakya@gmail.com" className="text-lg sm:text-xl font-bold hover:text-cyan-accent transition-colors block truncate">sakshamshakya@gmail.com</a>
                        </div>
                      </div>

                      <div className="flex gap-4 sm:gap-8 items-center group">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl glass-surface flex items-center justify-center text-indigo-primary group-hover:bg-indigo-primary group-hover:text-white transition-all flex-shrink-0">
                          <MapPin size={24} className="sm:w-7 sm:h-7" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-[9px] sm:text-[10px] font-black tracking-[0.3em] text-white/20 uppercase mb-1">Location</div>
                          <div className="text-lg sm:text-xl font-bold truncate">Jalandhar, PB / Mainpuri, UP</div>
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
                        className="h-full min-h-[500px] sm:min-h-[600px] flex items-center"
                      >
                        <GlassCard className="w-full p-8 sm:p-20 border-cyan-accent/20 text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[450px] sm:min-h-[500px]">
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
                          
                          <h3 className="text-3xl sm:text-5xl font-sora font-black mb-6 tracking-tighter relative z-10 uppercase">
                            SIGNAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-primary to-cyan-accent">DISPATCHED.</span>
                          </h3>
                          
                          <p className="text-white/40 text-base sm:text-lg max-w-sm mb-12 font-light leading-relaxed relative z-10 px-4">
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
                        <GlassCard className="p-6 sm:p-16 border-white/10 relative overflow-hidden">
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
                                    navigate('/');
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
              }
            />
          </Routes>
        </AnimatePresence>
      </main>

      <footer className="relative z-10 border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-white/20 text-[10px] font-black tracking-[0.4em] uppercase">
            © 2026 SAKSHAM SHAKYA · DIGITAL ARCHITECT
          </div>
          <div className="flex gap-10">
            <button onClick={() => navigate('/about')} className="text-white/20 hover:text-white text-[10px] font-black transition-colors uppercase tracking-[0.2em]">Story</button>
            <button onClick={() => navigate('/projects')} className="text-white/20 hover:text-white text-[10px] font-black transition-colors uppercase tracking-[0.2em]">Archive</button>
            <button onClick={() => navigate('/contact')} className="text-white/20 hover:text-white text-[10px] font-black transition-colors uppercase tracking-[0.2em]">Contact</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
