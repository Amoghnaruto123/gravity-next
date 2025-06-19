import React from 'react';
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  image?: string;
  features?: string[];
  className?: string;
  variant?: 'default' | 'feature' | 'highlight';
}

const ServiceCard = ({ title, description, image, features, className, variant = 'default' }: ServiceCardProps) => {
  if (variant === 'feature') {
    return (
      <div className={`relative h-full rounded-xl overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-10"></div>
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover z-0"
          />
        )}
        <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <div>
            <p className="text-sm text-white opacity-90 mb-4">{description}</p>
            {features && features.length > 0 && (
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white">{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  }
  
  if (variant === 'highlight') {
    return (
      <div className={`h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 flex flex-col ${className}`}>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-sm text-gray-300 mb-6 flex-grow">{description}</p>
        <button className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
          Learn more <ArrowRight className="ml-1 h-4 w-4" />
        </button>
      </div>
    );
  }
  
  return (
    <div className={`h-full bg-white rounded-xl shadow-sm p-6 flex flex-col ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4 flex-grow">{description}</p>
      {features && features.length > 0 && (
        <ul className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const ServicesBentoSection = () => {
  const services = [
    {
      title: "Power Conditioning Services",
      description: "Comprehensive UPS and power management solutions for critical infrastructure.",
      features: [
        "UPS installation and maintenance",
        "Power quality analysis",
        "Battery health monitoring"
      ]
    },
    {
      title: "Data Center Design & Build",
      description: "End-to-end data center solutions from concept to deployment.",
      image: "/lovable-uploads/3ae7a290-b6ec-4a76-95bb-816844190c4e.png",
      features: [
        "Scalable infrastructure design",
        "Energy efficiency optimization",
        "Cooling system integration"
      ]
    },
    {
      title: "Thermal Solutions",
      description: "Precision cooling for server rooms and critical environments.",
      features: [
        "HVAC system design",
        "Temperature monitoring",
        "Airflow optimization"
      ]
    },
    {
      title: "Testing & Commissioning",
      description: "Comprehensive testing services for electrical systems and infrastructure.",
      image: "/lovable-uploads/0ecff96c-4899-4391-a556-fb717a123a87.png",
      features: [
        "Load bank testing",
        "Electrical safety compliance",
        "System performance verification"
      ]
    },
    {
      title: "MEP Design & Integration",
      description: "Mechanical, electrical, and plumbing design and installation services.",
      features: [
        "Cable management",
        "Panel commissioning",
        "System integration"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-base font-semibold leading-7 text-blue-600">PROFESSIONAL SERVICES</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          Comprehensive Infrastructure Services
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-gray-600 mb-12">
          From design to implementation, we provide end-to-end services for all your infrastructure needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main featured service - spans full height */}
          <div className="md:row-span-2 h-[600px]">
            <ServiceCard 
              title={services[1].title}
              description={services[1].description}
              image={services[1].image}
              features={services[1].features}
              variant="feature"
            />
          </div>

          {/* Top row services */}
          <div className="h-[280px]">
            <ServiceCard 
              title={services[0].title}
              description={services[0].description}
              features={services[0].features}
            />
          </div>
          <div className="h-[280px]">
            <ServiceCard 
              title={services[2].title}
              description={services[2].description}
              features={services[2].features}
            />
          </div>

          {/* Bottom row services */}
          <div className="h-[280px]">
            <ServiceCard 
              title={services[3].title}
              description={services[3].description}
              features={services[3].features}
              variant="highlight"
            />
          </div>
          <div className="h-[280px]">
            <ServiceCard 
              title={services[4].title}
              description={services[4].description}
              features={services[4].features}
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
            View All Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesBentoSection; 