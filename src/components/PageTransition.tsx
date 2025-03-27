
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1]
      }}
      className="w-full h-full min-h-screen"
      style={{
        background: "linear-gradient(135deg, #1a0f3e 0%, #4b258c 50%, #2e0f5e 100%)",
        backgroundSize: "400% 400%",
        animation: "gradient-animation 15s ease infinite",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Animated orbs in background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5 backdrop-blur-xl"
            style={{
              width: Math.random() * 400 + 100,
              height: Math.random() * 400 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(60px)"
            }}
            animate={{
              x: [0, Math.random() * 60 - 30],
              y: [0, Math.random() * 60 - 30],
              scale: [1, Math.random() * 0.4 + 0.8, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
      
      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px"
        }}
      />

      {/* Main content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default PageTransition;
