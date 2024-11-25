import React from 'react';
import { Flame, Stethoscope, Shield, AlertTriangle } from 'lucide-react';

const emergencyTypes = [
  { id: 'medical', name: 'Medical', icon: Stethoscope },
  { id: 'fire', name: 'Fire', icon: Flame },
  { id: 'security', name: 'Security', icon: Shield },
  { id: 'other', name: 'Other', icon: AlertTriangle },
];

type EmergencyTypeSelectorProps = {
  selectedType: string;
  onSelect: (type: string) => void;
};

export default function EmergencyTypeSelector({
  selectedType,
  onSelect,
}: EmergencyTypeSelectorProps) {
  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-xs mx-auto">
      {emergencyTypes.map((type) => {
        const Icon = type.icon;
        return (
          <button
            key={type.id}
            onClick={() => onSelect(type.id)}
            className={`
              p-4 rounded-lg flex flex-col items-center justify-center gap-2
              ${
                selectedType === type.id
                  ? 'bg-red-100 dark:bg-red-900 border-2 border-red-500'
                  : 'bg-white dark:bg-gray-800 border-2 border-transparent'
              }
              hover:border-red-500 transition-all duration-200
            `}
          >
            <Icon className="w-8 h-8 text-red-500" />
            <span className="text-sm font-medium dark:text-white">{type.name}</span>
          </button>
        );
      })}
    </div>
  );
}