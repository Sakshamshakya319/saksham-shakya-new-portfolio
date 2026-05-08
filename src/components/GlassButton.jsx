import React from 'react';
import { motion } from 'framer-motion';

const GlassButton = ({ children, onClick, className = "", primary = false, icon: Icon }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        relative px-8 py-4 rounded-xl font-sora font-bold text-xs tracking-[0.15em] uppercase
        transition-all duration-500 overflow-hidden group
        ${primary 
          ? 'bg-gradient-to-r from-indigo-primary to-cyan-accent text-white shadow-[0_10px_30px_-10px_rgba(99,102,241,0.5)]' 
          : 'glass-surface glass-refractive text-white/80 hover:text-white'
        }
        ${className}
      `}
    >
      {/* Top Highlight line for primary */}
      {primary && (
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/30 z-20" />
      )}
      
      {/* Shine Effect */}
      <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/10 opacity-0 group-hover:opacity-100 group-hover:animate-shine pointer-events-none" />

      <div className="flex items-center justify-center gap-3 relative z-10">
        {Icon && <Icon size={16} className={primary ? "text-white" : "text-cyan-accent"} />}
        {children}
      </div>
    </motion.button>
  );
};

export default GlassButton;
