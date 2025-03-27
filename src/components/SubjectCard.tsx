
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface SubjectCardProps {
  id: string;
  name: string;
  progress: number;
  color: string;
  index: number;
}

const SubjectCard = ({ id, name, progress, color, index }: SubjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.15,
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ 
        y: -12,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
      }}
      className="relative rounded-xl overflow-hidden"
    >
      {/* Card background with gradient */}
      <div className="bg-gradient-to-br from-indigo-600/20 to-purple-700/20 backdrop-blur-xl p-6 rounded-xl border border-white/20 relative">
        {/* Subject icon with animation */}
        <motion.div 
          className={`w-14 h-14 rounded-full flex items-center justify-center mb-5 relative shadow-lg ${color}`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          animate={{ 
            boxShadow: ["0 0 0 0 rgba(255,255,255,0.1)", "0 0 0 10px rgba(255,255,255,0)", "0 0 0 0 rgba(255,255,255,0.1)"]
          }}
          transition={{
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }
          }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-7 w-7 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </motion.div>
        
        {/* Subject name with glow effect */}
        <motion.h3 
          className="text-2xl font-semibold mb-3 text-amber-300"
          animate={{ 
            textShadow: ["0 0 4px rgba(251, 191, 36, 0.3)", "0 0 8px rgba(251, 191, 36, 0.6)", "0 0 4px rgba(251, 191, 36, 0.3)"]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            repeatType: 'mirror' 
          }}
        >
          {name}
        </motion.h3>
        
        {/* Progress bar */}
        <div className="w-full bg-white/10 rounded-full h-3 mb-5 relative z-10 overflow-hidden backdrop-blur-sm border border-white/10">
          <motion.div 
            className={`${color} h-3 rounded-full relative`}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ 
              duration: 1.8, 
              ease: "easeOut",
              delay: 0.5 + index * 0.1
            }}
          >
            {/* Shimmer effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: 1.5 + index * 0.1
              }}
            />
          </motion.div>
        </div>
        
        {/* Button */}
        <Link to={`/student/subjects/${id}`}>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className={`w-full py-3 rounded-lg text-white font-medium tracking-wide backdrop-blur-sm relative overflow-hidden group`}
            style={{
              background: color,
            }}
          >
            {/* Button hover effect */}
            <motion.div 
              className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-to-r from-transparent via-white to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear"
              }}
            />
            View Subject
          </motion.button>
        </Link>
        
        {/* Floating particles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/70 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 30 - 15],
              x: [0, Math.random() * 30 - 15],
              opacity: [0, 1, 0],
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

export default SubjectCard;
