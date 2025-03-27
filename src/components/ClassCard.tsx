
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
        delay: index * 0.1,
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ 
        y: -8,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
      }}
      className="glass rounded-xl p-6 cursor-pointer"
    >
      <h3 className="text-xl font-medium mb-2 text-amber-300">{name}</h3>
      <p className="text-white/90 mb-4 font-medium">{students} Students</p>
      
      <Link to={`/teacher/class/${id}`}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="button-animation w-full py-2 rounded-lg bg-white/20 text-white font-medium tracking-wide backdrop-blur-md"
        >
          View Class
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default ClassCard;
