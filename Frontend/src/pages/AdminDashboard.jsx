import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { AdminSidebar } from '../components/AdminSidebar';
import {
  FaUsers,
  FaEnvelope,
  FaCalendarWeek,
  FaCalendarAlt,
} from 'react-icons/fa';

ChartJS.register(
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export function AdminDashboard() {
  const [contacts, setContacts] = useState([]);
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/contact')
      .then((res) => setContacts(res.data));
    axios
      .get('http://localhost:5000/api/quotes')
      .then((res) => setEnquiries(res.data));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  const getDailyCounts = (data) => {
    const counts = Array(7).fill(0);
    const today = new Date();

    data.forEach((item) => {
      const createdAt = new Date(item.createdAt);
      const diffDays = Math.floor((today - createdAt) / (1000 * 60 * 60 * 24));
      if (diffDays < 7) {
        counts[6 - diffDays]++;
      }
    });

    return counts;
  };

  const getStats = (data) => ({
    total: data.length,
    recentWeek: data.filter(
      (d) => new Date(d.createdAt) >= new Date(Date.now() - 7 * 86400000)
    ).length,
    recentMonth: data.filter(
      (d) => new Date(d.createdAt) >= new Date(Date.now() - 30 * 86400000)
    ).length,
  });

  const contactStats = getStats(contacts);
  const enquiryStats = getStats(enquiries);

  const labels = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - i));
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
    });
  });

  const contactLineData = {
    labels,
    datasets: [
      {
        label: 'Contacts (7 Days)',
        data: getDailyCounts(contacts),
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const enquiryLineData = {
    labels,
    datasets: [
      {
        label: 'Enquiries (7 Days)',
        data: getDailyCounts(enquiries),
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const barData = {
    labels: ['Total', 'Last 7 Days', 'Last 30 Days'],
    datasets: [
      {
        label: 'Contacts',
        data: [
          contactStats.total,
          contactStats.recentWeek,
          contactStats.recentMonth,
        ],
        backgroundColor: '#3b82f6',
      },
      {
        label: 'Enquiries',
        data: [
          enquiryStats.total,
          enquiryStats.recentWeek,
          enquiryStats.recentMonth,
        ],
        backgroundColor: '#10b981',
      },
    ],
  };

  const StatCard = ({ icon: Icon, label, value, color }) => (
    <div className={`bg-white p-4 rounded-xl shadow-md border-t-4 ${color}`}>
      <div className='flex items-center gap-4'>
        <div className='text-3xl text-gray-700'>
          <Icon />
        </div>
        <div>
          <p className='text-sm text-gray-500'>{label}</p>
          <h3 className='text-2xl font-semibold'>{value}</h3>
        </div>
      </div>
    </div>
  );

  return (
    <div className='flex min-h-screen bg-gray-50 font-sans'>
      <AdminSidebar />
      <div className='flex-1 p-6'>
        {/* Header */}
        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-3xl font-bold text-gray-800'>Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className='bg-red-500 text-white px-5 py-2 rounded-lg shadow hover:bg-red-600 transition duration-200'>
            Logout
          </button>
        </div>

        {/* Stat Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
          <StatCard
            icon={FaUsers}
            label='Total Contacts'
            value={contactStats.total}
            color='border-blue-500'
          />
          <StatCard
            icon={FaEnvelope}
            label='Total Enquiries'
            value={enquiryStats.total}
            color='border-green-500'
          />
          <StatCard
            icon={FaCalendarWeek}
            label='Contacts (7 Days)'
            value={contactStats.recentWeek}
            color='border-yellow-400'
          />
          <StatCard
            icon={FaCalendarAlt}
            label='Enquiries (7 Days)'
            value={enquiryStats.recentWeek}
            color='border-yellow-400'
          />
        </div>

        {/* Charts */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
          <div className='bg-white p-6 rounded-xl shadow-lg'>
            <h2 className='text-xl font-semibold mb-4 text-center text-gray-700'>
              Contact Submissions (Last 7 Days)
            </h2>
            <div className='h-64'>
              <Line
                data={contactLineData}
                options={{ responsive: true, maintainAspectRatio: false }}
              />
            </div>
          </div>

          <div className='bg-white p-6 rounded-xl shadow-lg'>
            <h2 className='text-xl font-semibold mb-4 text-center text-gray-700'>
              Enquiry Submissions (Last 7 Days)
            </h2>
            <div className='h-64'>
              <Line
                data={enquiryLineData}
                options={{ responsive: true, maintainAspectRatio: false }}
              />
            </div>
          </div>
        </div>

        {/* Bar Chart */}
        <div className='bg-white p-6 rounded-xl shadow-lg'>
          <h2 className='text-xl font-semibold mb-4 text-center text-gray-700'>
            Contacts vs Enquiries Overview
          </h2>
          <div className='h-72'>
            <Bar
              data={barData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: { beginAtZero: true },
                },
                plugins: {
                  legend: {
                    position: 'top',
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
