"use client"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ShieldCheckIcon, BoltIcon, StarIcon, ClockIcon } from '@heroicons/react/24/solid';

const About = () => {
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
      <section className="text-center py-8 sm:py-12 md:py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent blur-3xl"></div>
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 text-transparent bg-clip-text drop-shadow-2xl mb-2 sm:mb-4">
            About Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-8">Professional • Trusted • Experienced</p>
          
          {/* Trust Badges */}
          <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 flex-wrap">
            <div className="flex items-center gap-1 sm:gap-2 bg-purple-900/30 px-2 sm:px-4 py-1.5 sm:py-2 rounded-full border border-purple-500/50">
              <ShieldCheckIcon className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />
              <span className="text-purple-400 font-semibold text-sm sm:text-base">Account Safe</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 bg-cyan-900/30 px-2 sm:px-4 py-1.5 sm:py-2 rounded-full border border-cyan-500/50">
              <BoltIcon className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold text-sm sm:text-base">Fast Delivery</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 bg-blue-900/30 px-2 sm:px-4 py-1.5 sm:py-2 rounded-full border border-blue-500/50">
              <StarIcon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
              <span className="text-blue-400 font-semibold text-sm sm:text-base">Pro Players</span>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8 md:space-y-12 pb-8 sm:pb-12 md:pb-16">
        {/* About Content */}
        <section className="bg-slate-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-700/50 shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">Who We Are</h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                We are a dedicated team of professional esports players with years of experience in competitive gaming.
                Our passion for gaming and deep understanding of the industry led us to create this platform.
                We aim to provide players with secure and efficient boosting services to help them achieve their goals.
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">Our Mission</h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Our mission is to offer a seamless and secure experience for gamers looking to enhance their ranks and accounts.
                We specialise in professional boosting services and VP top-ups, ensuring fast and reliable delivery with the highest level of security.
                Our team is committed to maintaining integrity and customer satisfaction at all times.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-slate-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-700/50 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <ClockIcon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Fast Delivery</h3>
              <p className="text-sm sm:text-base text-gray-300">Most orders completed within 24-48 hours</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <ShieldCheckIcon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">100% Safe</h3>
              <p className="text-sm sm:text-base text-gray-300">Your account security is our top priority</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <StarIcon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Pro Players</h3>
              <p className="text-sm sm:text-base text-gray-300">Only high-rank professional players</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;