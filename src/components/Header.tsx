import React from 'react';
import { AlertCircle, Moon, Sun } from 'lucide-react';

type HeaderProps = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

export default function Header({ isDarkMode, toggleDarkMode }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <AlertCircle className="w-8 h-8 text-red-500" />
          <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
            ResQ
          </span>
        </div>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? (
            <Sun className="w-6 h-6 text-yellow-400" />
          ) : (
            <Moon className="w-6 h-6 text-gray-600" />
          )}
        </button>
      </div>
    </header>
  );
}