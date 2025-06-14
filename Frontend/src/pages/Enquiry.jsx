import React, { useState } from 'react';
import { CheckCircleIcon } from 'lucide-react';

export function Enquiry() {
  const productCategories = [
    'CNC Machined Parts',
    'Precision Turned Components',
    'Custom Fabricated Parts',
    'Assembly Components',
    'Tool & Die Components',
    'Prototype Parts',
  ];
  const requirements = [
    'Precision machining with tight tolerances',
    'Large volume production',
    'Custom design and manufacturing',
    'Material certification required',
    'Specific surface finish requirements',
    'Assembly and packaging',
  ];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    jobTitle: '',
    email: '',
    phone: '',
    category: '',
    description: '',
    quantity: '',
    timeline: '',
    requirements: [],
    files: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (req) => {
    setFormData((prev) => {
      const updated = prev.requirements.includes(req)
        ? prev.requirements.filter((r) => r !== req)
        : [...prev.requirements, req];
      return { ...prev, requirements: updated };
    });
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, files: Array.from(e.target.files) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append('firstName', formData.firstName);
      data.append('lastName', formData.lastName);
      data.append('company', formData.company);
      data.append('jobTitle', formData.jobTitle);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('category', formData.category);
      data.append('description', formData.description);
      data.append('quantity', formData.quantity);
      data.append('timeline', formData.timeline);
      formData.requirements.forEach((req) => data.append('requirements', req));
      formData.files.forEach((file) => data.append('files', file));

      formData.requirements.forEach((req) => data.append('requirements', req));

      const response = await fetch('http://localhost:5000/api/quotes/', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Server responded with ${response.status}: ${errorText}`
        );
      }

      const result = await response.json();
      alert(result.message || 'Submission complete');
    } catch (error) {
      console.error('Submit error:', error);
      alert('Failed to submit: ' + error.message);
    }
  };

  return (
    <div className='w-full'>
      <section className='py-20 bg-gray-900 text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-5xl font-bold mb-6'>Request a Quote</h1>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
            Tell us about your project requirements and get a detailed quote
          </p>
        </div>
      </section>

      <section className='py-20 bg-white'>
        <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
          <form
            className='space-y-8'
            onSubmit={handleSubmit}
            encType='multipart/form-data'>
            {/* Contact Info */}
            <div>
              <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                Contact Information
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <input
                  name='firstName'
                  type='text'
                  placeholder='First Name'
                  value={formData.firstName}
                  onChange={handleChange}
                  className='w-full px-3 py-2 border rounded-md'
                  required
                />
                <input
                  name='lastName'
                  type='text'
                  placeholder='Last Name'
                  value={formData.lastName}
                  onChange={handleChange}
                  className='w-full px-3 py-2 border rounded-md'
                  required
                />
                <input
                  name='company'
                  type='text'
                  placeholder='Company Name'
                  value={formData.company}
                  onChange={handleChange}
                  className='w-full px-3 py-2 border rounded-md'
                />
                <input
                  name='jobTitle'
                  type='text'
                  placeholder='Job Title'
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className='w-full px-3 py-2 border rounded-md'
                />
                <input
                  name='email'
                  type='email'
                  placeholder='Email'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full px-3 py-2 border rounded-md'
                  required
                />
                <input
                  name='phone'
                  type='tel'
                  placeholder='Phone'
                  value={formData.phone}
                  onChange={handleChange}
                  className='w-full px-3 py-2 border rounded-md'
                />
              </div>
            </div>

            {/* Requirements */}
            <div>
              <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                Project Requirements
              </h2>
              <select
                name='category'
                value={formData.category}
                onChange={handleChange}
                className='w-full px-3 py-2 border rounded-md'
                required>
                <option value=''>Select a category</option>
                {productCategories.map((c, i) => (
                  <option key={i} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <textarea
                name='description'
                rows={4}
                value={formData.description}
                onChange={handleChange}
                className='w-full px-3 py-2 border rounded-md'
                placeholder='Project Description'
                required
              />
              <input
                name='quantity'
                type='number'
                value={formData.quantity}
                onChange={handleChange}
                className='w-full px-3 py-2 border rounded-md'
                placeholder='Quantity Required'
                min={1}
                required
              />
              <input
                name='timeline'
                type='date'
                value={formData.timeline}
                onChange={handleChange}
                className='w-full px-3 py-2 border rounded-md'
                required
              />
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                {requirements.map((req, i) => (
                  <label key={i} className='flex items-center'>
                    <input
                      type='checkbox'
                      checked={formData.requirements.includes(req)}
                      onChange={() => handleCheckbox(req)}
                      className='mr-2'
                    />
                    <span className='text-sm text-gray-700'>{req}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* File Upload */}
            <div>
              <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                Technical Documents
              </h2>
              <input
                type='file'
                name='files'
                multiple
                accept='.pdf,.dwg,.dxf,.step,.stp'
                onChange={handleFileChange}
                className='w-full'
              />
              <p className='mt-2 text-sm text-gray-500'>
                Accepted formats: PDF, DWG, DXF, STEP, STP
              </p>
            </div>

            {/* Submit */}
            <div>
              <button
                type='submit'
                className='w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center'>
                <CheckCircleIcon className='h-5 w-5 mr-2' />
                Submit Quote Request
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
