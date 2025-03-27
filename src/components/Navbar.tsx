
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

interface NavbarProps {
  role: "student" | "teacher" | null;
}

const Navbar = ({ role }: NavbarProps) => {
  const location = useLocation();
  
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 rounded-full shadow-2xl shadow-purple-500/20"
    >
      <nav className="bg-gradient-to-r from-indigo-600/40 to-purple-600/40 backdrop-blur-xl px-8 py-4 rounded-full border border-white/20 relative overflow-hidden">
        {/* Animated gradient line at bottom */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-[2px]"
          style={{
            background: "linear-gradient(90deg, #f59e0b, #d946ef, #60a5fa, #f59e0b)"
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
              className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center"
            >
              <span className="text-white font-bold text-sm">E</span>
            </motion.div>
            <motion.span 
              className="text-amber-300 text-xl font-bold tracking-wide"
              whileHover={{ 
                textShadow: "0 0 8px rgba(251, 191, 36, 0.7)" 
              }}
            >
              EduEnhance
            </motion.span>
          </Link>
          
          {role === "student" && (
            <div className="flex space-x-8">
              <NavLink to="/student" active={location.pathname === "/student"}>
                Dashboard
              </NavLink>
              <NavLink to="/student/subjects" active={location.pathname.includes("/student/subjects")}>
                Subjects
              </NavLink>
              <NavLink to="/student/performance" active={location.pathname === "/student/performance"}>
                Performance
              </NavLink>
              <NavLink to="/chat" active={location.pathname === "/chat"}>
                Chat Support
              </NavLink>
            </div>
          )}
          
          {role === "teacher" && (
            <div className="flex space-x-8">
              <NavLink to="/teacher" active={location.pathname === "/teacher"}>
                Dashboard
              </NavLink>
              <NavLink to="/chat" active={location.pathname === "/chat"}>
                Chat Support
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </motion.header>
  );
};

interface NavLinkProps {
  to: string;
  active: boolean;
  children: React.ReactNode;
}

const NavLink = ({ to, active, children }: NavLinkProps) => {
  return (
    <Link to={to} className="relative group">
      <div className="text-white text-lg font-medium transition-colors group-hover:text-amber-200">
        {children}
      </div>
      
      {active ? (
        <motion.div 
          layoutId="activeNavIndicator"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-300 to-amber-500 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      ) : (
        <motion.div 
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-300/0 via-amber-400/0 to-amber-500/0 group-hover:from-amber-300/80 group-hover:via-amber-400/80 group-hover:to-amber-500/80 rounded-full"
          transition={{ duration: 0.3 }}
        />
      )}
    </Link>
  );
};

export default Navbar;
