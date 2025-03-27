
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
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      className="glass rounded-2xl p-10 w-64 h-80 flex flex-col items-center justify-center space-y-6 cursor-pointer"
    >
      <motion.div 
        className={`w-24 h-24 rounded-full ${role === "student" ? "bg-blue-500" : "bg-purple-500"} flex items-center justify-center`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-12 w-12 text-white" 
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
      </motion.div>
      
      <h2 className="text-2xl font-light capitalize text-center text-white">
        {role}
      </h2>
      
      <Link to={`/${role}`}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="button-animation px-8 py-3 rounded-full bg-white/10 text-white font-light tracking-wide backdrop-blur-md"
        >
          Continue
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default RoleCard;
