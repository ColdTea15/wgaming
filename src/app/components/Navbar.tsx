import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-800 via-blue-600 to-purple-800
                  p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">W Gaming</h1>
        <ul className="flex space-x-6">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/boosting">Boosting</Link></li>
          <li><Link href="/valorant-points">VP Store</Link></li>
          <li><Link href="/faq">FAQ</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
