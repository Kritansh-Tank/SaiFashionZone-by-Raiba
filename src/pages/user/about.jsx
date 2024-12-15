import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../components/user/navbar/navbar";
import { Helmet } from "react-helmet";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
  }, []);

  const SectionCard = ({ title, children, className = "", dataAos = "" }) => (
    <div
      data-aos={dataAos}
      className={`bg-white rounded-3xl p-8 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl shadow-lg ${className}`}
      style={{
        background: "linear-gradient(145deg, #ffffff 0%, #ffe6f2 100%)",
      }}
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-pink-200 pb-2">
        {title}
      </h2>
      {children}
    </div>
  );

  return (
    <>
      <Helmet>
        <title>About Us | SaiFashionZone by Raiba</title>
      </Helmet>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                About Our Company
              </span>
              <span className="text-gray-800 block text-3xl mt-2">
                Empowering Connections, Inspiring Growth
              </span>
            </h1>
          </div>

          {/* About Sections */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* About Our Company Section */}
            <SectionCard title="About Our Company" dataAos="fade-right">
              <p className="text-gray-600 mb-4 leading-relaxed">
                At SaiFashionZone by Raiba, we are passionate about redefining
                fashion with a perfect blend of tradition and modernity.
                Specializing in a curated selection of sarees and girl's wear,
                we strive to provide high-quality, stylish clothing that
                resonates with our customer's unique tastes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment goes beyond just selling clothes; we aim to
                deliver an exceptional shopping experience that values your
                trust and celebrates your individuality. Whether you're looking
                for timeless ethnic pieces or trendy wear, SaiFashionZone by
                Raiba is your one-stop destination for fashion that speaks to
                your soul.
              </p>
            </SectionCard>

            {/* Why Choose Us Section */}
            <SectionCard title="Why Choose Us?" dataAos="fade-left">
              <p className="text-gray-600 mb-4 leading-relaxed">
                At SaiFashionZone by Raiba, we prioritize quality and style to
                ensure every customer finds clothing that resonates with their
                unique personality. Our diverse collections, ranging from
                elegant sarees to trendy girl's wear, are carefully curated to
                suit every taste and occasion.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With a strong customer-centric approach, we aim to make your
                shopping experience seamless and enjoyable, from browsing our
                user-friendly website to receiving your orders with reliable
                delivery. By blending tradition with modernity, we create
                clothing that celebrates cultural heritage while embracing
                contemporary trends, making SaiFashionZone by Raiba your perfect
                fashion destination.
              </p>
            </SectionCard>

            {/* Objective Section */}
            <SectionCard
              title="Objectives"
              dataAos="fade-right"
              className="lg:col-span-2"
            >
              <ul className="text-gray-600 leading-relaxed list-disc list-inside space-y-2">
                <li>
                  To offer a wide range of high-quality clothing products that
                  cater to diverse tastes and preferences, including traditional
                  sarees and trendy girl's wear.
                </li>
                <li>
                  To provide a seamless and enjoyable shopping experience
                  through a user-friendly website, reliable delivery, and
                  excellent customer service.
                </li>
                <li>
                  To celebrate the fusion of tradition and modernity by offering
                  designs that reflect cultural heritage while embracing
                  contemporary fashion trends.
                </li>
                <li>
                  To ensure affordability without compromising on quality,
                  making fashion accessible to everyone.
                </li>
                <li>
                  To build a trusted brand that fosters long-term relationships
                  with customers by consistently delivering value and
                  satisfaction.
                </li>
              </ul>
            </SectionCard>

            {/* Vision Section */}
            <SectionCard title="Vision" dataAos="fade-right">
              <p className="text-gray-600 leading-relaxed">
                To be a leading e-commerce destination for fashion, offering a
                perfect blend of tradition and modernity. We aspire to empower
                individuals by providing high-quality, stylish clothing that
                enhances confidence, celebrates culture, and promotes
                self-expression.
              </p>
            </SectionCard>

            {/* Mission Section */}
            <SectionCard title="Mission" dataAos="fade-left">
              <p className="text-gray-600 leading-relaxed">
                Our mission is to redefine online fashion by offering a diverse
                range of high-quality, stylish clothing that blends tradition
                with modern trends. We are committed to providing affordable,
                accessible, and convenient shopping experiences while
                celebrating individuality and cultural heritage.
              </p>
            </SectionCard>
          </div>

          <div className="mt-16 text-center">
            <div className="rounded-2xl shadow-2xl mx-auto max-w-4xl h-auto transform transition duration-500 hover:scale-[1.01]">
              SaiFashionZone by Raiba Team
            </div>
          </div>

          {/* Footer Text */}
          <div className="text-center mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                Join Our Journey
              </span>
              <span className="text-gray-800 block text-2xl mt-2">
                Together, We Create Extraordinary Experiences
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Welcome to a world where elegance meets convenience, and every
              purchase is a step toward expressing your personal style!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
