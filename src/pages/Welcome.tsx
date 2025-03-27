
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import RoleCard from "../components/RoleCard";

const Welcome = () => {
  return (
    <PageTransition>
      <div 
        className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1a365d 0%, #3b82f6 50%, #7c3aed 100%)",
          backgroundSize: "400% 400%",
          animation: "gradient-animation 15s ease infinite"
        }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10 backdrop-blur-3xl"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 40 - 20],
                y: [0, Math.random() * 40 - 20],
                scale: [1, Math.random() * 0.3 + 0.9, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 z-10"
        >
          <motion.h1 
            className="text-5xl font-light mb-4"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "linear" 
            }}
            style={{
              backgroundImage: "linear-gradient(90deg, #f0f9ff, #ffffff, #f0f9ff)",
              backgroundSize: "200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Welcome to <span className="font-medium">EduEnhance</span>
          </motion.h1>
          <p className="text-xl text-white/90 max-w-2xl">
            A student performance tracking and enhancement platform
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-10 z-10">
          <RoleCard role="student" delay={0.2} />
          <RoleCard role="teacher" delay={0.4} />
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute bottom-8 text-white/60 text-sm"
        >
          © 2023 EduEnhance • Student Performance Tracking Platform
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Welcome;
