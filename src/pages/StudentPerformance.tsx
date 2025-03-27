
import { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Navbar from "../components/Navbar";
import PerformanceChart from "../components/PerformanceChart";

const StudentPerformance = () => {
  const [performanceData] = useState({
    mathematics: [
      { name: "Aug", score: 75 },
      { name: "Sep", score: 68 },
      { name: "Oct", score: 80 },
      { name: "Nov", score: 85 },
      { name: "Dec", score: 92 },
    ],
    physics: [
      { name: "Aug", score: 65 },
      { name: "Sep", score: 70 },
      { name: "Oct", score: 75 },
      { name: "Nov", score: 78 },
      { name: "Dec", score: 82 },
    ],
    chemistry: [
      { name: "Aug", score: 60 },
      { name: "Sep", score: 65 },
      { name: "Oct", score: 75 },
      { name: "Nov", score: 70 },
      { name: "Dec", score: 80 },
    ],
    biology: [
      { name: "Aug", score: 75 },
      { name: "Sep", score: 80 },
      { name: "Oct", score: 85 },
      { name: "Nov", score: 82 },
      { name: "Dec", score: 88 },
    ],
  });
  
  const [improvementSuggestions] = useState([
    {
      id: "1",
      subject: "Mathematics",
      title: "Calculus Fundamentals",
      description: "Focus on differentiation and integration concepts, particularly chain rule applications.",
    },
    {
      id: "2",
      subject: "Physics",
      title: "Force Diagrams",
      description: "Practice drawing and analyzing force diagrams for complex mechanical systems.",
    },
    {
      id: "3",
      subject: "Chemistry",
      title: "Balancing Equations",
      description: "Work on balancing complex chemical equations and understanding reaction mechanisms.",
    },
  ]);

  return (
    <PageTransition>
      <div 
        className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 p-6"
        style={{
          backgroundImage: "radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.2) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.2) 0%, transparent 40%)"
        }}
      >
        <Navbar role="student" />
        
        <div className="pt-24 pb-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-light text-white mb-2">
              Performance Analysis
            </h1>
            <p className="text-lg text-white/80">
              Track your academic progress across all subjects
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <PerformanceChart data={performanceData.mathematics} subject="Mathematics" />
            <PerformanceChart data={performanceData.physics} subject="Physics" />
            <PerformanceChart data={performanceData.chemistry} subject="Chemistry" />
            <PerformanceChart data={performanceData.biology} subject="Biology" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="glass rounded-xl p-6 mb-8"
          >
            <h2 className="text-2xl font-light text-white mb-6">Performance Summary</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <SummaryCard 
                title="Overall GPA" 
                value="3.7" 
                change="+0.2" 
                positive={true} 
              />
              <SummaryCard 
                title="Attendance" 
                value="94%" 
                change="+2.5%" 
                positive={true} 
              />
              <SummaryCard 
                title="Assignment Completion" 
                value="98%" 
                change="+5%" 
                positive={true} 
              />
              <SummaryCard 
                title="Class Rank" 
                value="5" 
                change="+2" 
                positive={true} 
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="glass rounded-xl p-6"
          >
            <h2 className="text-2xl font-light text-white mb-6">Improvement Suggestions</h2>
            
            <div className="space-y-6">
              {improvementSuggestions.map((suggestion, index) => (
                <motion.div 
                  key={suggestion.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                  className="bg-white/5 rounded-lg p-6"
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mr-4 shrink-0">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6 text-white" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    
                    <div>
                      <div className="text-sm text-white/70 mb-1">{suggestion.subject}</div>
                      <h3 className="text-xl font-medium text-white mb-2">{suggestion.title}</h3>
                      <p className="text-white/80">{suggestion.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

interface SummaryCardProps {
  title: string;
  value: string;
  change: string;
  positive: boolean;
}

const SummaryCard = ({ title, value, change, positive }: SummaryCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white/10 rounded-xl p-5 text-center"
    >
      <h3 className="text-white/70 text-sm mb-2">{title}</h3>
      <div className="text-3xl font-medium text-white mb-3">{value}</div>
      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${positive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
        {positive ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        )}
        {change}
      </div>
    </motion.div>
  );
};

export default StudentPerformance;
