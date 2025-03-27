
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import Navbar from "../components/Navbar";

const StudentDashboard = () => {
  const [recentSubjects] = useState([
    { id: "1", name: "Mathematics", progress: 68, color: "bg-blue-500" },
    { id: "2", name: "Physics", progress: 75, color: "bg-purple-500" },
    { id: "3", name: "Chemistry", progress: 42, color: "bg-green-500" },
  ]);

  const [upcomingAssignments] = useState([
    { id: "1", subject: "Mathematics", title: "Calculus Assignment 3", dueDate: "2023-10-15" },
    { id: "2", subject: "Physics", title: "Mechanics Test", dueDate: "2023-10-18" },
    { id: "3", subject: "Chemistry", title: "Periodic Table Quiz", dueDate: "2023-10-20" },
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
              Welcome back, <span className="font-medium">Alex</span>
            </h1>
            <p className="text-lg text-white/80">
              Here's your learning progress
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="glass rounded-xl p-6 mb-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-light text-white">Recent Subjects</h2>
                  <Link to="/student/subjects">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="button-animation px-4 py-2 rounded-lg bg-white/10 text-white font-light tracking-wide backdrop-blur-md"
                    >
                      View All
                    </motion.button>
                  </Link>
                </div>
                
                <div className="space-y-6">
                  {recentSubjects.map((subject) => (
                    <Link key={subject.id} to={`/student/subjects/${subject.id}`}>
                      <motion.div 
                        whileHover={{ y: -2 }}
                        className="bg-white/5 rounded-lg p-4 flex items-center"
                      >
                        <div className={`w-10 h-10 rounded-full ${subject.color} flex items-center justify-center mr-4`}>
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5 text-white" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        
                        <div className="flex-grow">
                          <h3 className="text-white font-medium mb-1">{subject.name}</h3>
                          <div className="w-full bg-white/20 rounded-full h-2">
                            <div 
                              className={`${subject.color} h-2 rounded-full`} 
                              style={{ width: `${subject.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="text-white/80 ml-4">{subject.progress}%</div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="glass rounded-xl p-6"
              >
                <h2 className="text-2xl font-light text-white mb-6">Performance Overview</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <PerformanceMetric 
                    title="Overall Grade" 
                    value="B+" 
                    change="+3.5%" 
                    positive={true}
                  />
                  <PerformanceMetric 
                    title="Attendance" 
                    value="96%" 
                    change="+1.2%" 
                    positive={true}
                  />
                  <PerformanceMetric 
                    title="Assignment Completion" 
                    value="85%" 
                    change="-2.0%" 
                    positive={false}
                  />
                </div>
                
                <div className="mt-6 flex justify-center">
                  <Link to="/student/performance">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="button-animation px-6 py-2 rounded-lg bg-white/10 text-white font-light tracking-wide backdrop-blur-md"
                    >
                      Detailed Performance
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="glass rounded-xl p-6 h-full">
                <h2 className="text-2xl font-light text-white mb-6">Upcoming Assignments</h2>
                
                <div className="space-y-4">
                  {upcomingAssignments.map((assignment) => (
                    <motion.div 
                      key={assignment.id}
                      whileHover={{ y: -2 }}
                      className="bg-white/5 rounded-lg p-4"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-white font-medium">{assignment.title}</h3>
                        <div className="text-sm text-white/60">
                          {formatDate(assignment.dueDate)}
                        </div>
                      </div>
                      <p className="text-white/80 text-sm">{assignment.subject}</p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/10">
                  <h3 className="text-xl font-light text-white mb-4">Need Help?</h3>
                  <Link to="/chat">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="button-animation w-full py-3 rounded-lg bg-white/10 text-white font-light tracking-wide backdrop-blur-md flex items-center justify-center"
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
                      Chat with Teacher
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

interface PerformanceMetricProps {
  title: string;
  value: string;
  change: string;
  positive: boolean;
}

const PerformanceMetric = ({ title, value, change, positive }: PerformanceMetricProps) => {
  return (
    <div className="bg-white/5 rounded-lg p-4 text-center">
      <h3 className="text-white/80 text-sm mb-1">{title}</h3>
      <div className="text-3xl font-medium text-white mb-2">{value}</div>
      <div className={`text-sm ${positive ? 'text-green-400' : 'text-red-400'} flex items-center justify-center`}>
        {positive ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        )}
        {change}
      </div>
    </div>
  );
};

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export default StudentDashboard;
