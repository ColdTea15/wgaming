import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  Home,
  Trophy,
  Coins,
  HelpCircle,
  Mail,
  Info,
} from "lucide-react";

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
          {/* Brand */}
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 text-transparent bg-clip-text hover:opacity-80 transition-opacity"
          >
            W Gaming
          </Link>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <li key={item.href} className="relative group text-center">
                <Link
                  href={item.href}
                  className="flex flex-col items-center text-gray-300 hover:text-white transition-all duration-300"
                >
                  <item.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-125 group-hover:text-purple-400" />
                  {/* Tooltip under icon */}
                  <span className="absolute top-9 text-sm opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 bg-slate-800/90 text-white px-2 py-1 rounded-md shadow-lg mt-2 border border-purple-500/20">
                    {item.label}
                  </span>
                  <span className="mt-1 h-0.5 w-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transition-all duration-500 group-hover:w-6 rounded-full shadow-md"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile nav */}
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

      {/* Padding offset for fixed nav */}
      <div className="pt-20" />
    </>
  );
};

export default Navbar;
