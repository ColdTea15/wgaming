"use client"
import { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { 
  ShieldCheckIcon, 
  BoltIcon, 
  StarIcon,
  DocumentTextIcon,
  ClockIcon,
  UserGroupIcon,
  LockClosedIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/solid';

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const termsSections = [
    {
      id: 'general',
      title: '1. General Terms',
      icon: DocumentTextIcon,
      content: 'These Terms govern your use of our platform, including any purchases or services provided. By accessing our services, you acknowledge that you have read, understood, and agree to be bound by these Terms.',
      color: 'from-purple-500 to-blue-500'
    },
    {
      id: 'payments',
      title: '2. Payments & Refunds',
      icon: LockClosedIcon,
      content: 'All payments are processed securely through our payment providers. Refunds will only be issued under exceptional circumstances and are subject to our review process. Please contact our support team for any payment-related issues.',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      id: 'responsibilities',
      title: '3. User Responsibilities',
      icon: UserGroupIcon,
      content: 'You agree not to misuse our services or engage in any fraudulent activities. This includes providing accurate information, maintaining account security, and complying with all applicable laws and regulations.',
      color: 'from-emerald-500 to-green-500'
    },
    {
      id: 'changes',
      title: '4. Changes to Terms',
      icon: ClockIcon,
      content: 'We reserve the right to modify these terms at any time. Continued use of our services implies acceptance of the latest terms. We will notify users of any significant changes via email or through our website.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'liability',
      title: '5. Limitation of Liability',
      icon: ExclamationTriangleIcon,
      content: 'Our services are provided "as is" without any warranties. We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.',
      color: 'from-pink-500 to-rose-500'
    }
  ];

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
            Terms & Conditions
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-8">Please read these terms carefully before using our services</p>
          
          {/* Trust Badges */}
          <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 flex-wrap">
            <div className="flex items-center gap-1 sm:gap-2 bg-purple-900/30 px-2 sm:px-4 py-1.5 sm:py-2 rounded-full border border-purple-500/50">
              <ShieldCheckIcon className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />
              <span className="text-purple-400 font-semibold text-sm sm:text-base">Legal Protection</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 bg-cyan-900/30 px-2 sm:px-4 py-1.5 sm:py-2 rounded-full border border-cyan-500/50">
              <BoltIcon className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold text-sm sm:text-base">Clear Terms</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 bg-blue-900/30 px-2 sm:px-4 py-1.5 sm:py-2 rounded-full border border-blue-500/50">
              <StarIcon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
              <span className="text-blue-400 font-semibold text-sm sm:text-base">User-Focused</span>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-10">
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {termsSections.map((section) => (
            <div
              key={section.id}
              className="group bg-slate-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-slate-700/50 overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:bg-slate-800/50"
            >
              <div
                className="p-4 sm:p-6 cursor-pointer"
                onClick={() => toggleSection(section.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`p-2 sm:p-3 bg-gradient-to-r ${section.color} rounded-lg sm:rounded-xl`}>
                      <section.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-white">
                      {section.title}
                    </h2>
                  </div>
                  <div className={`transform transition-transform duration-300 ${
                    activeSection === section.id ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {activeSection === section.id && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <div className="pl-16 sm:pl-20">
                    <div className="bg-slate-800/50 rounded-lg sm:rounded-xl p-4 sm:p-6 border-l-4 border-purple-500">
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Last Updated Section */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-xs sm:text-sm text-gray-400">
            Last updated: March 15, 2024
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
