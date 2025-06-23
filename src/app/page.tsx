import React from 'react';
import MarqueeBanner from './components/MarqueeBanner';
import Index from "@/app/pages/Index";

export default function Home() {
  return (
    <>
      <MarqueeBanner />
      <main className="min-h-screen">
        <Index />
      </main>
    </>
  );
}
