import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { RefreshCw, Activity } from 'lucide-react';
import { HydroData } from '../../types';

const HydroMonitor: React.FC = () => {
  const [data, setData] = useState<HydroData[]>([
    { name: 'Bakun', level: 220, capacity: 228 },
    { name: 'Murum', level: 535, capacity: 540 },
    { name: 'Batang Ai', level: 108, capacity: 112 },
  ]);

  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  const refreshData = () => {
    // Simulate real-time data fluctuation
    const newData = data.map(dam => ({
      ...dam,
      level: Math.max(dam.capacity * 0.5, Math.min(dam.capacity, dam.level + (Math.random() * 4 - 2)))
    }));
    setData(newData);
    setLastUpdated(new Date());
  };

  useEffect(() => {
    const interval = setInterval(refreshData, 3000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Activity size={18} className="text-blue-500" />
            Hydro Level Monitor
          </h3>
          <p className="text-xs text-slate-500">Real-time water levels (m ASL)</p>
        </div>
        <button 
          onClick={refreshData}
          className="p-2 hover:bg-slate-50 rounded-full transition-colors"
          title="Refresh Data"
        >
          <RefreshCw size={16} className="text-slate-400" />
        </button>
      </div>

      <div className="flex-grow w-full h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" tick={{fontSize: 12}} axisLine={false} tickLine={false} />
            <YAxis domain={['auto', 'auto']} hide />
            <Tooltip 
              cursor={{fill: 'transparent'}}
              contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
            />
            <Bar dataKey="level" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.level > entry.capacity * 0.95 ? '#ef4444' : '#3b82f6'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {data.map((dam) => (
          <div key={dam.name} className="text-center bg-slate-50 rounded-lg p-2">
            <div className="text-xs text-slate-500 font-medium">{dam.name}</div>
            <div className="text-sm font-bold text-slate-700">{dam.level.toFixed(1)}m</div>
            <div className="text-[10px] text-slate-400">Max: {dam.capacity}</div>
          </div>
        ))}
      </div>
      <div className="mt-2 text-[10px] text-right text-slate-300">
        Updated: {lastUpdated.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default HydroMonitor;