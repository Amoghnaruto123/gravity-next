"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';

interface TestimonialProps {
  quote: string;
  name: string;
  handle: string;
  image: string;
  size?: 'large' | 'small';
}

const TestimonialCard = ({ quote, name, handle, image, size = 'small' }: TestimonialProps) => {
  return (
    <div className={`bg-white rounded-3xl p-6 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.2)] transition-all duration-300 ${size === 'large' ? 'md:col-span-2' : ''}`}>
      <p className="text-gray-800 mb-6 leading-relaxed">
        "{quote}"
      </p>
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 relative rounded-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{handle}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsBentoSection = () => {
  const testimonials = [
    {
      quote: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
      name: "Leslie Alexander",
      handle: "@lesliealexander",
      image: "/lovable-uploads/509869ea-56d8-4047-bcfa-e1be5fc49dbe.jpg"
    },
    {
      quote: "Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.",
      name: "Brenna Goyette",
      handle: "@brennagoyette",
      image: "/lovable-uploads/ce280b4d-276d-4395-a3f4-fbefb7d1f39b.jpg",
      company: "SavvyCal"
    },
    {
      quote: "Quia dolorem qui et. Atque quo aliquid sit eos officia. Dolores similique laboriosam quaerat cupiditate.",
      name: "Michael Foster",
      handle: "@michaelfoster",
      image: "/lovable-uploads/matt lebank - joey from friends.jpg"
    },
    {
      quote: "Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.",
      name: "Lindsay Walton",
      handle: "@lindsaywalton",
      image: "/lovable-uploads/rachel green jennifer aniston friends new york nyc….jpg"
    },
    {
      quote: "Consequatur ut atque. Itaque nostrum molestiae id veniam eos cumque. Ut quia eum fugit laborum autem inventore ut voluptate.",
      name: "Dries Vincent",
      handle: "@driesvincent",
      image: "/lovable-uploads/ross geller s_8 💕.jpg"
    },
    {
      quote: "Nam nesciunt dolorem dolor asperiores cum. Incidunt molestiae quis deleniti vitae ut in earum delectus iusto.",
      name: "Courtney Henry",
      handle: "@courtneyhenry",
      image: "/lovable-uploads/1f35ba17-d33b-47a2-a39e-36480b5cc083.jpg"
    },
    {
      quote: "Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.",
      name: "Tom Cook",
      handle: "@tomcook",
      image: "/lovable-uploads/matt lebank - joey from friends.jpg"
    },
    {
      quote: "Aliquid dolore praesentium ratione. Cumque ea officia repellendus laboriosam. Vitae quod id explicabo non sunt.",
      name: "Whitney Francis",
      handle: "@whitneyfrancis",
      image: "/lovable-uploads/rachel green jennifer aniston friends new york nyc….jpg"
    },
    {
      quote: "Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.",
      name: "Leonard Krasner",
      handle: "@leonardkrasner",
      image: "/lovable-uploads/ross geller s_8 💕.jpg"
    },
    {
      quote: "Architecto libero natus est. Est quam debitis officia enim atque et ut non. Sunt reiciendis quasi eaque. Itaque error ut et.",
      name: "Floyd Miles",
      handle: "@floydmiles",
      image: "/lovable-uploads/matt lebank - joey from friends.jpg"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            We have worked with<br />
            thousands of amazing people
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* First column */}
          <div className="space-y-6">
            <TestimonialCard {...testimonials[0]} />
            <TestimonialCard {...testimonials[2]} />
            <TestimonialCard {...testimonials[4]} />
          </div>

          {/* Second column */}
          <div className="md:col-span-2 space-y-6">
            <TestimonialCard {...testimonials[1]} size="large" />
            <div className="grid grid-cols-2 gap-6">
              <TestimonialCard {...testimonials[3]} />
              <TestimonialCard {...testimonials[5]} />
            </div>
            <TestimonialCard {...testimonials[6]} size="large" />
          </div>

          {/* Third column */}
          <div className="space-y-6">
            <TestimonialCard {...testimonials[7]} />
            <TestimonialCard {...testimonials[8]} />
            <TestimonialCard {...testimonials[9]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsBentoSection; 