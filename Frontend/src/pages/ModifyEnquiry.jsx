import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export function ModifyEnquiry() {
  const { id } = useParams();
  const navigate = useNavigate();

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
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEnquiry = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/quotes/${id}`);
        setFormData({
          ...res.data,
          requirements: Array.isArray(res.data.requirements)
            ? res.data.requirements
            : [res.data.requirements],
        });
      } catch (err) {
        console.error('Failed to fetch enquiry:', err);
        alert('Error fetching enquiry');
      } finally {
        setLoading(false);
      }
    };

    fetchEnquiry();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/quotes/${id}`, formData);
      alert('Enquiry updated successfully!');
      navigate('/displayenquiry');
    } catch (err) {
      console.error('Failed to update enquiry:', err);
      alert('Error updating enquiry');
    }
  };

  if (loading) return <p className='p-6'>Loading...</p>;

  return (
    <div className='max-w-4xl mx-auto bg-white p-8 mt-6 shadow-lg rounded-lg'>
      <h2 className='text-3xl font-bold mb-6 text-center text-gray-800'>
        Edit Enquiry
      </h2>
      <form
        onSubmit={handleSubmit}
        className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {[
          { label: 'First Name', name: 'firstName' },
          { label: 'Last Name', name: 'lastName' },
          { label: 'Company', name: 'company' },
          { label: 'Job Title', name: 'jobTitle' },
          { label: 'Email', name: 'email', type: 'email' },
          { label: 'Phone', name: 'phone' },
          { label: 'Category', name: 'category' },
          { label: 'Quantity', name: 'quantity' },
          { label: 'Timeline', name: 'timeline' },
        ].map(({ label, name, type = 'text' }) => (
          <div key={name}>
            <label
              htmlFor={name}
              className='block text-sm font-medium text-gray-700 mb-1'>
              {label}
            </label>
            <input
              id={name}
              name={name}
              type={type}
              value={formData[name]}
              onChange={handleChange}
              className='w-full border border-gray-300 p-2 rounded focus:ring-blue-500 focus:border-blue-500'
              required
            />
          </div>
        ))}

        <div className='md:col-span-2'>
          <label
            htmlFor='description'
            className='block text-sm font-medium text-gray-700 mb-1'>
            Description
          </label>
          <textarea
            id='description'
            name='description'
            rows='3'
            value={formData.description}
            onChange={handleChange}
            className='w-full border border-gray-300 p-2 rounded focus:ring-blue-500 focus:border-blue-500'></textarea>
        </div>

        <div className='md:col-span-2'>
          <label
            htmlFor='requirements'
            className='block text-sm font-medium text-gray-700 mb-1'>
            Requirements (comma separated)
          </label>
          <input
            id='requirements'
            name='requirements'
            value={formData.requirements.join(', ')}
            onChange={(e) =>
              setFormData({
                ...formData,
                requirements: e.target.value
                  .split(',')
                  .map((req) => req.trim()),
              })
            }
            className='w-full border border-gray-300 p-2 rounded focus:ring-blue-500 focus:border-blue-500'
          />
        </div>

        <div className='md:col-span-2 text-center'>
          <button
            type='submit'
            className='bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition-all'>
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
