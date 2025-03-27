
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
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="glass rounded-xl p-6 h-80"
    >
      <h3 className="text-xl font-medium mb-4 text-white">{subject} Performance</h3>
      
      <ResponsiveContainer width="100%" height="80%">
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
          <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
          <YAxis stroke="rgba(255,255,255,0.5)" />
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
            stroke="#3b82f6" 
            activeDot={{ r: 8 }} 
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default PerformanceChart;
