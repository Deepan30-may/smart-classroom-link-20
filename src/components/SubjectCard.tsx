
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
        delay: index * 0.1,
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      className="glass rounded-xl p-6 cursor-pointer"
    >
      <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center mb-4`}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 text-white" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>
      
      <h3 className="text-xl font-medium mb-2 text-white">{name}</h3>
      
      <div className="w-full bg-white/20 rounded-full h-2 mb-4">
        <div 
          className={`${color} h-2 rounded-full`} 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <Link to={`/student/subjects/${id}`}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="button-animation w-full py-2 rounded-lg bg-white/10 text-white font-light tracking-wide backdrop-blur-md"
        >
          View Subject
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default SubjectCard;
