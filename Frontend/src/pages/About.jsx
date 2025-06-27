import React from 'react';
import { CheckCircleIcon, TargetIcon, EyeIcon, HeartIcon } from 'lucide-react';
export function About() {
  const milestones = [{
    year: '2015',
    event: 'Company founded with a vision to provide precision machining solutions'
  }, {
    year: '2018',
    event: 'Expanded facility and acquired advanced CNC machining centers'
  }, {
    year: '2015',
    event: 'Achieved ISO 9001:2015 certification for quality Management'
  }, {
    year: '2015',
    event: 'Achieved to ISO 14001:2015 certification for Environmental Management System '
  }, {
    year: '2022',
    event: 'Reached milestone of 50+ satisfied clients across multiple industries'
  }];
  const leadership = [{
    name: 'Rajesh Kumar',
    position: 'Managing Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: '25+ years experience in manufacturing and business leadership'
  }, {
    name: 'Priya Sharma',
    position: 'Technical Director',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Expert in precision engineering with 20+ years experience'
  }, {
    name: 'Amit Patel',
    position: 'Quality Manager',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'ISO certified quality professional ensuring excellence in all processes'
  }];
  return <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About                 Great India Steels
</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading the way in precision manufacturing with over 25 years of
              excellence, innovation, and commitment to quality
            </p>
          </div>
        </div>
      </section>
      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TargetIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To deliver precision-engineered components that exceed customer
                expectations while maintaining the highest standards of quality,
                reliability, and innovation in manufacturing.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <EyeIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To be the global leader in precision manufacturing, recognized
                for our technological advancement, sustainable practices, and
                unwavering commitment to customer success.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <HeartIcon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Values
              </h3>
              <p className="text-gray-600">
                Quality, integrity, innovation, and customer satisfaction form
                the foundation of everything we do. We believe in building
                long-term partnerships based on trust and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Company Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Established in 2015 ,India GREAT INDIA STEEL CO.
                has gained immense expertise in supplying & trading of Steel 
                precision tubes, crc tube, flat bar etc. The supplier company is 
                located in Ludhiana, Punjab and is one of the leading sellers of 
                listed products. Buy Steel precision tubes, crc tube, flat bar in
                bulk from us for the best quality products and service.
              </p>
             <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">
                    10+ years of manufacturing excellence
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">
                    50+ satisfied clients worldwide
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">
                    ISO 9001:2015 certified processes
                  </span>
                </div>
              </div>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Manufacturing facility" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>
      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              Key milestones in our growth story
            </p>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => <div key={index} className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-lg min-w-[80px] text-center">
                  {milestone.year}
                </div>
                <div className="flex-1 bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 text-lg">{milestone.event}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600">
              Meet the experts driving our success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={leader.image} alt={leader.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">
                    {leader.position}
                  </p>
                  <p className="text-gray-600">{leader.bio}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>
    </div>;
}