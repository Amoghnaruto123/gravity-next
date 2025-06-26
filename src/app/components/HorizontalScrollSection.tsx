import { ScrollCard } from './ScrollCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

interface SectionItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface HorizontalScrollSectionProps {
  title: string;
  subtitle: string;
  items: SectionItem[];
}

export const HorizontalScrollSection = ({ title, subtitle, items }: HorizontalScrollSectionProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        {/* Title section - aligned left with logo */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Cards section - extended to right edge */}
      <div className="relative">
        {/* Navigation Arrows */}
        <div className="hidden md:flex absolute -top-16 right-12 gap-2 z-10">
          <button
            onClick={scrollLeft}
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200 hover:border-gray-300"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200 hover:border-gray-300"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Scrollable Container - starts aligned with logo but extends to right edge */}
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide -mr-4 md:-mr-8 lg:-mr-12 xl:-mr-16"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {items.map((item) => (
              <ScrollCard key={item.id} {...item} />
            ))}
            {/* Extra padding element to ensure last card can be fully scrolled */}
            <div className="flex-shrink-0 w-4 md:w-8 lg:w-12 xl:w-16"></div>
          </div>
        </div>
      </div>
    </section>
  );
}; 