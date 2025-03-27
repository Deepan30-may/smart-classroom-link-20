
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 p-6"
      style={{
        backgroundImage: "radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.2) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.2) 0%, transparent 40%)"
      }}
    >
      <div className="text-center glass rounded-xl p-12 max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl font-light text-white mb-6">404</h1>
          <p className="text-xl text-white/80 mb-8">Oops! This page doesn't exist.</p>
          
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button-animation px-8 py-3 rounded-full bg-white/10 text-white font-light tracking-wide backdrop-blur-md"
            >
              Return to Home
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
