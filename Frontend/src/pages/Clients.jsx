import React from 'react';
import Hero from '../assets/HeroLogo.png';
import Tube from '../assets/TiLogo.png';
import Tpi from '../assets/TpiLogo.jpeg';
import Avon from '../assets/Avon.jpeg';
import { StarIcon } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export function Clients() {
  const clients = [
    {
      logo: Hero,
      name: 'HERO CYCLES LIMITED',
      industry: 'Bicycles & Mobility'
    },
    {
      logo: Tube,
      name: 'Tube Investments of India Ltd (Ti Cycle)',
      industry: 'Engineering & Bicycles'
    },
    {
      logo: Tpi,
      name: 'Tube Products of India Ltd (TPI)',
      industry: 'Steel Tubes & Engineering'
    },
    {
      logo: Avon,
      name: 'Avon Cycles Ltd',
      industry: 'Bicycles & Mobility'
    }
  ];

  const testimonials = [
    {
      text: 'Indian Metalic Industries has consistently delivered high-quality components that meet our exacting standards. Their precision and reliability make them a valuable partner.',
      author: 'John Smith',
      position: 'Production Manager',
      company: 'Automotive Motors Ltd.',
      rating: 5
    },
    {
      text: 'Their expertise in aerospace components is exceptional. The quality control and documentation processes give us complete confidence in their products.',
      author: 'Sarah Johnson',
      position: 'Quality Director',
      company: 'AeroTech Systems',
      rating: 5
    },
    {
      text: "We've been working with Indian Metalic Industries for over a decade. Their commitment to quality and on-time delivery is outstanding.",
      author: 'Michael Chen',
      position: 'Procurement Head',
      company: 'MediCare Devices',
      rating: 5
    }
  ];

  const successStories = [
    {
      title: 'Automotive Excellence',
      description: 'Helped reduce manufacturing lead time by 40% through innovative process optimization',
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Aerospace Innovation',
      description: 'Developed custom solution for critical aerospace components with zero defect rate',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Medical Precision',
      description: 'Achieved ISO 13485 certification for medical device component manufacturing',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Clients</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted by leading companies across industries for precision
              manufacturing excellence
            </p>
          </div>
        </div>
      </section>

      {/* Client Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted Partners
            </h2>
            <p className="text-lg text-gray-600">
              Companies that rely on our precision manufacturing expertise
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center p-4 mb-4">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 text-center">
                  {client.name}
                </h3>
                <p className="text-sm text-gray-500">{client.industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-gray-600">
              What our clients say about working with us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-600">{testimonial.position}</p>
                  <p className="text-blue-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Real results from our manufacturing partnerships
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {story.title}
                  </h3>
                  <p className="text-gray-600">{story.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics with CountUp */}
      <section className="py-20 bg-blue-600" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            <div>
              <div className="text-4xl font-bold mb-2">
                {inView && <CountUp end={500} duration={2} />}+
              </div>
              <div className="text-blue-100">Active Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">
                {inView && <CountUp end={98} duration={2} />}%
              </div>
              <div className="text-blue-100">Client Retention</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">
                {inView && <CountUp end={25} duration={2} />}+
              </div>
              <div className="text-blue-100">Years of Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">
                {inView && <CountUp end={1000000} duration={2} separator="," />}+
              </div>
              <div className="text-blue-100">Parts Delivered</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
