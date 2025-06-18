"use client";

import { Button } from "@/app/components/ui/button";
import { ArrowRight } from "lucide-react";
import VideoCarousel from "./VideoCarousel";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/app/hooks/use-mobile";

interface HeroSectionProps {
  openBookCallDialog: () => void;
}

const HeroSection = ({ openBookCallDialog }: HeroSectionProps) => {
  // Track the banner-height CSS variable for positioning
  const [bannerHeight, setBannerHeight] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const isMobile = useIsMobile();
  
  const words = ["SMART", "STABLE", "SCALABLE"];
  const typingSpeed = 200;
  const deletingSpeed = 100;
  const pauseBeforeDelete = 1500;
  const pauseBeforeNextWord = 400;
  
  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    
    return () => clearInterval(cursorInterval);
  }, []);

  // Completely rewritten typewriter effect
  useEffect(() => {
    let currentIndex = 0;
    let currentWord = words[0];
    let isDeleting = false;
    let text = "";
    let timeout: NodeJS.Timeout;

    const type = () => {
      // Current word being processed
      currentWord = words[currentIndex];
      
      // Set the text based on current state
      if (isDeleting) {
        text = currentWord.substring(0, text.length - 1);
      } else {
        text = currentWord.substring(0, text.length + 1);
      }
      
      // Update the state
      setDisplayText(text);
      
      // Typing speed
      let speed = isDeleting ? deletingSpeed : typingSpeed;
      
      // If complete word has been typed
      if (!isDeleting && text === currentWord) {
        // Pause at end of word before deleting
        speed = pauseBeforeDelete;
        isDeleting = true;
      } 
      // If deleting is complete
      else if (isDeleting && text === "") {
        isDeleting = false;
        // Move to next word
        currentIndex = (currentIndex + 1) % words.length;
        // Pause before typing next word
        speed = pauseBeforeNextWord;
      }
      
      // Schedule next tick
      timeout = setTimeout(type, speed);
    };
    
    // Start the effect
    timeout = setTimeout(type, 500);
    
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  // Monitor the --banner-height CSS variable for changes
  useEffect(() => {
    const updateBannerHeight = () => {
      const height = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--banner-height') || '0');
      setBannerHeight(height);
    };

    // Initial check
    if (typeof window !== 'undefined') {
      updateBannerHeight();

      // Set up a mutation observer to watch for style changes on document root
      let observer: MutationObserver | null = null;
      if ('MutationObserver' in window) {
        observer = new MutationObserver(updateBannerHeight);
        observer.observe(document.documentElement, { 
          attributes: true, 
          attributeFilter: ['style'] 
        });
      }

      return () => {
        if (observer) {
          observer.disconnect();
        }
      };
    }
  }, []);

  return (
    <section 
      className="relative overflow-hidden flex"
      style={{ 
        paddingTop: `calc(96px + ${bannerHeight}px)`, // 24px * 4 = 96px (pt-24) + banner height
        transition: 'padding-top 0.3s ease', // Smooth transition when banner height changes
      }}
    >
      {/* Full-width video background */}
      <div className="absolute inset-0 w-full h-full">
        <VideoCarousel />
        {/* left side blur effect */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="w-1/2 h-full bg-gradient-to-r from-black/60 via-black/40 to-transparent backdrop-blur-sm"></div>
        </div>
      </div>

      {/* Content overlay */}
      <div className="relative z-20 w-full">
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center h-[600px]">
          <div className={`max-w-2xl animate-fade-in ${isMobile ? 'ml-auto pr-4' : 'pl-20'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white flex flex-col">
              <div className="flex items-center">
                <span className="text-orange-500">{displayText}</span>
                <span className={`text-orange-500 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
              </div>
              <div>Infrastructure for modern industries</div>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              30+ Years of Expertise in Power Management, Infrastructure Development, and Auditing Services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-orange-500 hover:bg-orange-600 text-white border-none px-6 py-2 h-11 font-medium w-fit"
                onClick={openBookCallDialog}
              >
                Book a Callback
              </Button>
              <Button 
                className="bg-transparent border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-6 py-2 h-11 font-medium w-fit transition-colors"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 