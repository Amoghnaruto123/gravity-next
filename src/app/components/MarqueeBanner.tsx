'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const MarqueeBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Update CSS variable when banner visibility changes
    document.documentElement.style.setProperty('--banner-visible', isVisible ? '1' : '0');
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
      <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-600 via-blue-500 to-red-500 overflow-hidden py-2 md:py-3 z-50"
         style={{
           transform: 'translateZ(0)',
           backfaceVisibility: 'hidden',
           WebkitBackfaceVisibility: 'hidden',
           transition: 'transform 0.3s ease'
         }}>
      {/* Close button */}
      <button 
        onClick={() => setIsVisible(false)} 
        className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-white/90 transition-colors z-10"
        aria-label="Close banner"
      >
        <X className="h-5 w-5 md:h-6 md:w-6 stroke-[3]" />
      </button>

      {/* Desktop view */}
      <div className="hidden md:block relative">
        <div className="w-[200%] flex">
          <div className="flex animate-marquee-x w-full">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 px-4 shrink-0">
                <span className="text-white whitespace-nowrap text-base font-semibold">
                  <strong>UTKARSH</strong> CUSTOMER MEET ON 20TH JUNE 2025 — JOIN US FOR A POWERFUL EXPERIENCE!!
                </span>
                <span className="text-white whitespace-nowrap text-base font-semibold">
                  <strong>UTKARSH</strong> CUSTOMER MEET ON 20TH JUNE 2025 — BE PART OF SOMETHING BIG!
                </span>
                <span className="text-white whitespace-nowrap text-base font-semibold">
                  <strong>UTKARSH</strong> INNOVATION, NETWORKING & GROWTH — YOUR PRESENCE MATTERS!
                </span>
              </div>
            ))}
          </div>
          <div className="flex animate-marquee-x w-full" style={{ animationDelay: '-7.5s' }}>
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 px-4 shrink-0">
                <span className="text-white whitespace-nowrap text-base font-semibold">
                  <strong>UTKARSH</strong> CUSTOMER MEET ON 20TH JUNE 2025 — JOIN US FOR A POWERFUL EXPERIENCE!!
                </span>
                <span className="text-white whitespace-nowrap text-base font-semibold">
                  <strong>UTKARSH</strong> CUSTOMER MEET ON 20TH JUNE 2025 — BE PART OF SOMETHING BIG!
                </span>
                <span className="text-white whitespace-nowrap text-base font-semibold">
                  <strong>UTKARSH</strong> INNOVATION, NETWORKING & GROWTH — YOUR PRESENCE MATTERS!
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="md:hidden relative">
        <div className="w-[200%] flex">
          <div className="flex animate-marquee-x-mobile w-full">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 px-4 shrink-0">
                <span className="text-white whitespace-nowrap text-sm font-medium">
                  <strong>UTKARSH</strong> — CUSTOMER MEET ON 20TH JUNE 2025
                </span>
                <span className="text-white whitespace-nowrap text-sm font-medium">
                  <strong>BE PART</strong> OF SOMETHING BIG!
                </span>
                <span className="text-white whitespace-nowrap text-sm font-medium">
                  <strong>GROWTH</strong>, INNOVATION, NETWORKING AWAIT YOU!
                </span>
              </div>
            ))}
          </div>
          <div className="flex animate-marquee-x-mobile w-full" style={{ animationDelay: '-5s' }}>
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 px-4 shrink-0">
                <span className="text-white whitespace-nowrap text-sm font-medium">
                  <strong>UTKARSH</strong> — CUSTOMER MEET ON 20TH JUNE 2025
                </span>
                <span className="text-white whitespace-nowrap text-sm font-medium">
                  <strong>BE PART</strong> OF SOMETHING BIG!
                </span>
                <span className="text-white whitespace-nowrap text-sm font-medium">
                  <strong>GROWTH</strong>, INNOVATION, NETWORKING AWAIT YOU!
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeBanner; 