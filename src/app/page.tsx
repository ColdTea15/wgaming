'use client';

import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";
import { Shield, Clock, Users, Trophy, ChevronRight, Play, ArrowRight } from 'lucide-react';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    { text: "Went from Silver to Diamond in just 3 days! The boosters were professional and kept me updated throughout.", author: "Alex G.", rank: "Diamond 2", avatar: "🎮" },
    { text: "Amazing VP top-up service. Got my points instantly and customer support was incredible!", author: "Sarah L.", rank: "Immortal 1", avatar: "👑" },
    { text: "Best boosting service I&apos;ve ever used. Safe, fast, and the results speak for themselves!", author: "Kevin T.", rank: "Radiant", avatar: "⚡" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="bg-neutral-900 text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <header className="h-screen flex items-center justify-center relative overflow-hidden -mt-16">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/val.jpeg')" }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-purple-900/30" />

        {/* Text Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 mx-auto max-w-4xl">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 leading-tight"
            style={{
              textShadow: "0 0 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6)"
            }}
          >
            Fast & Secure Valorant Boosting & VP Top-ups
          </h1>

          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              href="/boosting"
              className="group inline-flex items-center justify-center gap-2 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-base sm:text-lg md:text-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50"
            >
              <Trophy className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              Get Boosted Now
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/valorant-points"
              className="group inline-flex items-center justify-center gap-2 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-blue-500 to-pink-400 rounded-xl font-bold text-base sm:text-lg md:text-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50"
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              Buy VP Instantly
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </header>

      {/* Why Choose Us Section */}
      <section className="py-8 sm:py-12 md:py-20 px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-6 sm:mb-8 md:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
          Why We&apos;re <span className="text-purple-400">#1</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div className="group relative p-3 sm:p-4 md:p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 transform transition-all duration-500 hover:scale-105 hover:bg-gray-800/50">
            <div className="inline-flex p-2 sm:p-3 md:p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-white">Lightning Fast</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">Get your boost or VP in record time.</p>
          </div>
          <div className="group relative p-3 sm:p-4 md:p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 transform transition-all duration-500 hover:scale-105 hover:bg-gray-800/50">
            <div className="inline-flex p-2 sm:p-3 md:p-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-white">100% Safe & Secure</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">We prioritize your privacy and security.</p>
          </div>
          <div className="group relative p-3 sm:p-4 md:p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 transform transition-all duration-500 hover:scale-105 hover:bg-gray-800/50">
            <div className="inline-flex p-2 sm:p-3 md:p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-white">Professional Players</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">Only the best players handle your account.</p>
          </div>
        </div>
      </section>

      {/* Dynamic Testimonials */}
      <section className="py-8 sm:py-12 md:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-6 sm:mb-8 md:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            Player <span className="text-purple-400">Success Stories</span>
          </h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-600/50 transform transition-all duration-500">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">{testimonials[currentTestimonial].avatar}</div>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 italic mb-4 sm:mb-6 leading-relaxed">
                  &ldquo;{testimonials[currentTestimonial].text}&rdquo;
                </p>
                <div className="flex justify-center items-center gap-3 sm:gap-4">
                  <div>
                    <div className="font-bold text-sm sm:text-base md:text-lg text-white">{testimonials[currentTestimonial].author}</div>
                    <div className="text-purple-400 font-semibold text-xs sm:text-sm md:text-base">{testimonials[currentTestimonial].rank}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-4 sm:mt-6 md:mt-8 space-x-2 sm:space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'bg-purple-500 scale-125' : 'bg-gray-600 hover:bg-gray-500'}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
