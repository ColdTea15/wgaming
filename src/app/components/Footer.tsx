import Link from 'next/link';

const Footer = () => {
    return (
      <footer className="bg-slate-950 border-t border-purple-500/20 p-6 text-center text-white">
        <p className="mb-2 text-gray-300">&copy; 2025 Valorant E-Store. All rights reserved.</p>
        <p className="text-sm text-gray-400">
          By using our services, you agree to our{' '}
          <Link href="/terms" className="text-purple-400 hover:text-purple-300 transition-colors">
            Terms & Conditions
          </Link>
        </p>
      </footer>
    );
  };
  export default Footer;
  