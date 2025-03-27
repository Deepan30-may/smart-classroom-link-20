
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

interface PerformanceChartProps {
  data: {
    name: string;
    score: number;
  }[];
  subject: string;
}

const PerformanceChart = ({ data, subject }: PerformanceChartProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-xl overflow-hidden"
    >
      <div className="bg-gradient-to-br from-indigo-600/20 to-purple-700/20 backdrop-blur-xl p-6 h-80 rounded-xl border border-white/20 relative">
        {/* Background glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/30 via-purple-500/30 to-pink-500/30 opacity-40 blur-3xl" />
        
        {/* Chart header with gradient text */}
        <motion.h3 
          className="text-2xl font-semibold mb-5 relative z-10"
          style={{
            background: "linear-gradient(to right, #f59e0b, #ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
          animate={{ 
            textShadow: ["0 0 10px rgba(236, 72, 153, 0.3)", "0 0 20px rgba(236, 72, 153, 0.6)", "0 0 10px rgba(236, 72, 153, 0.3)"]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            repeatType: 'mirror' 
          }}
        >
          {subject} Performance
        </motion.h3>
        
        {/* Recharts component with enhanced styling */}
        <div className="relative z-10 h-[80%]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 10,
                bottom: 10,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis 
                dataKey="name" 
                stroke="rgba(255,255,255,0.7)" 
                tick={{ fill: "rgba(255,255,255,0.9)" }}
                axisLine={{ stroke: "rgba(255,255,255,0.2)" }}
                tickLine={{ stroke: "rgba(255,255,255,0.2)" }}
              />
              <YAxis 
                stroke="rgba(255,255,255,0.7)" 
                tick={{ fill: "rgba(255,255,255,0.9)" }}
                axisLine={{ stroke: "rgba(255,255,255,0.2)" }}
                tickLine={{ stroke: "rgba(255,255,255,0.2)" }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(30, 41, 59, 0.8)', 
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '8px',
                  color: 'white',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
                  padding: '10px',
                }} 
                itemStyle={{ color: "#f59e0b" }}
                labelStyle={{ color: "white", fontWeight: "bold", marginBottom: "5px" }}
              />
              <Line 
                type="monotone" 
                dataKey="score" 
                stroke="url(#colorScore)" 
                strokeWidth={4}
                dot={{ 
                  fill: '#c084fc', 
                  strokeWidth: 2,
                  r: 6,
                  stroke: 'white'
                }}
                activeDot={{ 
                  r: 8, 
                  stroke: 'white',
                  strokeWidth: 2,
                  fill: '#f59e0b'
                }} 
              />
              <defs>
                <linearGradient id="colorScore" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="50%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        {/* Animated particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-amber-300/60 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 40 - 20],
              x: [0, Math.random() * 40 - 20],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default PerformanceChart;
