
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface RoleCardProps {
  role: "student" | "teacher";
  delay?: number;
}

const RoleCard = ({ role, delay = 0 }: RoleCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: delay,
        duration: 0.7, 
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ 
        y: -15,
        boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.4)"
      }}
      className="w-72 h-90 relative rounded-2xl overflow-hidden"
    >
      {/* Background gradient with animation */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: role === "student" 
            ? ["linear-gradient(135deg, #4f46e5 0%, #7e3af2 100%)", "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)", "linear-gradient(135deg, #4f46e5 0%, #7e3af2 100%)"]
            : ["linear-gradient(135deg, #9333ea 0%, #d946ef 100%)", "linear-gradient(135deg, #8b5cf6 0%, #c026d3 100%)", "linear-gradient(135deg, #9333ea 0%, #d946ef 100%)"]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'mirror'
        }}
      />
      
      {/* Glass card overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl" />
      
      {/* Card content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 py-10 space-y-8">
        <motion.div 
          className={`w-28 h-28 rounded-full flex items-center justify-center relative z-10 shadow-xl`}
          style={{
            background: role === "student" 
              ? "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)"
              : "linear-gradient(135deg, #c084fc 0%, #8b5cf6 100%)"
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-14 w-14 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {role === "student" ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            )}
          </svg>
          
          {/* Pulsing animation */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{ 
              boxShadow: ['0 0 0 0px rgba(255,255,255,0.4)', '0 0 0 15px rgba(255,255,255,0)'] 
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
          />
        </motion.div>
        
        <motion.h2 
          className="text-3xl font-medium capitalize text-center text-white"
          animate={{ 
            textShadow: ["0 0 8px rgba(255,255,255,0.4)", "0 0 16px rgba(255,255,255,0.2)", "0 0 8px rgba(255,255,255,0.4)"] 
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            repeatType: 'mirror' 
          }}
        >
          {role}
        </motion.h2>
        
        <Link to={`/${role}`} className="w-full">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-4 rounded-xl bg-white/15 backdrop-blur-md text-white text-lg font-medium tracking-wide border border-white/20 relative overflow-hidden group"
          >
            {/* Button hover effect */}
            <motion.div 
              className="absolute inset-0 opacity-0 group-hover:opacity-40 bg-gradient-to-r from-transparent via-white to-transparent"
              animate={{
                x: ["-100%", "200%"]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear"
              }}
            />
            Continue
          </motion.button>
        </Link>
        
        {/* Animated floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/50 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 40 - 20],
              x: [0, Math.random() * 40 - 20],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default RoleCard;
