
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Navbar from "../components/Navbar";

const SubjectDetails = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const [subject] = useState({
    id: subjectId,
    name: "Mathematics",
    teacher: "Mr. Johnson",
    grade: "B+",
    tests: [
      { id: "1", name: "Mid-Term Test", score: 85, totalScore: 100, date: "2023-09-15" },
      { id: "2", name: "Quiz 1", score: 18, totalScore: 20, date: "2023-08-28" },
      { id: "3", name: "Assignment 2", score: 45, totalScore: 50, date: "2023-08-05" },
    ],
    topics: [
      { id: "1", name: "Algebra", mastery: 85 },
      { id: "2", name: "Geometry", mastery: 70 },
      { id: "3", name: "Calculus", mastery: 60 },
      { id: "4", name: "Trigonometry", mastery: 75 },
      { id: "5", name: "Statistics", mastery: 90 },
    ],
  });
  
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
            className="mb-12 flex justify-between items-center"
          >
            <div>
              <Link to="/student/subjects" className="text-white/80 flex items-center mb-2 hover:text-white">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Subjects
              </Link>
              <h1 className="text-4xl font-light text-white mb-2">
                {subject.name}
              </h1>
              <p className="text-lg text-white/80">
                Teacher: {subject.teacher} • Current Grade: {subject.grade}
              </p>
            </div>
            
            <Link to="/student/performance">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="button-animation px-6 py-3 rounded-lg bg-white/10 text-white font-light tracking-wide backdrop-blur-md"
              >
                View Performance
              </motion.button>
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="glass rounded-xl p-6 mb-8">
                <h2 className="text-2xl font-light text-white mb-6">Recent Assessments</h2>
                
                <div className="space-y-4">
                  {subject.tests.map((test, index) => (
                    <motion.div 
                      key={test.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                      className="bg-white/5 rounded-lg p-4"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-white font-medium">{test.name}</h3>
                        <div className="text-sm text-white/60">
                          {formatDate(test.date)}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <p className="text-white/80 text-sm">Score: {test.score}/{test.totalScore}</p>
                        <div className="flex items-center">
                          <div className="w-32 bg-white/20 rounded-full h-2 mr-3">
                            <div 
                              className="bg-blue-500 h-2 rounded-full"
                              style={{ width: `${(test.score / test.totalScore) * 100}%` }}
                            ></div>
                          </div>
                          <div className="text-white font-medium">
                            {Math.round((test.score / test.totalScore) * 100)}%
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="glass rounded-xl p-6"
              >
                <h2 className="text-2xl font-light text-white mb-6">Topic Mastery</h2>
                
                <div className="space-y-6">
                  {subject.topics.map((topic, index) => (
                    <motion.div 
                      key={topic.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-white">{topic.name}</h3>
                        <div className="text-white/80">{topic.mastery}%</div>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <motion.div 
                          className="bg-blue-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${topic.mastery}%` }}
                          transition={{ delay: index * 0.1 + 0.6, duration: 0.8 }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="glass rounded-xl p-6 mb-8">
                <h2 className="text-2xl font-light text-white mb-6">Improvement Areas</h2>
                
                <div className="space-y-4">
                  <ImprovementArea 
                    title="Calculus Concepts" 
                    description="Focus on differentiation rules and applications"
                    resources={3}
                  />
                  <ImprovementArea 
                    title="Geometry Proofs" 
                    description="Work on triangle congruence and similarity proofs"
                    resources={5}
                  />
                  <ImprovementArea 
                    title="Word Problems" 
                    description="Practice translating word problems into equations"
                    resources={4}
                  />
                </div>
              </div>
              
              <div className="glass rounded-xl p-6">
                <h2 className="text-2xl font-light text-white mb-6">Get Help</h2>
                
                <div className="space-y-4">
                  <Link to="/chat">
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Chat with Teacher
                    </motion.button>
                  </Link>
                  
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Access Study Resources
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

interface ImprovementAreaProps {
  title: string;
  description: string;
  resources: number;
}

const ImprovementArea = ({ title, description, resources }: ImprovementAreaProps) => {
  return (
    <motion.div 
      whileHover={{ y: -2 }}
      className="bg-white/5 rounded-lg p-4"
    >
      <h3 className="text-white font-medium mb-2">{title}</h3>
      <p className="text-white/80 text-sm mb-3">{description}</p>
      <div className="text-xs text-white/60 flex items-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4 mr-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
        {resources} learning resources available
      </div>
    </motion.div>
  );
};

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export default SubjectDetails;
