import Link from "next/link";
import { useState } from "react";
import { Menu, X, Home, Trophy, Coins, HelpCircle, Mail, Info } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/boosting", label: "Boosting", icon: Trophy },
    { href: "/valorant-points", label: "VP Store", icon: Coins },
    { href: "/faq", label: "FAQ", icon: HelpCircle },
    { href: "/contact", label: "Contact", icon: Mail },
    { href: "/about", label: "About", icon: Info },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-slate-900 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] bg-[length:20px_20px] border-b border-purple-500/20 p-4 shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 text-transparent bg-clip-text hover:opacity-80 transition-opacity"
          >
            W Gaming
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-12">
            {navItems.map((item) => (
              <li key={item.href} className="min-w-[40px]">
                <Link
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-all duration-300 relative group flex items-center"
                  title={item.label}
                >
                  <div className="relative flex items-center overflow-visible">
                    <div className="flex items-center transition-all duration-300 group-hover:-translate-x-1 group-hover:scale-110 group-active:rotate-3">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="absolute left-6 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap transform translate-x-[-100%] group-hover:translate-x-0 text-sm bg-slate-800/90 px-2 py-1 rounded-md backdrop-blur-sm border border-purple-500/20 shadow-lg">
                      {item.label}
                    </span>
                  </div>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 transform ${
            isMenuOpen
              ? "scale-100 opacity-100"
              : "scale-95 opacity-0 pointer-events-none"
          } absolute top-full left-0 right-0 bg-slate-900 border-b border-purple-500/20 shadow-lg`}
        >
          <ul className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-200 active:scale-95"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5 transition-transform duration-200 group-active:rotate-3" />
                  {item.label}
                </Link>
              </li>
            ))}
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
