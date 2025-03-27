
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
      transition={{ duration: 0.5 }}
      className="glass fixed top-4 left-1/2 transform -translate-x-1/2 backdrop-blur-md z-50 rounded-full px-6 py-3 border border-white/40 shadow-lg"
    >
      <nav className="flex items-center justify-between">
        <Link to="/" className="text-amber-300 text-xl font-medium mr-8">
          EduEnhance
        </Link>
        
        {role === "student" && (
          <div className="flex space-x-6">
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
          <div className="flex space-x-6">
            <NavLink to="/teacher" active={location.pathname === "/teacher"}>
              Dashboard
            </NavLink>
            <NavLink to="/chat" active={location.pathname === "/chat"}>
              Chat Support
            </NavLink>
          </div>
        )}
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
    <Link to={to} className="relative">
      <div className="text-white hover:text-amber-200 transition-colors font-medium">
        {children}
      </div>
      {active && (
        <motion.div 
          layoutId="activeNavIndicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-300 to-pink-300 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </Link>
  );
};

export default Navbar;
