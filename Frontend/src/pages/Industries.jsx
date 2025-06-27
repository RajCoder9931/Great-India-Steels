import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export function Industries() {
  const industries = [{
    name: 'Automotive',
    icon: '🚗',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Precision components for automotive applications including engine parts, transmission components, and chassis elements.',
    applications: ['Engine Components', 'Transmission Parts', 'Brake Systems', 'Suspension Components']
  }, {
    name: 'Aerospace',
    icon: '✈️',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'High-precision aerospace components meeting stringent quality and safety standards for commercial and defense applications.',
    applications: ['Aircraft Structures', 'Engine Components', 'Landing Gear', 'Avionics Housing']
  }, {
    name: 'Medical Devices',
    icon: '🏥',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Bio-compatible precision components for medical devices and surgical instruments with FDA compliance.',
    applications: ['Surgical Instruments', 'Implant Components', 'Diagnostic Equipment', 'Medical Devices']
  }, {
    name: 'Oil & Gas',
    icon: '⛽',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Robust components for oil and gas industry applications, designed to withstand harsh environments.',
    applications: ['Valve Components', 'Pump Parts', 'Pipeline Fittings', 'Drilling Equipment']
  }];
  return <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Delivering precision manufacturing solutions across diverse
              industries with specialized expertise and quality assurance
            </p>
          </div>
        </div>
      </section>
      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {industries.map((industry, index) => <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <span className="text-4xl mr-4">{industry.icon}</span>
                    <h2 className="text-3xl font-bold text-gray-900">
                      {industry.name}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">
                    {industry.description}
                  </p>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Key Applications:
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {industry.applications.map((app, appIndex) => <div key={appIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          <span className="text-gray-700">{app}</span>
                        </div>)}
                    </div>
                  </div>
                  <Link to="/enquiry" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Request Quote
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img src={industry.image} alt={industry.name} className="rounded-lg shadow-lg w-full h-80 object-cover" />
                </div>
              </div>)}
          </div>
        </div>
      </section>
      {/* Statistics Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industry Experience
            </h2>
            <p className="text-lg text-gray-600">
              Our track record across industries
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">9+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">5</div>
              <div className="text-gray-600">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">100%</div>
              <div className="text-gray-600">Quality Assurance</div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Discover how our industry expertise can benefit your next project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Contact Us
            </Link>
            <Link to="/products" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              View Products
            </Link>
          </div>
        </div>
      </section>
    </div>;
}