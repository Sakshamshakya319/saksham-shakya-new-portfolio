import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`relative group ${className}`}
    >
      {/* Outer Glow on Hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-primary/20 to-cyan-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* The Glass Container */}
      <div className="relative glass-surface glass-refractive rounded-2xl p-8 h-full overflow-hidden">
        {/* Internal Glow Gradient */}
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default GlassCard;
