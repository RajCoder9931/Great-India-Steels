import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AdminSidebar } from '../components/AdminSidebar';

export function DisplayContact() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const contactsPerPage = 5;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/contact');
        setContacts(res.data);
      } catch (error) {
        console.error('Failed to fetch contacts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      'Are you sure you want to delete this contact?'
    );
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:5000/api/contact/${id}`);
      setContacts((prev) => prev.filter((contact) => contact._id !== id));
    } catch (error) {
      console.error('Failed to delete contact:', error);
      alert('Error deleting contact');
    }
  };

  const indexOfLast = currentPage * contactsPerPage;
  const indexOfFirst = indexOfLast - contactsPerPage;
  const currentContacts = contacts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(contacts.length / contactsPerPage);

  const handlePageChange = (pageNum) => setCurrentPage(pageNum);
  return (
    <div className='flex'>
      <AdminSidebar />
      <div className='flex-1 p-6'>
        <h1 className='text-3xl font-bold mb-6'>Manage Contacts</h1>
        {loading ? (
          <p>Loading...</p>
        ) : contacts.length === 0 ? (
          <p>No contacts found.</p>
        ) : (
          <table className='min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden'>
            <thead className='bg-gray-100'>
              <tr>
                <th className='py-2 px-4 border'>Full Name</th>
                <th className='py-2 px-4 border'>Email</th>
                <th className='py-2 px-4 border'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentContacts.map((contact) => (
                <tr key={contact._id}>
                  <td className='py-2 px-4 border'>
                    {contact.firstName} {contact.lastName}
                  </td>
                  <td className='py-2 px-4 border'>{contact.email}</td>
                  <td className='py-2 px-4 border space-x-2'>
                    <button
                      onClick={() => navigate(`/modifycontact/${contact._id}`)}
                      className='bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded'>
                      Modify
                    </button>
                    <button
                      onClick={() => handleDelete(contact._id)}
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
