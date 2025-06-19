import React from 'react';
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface SolutionCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
}

const SolutionCard = ({ title, description, image, className }: SolutionCardProps) => {
  return (
    <div className={`relative h-full overflow-hidden group ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-10"></div>
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110 z-0"
      />
      <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-100 opacity-90">{description}</p>
      </div>
    </div>
  );
};

const SolutionsBentoSection = () => {
  const solutions = [
    {
      title: "GRID TIED SOLAR PV SYSTEM",
      description: "A grid-tied solar system is a solar power system connected to the utility power grid. This system allows homes or business to use solar engery during the day while remaining connected to the grid to draw power when needed (like during the night or cloudy days).",
      image: "/lovable-uploads/1f35ba17-d33b-47a2-a39e-36480b5cc083.jpg"
    },
    {
      title: "HYBRID SOLAR PV SYSTEM",
      description: "A hybrid solar system combines the best features of both on-grid and off-grid systems by integrating solar panesl, batteries, and a grid connection. This system allows users to store excess energy in batteries for later use, while also being connected to the grid for backup power or to sell excess energy.",
      image: "/lovable-uploads/056a4a3e-c1c1-4d3c-b6c7-9c3eb5066c7e.png"
    },
    {
      title: "OFF GRID SOLAR PV SYSTEM",
      description: "An off-grid solar system, also known as a stand-alone solar system, operates independently from the utility grid and is designed to provide all the necessary power for a home, business, or facility without relying on the grid for backup.",
      image: "/lovable-uploads/8c79cb12-2bc2-4bcd-95a4-8e82d3f4035f.png"
    }
  ];

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-base font-semibold leading-7 text-gray-600">EXPERTISE IN</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          Solar Energy Solutions
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-gray-600">
          We are dedicated to provide innovative and efficient solar solutions that cater to the diverse needs of our clients.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Main featured solution - spans full width on mobile, half on tablet */}
          <div className="md:col-span-2 lg:col-span-1 rounded-xl overflow-hidden h-[400px] md:h-[500px] lg:h-[600px]">
            <SolutionCard 
              title={solutions[0].title}
              description={solutions[0].description}
              image={solutions[0].image}
            />
          </div>

          {/* Right column stack - two cards stacked vertically */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
            <div className="rounded-xl overflow-hidden h-[300px] md:h-[240px] lg:h-[290px]">
              <SolutionCard 
                title={solutions[1].title}
                description={solutions[1].description}
                image={solutions[1].image}
              />
            </div>
            <div className="rounded-xl overflow-hidden h-[300px] md:h-[240px] lg:h-[290px]">
              <SolutionCard 
                title={solutions[2].title}
                description={solutions[2].description}
                image={solutions[2].image}
              />
            </div>
            <div className="md:col-span-2 rounded-xl overflow-hidden bg-gradient-to-r from-gray-100 to-gray-200 p-8 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solar Solution?</h3>
                <button className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
                  Contact Our Experts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsBentoSection; 