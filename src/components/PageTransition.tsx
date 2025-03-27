
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
        duration: 0.7, 
        ease: [0.22, 1, 0.36, 1]
      }}
      className="w-full h-full min-h-screen bg-gradient-to-br from-blue-600 to-purple-700"
      style={{
        backgroundImage: "radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.2) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.2) 0%, transparent 40%)"
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
