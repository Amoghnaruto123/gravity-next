import { useEffect, useRef } from 'react';

interface Company {
  name: string;
  logo: string;
}

interface CompaniesSectionProps {
  companies: Company[];
}

// Add global style to hide scrollbars
const scrollbarHideStyles = `
  .logo-scroll-container::-webkit-scrollbar {
    display: none;
  }
  .logo-scroll-container {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const CompaniesSection = ({ companies }: CompaniesSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  console.log(companies);

  // Optional: implement manual scroll animation for smoother scrolling
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 1.5; // Increased from 0.5 to 1.2 for faster scrolling
    const totalWidth = scrollContainer.scrollWidth;
    const containerWidth = scrollContainer.clientWidth;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      // Reset position when we've scrolled half the content (since we duplicated the logos)
      if (scrollPosition >= totalWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(scroll);
    };

    // Start the animation
    animationFrameId = requestAnimationFrame(scroll);

    // Pause animation on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationFrameId);
    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [companies.length]);

  return (
    <section className="py-4 sm:py-6 bg-white border-y border-gray-200">
      {/* Add the styles to the document */}
      <style dangerouslySetInnerHTML={{ __html: scrollbarHideStyles }} />
      
      <div className="w-full">
        <div className="text-center mb-2">
          <h2 className="font-semibold text-gray-400 text-lg sm:text-xl animate-fade-in">
           
          </h2>
        </div>

        {/* Container with the gradient mask effect */}
        <div className="relative w-full">
          {/* Left fade mask */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" 
            style={{
              background: 'linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))'
            }}>
          </div>

          {/* Right fade mask */}
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" 
            style={{
              background: 'linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0))'
            }}>
          </div>

          {/* Scrolling container */}
          <div 
            ref={scrollRef}
            className="overflow-x-auto py-4 relative logo-scroll-container w-full"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <div className="flex gap-4 sm:gap-6 whitespace-nowrap pl-24 pr-20">
              {/* Duplicate logos for continuous scrolling effect */}
              {[...companies, ...companies, ...companies, ...companies].map((company, index) => (
                <div 
                  key={index} 
                  className="inline-flex flex-shrink-0 w-[160px] h-[60px] items-center justify-center"
                >
                  <div className="w-full h-full flex items-center justify-center hover:scale-105 transition-transform duration-300">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-h-[100px] w-auto object-contain"
                      style={{
                        objectFit: 'contain',
                        minWidth: '120px',
                        maxWidth: '140px'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
