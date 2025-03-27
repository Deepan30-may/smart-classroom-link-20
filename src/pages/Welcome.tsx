
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import RoleCard from "../components/RoleCard";

const Welcome = () => {
  return (
    <PageTransition>
      <div 
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 p-6"
        style={{
          backgroundImage: "radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.2) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.2) 0%, transparent 40%)"
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-light text-white mb-4">
            Welcome to <span className="font-medium">EduEnhance</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            A student performance tracking and enhancement platform
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-10">
          <RoleCard role="student" delay={0.2} />
          <RoleCard role="teacher" delay={0.4} />
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute bottom-8 text-white/50 text-sm"
        >
          © 2023 EduEnhance • Student Performance Tracking Platform
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Welcome;
