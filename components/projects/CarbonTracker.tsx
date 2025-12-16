import React from 'react';
import { Leaf, Wind, Droplets } from 'lucide-react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const CarbonTracker: React.FC = () => {
  // Static data comparing sources (g CO2eq/kWh)
  const emissionsData = [
    { name: 'Coal', amount: 820 },
    { name: 'Gas', amount: 490 },
    { name: 'Hydro', amount: 24 }, // SEB Focus
  ];

  return (
    <div className="h-full flex flex-col">
       <div className="mb-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Leaf size={18} className="text-green-600" />
            Carbon Footprint
          </h3>
          <p className="text-xs text-slate-500">Emission comparison (g CO2/kWh)</p>
        </div>

        <div className="flex-grow">
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={emissionsData} layout="vertical" margin={{left: 0, right: 30}}>
              <XAxis type="number" hide />
              <Tooltip cursor={{fill: 'transparent'}} />
              <Bar dataKey="amount" barSize={20} radius={[0, 4, 4, 0]}>
                {
                   emissionsData.map((entry, index) => (
                     <Cell key={`cell-${index}`} fill={entry.name === 'Hydro' ? '#22c55e' : '#94a3b8'} />
                   ))
                }
              </Bar>
            </BarChart>
          </ResponsiveContainer>
           {/* Custom Labels overlaying chart visually for minimalist look */}
           <div className="relative -top-40 pl-2 space-y-9 pointer-events-none">
             {emissionsData.map((d) => (
               <div key={d.name} className="flex justify-between pr-8">
                 <span className="text-xs font-medium text-slate-600">{d.name}</span>
                 <span className="text-xs font-bold text-slate-800">{d.amount}g</span>
               </div>
             ))}
           </div>
        </div>

        <div className="bg-green-50 rounded-lg p-3 flex items-start gap-3 mt-auto">
          <Droplets className="text-green-600 mt-1 flex-shrink-0" size={16} />
          <div className="text-xs text-green-800">
            <strong>Impact:</strong> Switching to Hydro reduces emissions by ~97% compared to Coal.
          </div>
        </div>
    </div>
  );
};

export default CarbonTracker;