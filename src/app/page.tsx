'use client';

import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";
import { Star, Shield, Clock, Users, Trophy, ChevronRight, Play, ArrowRight } from 'lucide-react';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [stats, setStats] = useState({ boosted: 0, customers: 0, rating: 0 });

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

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000;
      const start = Date.now();
      const targets = { boosted: 15420, customers: 8750, rating: 4.9 };

      const animate = () => {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);

        setStats({
          boosted: Math.floor(targets.boosted * progress),
          customers: Math.floor(targets.customers * progress),
          rating: Number((targets.rating * progress).toFixed(1))
        });

        if (progress < 1) requestAnimationFrame(animate);
      };
      animate();
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateStats();
        observer.disconnect();
      }
    });

    const statsElement = document.getElementById('stats-section');
    if (statsElement) observer.observe(statsElement);

    return () => observer.disconnect();
  }, []);

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
        <div className="relative z-10 text-center px-6 mx-auto">
          <h1
            className="text-5xl font-black text-white mb-6 leading-tight"
            style={{
              textShadow: "0 0 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6)"
            }}
          >
            Fast & Secure Valorant Boosting & VP Top-ups
          </h1>

          <div className="mt-6 space-x-4 flex justify-center">
            <Link
              href="/boosting"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-xl shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-purple-500/50"
            >
              <Trophy className="w-6 h-6" />
              Get Boosted Now
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/valorant-points"
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-pink-400 rounded-xl font-bold text-xl transition-all duration-300 hover:bg-blue-500 hover:scale-105 hover:shadow-blue-500/50"
            >
              <span className="flex items-center gap-2">
                <Play className="w-6 h-6" />
                Buy VP Instantly
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Live Stats Section */}
      <section id="stats-section" className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group transform transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                {stats.boosted.toLocaleString()}+
              </div>
              <div className="text-lg text-gray-300 mt-2">Accounts Boosted</div>
            </div>
            <div className="group transform transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {stats.customers.toLocaleString()}+
              </div>
              <div className="text-lg text-gray-300 mt-2">Happy Customers</div>
            </div>
            <div className="group transform transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center gap-2">
                <Star className="w-10 h-10 fill-current" />
                {stats.rating}
              </div>
              <div className="text-lg text-gray-300 mt-2">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-black text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
          Why We're <span className="text-purple-400">#1</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group relative p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 transform transition-all duration-500 hover:scale-105 hover:bg-gray-800/50">
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 mb-4 group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Lightning Fast</h3>
            <p className="text-gray-300 leading-relaxed">Get your boost or VP in record time.</p>
          </div>
          <div className="group relative p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 transform transition-all duration-500 hover:scale-105 hover:bg-gray-800/50">
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 mb-4 group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">100% Safe & Secure</h3>
            <p className="text-gray-300 leading-relaxed">We prioritize your privacy and security.</p>
          </div>
          <div className="group relative p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 transform transition-all duration-500 hover:scale-105 hover:bg-gray-800/50">
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Professional Players</h3>
            <p className="text-gray-300 leading-relaxed">Only the best players handle your account.</p>
          </div>
        </div>
      </section>

      {/* Dynamic Testimonials */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            Player <span className="text-purple-400">Success Stories</span>
          </h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-600/50 transform transition-all duration-500">
              <div className="text-center">
                <div className="text-5xl mb-4">{testimonials[currentTestimonial].avatar}</div>
                <p className="text-xl text-gray-300 italic mb-6 leading-relaxed">
                  &ldquo;{testimonials[currentTestimonial].text}&rdquo;
                </p>
                <div className="flex justify-center items-center gap-4">
                  <div>
                    <div className="font-bold text-lg text-white">{testimonials[currentTestimonial].author}</div>
                    <div className="text-purple-400 font-semibold">{testimonials[currentTestimonial].rank}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'bg-purple-500 scale-125' : 'bg-gray-600 hover:bg-gray-500'
                    }`}
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
