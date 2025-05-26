import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-black via-purple-900 to-black text-white min-h-screen">
      <Navbar />
      <section className="p-10 text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          Contact Us
        </h1>
        <p className="text-gray-300 mt-4">Reach out via Discord, WhatsApp, or Email.</p>
      </section>

      {/* Contact Cards Container */}
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6 text-center">
        {[
          {
            name: "WhatsApp",
            img: "/whatsapp.png",
            color: "text-green-400",
            bgColor: "bg-green-500",
            link: "https://wa.me/YOUR_NUMBER",
            buttonText: "Message Now",
            hover: "hover:bg-green-600",
            description: "Chat with us instantly on WhatsApp.",
          },
          {
            name: "Discord",
            img: "/discord.png",
            color: "text-blue-400",
            bgColor: "bg-blue-500",
            link: "https://discord.gg/YOUR_SERVER",
            buttonText: "Join Now",
            hover: "hover:bg-blue-600",
            description: "Join our Discord server for support & updates.",
          },
          {
            name: "Email",
            img: "/gmail.png",
            color: "text-red-400",
            bgColor: "bg-red-500",
            link: "mailto:your.email@example.com",
            buttonText: "Send Email",
            hover: "hover:bg-red-600",
            description: "Send us an email for any inquiries.",
          },
        ].map((contact, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-300 min-h-[280px] space-y-3"
          >
            <div className="w-16 h-16 flex items-center justify-center">
              <Image src={contact.img} alt={contact.name} width={96} height={96} />
            </div>
            <h2 className={`text-2xl font-semibold ${contact.color}`}>{contact.name}</h2>
            <p className="text-gray-300 text-sm">{contact.description}</p>
            <a
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-auto ${contact.bgColor} px-4 py-2 rounded-lg text-black font-bold ${contact.hover} transition duration-300`}
            >
              {contact.buttonText}
            </a>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};
export default Contact;
