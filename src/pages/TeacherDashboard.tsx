
import { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Navbar from "../components/Navbar";
import ClassCard from "../components/ClassCard";

const TeacherDashboard = () => {
  const [classes] = useState([
    { id: "1", name: "Class 10A", students: 35 },
    { id: "2", name: "Class 11B", students: 32 },
    { id: "3", name: "Class 12A", students: 28 },
    { id: "4", name: "Class 9C", students: 38 },
    { id: "5", name: "Class 10C", students: 33 },
    { id: "6", name: "Class 11A", students: 30 },
  ]);

  return (
    <PageTransition>
      <Navbar role="teacher" />
      
      <div className="pt-24 pb-10 max-w-7xl mx-auto p-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-light text-white mb-2 gradient-text">
            Welcome back, <span className="font-medium">Ms. Johnson</span>
          </h1>
          <p className="text-lg text-white/80">
            Here are your assigned classes
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((cls, index) => (
            <ClassCard 
              key={cls.id} 
              id={cls.id} 
              name={cls.name} 
              students={cls.students} 
              index={index}
            />
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default TeacherDashboard;
