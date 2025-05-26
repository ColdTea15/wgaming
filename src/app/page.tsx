import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-black via-purple-900 to-black text-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <header className="h-screen flex items-center justify-center relative">
        <div className="text-center relative z-10">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow-lg">
            Fast & Secure Valorant Boosting & VP Top-ups
          </h1>
          <div className="mt-6 space-x-4 flex justify-center">
  <Link 
    href="/boosting" 
    className="px-6 py-3 text-lg font-bold rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 
              shadow-lg transition-all duration-300 transform hover:scale-105 
              hover:from-pink-500 hover:to-purple-600 hover:shadow-[0_0_15px_rgba(236,72,153,0.8)]">
    Get Boosted Now
  </Link>
  <Link 
    href="/valorant-points" 
    className="px-6 py-3 text-lg font-bold rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 
              shadow-lg transition-all duration-300 transform hover:scale-105 
              hover:from-purple-600 hover:to-blue-500 hover:shadow-[0_0_15px_rgba(96,165,250,0.8)]">
    Buy Valorant Points
  </Link>
</div>

          <div className="mt-6 flex justify-center space-x-4">
            <img src="/fpx.png" alt="TNG" className="h-15" />
            <img src="/tng.png" alt="FPX" className="h-10" />
          </div>
        </div>
      </header>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 text-center">
  <h2 className="text-3xl font-bold text-white mb-8">Why Choose Us?</h2>
  <div className="grid md:grid-cols-3 gap-6">
    <div className="p-6 bg-gray-800 rounded-lg shadow-md border border-transparent 
                    transition-all duration-300 transform hover:scale-105 
                    hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 
                    hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.8)]">
      <h3 className="text-xl font-semibold">Fast Delivery</h3>
      <p className="mt-2 text-gray-300">Get your boost or VP in record time.</p>
    </div>
    <div className="p-6 bg-gray-800 rounded-lg shadow-md border border-transparent 
                    transition-all duration-300 transform hover:scale-105 
                    hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 
                    hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.8)]">
      <h3 className="text-xl font-semibold">Secure & Anonymous</h3>
      <p className="mt-2 text-gray-300">We prioritize your privacy and security.</p>
    </div>
    <div className="p-6 bg-gray-800 rounded-lg shadow-md border border-transparent 
                    transition-all duration-300 transform hover:scale-105 
                    hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 
                    hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.8)]">
      <h3 className="text-xl font-semibold">Professional Players</h3>
      <p className="mt-2 text-gray-300">Only the best players handle your account.</p>
    </div>
  </div>
</section>

      {/* Testimonials & Reviews */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-800 rounded-lg shadow-md">
            <p className="text-gray-400 italic">"Amazing service! Got my rank boosted super fast!"</p>
            <h4 className="mt-4 text-sm font-semibold">- Alex G.</h4>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-md">
            <p className="text-gray-400 italic">"Safe and reliable. Highly recommended!"</p>
            <h4 className="mt-4 text-sm font-semibold">- Sarah L.</h4>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-md">
            <p className="text-gray-400 italic">"The best boosting service out there. Will use again!"</p>
            <h4 className="mt-4 text-sm font-semibold">- Kevin T.</h4>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;