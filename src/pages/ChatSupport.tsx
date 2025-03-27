
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Navbar from "../components/Navbar";
import ChatMessage from "../components/ChatMessage";

const ChatSupport = () => {
  const [messages, setMessages] = useState([
    {
      id: "1",
      message: "Hello! How can I help you with your studies today?",
      sender: "teacher",
      timestamp: "10:30 AM"
    }
  ]);
  
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newMessage.trim() === "") return;
    
    // Add user message
    const userMessage = {
      id: `user-${Date.now()}`,
      message: newMessage,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, userMessage]);
    setNewMessage("");
    
    // Simulate teacher response after a short delay
    setTimeout(() => {
      const responses = [
        "That's a great question! In calculus, the derivative measures the rate of change of a function with respect to one of its variables.",
        "I'd be happy to help with that problem. Can you share more details or perhaps an image of the question?",
        "You're making excellent progress! Let's break this down into smaller steps to make it easier to understand.",
        "This concept can be challenging at first. Let's approach it from a different angle to see if it makes more sense.",
        "Good observation! That's exactly the kind of critical thinking that will help you succeed in this subject."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const teacherResponse = {
        id: `teacher-${Date.now()}`,
        message: randomResponse,
        sender: "teacher",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, teacherResponse]);
    }, 1000);
  };
  
  return (
    <PageTransition>
      <div 
        className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 p-6"
        style={{
          backgroundImage: "radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.2) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.2) 0%, transparent 40%)"
        }}
      >
        <Navbar role="student" />
        
        <div className="pt-24 pb-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h1 className="text-4xl font-light text-white mb-2">
              Chat Support
            </h1>
            <p className="text-lg text-white/80">
              Get help with your studies from your teachers
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="glass rounded-xl p-6 mb-8 h-[calc(100vh-300px)] flex flex-col"
          >
            <div className="flex-grow overflow-y-auto p-4">
              {messages.map((msg, index) => (
                <ChatMessage 
                  key={msg.id}
                  message={msg.message}
                  sender={msg.sender as "user" | "teacher"}
                  timestamp={msg.timestamp}
                  index={index}
                />
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            <form onSubmit={handleSendMessage} className="mt-4 flex">
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow bg-white/10 border border-white/20 rounded-l-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="button-animation bg-blue-500 text-white px-6 py-3 rounded-r-lg flex items-center justify-center"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </motion.button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <QuickButton 
              text="I need help with my math homework" 
              onClick={() => {
                setNewMessage("I need help with my math homework. Specifically with calculus problems.");
              }}
            />
            <QuickButton 
              text="When is the next test scheduled?" 
              onClick={() => {
                setNewMessage("When is the next test scheduled?");
              }}
            />
            <QuickButton 
              text="Can you explain this concept again?" 
              onClick={() => {
                setNewMessage("Can you explain the concept of derivatives again? I'm still confused.");
              }}
            />
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

interface QuickButtonProps {
  text: string;
  onClick: () => void;
}

const QuickButton = ({ text, onClick }: QuickButtonProps) => {
  return (
    <motion.button
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="glass rounded-xl p-4 text-white text-left hover:bg-white/5 transition-colors"
    >
      {text}
    </motion.button>
  );
};

export default ChatSupport;
