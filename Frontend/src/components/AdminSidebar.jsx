// components/AdminSidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export function AdminSidebar() {
  return (
    <div className='w-64 bg-gray-800 text-white min-h-screen p-4'>
      <h2 className='text-xl font-bold mb-6'>Admin Panel</h2>
      <ul className='space-y-3'>
        <li>
          <Link to='/admin' className='hover:text-blue-400'>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to='/displaycontact' className='hover:text-blue-400'>
            Manage Contacts
          </Link>
        </li>
        <li>
          <Link to='/displayenquiry' className='hover:text-blue-400'>
            Manage Enquiries
          </Link>
        </li>
      </ul>
    </div>
  );
}
