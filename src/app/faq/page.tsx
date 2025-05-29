"use client"
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { 
  ChevronDown, 
  Shield, 
  Clock, 
  Users, 
  Trophy, 
  Star, 
  MessageCircle, 
  Search,
  ShieldCheckIcon,
  BoltIcon,
  StarIcon,
  CheckCircleIcon
} from "lucide-react";

const faqs = [
  { 
    question: "Is boosting safe for my account?", 
    answer: "Absolutely! We use enterprise-grade VPN protection, professional boosters with clean records, and follow Riot's terms carefully. We've completed 15,000+ boosts with a 99.8% safety record and zero permanent bans.",
    category: "Safety",
    icon: <Shield className="w-5 h-5" />
  },
  { 
    question: "How long does rank boosting take?", 
    answer: "Most boosts complete within 24-72 hours depending on rank difference. Iron to Gold typically takes 12-24 hours, while Diamond+ boosts may take 2-5 days. We provide real-time progress updates.",
    category: "Time",
    icon: <Clock className="w-5 h-5" />
  },
  { 
    question: "Can I play while my account is being boosted?", 
    answer: "With Solo boosting, we recommend not playing during the boost. However, our Duo option lets you play alongside our Radiant booster and learn advanced strategies while climbing ranks together!",
    category: "Process",
    icon: <Users className="w-5 h-5" />
  },
  {
    question: "What ranks do your boosters have?",
    answer: "All our boosters are verified Radiant players with 500+ RR minimum. They undergo strict screening including gameplay review, background checks, and trial periods. Only the top 0.1% of applicants join our team.",
    category: "Quality",
    icon: <Trophy className="w-5 h-5" />
  },
  {
    question: "Do you offer refunds if I'm not satisfied?",
    answer: "Yes! We offer a 100% money-back guarantee if we don't deliver the promised rank within the estimated timeframe, or if you're unsatisfied with our service for any reason within 24 hours.",
    category: "Guarantee",
    icon: <Star className="w-5 h-5" />
  },
  {
    question: "How do I track my boost progress?",
    answer: "You'll receive a dedicated dashboard link where you can monitor your boost in real-time. Our system provides live updates on matches, rank progress, and estimated completion time.",
    category: "Process",
    icon: <MessageCircle className="w-5 h-5" />
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and cryptocurrency payments. All transactions are secure and encrypted. You can also split your payment into multiple installments.",
    category: "Payment",
    icon: <CheckCircleIcon className="w-5 h-5" />
  }
];

const categories = ["All", "Safety", "Time", "Process", "Quality", "Guarantee", "Payment"];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 mb-8">Find answers to common questions about our services</p>
          
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

      {/* Search and Filter Section */}
      <section className="py-10 bg-gradient-to-r from-gray-800/30 to-gray-700/30">
        <div className="container mx-auto px-6">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full pl-12 pr-4 py-4 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-slate-900/50 backdrop-blur-sm text-gray-300 hover:bg-slate-800/50 border border-slate-700/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <main className="container mx-auto px-6 py-10">
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-gray-400 mb-4">No results found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="group bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:bg-slate-800/50"
                >
                  <div
                    className="p-6 cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl">
                          {faq.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {faq.question}
                          </h3>
                          <div className="text-sm text-purple-400 font-semibold mt-1">
                            {faq.category}
                          </div>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                          openIndex === index ? 'transform rotate-180 text-purple-400' : ''
                        }`}
                      />
                    </div>
                  </div>
                  
                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <div className="pl-20">
                        <div className="bg-slate-800/50 rounded-xl p-6 border-l-4 border-purple-500">
                          <p className="text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
