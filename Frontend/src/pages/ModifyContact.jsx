import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export function ModifyContact() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/contact/${id}`);
        setFormData(res.data);
      } catch (err) {
        console.error('Failed to fetch contact:', err);
        alert('Error fetching contact');
      } finally {
        setLoading(false);
      }
    };

    fetchContact();
  }, [id]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/contact/${id}`, formData);
      alert('Contact updated successfully!');
      navigate('/displaycontact');
    } catch (err) {
      console.error('Failed to update contact:', err);
      alert('Error updating contact');
    }
  };

  if (loading) return <p className='p-6'>Loading...</p>;

  return (
    <div className='max-w-xl mx-auto p-6 bg-white rounded shadow'>
      <h2 className='text-2xl font-bold mb-4'>Edit Contact</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className='block font-medium mb-1' htmlFor='firstName'>
            First Name
          </label>
          <input
            id='firstName'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
            className='w-full border p-2 rounded'
            required
          />
        </div>

        <div>
          <label className='block font-medium mb-1' htmlFor='lastName'>
            Last Name
          </label>
          <input
            id='lastName'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            className='w-full border p-2 rounded'
            required
          />
        </div>

        <div>
          <label className='block font-medium mb-1' htmlFor='email'>
            Email
          </label>
          <input
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            type='email'
            className='w-full border p-2 rounded'
            required
          />
        </div>

        <div>
          <label className='block font-medium mb-1' htmlFor='phone'>
            Phone
          </label>
          <input
            id='phone'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            className='w-full border p-2 rounded'
          />
        </div>

        <div>
          <label className='block font-medium mb-1' htmlFor='message'>
            Message
          </label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            className='w-full border p-2 rounded'
          />
        </div>

        <button
          type='submit'
          className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>
          Save Changes
        </button>
      </form>
    </div>
  );
}
