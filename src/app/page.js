'use client';

import { useState, useCallback } from 'react';
import StarField from "@/components/StarField";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NewsEvents from "@/components/NewsEvents";
import TalentRoster from "@/components/TalentRoster";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
    // Small delay before fading in content for a smooth transition
    setTimeout(() => setContentVisible(true), 100);
  }, []);

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <StarField />
      <div className={`main-content ${contentVisible ? 'main-content--visible' : ''}`}>
        <Navbar />
        <main>
          <Hero />
          <NewsEvents />
          <TalentRoster />
        </main>
        <Footer />
      </div>
    </>
  );
}
