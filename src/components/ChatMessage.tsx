
import { motion } from "framer-motion";

interface ChatMessageProps {
  message: string;
  sender: "user" | "teacher";
  timestamp: string;
  index: number;
}

const ChatMessage = ({ message, sender, timestamp, index }: ChatMessageProps) => {
  const isUser = sender === "user";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.1,
        duration: 0.3, 
        ease: [0.22, 1, 0.36, 1]
      }}
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}
    >
      <div className={`max-w-md ${isUser ? "bg-blue-500" : "glass"} rounded-2xl p-4`}>
        <p className="text-white">{message}</p>
        <p className="text-xs text-white/60 mt-1 text-right">{timestamp}</p>
      </div>
    </motion.div>
  );
};

export default ChatMessage;
