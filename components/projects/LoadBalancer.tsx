import React, { useState } from 'react';
import { Network, AlertTriangle, CheckCircle } from 'lucide-react';

interface District {
  id: string;
  name: string;
  load: number; // Percentage
}

const LoadBalancer: React.FC = () => {
  const [districts, setDistricts] = useState<District[]>([
    { id: 'kch', name: 'Kuching', load: 85 },
    { id: 'sbu', name: 'Sibu', load: 45 },
    { id: 'mri', name: 'Miri', load: 60 },
  ]);

  const updateLoad = (id: string, newLoad: number) => {
    setDistricts(prev => prev.map(d => d.id === id ? { ...d, load: newLoad } : d));
  };

  const getStatusColor = (load: number) => {
    if (load > 90) return 'bg-red-500';
    if (load > 75) return 'bg-yellow-500';
    return 'bg-emerald-500';
  };

  return (
    <div className="h-full flex flex-col">
       <div className="mb-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Network size={18} className="text-indigo-500" />
            Grid Load Balancer
          </h3>
          <p className="text-xs text-slate-500">Interactive grid stress test</p>
        </div>

        <div className="space-y-4 flex-grow">
          {districts.map(district => (
            <div key={district.id} className="space-y-1">
              <div className="flex justify-between text-xs font-medium text-slate-600">
                <span>{district.name}</span>
                <span className={district.load > 90 ? 'text-red-500 font-bold' : ''}>
                  {district.load}%
                </span>
              </div>
              <div className="flex items-center gap-2">
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={district.load}
                  onChange={(e) => updateLoad(district.id, parseInt(e.target.value))}
                  className="flex-grow h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
                <div className={`w-3 h-3 rounded-full ${getStatusColor(district.load)} transition-colors`} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-100">
          <div className="flex items-center gap-2">
            {districts.some(d => d.load > 90) ? (
              <>
                <AlertTriangle size={20} className="text-red-500" />
                <span className="text-xs font-semibold text-red-600">Grid Unstable: Load Shedding Req.</span>
              </>
            ) : (
              <>
                <CheckCircle size={20} className="text-emerald-500" />
                <span className="text-xs font-semibold text-emerald-600">Grid Stable: Optimal Distribution</span>
              </>
            )}
          </div>
        </div>
    </div>
  );
};

export default LoadBalancer;