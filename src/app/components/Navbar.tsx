import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-slate-900 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] bg-[length:20px_20px] border-b border-purple-500/20 p-4 shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 text-transparent bg-clip-text hover:opacity-80 transition-opacity">
            W Gaming
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link 
                href="/" 
                className="text-gray-300 hover:text-white transition-all duration-300 relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link 
                href="/boosting" 
                className="text-gray-300 hover:text-white transition-all duration-300 relative group"
              >
                Boosting
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link 
                href="/valorant-points" 
                className="text-gray-300 hover:text-white transition-all duration-300 relative group"
              >
                VP Store
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link 
                href="/faq" 
                className="text-gray-300 hover:text-white transition-all duration-300 relative group"
              >
                FAQ
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="text-gray-300 hover:text-white transition-all duration-300 relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="text-gray-300 hover:text-white transition-all duration-300 relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="pt-20">
        {/* This div will add padding to the top of all content */}
      </div>
    </>
  );
};

export default Navbar;
