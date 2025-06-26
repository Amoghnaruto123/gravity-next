import { ArrowRight } from 'lucide-react';

interface ScrollCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  category?: string;
  readTime?: string;
  date?: string;
}

export const ScrollCard = ({ title, description, image, link, category, readTime, date }: ScrollCardProps) => {
  return (
    <div className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100">
      {/* Image Section - 75% */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Section - 25% */}
      <div className="p-6 space-y-4">
        {/* Category and Read Time */}
        {(category || readTime) && (
          <div className="flex justify-between items-center">
            {category && <span className="text-xs font-medium text-blue-600">{category}</span>}
            {readTime && <span className="text-xs text-gray-500">{readTime}</span>}
          </div>
        )}

        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
          {description}
        </p>
        
        {/* Date and Learn More Link */}
        <div className="flex items-center justify-between">
          {date && <span className="text-xs text-gray-500">{date}</span>}
          <a
            href={link}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200 group/link"
          >
            Learn More
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
}; 