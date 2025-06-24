import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  UsersIcon,
  CogIcon,
  ShieldCheckIcon
} from 'lucide-react';

export function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://5.imimg.com/data5/SELLER/Default/2024/4/409961879/UC/KE/SK/219333807/ms-pipe-and-tube-500x500.jpg',
    'https://www.mannesmann-precision-tubes.com/fileadmin/footage/MEDIA/gesellschaften/mpt/pictures/Geschweisst_gezogene_Rohre.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const industries = [
    { name: 'Automotive', icon: '🚗' },
    { name: 'Aerospace', icon: '✈️' },
    { name: 'Medical', icon: '🏥' },
    { name: 'Oil & Gas', icon: '⛽' }
  ];

  const highlights = [
    {
      icon: <UsersIcon className="h-8 w-8" />,
      title: '500+ Clients',
      description: 'Trusted by leading companies worldwide'
    },
    {
      icon: <CogIcon className="h-8 w-8" />,
      title: '25+ Years',
      description: 'Experience in precision manufacturing'
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8" />,
      title: 'ISO Certified',
      description: 'Quality management systems'
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${images[currentImageIndex]})`
        }}
      >
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Precision <span className="text-blue-400">Machined</span> Components
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Leading manufacturer of high-quality precision components for
            automotive, aerospace, medical, and industrial applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center"
            >
              Contact Us <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/products"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                AboutIndian Metalic Industries

              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With over 25 years of experience in precision manufacturing,Indian Metalic Industries
 has established itself as a trusted partner for companies requiring high-quality machined components.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">
                    ISO 9001:2015 Certified Quality Management
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">
                    State-of-the-art CNC Machining Centers
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">
                    Experienced Engineering Team
                  </span>
                </div>
              </div>
              <Link to="/about" className="inline-flex items-center mt-8 text-blue-600 hover:text-blue-700 font-semibold">
                Learn More <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div>
              <img src ='' alt="Manufacturing facility" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>
      {/* Key Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600">
              Delivering excellence in precision manufacturing
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => <div key={index} className="text-center bg-white p-8 rounded-lg shadow-md">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {highlight.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>)}
          </div>
        </div>
      </section>
      {/* Industries Served */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600">
              Providing precision components across multiple sectors
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {industries.map((industry, index) => <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {industry.name}
                </h3>
              </div>)}
          </div>
          <div className="text-center mt-12">
            <Link to="/industries" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              View All Industries <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to discuss your precision machining requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/enquiry" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Request Quote
            </Link>
            <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
     );
}
