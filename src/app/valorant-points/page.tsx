"use client";
import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import {
  ShoppingCartIcon,
  CreditCardIcon,
  EnvelopeIcon,
  CheckIcon,
} from "@heroicons/react/24/solid";

const vpPackages = [
  { id: 1, amount: "475 VP", price: 18.00 },
  { id: 2, amount: "1000 VP", price: 37.00 },
  { id: 3, amount: "2050 VP", price: 75.90 },
  { id: 4, amount: "3650 VP", price: 125.00 },
  { id: 5, amount: "5350 VP", price: 175.00 },
  { id: 6, amount: "11000 VP", price: 355.00 },
];

const ValorantPoints = () => {
  const [riotID, setRiotID] = useState("");
  const [selectedVP, setSelectedVP] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [email, setEmail] = useState("");
  const [subscribeSMS, setSubscribeSMS] = useState(false);

  const handleRiotIDChange = (event) => {
    setRiotID(event.target.value);
  };

  const handleVPSelection = (vp) => {
    setSelectedVP(vp);
  };

  const handlePaymentSelection = (method) => {
    setSelectedPayment(method);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSMSChange = () => {
    setSubscribeSMS(!subscribeSMS);
  };

  const handlePurchase = () => {
    if (!riotID || !selectedVP || !selectedPayment) {
      alert("Please fill in all required fields!");
      return;
    }
    alert(
      `Purchase Successful!\n\nRiot ID: ${riotID}\nVP Package: ${selectedVP.amount} - RM ${selectedVP.price.toFixed(2)}\nPayment Method: ${selectedPayment}\nTotal Paid: RM ${selectedVP.price.toFixed(2)}\nEmail: ${email || "Not Provided"}\nSubscribed to SMS: ${
        subscribeSMS ? "Yes" : "No"
      }`
    );
  };

  return (
    <div className="text-white min-h-screen flex flex-col relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900 to-black -z-10"></div>
      <Navbar />
      {/* Hero Section */}
      <section className="text-center py-12 px-4">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-lg">
          W GAMING VP Store
        </h1>
      </section>

      {/* Riot ID Input */}
      <section className="container mx-auto px-6 py-4">
        <h2 className="text-2xl font-semibold text-gray-300">1. Enter your Riot ID</h2>
        <input
          type="text"
          value={riotID}
          onChange={handleRiotIDChange}
          placeholder="Enter your Riot ID"
          className="mt-2 w-full p-3 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-500"
        />
      </section>

      {/* VP Selection Grid */}
      <section className="container mx-auto px-6 py-4">
        <h2 className="text-2xl font-semibold text-gray-300">2. Select Recharge</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {vpPackages.map((vp) => (
            <div
              key={vp.id}
              onClick={() => handleVPSelection(vp)}
              className={`p-6 rounded-xl text-center shadow-lg border ${
                selectedVP?.id === vp.id ? "border-red-500 bg-gray-700" : "border-gray-700 bg-gray-800"
              } hover:scale-105 transition-all cursor-pointer`}
            >
              <h2 className="text-2xl font-bold text-red-400">{vp.amount}</h2>
              <p className="text-lg text-gray-300 mt-2">RM {vp.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Payment Selection */}
      <section className="container mx-auto px-6 py-4">
        <h2 className="text-2xl font-semibold text-gray-300">3. Select Payment</h2>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button
            onClick={() => handlePaymentSelection("FPX Online Banking")}
            className={`w-full sm:w-1/2 px-5 py-3 rounded-lg text-white font-bold transition-all shadow-md flex items-center justify-center gap-2 ${
              selectedPayment === "FPX Online Banking"
                ? "bg-blue-700"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            <CreditCardIcon className="h-5 w-5" />
            FPX Online Banking
          </button>
          <button
            onClick={() => handlePaymentSelection("Touch 'n Go")}
            className={`w-full sm:w-1/2 px-5 py-3 rounded-lg text-white font-bold transition-all shadow-md flex items-center justify-center gap-2 ${
              selectedPayment === "Touch 'n Go" ? "bg-yellow-600" : "bg-yellow-500 hover:bg-yellow-600"
            }`}
          >
            <CreditCardIcon className="h-5 w-5" />
            Touch 'n Go
          </button>
        </div>
      </section>

      {/* Buy Section (Now Dynamic) */}
      <section className="container mx-auto px-6 py-4">
        <h2 className="text-2xl font-semibold text-gray-300">4. Buy!</h2>
        <p className="text-gray-400 text-sm">
          OPTIONAL: If you would like a receipt of the purchase by email, please enter an email address.
        </p>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="E-mail address (Optional)"
          className="mt-2 w-full p-3 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-500 opacity-50"
        />

        {/* Selected VP & Payment Summary */}
        {selectedVP && (
          <div className="mt-4 p-4 bg-gray-900 rounded-md">
            <p className="text-lg font-bold text-white">Selected VP Package:</p>
            <p className="text-xl text-red-400">{selectedVP.amount}</p>
            <p className="text-lg text-gray-300">Price: RM {selectedVP.price.toFixed(2)}</p>
          </div>
        )}

        {selectedPayment && (
          <div className="mt-2 p-4 bg-gray-900 rounded-md">
            <p className="text-lg font-bold text-white">Payment Method:</p>
            <p className="text-lg text-gray-300">{selectedPayment}</p>
          </div>
        )}

        {/* Total Price */}
        {selectedVP && selectedPayment && (
          <div className="mt-2 p-4 bg-green-900 rounded-md">
            <p className="text-lg font-bold text-white">Total Price:</p>
            <p className="text-2xl font-bold text-green-400">RM {selectedVP.price.toFixed(2)}</p>
          </div>
        )}

        {/* SMS Subscription */}
        <div className="mt-4 flex items-center gap-2">
          <input type="checkbox" checked={subscribeSMS} onChange={handleSMSChange} className="w-5 h-5 accent-red-500" />
          <label className="text-gray-400">Yes, I would like to receive news and promotions via SMS.</label>
        </div>

        {/* Buy Now Button */}
        <button
          onClick={handlePurchase}
          className="mt-6 w-full bg-green-600 hover:bg-green-700 px-5 py-3 rounded-lg text-white font-bold transition-all shadow-md flex items-center justify-center gap-2"
        >
          <ShoppingCartIcon className="h-5 w-5" />
          Buy Now
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default ValorantPoints;
