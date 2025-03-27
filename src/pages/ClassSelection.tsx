
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Navbar from "../components/Navbar";

const ClassSelection = () => {
  const { classId } = useParams<{ classId: string }>();
  const [students] = useState([
    { id: "1", name: "Alex Johnson", grade: "A-", improvement: "+5%" },
    { id: "2", name: "Jamie Smith", grade: "B+", improvement: "+2%" },
    { id: "3", name: "Morgan Brown", grade: "B", improvement: "-1%" },
    { id: "4", name: "Taylor Davis", grade: "A", improvement: "+3%" },
    { id: "5", name: "Jordan Wilson", grade: "C+", improvement: "+8%" },
    { id: "6", name: "Casey Miller", grade: "B-", improvement: "+1%" },
    { id: "7", name: "Riley Moore", grade: "A-", improvement: "+0%" },
    { id: "8", name: "Avery Thomas", grade: "B", improvement: "+4%" },
  ]);
  
  return (
    <PageTransition>
      <div 
        className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 p-6"
        style={{
          backgroundImage: "radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.2) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.2) 0%, transparent 40%)"
        }}
      >
        <Navbar role="teacher" />
        
        <div className="pt-24 pb-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 flex justify-between items-center"
          >
            <div>
              <Link to="/teacher" className="text-white/80 flex items-center mb-2 hover:text-white">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Classes
              </Link>
              <h1 className="text-4xl font-light text-white mb-2">
                Class 10A
              </h1>
              <p className="text-lg text-white/80">
                35 Students • Mathematics
              </p>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="glass rounded-xl p-6">
                <h2 className="text-2xl font-light text-white mb-6">Students</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {students.map((student, index) => (
                    <motion.div 
                      key={student.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 + 0.2, duration: 0.5 }}
                      className="bg-white/5 rounded-lg p-4 flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5 text-white" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-white font-medium">{student.name}</h3>
                          <div className="text-sm text-white/60">Grade: {student.grade}</div>
                        </div>
                      </div>
                      
                      <div className={`text-sm ${student.improvement.startsWith('+') ? 'text-green-400' : student.improvement === '+0%' ? 'text-white/60' : 'text-red-400'} flex items-center`}>
                        {student.improvement.startsWith('+') && student.improvement !== '+0%' ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                          </svg>
                        ) : student.improvement === '+0%' ? null : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                        )}
                        {student.improvement}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="glass rounded-xl p-6 mb-8">
                <h2 className="text-2xl font-light text-white mb-6">Class Performance</h2>
                
                <div className="space-y-4">
                  <PerformanceItem title="Average Grade" value="B+" />
                  <PerformanceItem title="Attendance" value="94%" />
                  <PerformanceItem title="Assignment Completion" value="86%" />
                  <PerformanceItem title="Test Pass Rate" value="92%" />
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="glass rounded-xl p-6"
              >
                <h2 className="text-2xl font-light text-white mb-6">Actions</h2>
                
                <div className="space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="button-animation w-full py-3 rounded-lg bg-white/10 text-white font-light backdrop-blur-md flex items-center justify-center mb-4"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 mr-2" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                    Generate Class Report
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="button-animation w-full py-3 rounded-lg bg-white/10 text-white font-light backdrop-blur-md flex items-center justify-center"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 mr-2" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send Class Notification
                  </motion.button>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/10">
                  <Link to="/chat">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="button-animation w-full py-3 rounded-lg bg-white/10 text-white font-light backdrop-blur-md flex items-center justify-center"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 mr-2" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Student Support Chat
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

interface PerformanceItemProps {
  title: string;
  value: string;
}

const PerformanceItem = ({ title, value }: PerformanceItemProps) => {
  return (
    <div className="bg-white/5 rounded-lg p-4">
      <div className="flex justify-between items-center">
        <h3 className="text-white/80">{title}</h3>
        <div className="text-xl font-medium text-white">{value}</div>
      </div>
    </div>
  );
};

export default ClassSelection;
