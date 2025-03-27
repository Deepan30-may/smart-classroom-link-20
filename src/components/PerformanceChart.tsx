
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
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="glass rounded-xl p-6 h-80 relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{ 
          background: "linear-gradient(45deg, #3b82f6, #8b5cf6)" 
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />
    
      <h3 className="text-xl font-medium mb-4 text-white relative z-10 gradient-text">{subject} Performance</h3>
      
      <ResponsiveContainer width="100%" height="80%" className="relative z-10">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="name" stroke="rgba(255,255,255,0.7)" />
          <YAxis stroke="rgba(255,255,255,0.7)" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(255,255,255,0.1)', 
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '8px',
              color: 'white'
            }} 
          />
          <Line 
            type="monotone" 
            dataKey="score" 
            stroke="url(#colorScore)" 
            strokeWidth={3}
            dot={{ 
              fill: '#8b5cf6', 
              strokeWidth: 2,
              r: 6,
              strokeDasharray: '' 
            }}
            activeDot={{ 
              r: 8, 
              stroke: 'white',
              strokeWidth: 2,
              fill: '#3b82f6'
            }} 
          />
          <defs>
            <linearGradient id="colorScore" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </LineChart>
      </ResponsiveContainer>
      
      {/* Animated particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/60 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 30 - 15],
            x: [0, Math.random() * 30 - 15],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </motion.div>
  );
};

export default PerformanceChart;
