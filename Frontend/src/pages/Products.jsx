import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import me from '../assets/me.jpeg';
import sheet from '../assets/sheet.jpeg';
import pipe from '../assets/pipe.jpeg';
import tube from '../assets/tube.png';
import bars from '../assets/bars.jpeg';
export function Products() {
  const productCategories = [{
    name: 'Mild Steel Coil',
    image: me,
    description: 'High-precision CNC machined components for various applications',
    applications: ['Automotive', 'Aerospace', 'Industrial']
  }, {
    name: 'Stainless Steel Sheets',
    image: sheet,
    description: 'Precision turned parts with tight tolerances and superior finish',
    applications: ['Medical', 'Electronics', 'Hydraulics']
  }, {
    name: 'Steel Precision Tubes',
    image: pipe,
    description: 'Custom fabricated components designed to your specifications',
    applications: ['Oil & Gas', 'Marine', 'Construction']
  }, {
    name: 'Crc Tube',
    image: tube,
    description: 'Complete assembly solutions with multiple component integration',
    applications: ['Automation', 'Robotics', 'Machinery']
  }, {
    name: 'Flat Bar',
    image: bars,
    description: 'Rapid prototyping services for product development',
    applications: ['R&D', 'Testing', 'Validation']
  }];
  return <div className="w-full">
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
            {productCategories.map((product, index) => <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
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
                      {product.applications.map((app, appIndex) => <span key={appIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {app}
                        </span>)}
                    </div>
                  </div>
                  <Link to="/enquiry" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                    Request Quote <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      {/* Capabilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Manufacturing Capabilities
            </h2>
            <p className="text-lg text-gray-600">
              Advanced manufacturing processes for superior quality
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">5</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                5-Axis CNC
              </h3>
              <p className="text-gray-600">Advanced 5-axis machining centers</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">±</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ±0.001" Tolerance
              </h3>
              <p className="text-gray-600">Precision tolerance capabilities</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">24</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                24/7 Production
              </h3>
              <p className="text-gray-600">Round-the-clock manufacturing</p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">✓</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Quality Assured
              </h3>
              <p className="text-gray-600">100% inspection guarantee</p>
            </div>
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
            <Link to="/enquiry" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Request Quote
            </Link>
            <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>;
}