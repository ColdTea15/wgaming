"use client"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { 
  PhoneIcon,
  ShieldCheckIcon, 
  BoltIcon, 
  StarIcon, 
  ClockIcon,
  ChatBubbleLeftRightIcon, 
  EnvelopeIcon 
} from '@heroicons/react/24/solid';

interface ContactMethod {
  id: string;
  name: string;
  img: string;
  color: string;
  bgColor: string;
  gradient: string;
  link: string;
  buttonText: string;
  hover: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const Contact = () => {
  const contactMethods: ContactMethod[] = [
    {
      id: "whatsapp",
      name: "WhatsApp",
      img: "/whatsapp.png",
      color: "text-green-400",
      bgColor: "bg-green-500",
      gradient: "from-green-500 to-emerald-500",
      link: "https://wa.me/YOUR_NUMBER",
      buttonText: "Message Now",
      hover: "hover:bg-green-600",
      description: "Chat with us instantly on WhatsApp.",
      icon: PhoneIcon
    },
    {
      id: "discord",
      name: "Discord",
      img: "/discord.png",
      color: "text-blue-400",
      bgColor: "bg-blue-500",
      gradient: "from-blue-500 to-indigo-500",
      link: "https://discord.gg/zheKGYVyW9",
      buttonText: "Join Now",
      hover: "hover:bg-blue-600",
      description: "Join our Discord server for support & updates.",
      icon: ChatBubbleLeftRightIcon
    },
    {
      id: "email",
      name: "Email",
      img: "/gmail.png",
      color: "text-red-400",
      bgColor: "bg-red-500",
      gradient: "from-red-500 to-pink-500",
      link: "mailto:colmantjs03@gmail.com",
      buttonText: "Send Email",
      hover: "hover:bg-red-600",
      description: "Send us an email for any inquiries.",
      icon: EnvelopeIcon
    }
  ];

  return (
    <div className="text-white min-h-screen flex flex-col relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-900 -z-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-purple-500 rounded-full animate-pulse opacity-60 -z-10"></div>
      <div className="absolute top-60 right-20 w-4 h-4 bg-cyan-500 rounded-full animate-bounce opacity-50 -z-10"></div>
      <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-blue-500 rounded-full animate-pulse opacity-70 -z-10"></div>

      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-8 sm:py-12 md:py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent blur-3xl"></div>
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 text-transparent bg-clip-text drop-shadow-2xl mb-2 sm:mb-4">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-8">Get in touch with our support team</p>
          
          {/* Trust Badges */}
          <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 flex-wrap">
            <div className="flex items-center gap-1 sm:gap-2 bg-purple-900/30 px-2 sm:px-4 py-1.5 sm:py-2 rounded-full border border-purple-500/50">
              <ShieldCheckIcon className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />
              <span className="text-purple-400 font-semibold text-sm sm:text-base">24/7 Support</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 bg-cyan-900/30 px-2 sm:px-4 py-1.5 sm:py-2 rounded-full border border-cyan-500/50">
              <BoltIcon className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold text-sm sm:text-base">Fast Response</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 bg-blue-900/30 px-2 sm:px-4 py-1.5 sm:py-2 rounded-full border border-blue-500/50">
              <StarIcon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
              <span className="text-blue-400 font-semibold text-sm sm:text-base">Expert Team</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8 md:space-y-12 pb-8 sm:pb-12 md:pb-16">
        {/* Contact Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {contactMethods.map((contact) => (
            <div
              key={contact.id}
              className="group relative bg-slate-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-700/50 shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r ${contact.gradient} p-1 transition-transform duration-300 group-hover:scale-110`}>
                  <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                    <contact.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                </div>
                
                <h2 className={`text-xl sm:text-2xl font-bold ${contact.color}`}>{contact.name}</h2>
                <p className="text-sm sm:text-base text-gray-300">{contact.description}</p>
                
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-3 sm:mt-4 w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl font-bold text-white bg-gradient-to-r ${contact.gradient} transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-${contact.color}/25 text-sm sm:text-base`}
                >
                  {contact.buttonText}
                </a>
              </div>
            </div>
          ))}
        </section>

        {/* Support Hours */}
        <section className="bg-slate-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-700/50 shadow-2xl">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <ClockIcon className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">Support Hours</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm sm:text-base text-gray-300">Monday - Friday</span>
                <span className="text-sm sm:text-base text-white font-semibold">24/7</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm sm:text-base text-gray-300">Saturday - Sunday</span>
                <span className="text-sm sm:text-base text-white font-semibold">24/7</span>
              </div>
            </div>
            <div className="bg-purple-900/20 border border-purple-500/50 rounded-lg sm:rounded-xl p-3 sm:p-4">
              <p className="text-sm sm:text-base text-purple-400 font-semibold">Average Response Time</p>
              <p className="text-lg sm:text-2xl font-bold mt-1 sm:mt-2 text-white">Under 5 minutes</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-slate-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-700/50 shadow-2xl">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3 sm:space-y-4">
            <div className="bg-slate-800/50 rounded-lg sm:rounded-xl p-3 sm:p-4">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">How quickly will I get a response?</h3>
              <p className="text-sm sm:text-base text-gray-300">Our team typically responds within 5 minutes during support hours.</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg sm:rounded-xl p-3 sm:p-4">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">What information should I provide?</h3>
              <p className="text-sm sm:text-base text-gray-300">Please include your order number and specific questions or concerns.</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg sm:rounded-xl p-3 sm:p-4">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">Is my information secure?</h3>
              <p className="text-sm sm:text-base text-gray-300">Yes, we use secure channels and never share your information with third parties.</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
