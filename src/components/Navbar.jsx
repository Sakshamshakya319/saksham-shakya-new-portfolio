import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Command, Home, User, Briefcase, Mail } from 'lucide-react';

const Navbar = ({ activePage, setActivePage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'Story', icon: User },
    { id: 'projects', label: 'Works', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav className="fixed top-4 sm:top-8 left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] max-w-4xl z-50">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`
          flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl
          transition-all duration-500 border border-white/10 glass-surface glass-refractive
          ${isScrolled ? 'shadow-2xl scale-[0.98]' : ''}
        `}
      >
        {/* Logo */}
        <div 
          className="flex items-center gap-2 sm:gap-3 cursor-pointer group"
          onClick={() => setActivePage('home')}
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-indigo-primary to-cyan-accent flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
            <Command className="text-white" size={16} />
          </div>
          <span className="font-sora font-extrabold text-[12px] sm:text-sm text-white tracking-widest hidden xs:block uppercase">
            Saksham<span className="text-cyan-accent/80">.</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActivePage(link.id)}
              className={`
                group relative flex items-center gap-2 font-inter text-[9px] lg:text-[10px] font-bold tracking-[0.2em] uppercase transition-all
                ${activePage === link.id ? 'text-cyan-accent' : 'text-white/40 hover:text-white'}
              `}
            >
              <link.icon size={11} className={activePage === link.id ? "text-cyan-accent" : "text-white/20 group-hover:text-cyan-accent/50 transition-colors"} />
              {link.label}
              {activePage === link.id && (
                <motion.div 
                  layoutId="nav-active"
                  className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-accent to-transparent"
                />
              )}
            </button>
          ))}
        </div>

        {/* Hire Me Link */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button 
            onClick={() => setActivePage('hire')}
            className="hidden sm:block text-[9px] lg:text-[10px] font-black tracking-widest text-white hover:text-cyan-accent transition-colors border-l border-white/10 pl-4 lg:pl-6"
          >
            HIRE ME
          </button>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-white/80 hover:text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={18} />
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] glass-surface backdrop-blur-3xl p-6 sm:p-12 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-primary to-cyan-accent flex items-center justify-center shadow-lg">
                  <Command className="text-white" size={18} />
                </div>
                <span className="font-sora font-extrabold text-sm text-white tracking-widest uppercase">
                  Saksham.
                </span>
              </div>
              <button 
                className="p-3 bg-white/5 rounded-xl text-white/80"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {[...navLinks, { id: 'hire', label: 'Hire Me', icon: Rocket }].map((link, idx) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setActivePage(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`
                    flex items-center gap-6 text-3xl xs:text-4xl font-sora font-extrabold tracking-tighter
                    ${activePage === link.id ? 'text-cyan-accent' : 'text-white/30'}
                  `}
                >
                  <span className="text-[10px] font-black text-white/10 font-inter uppercase tracking-[0.5em]">0{idx + 1}</span>
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-12 border-t border-white/5 flex justify-between items-center">
              <div className="text-[10px] font-black tracking-widest text-white/20 uppercase">Available for MCA Internships 2025</div>
              <div className="flex gap-4">
                <Github size={18} className="text-white/20" />
                <Linkedin size={18} className="text-white/20" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
