"use client"
import { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ranks = [
  'Iron 1', 'Iron 2', 'Iron 3',
  'Bronze 1', 'Bronze 2', 'Bronze 3',
  'Silver 1', 'Silver 2', 'Silver 3',
  'Gold 1', 'Gold 2', 'Gold 3',
  'Platinum 1', 'Platinum 2', 'Platinum 3',
  'Diamond 1', 'Diamond 2', 'Diamond 3',
  'Ascendant 1', 'Ascendant 2', 'Ascendant 3',
  'Immortal 1', 'Immortal 2', 'Immortal 3',
  'Radiant'
];

const Boosting = () => {
  const [currentRank, setCurrentRank] = useState('');
  const [desiredRank, setDesiredRank] = useState('');
  const [boostType, setBoostType] = useState('Solo');
  const [placementMatches, setPlacementMatches] = useState(1);
  const [winsCount, setWinsCount] = useState(1);
  const [levelsCount, setLevelsCount] = useState(1);

  const calculateRankPrice = () => {
    const startIndex = ranks.indexOf(currentRank);
    const endIndex = ranks.indexOf(desiredRank);
    if (startIndex >= endIndex) return 0;
    const rankDifference = endIndex - startIndex;
    const basePrice = rankDifference * 4.99;
    return boostType === 'Duo' ? basePrice * 1.5 : basePrice;
  };

  const placementPrice = placementMatches * 9.99;
  const winPrice = winsCount * 3.99;
  const levelPrice = levelsCount * 2.99;

  return (
    <div className="text-white min-h-screen flex flex-col relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900 to-black -z-10"></div>
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Rank Boosting Section */}
        <section className="mb-16 p-6 bg-gray-800 rounded-xl shadow-2xl">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text mb-8">
            Rank Boosting
          </h1>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block mb-2 text-lg">Current Rank</label>
              <select 
                className="w-full p-3 bg-gray-900 rounded-lg"
                value={currentRank}
                onChange={(e) => setCurrentRank(e.target.value)}
              >
                <option value="">Select Current Rank</option>
                {ranks.map(rank => (
                  <option key={rank} value={rank}>{rank}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block mb-2 text-lg">Desired Rank</label>
              <select 
                className="w-full p-3 bg-gray-900 rounded-lg"
                value={desiredRank}
                onChange={(e) => setDesiredRank(e.target.value)}
              >
                <option value="">Select Desired Rank</option>
                {ranks.map(rank => (
                  <option key={rank} value={rank}>{rank}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-lg">Boost Type</label>
            <div className="flex gap-4">
              {['Solo', 'Duo'].map(type => (
                <button
                  key={type}
                  onClick={() => setBoostType(type)}
                  className={`px-6 py-3 rounded-lg font-bold transition-all ${
                    boostType === type 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-500'
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="text-2xl font-bold mb-6">
            Total Price: ${calculateRankPrice().toFixed(2)}
          </div>

          <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg font-bold hover:opacity-90 transition-opacity">
            Checkout Rank Boost
          </button>
        </section>

        {/* Placement Matches Section */}
        <section className="mb-16 p-6 bg-gray-800 rounded-xl shadow-2xl">
          <h2 className="text-3xl font-bold mb-6">Placement Matches Boosting</h2>
          
          <div className="mb-6">
            <label className="block mb-2 text-lg">Number of Matches</label>
            <select
              className="w-full p-3 bg-gray-900 rounded-lg"
              value={placementMatches}
              onChange={(e) => setPlacementMatches(Number(e.target.value))}
            >
              {[...Array(10).keys()].map(n => (
                <option key={n+1} value={n+1}>{n+1} Match{n+1 > 1 ? 'es' : ''}</option>
              ))}
            </select>
          </div>

          <div className="text-lg mb-6">
            🛡️ 80% Win Rate Guaranteed
          </div>

          <div className="text-2xl font-bold mb-6">
            Total Price: ${placementPrice.toFixed(2)}
          </div>

          <button className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg font-bold hover:opacity-90 transition-opacity">
            Checkout Placements
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Boosting;