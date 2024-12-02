import React from 'react';
import { Zap } from 'lucide-react';

export const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary-600 text-white">
        <Zap className="h-5 w-5" />
      </div>
      <span className="ml-2 text-2xl font-bold">
        Digi<span className="text-primary-600">smart</span>
      </span>
    </div>
  );
};