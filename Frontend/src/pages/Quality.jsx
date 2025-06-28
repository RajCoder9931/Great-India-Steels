import React from 'react';
import {
  CheckCircleIcon,
  AwardIcon,
  ShieldCheckIcon,
  FileTextIcon
} from 'lucide-react';

import Register from '../assets/Registration.jpeg';
import Management from '../assets/Management.jpeg';
import iso9001 from '../assets/Registration.pdf';
import iso14001 from '../assets/Management.pdf';

// Download handler
const handleDownload = (url, filename) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export function Quality() {
  const qualityProcesses = [
    {
      title: 'Incoming Material Inspection',
      description: 'All raw materials undergo rigorous inspection before entering production',
      icon: <CheckCircleIcon className="h-8 w-8" />
    },
    {
      title: 'In-Process Quality Control',
      description: 'Continuous monitoring and inspection throughout the manufacturing process',
      icon: <ShieldCheckIcon className="h-8 w-8" />
    },
    {
      title: 'Final Inspection & Testing',
      description: 'Comprehensive final inspection ensuring 100% compliance with specifications',
      icon: <AwardIcon className="h-8 w-8" />
    },
    {
      title: 'Documentation & Traceability',
      description: 'Complete documentation and traceability for all manufactured components',
      icon: <FileTextIcon className="h-8 w-8" />
    }
  ];

  const standards = [
    {
      name: 'ISO 9001:2015',
      description:
        'Quality Management System certification ensuring consistent quality delivery in the manufacturing and supply of steel tubes and engineering goods.',
      image: Register
    },
    {
      name: 'ISO 14001:2015',
      description:
        'Environmental Management System ensuring sustainable manufacturing practices and compliance in operations.',
      image: Management
    }
  ];

  const testingEquipment = [
    'Coordinate Measuring Machines (CMM)',
    'Surface Roughness Testers',
    'Hardness Testing Equipment',
    'Material Testing Machines',
    'Optical Comparators',
    'Gauge Blocks & Calibration Standards',
    'Thread Gauges & Ring Gauges',
    'Digital Calipers & Micrometers'
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Quality Assurance</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Uncompromising commitment to quality through rigorous processes,
            advanced testing, and international standards
          </p>
        </div>
      </section>

      {/* Quality Processes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Quality Control Process
            </h2>
            <p className="text-lg text-gray-600">
              Systematic approach to ensuring consistent quality
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityProcesses.map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-blue-600">{process.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards & Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Standards & Certifications
            </h2>
            <p className="text-lg text-gray-600">
              International quality and management system certifications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {standards.map((standard, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={standard.image}
                  alt={standard.name}
                  className="w-full h-77 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {standard.name}
                  </h3>
                  <p className="text-gray-600">{standard.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Equipment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Testing & Measurement Equipment
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                State-of-the-art testing and measurement equipment ensures
                accurate quality control and compliance with specifications.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {testingEquipment.map((equipment, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{equipment}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://www.shutterstock.com/image-photo/on-factory-scientist-sterile-protective-600nw-1268263753.jpg"
                alt="Quality testing equipment"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Statistics */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Quality Performance</h2>
          <p className="text-xl text-blue-100 mb-12">
            Our commitment to excellence in numbers
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">99.8%</div>
              <div className="text-blue-100">Quality Pass Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">±0.001"</div>
              <div className="text-blue-100">Precision Tolerance</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Final Inspection</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Quality Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Certificates */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Quality Certificates
            </h2>
            <p className="text-lg text-gray-600">
              Download our quality certificates and compliance documents
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* ISO 9001 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FileTextIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ISO 9001:2015 Certificate
              </h3>
              <p className="text-gray-600 mb-4">
                Quality Management System Certificate
              </p>
              <button
                onClick={() => handleDownload(iso9001, 'ISO-9001-Certificate.pdf')}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Download PDF
              </button>
            </div>

            {/* ISO 14001 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FileTextIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ISO 14001:2015 Certificate
              </h3>
              <p className="text-gray-600 mb-4">
                Environmental Management System Certificate
              </p>
              <button
                onClick={() => handleDownload(iso14001, 'ISO-14001-Certificate.pdf')}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

