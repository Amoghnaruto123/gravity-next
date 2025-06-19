import React from 'react';
import { Button } from "@/app/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
  large?: boolean;
  position?: 'left' | 'right' | 'top' | 'bottom' | 'center';
}

const ProductCard = ({ title, description, image, className, large, position = 'center' }: ProductCardProps) => {
  // Determine rounded corner classes based on position
  const getRoundedClass = () => {
    switch (position) {
      case 'left':
        return 'lg:rounded-l-[2rem]';
      case 'right':
        return 'lg:rounded-r-[2rem]';
      case 'top':
        return 'max-lg:rounded-t-[2rem]';
      case 'bottom':
        return 'max-lg:rounded-b-[2rem]';
      default:
        return '';
    }
  };

  const roundedClass = getRoundedClass();
  
  return (
    <div className={`relative h-full ${className}`}>
      <div className={`absolute inset-px rounded-lg bg-white ${roundedClass}`}></div>
      <div className={`relative flex h-full flex-col overflow-hidden rounded-[calc(0.5rem+1px)] ${roundedClass}`}>
        <div className="px-6 pt-6 pb-3 sm:px-8 sm:pt-8">
          <p className="mt-2 text-lg font-medium tracking-tight text-gray-900 max-lg:text-center">
            {title}
          </p>
          <p className="mt-2 max-w-lg text-sm leading-6 text-gray-600 max-lg:text-center">
            {description}
          </p>
        </div>
        <div className={`relative ${large ? 'min-h-[240px]' : 'min-h-[160px]'} w-full grow flex items-center justify-center`}>
          <div className="w-full h-full px-6 pb-6 flex items-center justify-center">
            <div className="relative w-full h-full overflow-hidden rounded-lg shadow-md">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 ${roundedClass}`}></div>
    </div>
  );
};

const ProductsBentoSection = () => {
  const products = [
    {
      title: "Power Conditioning Solutions",
      description: "Uninterruptible power supplies (UPS) and future-proof, integrated UPS systems for backup power needs.",
      image: "/lovable-uploads/Screenshot (598).png"
    },
    {
      title: "Data Center Solutions Design & Build",
      description: "End-to-end solutions from concept to deployment with a focus on scalability and energy efficiency.",
      image: "/lovable-uploads/Screenshot (599).png"
    },
    {
      title: "Thermal",
      description: "Delivering climate comfort with precision AC and cooling solutions for stability.",
      image: "/lovable-uploads/Screenshot (601).png"
    },
    {
      title: "Testing & Commission and ESG Consulting",
      description: "Essential AMC services for electrical safety and compliance.",
      image: "/lovable-uploads/Screenshot (600).png"
    },
    {
      title: "MEP Project Design & Integration",
      description: "Cable dressing, tray installation, and panel commissioning with expert guidance.",
      image: "/lovable-uploads/Screenshot (602).png"
    },
    {
      title: "Leasing Services",
      description: "UPS, cooling, and load bank rental services up to 1000 KVA PAN INDIA.",
      image: "/lovable-uploads/Screenshot (603).png"
    },
    {
      title: "GRID TIED SOLAR PV SYSTEM",
      description: "Grid-connected solar system for day-time solar usage and backup via utility grid.",
      image: "/lovable-uploads/Screenshot (604).png"
    },
    {
      title: "HYBRID SOLAR PV SYSTEM",
      description: "On-grid + battery combo for flexible energy use and storage.",
      image: "/lovable-uploads/Screenshot (605).png"
    },
    {
      title: "OFF GRID SOLAR PV SYSTEM",
      description: "Standalone solar system for complete independence from grid power.",
      image: "/lovable-uploads/Screenshot (606).png"
    }
  ];

  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-base font-semibold leading-7 text-blue-600">Enterprise Solutions</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          Products We Offer
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-gray-600">
          Explore our diverse range of infrastructure, power, and solar solutions tailored for industry needs.
        </p>
        
        {/* Explore All Products button moved here */}
        <div className="mt-6 text-center">
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Explore All Products
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {/* First column - large card spanning 2 rows */}
          <div className="relative lg:row-span-2">
            <ProductCard 
              title={products[0].title}
              description={products[0].description}
              image={products[0].image}
              large={true}
              position="left"
            />
          </div>

          {/* Second column - top card */}
          <div className="relative max-lg:row-start-1">
            <ProductCard 
              title={products[1].title}
              description={products[1].description}
              image={products[1].image}
              position="top"
            />
          </div>

          {/* Second column - bottom card */}
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <ProductCard 
              title={products[2].title}
              description={products[2].description}
              image={products[2].image}
            />
          </div>

          {/* Third column - large card spanning 2 rows */}
          <div className="relative lg:row-span-2">
            <ProductCard 
              title={products[3].title}
              description={products[3].description}
              image={products[3].image}
              large={true}
              position="right"
            />
          </div>

          {/* Mobile-only cards */}
          <div className="lg:hidden relative">
            <ProductCard 
              title={products[4].title}
              description={products[4].description}
              image={products[4].image}
            />
          </div>
          <div className="lg:hidden relative">
            <ProductCard 
              title={products[5].title}
              description={products[5].description}
              image={products[5].image}
              position="bottom"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsBentoSection; 