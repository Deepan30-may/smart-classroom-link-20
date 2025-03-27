
import { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Navbar from "../components/Navbar";
import SubjectCard from "../components/SubjectCard";

const SubjectList = () => {
  const [subjects] = useState([
    { id: "1", name: "Mathematics", progress: 68, color: "bg-blue-500" },
    { id: "2", name: "Physics", progress: 75, color: "bg-purple-500" },
    { id: "3", name: "Chemistry", progress: 42, color: "bg-green-500" },
    { id: "4", name: "Biology", progress: 89, color: "bg-red-500" },
    { id: "5", name: "English", progress: 92, color: "bg-yellow-500" },
    { id: "6", name: "Computer Science", progress: 78, color: "bg-indigo-500" },
    { id: "7", name: "History", progress: 65, color: "bg-pink-500" },
    { id: "8", name: "Geography", progress: 70, color: "bg-teal-500" },
  ]);

  return (
    <PageTransition>
      <Navbar role="student" />
      
      <div className="pt-24 pb-10 max-w-7xl mx-auto p-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-light text-white mb-2 gradient-text">
            Your Subjects
          </h1>
          <p className="text-lg text-white/80">
            View your progress and access subject materials
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((subject, index) => (
            <SubjectCard 
              key={subject.id} 
              id={subject.id} 
              name={subject.name} 
              progress={subject.progress} 
              color={subject.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default SubjectList;
