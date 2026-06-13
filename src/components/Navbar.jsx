import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Menu, X, Command, Home, User, Briefcase, Mail, Rocket, ArrowRight, BookOpen, Terminal, Palette, Heart 
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

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Helper to get active page from path
  const getActivePage = () => {
    switch(location.pathname) {
      case '/':
        return 'home';
      case '/about':
        return 'about';
      case '/projects':
        return 'projects';
      case '/samarpan-proposal':
        return 'samarpan';
      case '/hire':
        return 'hire';
      case '/contact':
        return 'contact';
      default:
        return 'home';
    }
  };
  const activePage = getActivePage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'Story', icon: User },
    { id: 'projects', label: 'Works', icon: Briefcase },
    { id: 'samarpan', label: 'Samarpan', icon: Heart },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <>
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
            onClick={() => navigate('/')}
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
            {navLinks.map((link) => {
              const path = link.id === 'home' ? '/' : 
                          link.id === 'samarpan' ? '/samarpan-proposal' : 
                          `/${link.id}`;
              return (
                <button
                  key={link.id}
                  onClick={() => navigate(path)}
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
              );
            })}
          </div>

          {/* Hire Me Link */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button 
              onClick={() => navigate('/hire')}
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
      </nav>

      {/* Mobile Menu Overlay - Moved outside the constrained nav container */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[100] bg-obsidian-void/98 backdrop-blur-3xl p-6 sm:p-12 flex flex-col justify-between"
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
                className="p-3 bg-white/5 rounded-xl text-white/80 hover:bg-white/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {[...navLinks, { id: 'hire', label: 'Hire Me', icon: Rocket }].map((link, idx) => {
                const path = link.id === 'home' ? '/' : 
                            link.id === 'samarpan' ? '/samarpan-proposal' : 
                            `/${link.id}`;
                return (
                  <button
                    key={link.id}
                    onClick={() => {
                      navigate(path);
                      setMobileMenuOpen(false);
                    }}
                    className={`
                      flex items-center gap-6 text-4xl xs:text-5xl font-sora font-extrabold tracking-tighter text-left
                      ${activePage === link.id ? 'text-cyan-accent' : 'text-white/30'}
                    `}
                  >
                    <span className="text-[10px] font-black text-white/10 font-inter uppercase tracking-[0.5em]">0{idx + 1}</span>
                    {link.label}
                  </button>
                );
              })}
            </div>

            <div className="pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="text-[10px] font-black tracking-widest text-white/20 uppercase text-center sm:text-left">Available for MCA Internships 2026</div>
              <div className="flex gap-6">
                <Github size={20} className="text-white/20 hover:text-white transition-colors" />
                <Linkedin size={20} className="text-white/20 hover:text-white transition-colors" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
