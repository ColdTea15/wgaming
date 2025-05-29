"use client"
import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ShieldCheckIcon, BoltIcon, StarIcon, ClockIcon } from '@heroicons/react/24/solid';

const About = () => {
  const [stats, setStats] = useState({ boosted: 0, customers: 0, rating: 0 });

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
    <div className="text-white min-h-screen flex flex-col relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-900 -z-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-purple-500 rounded-full animate-pulse opacity-60 -z-10"></div>
      <div className="absolute top-60 right-20 w-4 h-4 bg-cyan-500 rounded-full animate-bounce opacity-50 -z-10"></div>
      <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-blue-500 rounded-full animate-pulse opacity-70 -z-10"></div>

      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent blur-3xl"></div>
        <div className="relative z-10">
          <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 text-transparent bg-clip-text drop-shadow-2xl mb-4">
            About Us
          </h1>
          <p className="text-xl text-gray-300 mb-8">Professional • Trusted • Experienced</p>
          
          {/* Trust Badges */}
          <div className="flex justify-center items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2 bg-purple-900/30 px-4 py-2 rounded-full border border-purple-500/50">
              <ShieldCheckIcon className="h-5 w-5 text-purple-400" />
              <span className="text-purple-400 font-semibold">Account Safe</span>
            </div>
            <div className="flex items-center gap-2 bg-cyan-900/30 px-4 py-2 rounded-full border border-cyan-500/50">
              <BoltIcon className="h-5 w-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-900/30 px-4 py-2 rounded-full border border-blue-500/50">
              <StarIcon className="h-5 w-5 text-blue-400" />
              <span className="text-blue-400 font-semibold">Pro Players</span>
            </div>
          </div>
        </div>
      </section>

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
                <StarIcon className="w-10 h-10 fill-current" />
                {stats.rating}
              </div>
              <div className="text-lg text-gray-300 mt-2">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 space-y-12 pb-16">
        {/* About Content */}
        <section className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Who We Are</h2>
              <p className="text-gray-300 leading-relaxed">
                We are a dedicated team of professional esports players with years of experience in competitive gaming.
                Our passion for gaming and deep understanding of the industry led us to create this platform.
                We aim to provide players with secure and efficient boosting services to help them achieve their goals.
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                Our mission is to offer a seamless and secure experience for gamers looking to enhance their ranks and accounts.
                We specialise in professional boosting services and VP top-ups, ensuring fast and reliable delivery with the highest level of security.
                Our team is committed to maintaining integrity and customer satisfaction at all times.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fast Delivery</h3>
              <p className="text-gray-300">Most orders completed within 24-48 hours</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">100% Safe</h3>
              <p className="text-gray-300">Your account security is our top priority</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <StarIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Pro Players</h3>
              <p className="text-gray-300">Only high-rank professional players</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;