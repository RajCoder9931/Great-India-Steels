import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AdminSidebar } from '../components/AdminSidebar';

export function DisplayEnquiry() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const enquiriesPerPage = 5;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/quotes');
        setEnquiries(res.data);
      } catch (error) {
        console.error('Failed to fetch enquiries:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEnquiries();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this enquiry?'))
      return;
    try {
      await axios.delete(`http://localhost:5000/api/quotes/${id}`);
      alert('Enquiry deleted');
      fetchEnquiries(); // Refresh list
    } catch (err) {
      console.error('Delete error:', err);
      alert('Failed to delete enquiry');
    }
  };

  const indexOfLast = currentPage * enquiriesPerPage;
  const indexOfFirst = indexOfLast - enquiriesPerPage;
  const currentEnquiries = enquiries.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(enquiries.length / enquiriesPerPage);

  const handlePageChange = (pageNum) => setCurrentPage(pageNum);

  return (
    <div className='flex'>
      <AdminSidebar />
      <div className='flex-1 p-6'>
        <h1 className='text-3xl font-bold mb-6'>Manage Enquiries</h1>
        {loading ? (
          <p>Loading...</p>
        ) : enquiries.length === 0 ? (
          <p>No enquiries found.</p>
        ) : (
          <table className='min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden'>
            <thead className='bg-gray-100'>
              <tr>
                <th className='py-2 px-4 border'>Full Name</th>
                <th className='py-2 px-4 border'>Email</th>
                <th className='py-2 px-4 border'>Category</th>
                <th className='py-2 px-4 border'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentEnquiries.map((enquiry) => (
                <tr key={enquiry._id}>
                  <td className='py-2 px-4 border'>
                    {enquiry.firstName} {enquiry.lastName}
                  </td>
                  <td className='py-2 px-4 border'>{enquiry.email}</td>
                  <td className='py-2 px-4 border'>{enquiry.category}</td>
                  <td className='py-2 px-4 border space-x-2'>
                    <button
                      onClick={() => navigate(`/modifyenquiry/${enquiry._id}`)}
                      className='bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded'>
                      Modify
                    </button>
                    <button
                      onClick={() => handleDelete(enquiry._id)}
                      className='bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded'>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div className='flex justify-center mt-4 space-x-2'>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'
              }`}>
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
