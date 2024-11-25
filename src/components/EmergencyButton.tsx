import React from 'react';
import { AlertOctagon } from 'lucide-react';

type EmergencyButtonProps = {
  onActivate: () => void;
  isSilentMode: boolean;
};

export default function EmergencyButton({ onActivate, isSilentMode }: EmergencyButtonProps) {
  return (
    <button
      onClick={onActivate}
      className={`
        w-32 h-32 rounded-full flex items-center justify-center
        ${
          isSilentMode
            ? 'bg-gray-700 hover:bg-gray-800'
            : 'bg-red-600 hover:bg-red-700 animate-pulse'
        }
        transition-colors duration-200 shadow-lg
        transform hover:scale-105 active:scale-95
      `}
      aria-label="Emergency alert button"
    >
      <AlertOctagon className={`w-16 h-16 ${isSilentMode ? 'text-gray-300' : 'text-white'}`} />
    </button>
  );
}