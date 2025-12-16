import React, { useState } from 'react';
import { Calculator, DollarSign } from 'lucide-react';

const TariffCalculator: React.FC = () => {
  const [usage, setUsage] = useState<string>('');
  const [cost, setCost] = useState<number>(0);

  const calculateCost = (kwh: number) => {
    // Simplified Progressive Tier Structure similar to Malaysia/Sarawak
    // 1-500 kWh (Domestic) - approx rates logic
    let total = 0;
    let remaining = kwh;

    // Tier 1: First 100 kWh
    const tier1 = Math.min(remaining, 100);
    total += tier1 * 0.18; // approx RM
    remaining -= tier1;

    if (remaining > 0) {
      // Tier 2: Next 900 kWh (Simplified)
      total += remaining * 0.28; 
    }
    
    return total;
  };

  const handleCalculate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setUsage(val);
    const num = parseFloat(val);
    if (!isNaN(num)) {
      setCost(calculateCost(num));
    } else {
      setCost(0);
    }
  };

  return (
    <div className="h-full flex flex-col">
       <div className="mb-4">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Calculator size={18} className="text-emerald-500" />
            Bill Estimator
          </h3>
          <p className="text-xs text-slate-500">Calculate monthly electricity cost</p>
        </div>

        <div className="space-y-4 flex-grow">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Monthly Usage (kWh)</label>
            <input
              type="number"
              value={usage}
              onChange={handleCalculate}
              placeholder="e.g. 350"
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            />
          </div>

          <div className="bg-emerald-50 p-4 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-2 text-emerald-800">
              <DollarSign size={20} />
              <span className="font-medium">Estimated Bill</span>
            </div>
            <span className="text-2xl font-bold text-emerald-600">
              RM {cost.toFixed(2)}
            </span>
          </div>

          <div className="text-xs text-slate-400 leading-relaxed">
            *Based on simplified domestic tariff tiers. <br/>
            Tier 1: 1-100 kWh @ RM0.18 <br/>
            Tier 2: >100 kWh @ RM0.28
          </div>
        </div>
    </div>
  );
};

export default TariffCalculator;