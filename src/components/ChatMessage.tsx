
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
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        delay: index * 0.15,
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1]
      }}
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-5`}
    >
      <div 
        className={`max-w-md ${
          isUser 
            ? "bg-gradient-to-r from-amber-500 to-orange-500" 
            : "bg-gradient-to-r from-fuchsia-600 to-purple-600"
        } rounded-2xl p-5 shadow-lg relative overflow-hidden`}
      >
        {/* Animated shimmer effect */}
        <motion.div 
          className="absolute inset-0 opacity-40"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%)",
              "linear-gradient(45deg, rgba(255,255,255,0) 100%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 0%)"
            ],
            backgroundSize: ["200% 200%", "200% 200%"],
            backgroundPosition: ["0% 0%", "100% 100%"]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop"
          }}
        />
        
        <div className="relative z-10">
          <p className="text-white font-medium text-lg">{message}</p>
          <p className="text-xs text-white/80 mt-2 text-right italic">{timestamp}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatMessage;
