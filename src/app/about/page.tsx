import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="text-white min-h-screen flex flex-col relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900 to-black -z-10"></div>
      <Navbar />
      <section className="p-10 text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          About Us
        </h1>
        
        <div className="mt-6 max-w-3xl mx-auto text-gray-300 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-purple-400">Who We Are</h2>
            <p className="mt-2">
              We are a dedicated team of professional esports players with years of experience in competitive gaming.
              Our passion for gaming and deep understanding of the industry led us to create this platform.
              We aim to provide players with secure and efficient boosting services to help them achieve their goals.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-purple-400">Our Mission</h2>
            <p className="mt-2">
              Our mission is to offer a seamless and secure experience for gamers looking to enhance their ranks and accounts.
              We specialise in professional boosting services and VP top-ups, ensuring fast and reliable delivery with the highest level of security.
              Our team is committed to maintaining integrity and customer satisfaction at all times.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;