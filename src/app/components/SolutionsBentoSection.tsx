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
    <div className={`relative h-full overflow-hidden group rounded-2xl shadow-lg transition-all duration-500 ${className}`}>
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70 z-10 transition-all duration-500 group-hover:from-black/30 group-hover:via-black/50 group-hover:to-black/80"></div>
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110 z-0"
      />
      
      {/* Content */}
      <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end transform transition-transform duration-500">
        <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">{title}</h3>
        <p className="text-sm text-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-md leading-relaxed">{description}</p>
        
        {/* Learn More Button - Hidden by default, shown on hover */}
        <div className="mt-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <button className="inline-flex items-center text-sm text-white hover:text-blue-400 transition-colors">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const SolutionsBentoSection = () => {
  const solutions = [
    {
      title: "GRID TIED SOLAR PV SYSTEM",
      description: "A grid-tied solar system is a solar power system connected to the utility power grid. This system allows homes or business to use solar energy during the day while remaining connected to the grid to draw power when needed (like during the night or cloudy days).",
      image: "/lovable-uploads/Screenshot (604).png"
    },
    {
      title: "HYBRID SOLAR PV SYSTEM",
      description: "A hybrid solar system combines the best features of both on-grid and off-grid systems by integrating solar panels, batteries, and a grid connection. This system allows users to store excess energy in batteries for later use, while also being connected to the grid for backup power or to sell excess energy.",
      image: "/lovable-uploads/Screenshot (605).png"
    },
    {
      title: "OFF GRID SOLAR PV SYSTEM",
      description: "An off-grid solar system, also known as a stand-alone solar system, operates independently from the utility grid and is designed to provide all the necessary power for a home, business, or facility without relying on the grid for backup.",
      image: "/lovable-uploads/Screenshot (606).png"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-base font-semibold leading-7 text-blue-600 uppercase tracking-wide">EXPERTISE IN</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Solar Energy Solutions
          </p>
          <p className="mt-4 text-lg text-gray-600">
            We are dedicated to provide innovative and efficient solar solutions that cater to the diverse needs of our clients.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="h-[400px] transform hover:-translate-y-1 transition-all duration-500"
            >
              <SolutionCard 
                title={solution.title}
                description={solution.description}
                image={solution.image}
              />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Need a Custom Solar Solution?</h3>
              <p className="mt-2 text-gray-600">Let our experts help you find the perfect setup for your needs.</p>
            </div>
            <button className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5">
              Contact Our Experts
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsBentoSection; 