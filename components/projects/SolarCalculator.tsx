import React, { useState, useMemo } from 'react';
import { Sun, Battery, Zap } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const SolarCalculator: React.FC = () => {
  const [households, setHouseholds] = useState(10);
  const [sunHours, setSunHours] = useState(4.5); // Average Sarawak peak sun hours

  const results = useMemo(() => {
    const avgConsumptionPerHouse = 5; // kWh per day (modest rural usage)
    const totalDailyLoad = households * avgConsumptionPerHouse;
    const systemSizeKw = totalDailyLoad / sunHours;
    const panelsNeeded = Math.ceil((systemSizeKw * 1000) / 400); // 400W panels
    const batteryCapacity = totalDailyLoad * 2; // 2 days autonomy

    return { totalDailyLoad, panelsNeeded, batteryCapacity };
  }, [households, sunHours]);

  const data = [
    { name: 'Consumption', value: results.totalDailyLoad },
    { name: 'Production', value: results.totalDailyLoad * 1.2 }, // buffer
  ];

  return (
    <div className="h-full flex flex-col">
       <div className="mb-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Sun size={18} className="text-orange-500" />
            Rural Electrification
          </h3>
          <p className="text-xs text-slate-500">Solar micro-grid sizing tool</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Longhouse Doors</label>
            <input 
              type="number" 
              min="1" max="100"
              value={households}
              onChange={(e) => setHouseholds(Number(e.target.value))}
              className="w-full p-2 border border-slate-200 rounded text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Peak Sun Hrs</label>
            <select 
              value={sunHours}
              onChange={(e) => setSunHours(Number(e.target.value))}
              className="w-full p-2 border border-slate-200 rounded text-sm bg-white"
            >
              <option value="4">4.0 (Rainy)</option>
              <option value="4.5">4.5 (Avg)</option>
              <option value="5.5">5.5 (Sunny)</option>
            </select>
          </div>
        </div>

        <div className="flex-grow grid grid-cols-2 gap-3">
            <div className="bg-orange-50 p-3 rounded-lg flex flex-col justify-center items-center">
              <Sun size={24} className="text-orange-500 mb-1" />
              <span className="text-lg font-bold text-slate-800">{results.panelsNeeded}</span>
              <span className="text-[10px] text-slate-500 text-center">Panels (400W)</span>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg flex flex-col justify-center items-center">
              <Battery size={24} className="text-blue-500 mb-1" />
              <span className="text-lg font-bold text-slate-800">{results.batteryCapacity.toFixed(0)}</span>
              <span className="text-[10px] text-slate-500 text-center">kWh Battery</span>
            </div>
        </div>

        <div className="mt-3 h-24">
             <ResponsiveContainer width="100%" height="100%">
               <PieChart>
                 <Pie 
                   data={data} 
                   innerRadius={25} 
                   outerRadius={40} 
                   paddingAngle={5} 
                   dataKey="value"
                 >
                   <Cell fill="#f97316" />
                   <Cell fill="#22c55e" />
                 </Pie>
                 <Tooltip />
               </PieChart>
             </ResponsiveContainer>
             <p className="text-[10px] text-center text-slate-400 mt-1">Load vs. Capacity</p>
        </div>
    </div>
  );
};

export default SolarCalculator;