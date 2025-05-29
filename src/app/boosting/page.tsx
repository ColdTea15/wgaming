"use client"
import { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { 
  TrophyIcon, 
  StarIcon, 
  ShieldCheckIcon, 
  ClockIcon, 
  UserGroupIcon, 
  UserIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon,
  BoltIcon,
  ShoppingCartIcon
} from '@heroicons/react/24/solid';

interface Rank {
  name: string;
  price: number;
  color: string;
}

interface BoostType {
  id: string;
  name: string;
  description: string;
  multiplier: number;
  features: string[];
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  popular: boolean;
}

interface Service {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
}

const ranks: Rank[] = [
  { name: 'Iron 1', price: 1, color: 'from-gray-600 to-gray-800' },
  { name: 'Iron 2', price: 2, color: 'from-gray-600 to-gray-800' },
  { name: 'Iron 3', price: 3, color: 'from-gray-600 to-gray-800' },
  { name: 'Bronze 1', price: 4, color: 'from-amber-700 to-amber-900' },
  { name: 'Bronze 2', price: 5, color: 'from-amber-700 to-amber-900' },
  { name: 'Bronze 3', price: 6, color: 'from-amber-700 to-amber-900' },
  { name: 'Silver 1', price: 7, color: 'from-gray-400 to-gray-600' },
  { name: 'Silver 2', price: 8, color: 'from-gray-400 to-gray-600' },
  { name: 'Silver 3', price: 9, color: 'from-gray-400 to-gray-600' },
  { name: 'Gold 1', price: 10, color: 'from-yellow-500 to-yellow-700' },
  { name: 'Gold 2', price: 11, color: 'from-yellow-500 to-yellow-700' },
  { name: 'Gold 3', price: 12, color: 'from-yellow-500 to-yellow-700' },
  { name: 'Platinum 1', price: 13, color: 'from-cyan-400 to-cyan-600' },
  { name: 'Platinum 2', price: 14, color: 'from-cyan-400 to-cyan-600' },
  { name: 'Platinum 3', price: 15, color: 'from-cyan-400 to-cyan-600' },
  { name: 'Diamond 1', price: 16, color: 'from-purple-400 to-purple-600' },
  { name: 'Diamond 2', price: 17, color: 'from-purple-400 to-purple-600' },
  { name: 'Diamond 3', price: 18, color: 'from-purple-400 to-purple-600' },
  { name: 'Ascendant 1', price: 19, color: 'from-emerald-400 to-emerald-600' },
  { name: 'Ascendant 2', price: 20, color: 'from-emerald-400 to-emerald-600' },
  { name: 'Ascendant 3', price: 21, color: 'from-emerald-400 to-emerald-600' },
  { name: 'Immortal 1', price: 22, color: 'from-pink-400 to-pink-600' },
  { name: 'Immortal 2', price: 23, color: 'from-pink-400 to-pink-600' },
  { name: 'Immortal 3', price: 24, color: 'from-pink-400 to-pink-600' },
  { name: 'Radiant', price: 25, color: 'from-yellow-300 to-orange-500' }
];

const boostTypes: BoostType[] = [
  {
    id: 'solo',
    name: 'Solo Boost',
    description: 'We play on your account',
    multiplier: 1,
    features: ['Fastest completion', 'Offline mode', 'No queue time'],
    icon: UserIcon,
    popular: false
  },
  {
    id: 'duo',
    name: 'Duo Boost',
    description: 'Play together with our pro',
    multiplier: 1.5,
    features: ['Learn while playing', 'Keep your account', 'Live coaching'],
    icon: UserGroupIcon,
    popular: true
  }
];

const services: Service[] = [
  {
    id: 'rank',
    name: 'Rank Boosting',
    description: 'Climb to your desired rank',
    basePrice: 9.99,
    icon: TrophyIcon,
    color: 'from-purple-500 to-blue-500'
  },
  {
    id: 'placement',
    name: 'Placement Matches',
    description: '80% win rate guaranteed',
    basePrice: 19.99,
    icon: ShieldCheckIcon,
    color: 'from-cyan-500 to-teal-500'
  },
  {
    id: 'wins',
    name: 'Win Boosting',
    description: 'Get your wins fast',
    basePrice: 39.99,
    icon: CheckCircleIcon,
    color: 'from-emerald-500 to-green-500'
  },
  {
    id: 'level',
    name: 'Level Boosting',
    description: 'Increase your account level',
    basePrice: 4.99,
    icon: ArrowTrendingUpIcon,
    color: 'from-blue-500 to-indigo-500'
  }
];

const Boosting = () => {
  const [currentRank, setCurrentRank] = useState<Rank | null>(null);
  const [activeService, setActiveService] = useState('rank');
  const [selectedBoostType, setSelectedBoostType] = useState<string | null>(null);

  const calculateRankPrice = () => {
    if (!currentRank) return 0;
    const startIndex = ranks.findIndex(r => r.name === currentRank.name);
    const endIndex = ranks.findIndex(r => r.name === currentRank.name);
    if (startIndex >= endIndex) return 0;
    const rankDifference = endIndex - startIndex;
    const basePrice = rankDifference * 4.99;
    const selectedBoost = boostTypes.find(b => b.id === selectedBoostType);
    return basePrice * (selectedBoost?.multiplier || 1);
  };

  const getServicePrice = (serviceId: string): number => {
    const service = services.find(s => s.id === serviceId);
    const selectedBoost = boostTypes.find(b => b.id === selectedBoostType);
    
    if (!service || !selectedBoost) return 0;
    
    switch(serviceId) {
      case 'rank':
        return calculateRankPrice();
      default:
        return 0;
    }
  };

  const getRankGradient = (rank: Rank | null): string => {
    return rank ? rank.color : 'from-gray-600 to-gray-800';
  };

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
            RANK BOOST
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">Professional Boosting Services</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-8">Fast • Secure • Professional • 24/7 Support</p>
          
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
        {/* Service Selection */}
        <section className="bg-slate-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-700/50 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-8 text-center">Choose Your Service</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`relative p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  activeService === service.id
                    ? `bg-gradient-to-br ${service.color} shadow-2xl ring-2 ring-white/50`
                    : 'bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600/50'
                }`}
              >
                <service.icon className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 text-white" />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">{service.name}</h3>
                <p className="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-4">{service.description}</p>
                <p className="text-base sm:text-lg font-bold text-white">From RM{service.basePrice}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Boost Type Selection */}
        <section className="bg-slate-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-700/50 shadow-2xl">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Select Boost Type</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {boostTypes.map((type) => (
              <div
                key={type.id}
                onClick={() => setSelectedBoostType(type.id)}
                className={`relative p-4 sm:p-6 rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  selectedBoostType === type.id
                    ? 'bg-gradient-to-br from-purple-600 to-blue-600 ring-2 ring-cyan-400/50 shadow-2xl'
                    : 'bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600/50'
                }`}
              >
                {type.popular && (
                  <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-400 to-blue-400 text-white px-2 sm:px-4 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1">
                      <StarIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                      POPULAR
                    </div>
                  </div>
                )}
                
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <type.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">{type.name}</h3>
                    <p className="text-sm text-gray-300">{type.description}</p>
                  </div>
                </div>
                
                <div className="space-y-1.5 sm:space-y-2">
                  {type.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-1.5 sm:gap-2">
                      <CheckCircleIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-400" />
                      <span className="text-gray-300 text-xs sm:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {type.multiplier > 1 && (
                  <div className="mt-3 sm:mt-4 bg-purple-900/20 border border-purple-500/50 rounded-lg p-2 sm:p-3">
                    <p className="text-purple-400 text-xs sm:text-sm font-semibold">
                      +{((type.multiplier - 1) * 100).toFixed(0)}% Price Premium
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-slate-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-700/50 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-8 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <ClockIcon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Fast Delivery</h3>
              <p className="text-sm text-gray-300">Most orders completed within 24-48 hours</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <ShieldCheckIcon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">100% Safe</h3>
              <p className="text-sm text-gray-300">Your account security is our top priority</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <StarIcon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Pro Players</h3>
              <p className="text-sm text-gray-300">Only high-rank professional players</p>
            </div>
          </div>
        </section>

        {/* Rank Selection */}
        <section className="bg-slate-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-700/50 shadow-2xl">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Select Current Rank</h2>
          <select 
            className="w-full p-3 sm:p-4 bg-slate-800/80 border border-slate-600 rounded-lg sm:rounded-xl text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all text-sm sm:text-base"
            value={currentRank?.name || ''}
            onChange={(e) => setCurrentRank(ranks.find(r => r.name === e.target.value) || null)}
          >
            <option value="">Select Current Rank</option>
            {ranks.map(rank => (
              <option key={rank.name} value={rank.name}>{rank.name}</option>
            ))}
          </select>
          {currentRank && (
            <div className={`mt-3 p-2 sm:p-3 rounded-lg bg-gradient-to-r ${getRankGradient(currentRank)} text-center`}>
              <span className="text-white font-bold text-sm sm:text-base">{currentRank.name}</span>
            </div>
          )}
        </section>

        {/* Checkout Button */}
        <section className="text-center">
          <button 
            disabled={getServicePrice(activeService) === 0}
            className={`px-6 sm:px-12 py-3 sm:py-4 rounded-lg sm:rounded-xl text-white font-bold text-base sm:text-lg transition-all shadow-2xl transform flex items-center justify-center gap-2 sm:gap-3 mx-auto ${
              getServicePrice(activeService) === 0
                ? 'bg-slate-600 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 hover:scale-105 shadow-purple-500/25'
            }`}
          >
            <ShoppingCartIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            {getServicePrice(activeService) === 0 
              ? 'Configure Service First' 
              : `Checkout - $${getServicePrice(activeService).toFixed(2)}`
            }
          </button>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Boosting;