"use client";
import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import {
  ShoppingCartIcon,
  CreditCardIcon,
  EnvelopeIcon,
  CheckIcon,
  ShieldCheckIcon,
  BoltIcon,
  StarIcon,
  GiftIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/outline";

interface VPPackage {
  id: number;
  amount: string;
  price: number;
  popular: boolean;
  bonus: string | null;
  originalPrice: number | null;
}

interface PaymentMethod {
  id: string;
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
}

const vpPackages: VPPackage[] = [
  { 
    id: 1, 
    amount: "475 VP", 
    price: 18.00, 
    popular: false,
    bonus: null,
    originalPrice: null 
  },
  { 
    id: 2, 
    amount: "1000 VP", 
    price: 37.00, 
    popular: false,
    bonus: "+50 VP",
    originalPrice: 40.00 
  },
  { 
    id: 3, 
    amount: "2050 VP", 
    price: 75.90, 
    popular: true,
    bonus: "+150 VP",
    originalPrice: 82.00 
  },
  { 
    id: 4, 
    amount: "3650 VP", 
    price: 125.00, 
    popular: false,
    bonus: "+250 VP",
    originalPrice: 135.00 
  },
  { 
    id: 5, 
    amount: "5350 VP", 
    price: 175.00, 
    popular: false,
    bonus: "+400 VP",
    originalPrice: 190.00 
  },
  { 
    id: 6, 
    amount: "11000 VP", 
    price: 355.00, 
    popular: false,
    bonus: "+1000 VP",
    originalPrice: 380.00 
  },
];

const paymentMethods: PaymentMethod[] = [
  { 
    id: "fpx", 
    name: "FPX Online Banking", 
    icon: CreditCardIcon, 
    color: "blue"
  },
  { 
    id: "tng", 
    name: "Touch 'n Go", 
    icon: CreditCardIcon, 
    color: "yellow"
  },
  { 
    id: "grab", 
    name: "GrabPay", 
    icon: CreditCardIcon, 
    color: "green"
  },
  { 
    id: "boost", 
    name: "Boost", 
    icon: CreditCardIcon, 
    color: "purple"
  },
];

const ValorantPoints = () => {
  const [riotID, setRiotID] = useState("");
  const [selectedVP, setSelectedVP] = useState<VPPackage | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod | null>(null);
  const [email, setEmail] = useState("");
  const [subscribeSMS, setSubscribeSMS] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleRiotIDChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRiotID(event.target.value);
  };

  const handleVPSelection = (vp: VPPackage) => {
    setSelectedVP(vp);
  };

  const handlePaymentSelection = (method: PaymentMethod) => {
    setSelectedPayment(method);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSMSChange = () => {
    setSubscribeSMS(!subscribeSMS);
  };

  const handlePurchase = async () => {
    if (!riotID || !selectedVP || !selectedPayment) {
      alert("Please fill in all required fields!");
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      alert(
        `🎉 Purchase Successful!\n\nRiot ID: ${riotID}\nVP Package: ${selectedVP.amount} - RM ${selectedVP.price.toFixed(2)}\nPayment Method: ${selectedPayment.name}\nTotal Paid: RM ${selectedVP.price.toFixed(2)}\nEmail: ${email || "Not Provided"}\nSubscribed to SMS: ${
          subscribeSMS ? "Yes" : "No"
        }\n\nYour VP will be credited within 5 minutes!`
      );
    }, 2000);
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
            VALORANT
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">VP STORE</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-8">Instant delivery • Secure payment • 24/7 support</p>
          
          {/* Trust Badges */}
          <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 flex-wrap">
            <div className="flex items-center gap-1 sm:gap-2 bg-purple-900/30 px-2 sm:px-4 py-1.5 sm:py-2 rounded-full border border-purple-500/50">
              <ShieldCheckIcon className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />
              <span className="text-purple-400 font-semibold text-sm sm:text-base">Secure</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 bg-cyan-900/30 px-2 sm:px-4 py-1.5 sm:py-2 rounded-full border border-cyan-500/50">
              <BoltIcon className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold text-sm sm:text-base">Instant</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 bg-blue-900/30 px-2 sm:px-4 py-1.5 sm:py-2 rounded-full border border-blue-500/50">
              <StarIcon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
              <span className="text-blue-400 font-semibold text-sm sm:text-base">Trusted</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8 md:space-y-12 pb-8 sm:pb-12 md:pb-16">
        {/* Step 1: Riot ID Input */}
        <section className="bg-slate-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-700/50 shadow-2xl">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">1</div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Enter your Riot ID</h2>
          </div>
          <div className="relative">
            <UserIcon className="absolute left-3 top-3 h-5 w-5 sm:h-6 sm:w-6 text-gray-400" />
            <input
              type="text"
              value={riotID}
              onChange={handleRiotIDChange}
              placeholder="YourName#TAG"
              className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 bg-slate-800/80 border border-slate-600 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all text-base sm:text-lg"
            />
          </div>
          <p className="text-gray-400 text-xs sm:text-sm mt-2">Example: PlayerName#1234</p>
        </section>

        {/* Step 2: VP Selection */}
        <section className="bg-slate-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-700/50 shadow-2xl">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">2</div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Select VP Package</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 md:gap-8">
            {vpPackages.map((vp) => (
              <div
                key={vp.id}
                onClick={() => handleVPSelection(vp)}
                className={`relative p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center shadow-xl border transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                  selectedVP?.id === vp.id 
                    ? "border-purple-500 bg-gradient-to-br from-purple-900/50 to-blue-900/50 ring-2 ring-purple-500/50 shadow-purple-500/25" 
                    : "border-slate-600/50 bg-gradient-to-br from-slate-800/80 to-slate-900/80 hover:border-slate-500"
                }`}
              >
                {vp.popular && (
                  <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-400 to-blue-400 text-white px-2 sm:px-4 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1">
                      <StarIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                      POPULAR
                    </div>
                  </div>
                )}
                
                {selectedVP?.id === vp.id && (
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                    <CheckIcon className="h-4 w-4 sm:h-6 sm:w-6 text-purple-400" />
                  </div>
                )}

                <div className="mb-3 sm:mb-4">
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 sm:mb-2">{vp.amount}</h3>
                  {vp.bonus && (
                    <div className="flex items-center justify-center gap-1 mb-2 sm:mb-2">
                      <GiftIcon className="h-4 w-4 sm:h-4 sm:w-4 text-purple-400" />
                      <span className="text-purple-400 font-semibold text-sm sm:text-sm">{vp.bonus}</span>
                    </div>
                  )}
                </div>
                
                <div className="space-y-2 sm:space-y-2">
                  {vp.originalPrice && (
                    <p className="text-gray-400 line-through text-base sm:text-lg">RM {vp.originalPrice.toFixed(2)}</p>
                  )}
                  <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">RM {vp.price.toFixed(2)}</p>
                  {vp.originalPrice && (
                    <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 sm:px-3 py-1 sm:py-1 rounded-full text-sm font-bold">
                      SAVE RM {(vp.originalPrice - vp.price).toFixed(2)}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Step 3: Payment Selection */}
        <section className="bg-slate-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-700/50 shadow-2xl">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">3</div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Select Payment Method</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => handlePaymentSelection(method)}
                className={`px-3 sm:px-6 py-2 sm:py-4 rounded-lg sm:rounded-xl text-white font-bold transition-all shadow-lg flex items-center justify-center gap-2 sm:gap-3 transform hover:scale-105 ${
                  selectedPayment?.id === method.id
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 ring-2 ring-purple-400"
                    : "bg-gradient-to-r from-purple-600/80 to-blue-600/80 hover:from-purple-600 hover:to-blue-600"
                }`}
              >
                <method.icon className="h-4 w-4 sm:h-6 sm:w-6" />
                <span className="text-xs sm:text-sm">{method.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Step 4: Order Summary & Purchase */}
        <section className="bg-slate-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-700/50 shadow-2xl">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">4</div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Complete Purchase</h2>
          </div>
          
          {/* Email Input */}
          <div className="mb-4 sm:mb-6">
            <label className="block text-gray-300 text-xs sm:text-sm font-medium mb-1 sm:mb-2">
              Email Address (Optional - for receipt)
            </label>
            <div className="relative">
              <EnvelopeIcon className="absolute left-3 top-3 h-5 w-5 sm:h-6 sm:w-6 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="your.email@example.com"
                className="w-full pl-10 sm:pl-12 pr-4 py-2 sm:py-3 bg-slate-800/80 border border-slate-600 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Order Summary */}
          {selectedVP && selectedPayment && (
            <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 border border-slate-600/50">
              <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <CurrencyDollarIcon className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />
                Order Summary
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm sm:text-base">VP Package:</span>
                  <span className="text-white font-semibold text-sm sm:text-base">{selectedVP?.amount}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm sm:text-base">Payment Method:</span>
                  <span className="text-white font-semibold text-sm sm:text-base">{selectedPayment?.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm sm:text-base">Processing Fee:</span>
                  <span className="text-purple-400 font-semibold text-sm sm:text-base">FREE</span>
                </div>
                <hr className="border-slate-600" />
                <div className="flex justify-between items-center text-lg sm:text-xl">
                  <span className="text-white font-bold">Total:</span>
                  <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">RM {selectedVP?.price.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}

          {/* SMS Subscription */}
          <div className="flex items-start gap-2 sm:gap-3 mb-6 sm:mb-8">
            <input 
              type="checkbox" 
              checked={subscribeSMS} 
              onChange={handleSMSChange} 
              className="w-4 h-4 sm:w-5 sm:h-5 accent-purple-500 mt-1" 
            />
            <label className="text-gray-300 text-xs sm:text-sm">
              Yes, I would like to receive news, promotions, and exclusive offers via SMS. 
              You can unsubscribe at any time.
            </label>
          </div>

          {/* Purchase Button */}
          <button
            onClick={handlePurchase}
            disabled={!riotID || !selectedVP || !selectedPayment || isProcessing}
            className={`w-full py-3 sm:py-4 rounded-lg sm:rounded-xl text-white font-bold text-base sm:text-lg transition-all shadow-lg flex items-center justify-center gap-2 sm:gap-3 transform ${
              !riotID || !selectedVP || !selectedPayment || isProcessing
                ? "bg-slate-600 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 hover:scale-105 shadow-purple-500/25"
            }`}
          >
            {isProcessing ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 sm:h-6 sm:w-6 border-b-2 border-white"></div>
                Processing...
              </>
            ) : (
              <>
                <ShoppingCartIcon className="h-4 w-4 sm:h-6 sm:w-6" />
                Complete Purchase
              </>
            )}
          </button>

          {/* Security Notice */}
          <div className="mt-4 sm:mt-6 bg-purple-900/20 border border-purple-500/50 rounded-lg sm:rounded-xl p-3 sm:p-4">
            <div className="flex items-center gap-2 mb-1 sm:mb-2">
              <ShieldCheckIcon className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />
              <span className="text-purple-400 font-semibold text-sm sm:text-base">Secure Transaction</span>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm">
              Your payment is processed securely. VP will be credited to your account within 5 minutes. 
              Contact support if you need assistance.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ValorantPoints;
