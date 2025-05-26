"use client"
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const faqs = [
  { question: "Is boosting safe?", answer: "Yes, we use VPN protection to ensure no bans or security risks." },
  { question: "How long does it take?", answer: "It depends on your current and desired rank. We provide an estimated timeframe before starting." },
  { question: "Can I play while boosting?", answer: "Only if you select the Duo option, where you play alongside our booster." }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-b from-black via-purple-900 to-black text-white min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          Frequently Asked Questions
        </h1>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-purple-500/50 transition duration-300 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-xl font-semibold text-purple-400 flex justify-between items-center">
                {faq.question}
                <span>{openIndex === index ? "−" : "+"}</span>
              </h3>
              {openIndex === index && <p className="mt-2 text-gray-300">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
