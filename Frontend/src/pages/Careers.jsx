import React, { useState } from 'react';
import { MapPinIcon, ClockIcon, BriefcaseIcon, XIcon } from 'lucide-react';
export function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const jobs = [{
    title: 'CNC Machine Operator',
    location: 'Mumbai, Maharashtra',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'We are looking for experienced CNC machine operators to join our manufacturing team. The ideal candidate will have experience with 5-axis CNC machines and be familiar with quality control processes.',
    requirements: ['3-5 years experience operating CNC machines', 'Knowledge of GD&T and quality control processes', 'Ability to read and interpret technical drawings', 'Experience with 5-axis CNC machines preferred', 'Strong attention to detail'],
    responsibilities: ['Operating CNC machines to produce precision components', 'Performing quality checks on manufactured parts', 'Maintaining equipment and workspace', 'Following safety protocols and procedures', 'Recording production data and maintaining logs']
  }, {
    title: 'Quality Control Engineer',
    location: 'Mumbai, Maharashtra',
    type: 'Full-time',
    experience: '4-6 years',
    description: 'Seeking a qualified Quality Control Engineer to ensure our manufactured components meet the highest quality standards. The role involves implementing and maintaining quality management systems.',
    requirements: ["Bachelor's degree in Engineering", '4-6 years experience in manufacturing quality control', 'ISO 9001 certification knowledge', 'Experience with CMM and other measuring equipment', 'Strong analytical and problem-solving skills'],
    responsibilities: ['Implementing quality control procedures', 'Conducting quality audits', 'Training staff on quality standards', 'Managing documentation and reporting', 'Investigating quality issues and implementing solutions']
  }, {
    title: 'Manufacturing Engineer',
    location: 'Mumbai, Maharashtra',
    type: 'Full-time',
    experience: '5-7 years',
    description: 'Looking for an experienced Manufacturing Engineer to optimize our production processes and implement new manufacturing technologies.',
    requirements: ["Bachelor's degree in Mechanical Engineering", '5-7 years manufacturing experience', 'Experience with CAD/CAM software', 'Knowledge of lean manufacturing principles', 'Strong project management skills'],
    responsibilities: ['Optimizing manufacturing processes', 'Implementing new technologies', 'Managing production projects', 'Training technical staff', 'Troubleshooting production issues']
  }];
  const benefits = ['Competitive salary package', 'Health insurance coverage', 'Professional development opportunities', 'Performance bonuses', 'Paid time off', 'Modern work environment'];
  return <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Careers at                 Indian Metalic Industries

            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our team of skilled professionals and be part of
              manufacturing excellence
            </p>
          </div>
        </div>
      </section>
      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Join Us
            </h2>
            <p className="text-lg text-gray-600">
              Benefits of being part of our team
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => <div key={index} className="flex items-center bg-gray-50 p-4 rounded-lg">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">{benefit}</span>
              </div>)}
          </div>
        </div>
      </section>
      {/* Current Openings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <p className="text-lg text-gray-600">
              Explore opportunities to grow with us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job, index) => <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {job.title}
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <MapPinIcon className="h-5 w-5 mr-2" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <ClockIcon className="h-5 w-5 mr-2" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <BriefcaseIcon className="h-5 w-5 mr-2" />
                    <span>{job.experience} experience</span>
                  </div>
                </div>
                <button onClick={() => setSelectedJob(job)} className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>)}
          </div>
        </div>
      </section>
      {/* Job Application Modal */}
      {selectedJob && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedJob.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <div className="flex items-center">
                      <MapPinIcon className="h-4 w-4 mr-1" />
                      <span>{selectedJob.location}</span>
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      <span>{selectedJob.type}</span>
                    </div>
                  </div>
                </div>
                <button onClick={() => setSelectedJob(null)} className="text-gray-500 hover:text-gray-700">
                  <XIcon className="h-6 w-6" />
                </button>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Description
                  </h4>
                  <p className="text-gray-600">{selectedJob.description}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Requirements
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    {selectedJob.requirements.map((req, index) => <li key={index}>{req}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Responsibilities
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    {selectedJob.responsibilities.map((resp, index) => <li key={index}>{resp}</li>)}
                  </ul>
                </div>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Enter your email" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Enter your phone number" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Resume
                    </label>
                    <input type="file" className="w-full" accept=".pdf,.doc,.docx" />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                    Submit Application
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>}
    </div>;
}