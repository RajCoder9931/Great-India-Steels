import React from 'react';
import { CheckCircleIcon, AwardIcon, ShieldCheckIcon } from 'lucide-react';
import Plant from '../assets/Plant.jpg';
import cnc from '../assets/cnc.jpg';
export function Infrastructure() {
  const facilities = [{
    title: 'Manufacturing Plant',
    image: Plant,
    description: 'State-of-the-art 50,000 sq ft manufacturing facility with climate-controlled environment',
    features: ['Climate Controlled', 'Clean Room Areas', 'Advanced Ventilation', 'Safety Systems']
  }, {
    title: 'CNC Machining Centers',
    image: cnc,
    description: 'Advanced 5-axis CNC machining centers with precision capabilities up to ±0.001"',
    features: ['5-Axis Capability', 'High Precision', '24/7 Operation', 'Automated Systems']
  }, {
    title: 'Quality Control Lab',
    image: 'https://www.shutterstock.com/image-photo/on-factory-scientist-sterile-protective-600nw-1268263753.jpg',
    description: 'Comprehensive quality control laboratory with advanced measurement equipment',
    features: ['CMM Machines', 'Surface Roughness', 'Material Testing', 'Calibrated Equipment']
  }, {
    title: 'Tool Room',
    image: 'https://www.atozmachine.com/blog/tool-rooms/a-to-z-machine-tool-room.jpg',
    description: 'Dedicated tool room for tool manufacturing, maintenance, and storage',
    features: ['Tool Manufacturing', 'Maintenance Bay', 'Tool Storage', 'Grinding Equipment']
  }];
  const certifications = [{
    name: 'ISO 9001:2015',
    description: 'Quality Management System',
    icon: <AwardIcon className="h-8 w-8" />
  }, {
    name: 'AS9100D',
    description: 'Aerospace Quality Management',
    icon: <ShieldCheckIcon className="h-8 w-8" />
  }, {
    name: 'ISO 14001',
    description: 'Environmental Management',
    icon: <CheckCircleIcon className="h-8 w-8" />
  }];
  const equipment = [{
    name: 'CNC Machining Centers',
    count: '15+',
    description: '3, 4, and 5-axis capabilities'
  }, {
    name: 'CNC Turning Centers',
    count: '8+',
    description: 'Multi-axis turning capabilities'
  }, {
    name: 'Grinding Machines',
    count: '5+',
    description: 'Surface and cylindrical grinding'
  }, {
    name: 'EDM Machines',
    count: '3+',
    description: 'Wire and sinker EDM'
  }, {
    name: 'CMM Machines',
    count: '2+',
    description: 'Coordinate measuring machines'
  }, {
    name: 'Surface Roughness Testers',
    count: '3+',
    description: 'Precision surface measurement'
  }];
  return <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Infrastructure</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              World-class manufacturing infrastructure equipped with the latest
              technology and quality systems
            </p>
          </div>
        </div>
      </section>
      {/* Facilities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Facilities
            </h2>
            <p className="text-lg text-gray-600">
              State-of-the-art infrastructure for precision manufacturing
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {facilities.map((facility, index) => <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={facility.image} alt={facility.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{facility.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {facility.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>)}
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      {/* Equipment Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Manufacturing Equipment
            </h2>
            <p className="text-lg text-gray-600">
              Advanced machinery for precision manufacturing
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipment.map((item, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {item.count}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Certifications
            </h2>
            <p className="text-lg text-gray-600">
              Industry-recognized quality and management certifications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => <div key={index} className="text-center bg-gray-50 p-8 rounded-lg">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {cert.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {cert.name}
                </h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>)}
          </div>
        </div>
      </section>
      {/* Capabilities Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-8">
              Manufacturing Capabilities
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">±0.001"</div>
                <div className="text-blue-100">Precision Tolerance</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">50,000</div>
                <div className="text-blue-100">Sq Ft Facility</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Production Capability</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-blue-100">Quality Inspection</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
}