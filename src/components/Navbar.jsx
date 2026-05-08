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
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-50">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`
          flex items-center justify-between px-6 py-4 rounded-2xl
          transition-all duration-500 border border-white/10 glass-surface glass-refractive
          ${isScrolled ? 'shadow-2xl scale-[0.98]' : ''}
        `}
      >
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => setActivePage('home')}
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-primary to-cyan-accent flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
            <Command className="text-white" size={18} />
          </div>
          <span className="font-sora font-extrabold text-sm text-white tracking-widest hidden sm:block uppercase">
            Saksham<span className="text-cyan-accent/80">.</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActivePage(link.id)}
              className={`
                group relative flex items-center gap-2 font-outfit text-[10px] font-bold tracking-[0.2em] uppercase transition-all
                ${activePage === link.id ? 'text-cyan-accent' : 'text-white/40 hover:text-white'}
              `}
            >
              <link.icon size={12} className={activePage === link.id ? "text-cyan-accent" : "text-white/20 group-hover:text-cyan-accent/50 transition-colors"} />
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
        <button 
          onClick={() => setActivePage('hire')}
          className="hidden md:block text-[10px] font-black tracking-widest text-white hover:text-cyan-accent transition-colors border-l border-white/10 pl-6"
        >
          HIRE ME
        </button>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-white/80 hover:text-white"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={20} />
        </button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[60] glass-surface backdrop-blur-2xl p-8 flex flex-col items-center justify-center gap-12"
          >
            <button 
              className="absolute top-8 right-8 text-white/80"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActivePage(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`
                  text-4xl font-sora font-extrabold tracking-tighter
                  ${activePage === link.id ? 'text-cyan-accent' : 'text-white/40'}
                `}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
