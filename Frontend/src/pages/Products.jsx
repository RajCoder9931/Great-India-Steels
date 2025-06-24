import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import me from '../assets/me.jpeg';
import sheet from '../assets/bars.png';
import pipe from '../assets/pipe.jpeg';
import tube from '../assets/tube.png';
import bars from '../assets/bars.png';

export function Products() {
  const productCategories = [
    {
      name: 'Mild Steel Coil',
      image: me,
      description: 'High-precision CNC machined components for various applications',
      applications: ['Automotive', 'Aerospace', 'Industrial']
    },
    {
      name: 'Stainless Steel Sheets',
      image: sheet,
      description: 'Precision turned parts with tight tolerances and superior finish',
      applications: ['Medical', 'Electronics', 'Hydraulics']
    },
    {
      name: 'Steel Precision Tubes',
      image: pipe,
      description: 'Custom fabricated components designed to your specifications',
      applications: ['Oil & Gas', 'Marine', 'Construction']
    },
    {
      name: 'Crc Tube',
      image: tube,
      description: 'Complete assembly solutions with multiple component integration',
      applications: ['Automation', 'Robotics', 'Machinery']
    },
    {
      name: 'Flat Bar',
      image: bars,
      description: 'Rapid prototyping services for product development',
      applications: ['R&D', 'Testing', 'Validation']
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive range of precision machined components designed to
              meet the highest quality standards
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      Applications:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, appIndex) => (
                        <span
                          key={appIndex}
                          className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Link
                      to="/enquiry"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Request Quote <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Link>

                    <button
                      onClick={() => {
                        const message = `Customer Name:%0AProduct Name: ${product.name}%0AQuantity:`;
                        const whatsappUrl = `https://wa.me/919931993138?text=${message}`; // Replace with your number
                        window.open(whatsappUrl, '_blank');
                      }}
                      className="text-green-600 hover:text-green-700 font-semibold flex items-center"
                    >
                      <svg
                        className="h-5 w-5 mr-1 fill-current"
                        viewBox="0 0 32 32"
                      >
                        <path d="M19.11 17.51c-.29-.15-1.71-.84-1.98-.94s-.46-.15-.65.15-.75.94-.92 1.13-.34.23-.63.08a7.46 7.46 0 0 1-2.21-1.37 8.26 8.26 0 0 1-1.53-1.89c-.16-.27-.02-.41.12-.56.13-.13.29-.34.43-.51a1.93 1.93 0 0 0 .29-.48.48.48 0 0 0-.02-.49c-.06-.14-.63-1.52-.86-2.07s-.46-.48-.65-.49a1.59 1.59 0 0 0-.47-.01 1 1 0 0 0-.73.34 3.06 3.06 0 0 0-.95 2.29 5.34 5.34 0 0 0 1.14 2.8 12.28 12.28 0 0 0 4.81 4.22 11.28 11.28 0 0 0 1.13.42 2.72 2.72 0 0 0 1.24.08 3.26 3.26 0 0 0 2.15-1.51 2.7 2.7 0 0 0 .19-1.51c-.07-.14-.27-.22-.56-.37Z" />
                        <path d="M16 3a13 13 0 0 0-11.32 19.57l-1.39 5a1 1 0 0 0 1.22 1.22l5-1.39A13 13 0 1 0 16 3Zm0 24A11 11 0 0 1 8.54 7.54 11 11 0 0 1 23.46 23.46 11 11 0 0 1 16 27Z" />
                      </svg>
                      WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Need Custom Components?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us to discuss your specific requirements and get a custom
            quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/enquiry"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Request Quote
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
