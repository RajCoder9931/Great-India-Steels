import React, { lazy , useState } from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from 'lucide-react';
import axios from 'axios';
export  function Contact() {
  const officeInfo = {
    address: {
      line1: 'Ward No. 11, Village Rampur, Doraha, Ludhiana, Punjab',
      line2: 'Main Office Address',
      city: 'Ludhiana',
      state: 'Punjab',
      zip: '141421',
      country: 'India'
    },
    phone: '+91 9463588888',
    email: 'info@greatindiasteel.com',
    hours: 'Monday - Saturday: 9:00 AM - 6:00 PM'
  };
  //  form integrated by backend to frontend 
  const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: ""
});

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log('Form data being submitted:', formData);
  try {
    const res = await axios.post('http://localhost:5000/api/contact', formData);
    console.log('Server response:', res.data);
    alert('Form submitted successfully!');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    });
  } catch (err) {
    console.error('Axios error:', err);
    alert('Something went wrong!');
  }
};


  return <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with our team to discuss your precision manufacturing
              needs
            </p>
          </div>
        </div>
      </section>
      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Send us a Message
              </h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        First Name
      </label>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        placeholder="Enter your first name"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Last Name
      </label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        placeholder="Enter your last name"
      />
    </div>
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Email
    </label>
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-md"
      placeholder="Enter your email"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Phone
    </label>
    <input
      type="tel"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-md"
      placeholder="Enter your phone number"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Message
    </label>
    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      rows={4}
      className="w-full px-3 py-2 border border-gray-300 rounded-md"
      placeholder="How can we help you?"
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
  >
    Send Message
  </button>
</form>

            </div>
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Contact Information
              </h2>
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPinIcon className="h-6 w-6 text-blue-600 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Office Address
                      </h3>
                      <p className="text-gray-600">
                        {officeInfo.address.line1}
                        <br />
                        {officeInfo.address.line2}
                        <br />
                        {officeInfo.address.city}, {officeInfo.address.state}{' '}
                        {officeInfo.address.zip}
                        <br />
                        {officeInfo.address.country}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <PhoneIcon className="h-6 w-6 text-blue-600 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Phone
                      </h3>
                      <p className="text-gray-600">{officeInfo.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MailIcon className="h-6 w-6 text-blue-600 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Email
                      </h3>
                      <p className="text-gray-600">{officeInfo.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ClockIcon className="h-6 w-6 text-blue-600 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Business Hours
                      </h3>
                      <p className="text-gray-600">{officeInfo.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Location
            </h2>
            <p className="text-lg text-gray-600">
              Visit our state-of-the-art manufacturing facility
            </p>
          </div>
          <div className="h-[400px] w-full rounded-lg overflow-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3426.6795117049205!2d76.03147987439166!3d30.811620681817935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391075df1eede413%3A0xb4132e0ab887a00d!2sGreat%20India%20Steel!5e0!3m2!1sen!2sin!4v1748497259832!5m2!1sen!2sin" width="100%" height="100%" style={{
            border: 0
          }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
    </div>;
}
