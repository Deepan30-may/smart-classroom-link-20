
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Index = () => {
  return (
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 glass p-12 rounded-2xl max-w-2xl"
      >
        <motion.h1 
          className="text-5xl font-light mb-6"
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
        
        <p className="text-xl text-white/90 mb-10">
          Revolutionizing student performance tracking and learning enhancement
        </p>
        
        <Link to="/welcome">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="button-animation px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium tracking-wide backdrop-blur-md shadow-lg"
          >
            Get Started
          </motion.button>
        </Link>
        
        <div className="grid grid-cols-3 gap-4 mt-12">
          {["Analytics", "Personalized", "Interactive"].map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className="p-4 rounded-xl bg-white/5 backdrop-blur-sm"
            >
              <h3 className="text-lg font-medium text-white mb-1">{feature}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
