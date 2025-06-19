"use client";

import React from 'react';
import { Button } from './ui/button';

const TestimonialsBentoSection = () => {
  const testimonials = [
    {
      name: "Rahul Mehta",
      role: "Infrastructure Lead",
      company: "Flipkart",
      testimonial: "Gravity India's UPS and cooling solutions are the backbone of our daily operations.",
      initials: "RM"
    },
    {
      name: "Sneha Rao",
      role: "Technology Director",
      company: "Infosys",
      testimonial: "Reliable support and future-ready infrastructure—we've scaled smoothly thanks to Gravity India.",
      initials: "SR"
    },
    {
      name: "Manoj Iyer",
      role: "Data Center Manager",
      company: "Samsung",
      testimonial: "Their data center solutions are robust and tailored. Truly exceptional service.",
      initials: "MI"
    },
    {
      name: "Neha Patil",
      role: "Operations Head",
      company: "Bosch",
      testimonial: "From consulting to commissioning, Gravity India delivers professionalism at every stage.",
      initials: "NP"
    },
    {
      name: "Ravi Shankar",
      role: "Facilities Director",
      company: "Brigade Group",
      testimonial: "They treat every project like a mission. That dedication is rare and impactful.",
      initials: "RS"
    },
    {
      name: "Pooja Verma",
      role: "Infrastructure Manager",
      company: "Amazon India",
      testimonial: "Seamless power continuity—exactly what a modern logistics network demands.",
      initials: "PV"
    }
  ];

  return (
    <section className="py-20" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            We've Been Powering the Future for Decades
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Trusted by clients nationwide and powering Fortune 500 companies with mission-critical infrastructure since 1995.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* First Column */}
          <div className="space-y-6">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center text-gray-700 font-semibold mr-4 border border-gray-100">
                  {testimonials[0].initials}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{testimonials[0].name}</h3>
                  <p className="text-gray-600 text-sm">{testimonials[0].company}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonials[0].testimonial}</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center text-gray-700 font-semibold mr-4 border border-gray-100">
                  {testimonials[3].initials}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{testimonials[3].name}</h3>
                  <p className="text-gray-600 text-sm">{testimonials[3].company}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonials[3].testimonial}</p>
            </div>
          </div>

          {/* Center Column - Featured Card */}
          <div className="md:row-span-2 bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-3xl text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-shadow duration-300">
            <div className="h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6">At Gravity India Technologies</h3>
                <p className="text-lg mb-8 leading-relaxed">
                  We don't just provide infrastructure—we build the foundation for uninterrupted success. Our legacy in power management, data center design, and precision cooling continues to serve India's top enterprises.
                </p>
              </div>
              <div>
                <p className="font-semibold text-lg">– Gravity India Technologies Pvt. Ltd.</p>
                {/* Add logo here if available */}
              </div>
            </div>
          </div>

          {/* Third Column */}
          <div className="space-y-6">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center text-gray-700 font-semibold mr-4 border border-gray-100">
                  {testimonials[1].initials}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{testimonials[1].name}</h3>
                  <p className="text-gray-600 text-sm">{testimonials[1].company}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonials[1].testimonial}</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center text-gray-700 font-semibold mr-4 border border-gray-100">
                  {testimonials[4].initials}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{testimonials[4].name}</h3>
                  <p className="text-gray-600 text-sm">{testimonials[4].company}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonials[4].testimonial}</p>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center text-gray-700 font-semibold mr-4 border border-gray-100">
                {testimonials[2].initials}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{testimonials[2].name}</h3>
                <p className="text-gray-600 text-sm">{testimonials[2].company}</p>
              </div>
            </div>
            <p className="text-gray-700">{testimonials[2].testimonial}</p>
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center text-gray-700 font-semibold mr-4 border border-gray-100">
                {testimonials[5].initials}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{testimonials[5].name}</h3>
                <p className="text-gray-600 text-sm">{testimonials[5].company}</p>
              </div>
            </div>
            <p className="text-gray-700">{testimonials[5].testimonial}</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button 
            className="bg-gradient-to-b from-blue-600 to-blue-600 text-white px-8 py-6 rounded-xl text-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Explore Our Client Success Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsBentoSection; 