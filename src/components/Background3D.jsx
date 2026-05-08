import React from 'react';
import { motion } from 'framer-motion';

const Background3D = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-obsidian-void">
      {/* Primary Nebula - Indigo */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-[20%] -left-[10%] w-[80%] h-[80%] bg-indigo-primary/10 rounded-full blur-[140px] opacity-60"
      />

      {/* Secondary Nebula - Cyan */}
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -bottom-[10%] -right-[10%] w-[70%] h-[70%] bg-cyan-accent/10 rounded-full blur-[120px] opacity-40"
      />

      {/* Subtle Depth Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.5,
          }}
          animate={{
            y: ["-10%", "110%"],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 20,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 20,
          }}
          className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
        />
      ))}

      {/* Floating 3D-ish Shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            rotate: 0,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, "-20px", "20px"],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15 + Math.random() * 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            width: Math.random() * 60 + 30,
            height: Math.random() * 60 + 30,
          }}
          className="absolute border border-white/5 rounded-xl glass-surface opacity-20"
        />
      ))}

      {/* Atmospheric Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-obsidian-void/20 to-obsidian-void pointer-events-none" />
    </div>
  );
};

export default Background3D;
