import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsPage() {
    return (
      <div className="bg-gradient-to-b from-black via-purple-900 to-black text-white min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 py-10">
          <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Terms and Conditions
          </h1>
          <p className="mb-6 text-gray-300 text-center max-w-2xl mx-auto">
            Welcome to our website. By accessing and using our services, you agree to the following terms and conditions.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-purple-500/50 transition duration-300">
              <h2 className="text-2xl font-semibold text-purple-400">1. General Terms</h2>
              <p className="text-gray-300 mt-2">These Terms govern your use of our platform, including any purchases or services provided.</p>
            </div>
    
            <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-purple-500/50 transition duration-300">
              <h2 className="text-2xl font-semibold text-purple-400">2. Payments & Refunds</h2>
              <p className="text-gray-300 mt-2">All payments are final. Refunds will only be issued under exceptional circumstances.</p>
            </div>
    
            <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-purple-500/50 transition duration-300">
              <h2 className="text-2xl font-semibold text-purple-400">3. User Responsibilities</h2>
              <p className="text-gray-300 mt-2">You agree not to misuse our services or engage in any fraudulent activities.</p>
            </div>
    
            <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-purple-500/50 transition duration-300">
              <h2 className="text-2xl font-semibold text-purple-400">4. Changes to Terms</h2>
              <p className="text-gray-300 mt-2">We reserve the right to modify these terms at any time. Continued use of our services implies acceptance of the latest terms.</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
}
