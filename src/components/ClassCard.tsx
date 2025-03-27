
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ClassCardProps {
  id: string;
  name: string;
  students: number;
  index: number;
}

const ClassCard = ({ id, name, students, index }: ClassCardProps) => {
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
        boxShadow: "0 25px 35px -5px rgba(0, 0, 0, 0.3), 0 15px 15px -5px rgba(0, 0, 0, 0.2)"
      }}
      className="relative overflow-hidden rounded-xl"
      style={{ perspective: "1000px" }}
    >
      <div className="bg-gradient-to-br from-indigo-500/20 to-purple-600/20 backdrop-blur-xl p-7 rounded-xl border border-white/20 shadow-xl">
        {/* Animated background glow */}
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-amber-500/20 via-fuchsia-500/20 to-purple-500/20 opacity-70 blur-xl" />
        
        {/* Card content */}
        <div className="relative z-10">
          <h3 className="text-2xl font-semibold mb-3 text-amber-300 drop-shadow-md">{name}</h3>
          <p className="text-white/90 mb-5 font-medium text-lg">{students} Students</p>
          
          <Link to={`/teacher/class/${id}`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium tracking-wide shadow-lg shadow-amber-500/30 relative overflow-hidden group"
            >
              {/* Button shimmer effect */}
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
              View Class
            </motion.button>
          </Link>
        </div>
        
        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-amber-300/60 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 30 - 15],
              x: [0, Math.random() * 30 - 15],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ClassCard;
