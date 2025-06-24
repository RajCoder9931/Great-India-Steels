import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Industries } from './pages/Industries';
import { Infrastructure } from './pages/Infrastructure';
import { Quality } from './pages/Quality';
import { Clients } from './pages/Clients';
import { Contact } from './pages/Contact';
import { Enquiry } from './pages/Enquiry';
import { Privacy } from './pages/Privacy';
import { DisplayContact } from './pages/DisplayContact';
import { ModifyContact } from './pages/ModifyContact';
import { DisplayEnquiry } from './pages/DisplayEnquiry';
import { ModifyEnquiry } from './pages/ModifyEnquiry';
import Login from './pages/Login';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AdminDashboard } from './pages/AdminDashboard';

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isAdminDashboardPage = location.pathname === '/admin';
  const isDisplayContactPage = location.pathname === '/displaycontact';
  const isModifyContactPage = location.pathname.startsWith('/modifycontact');
  const isDisplayEnquiryPage = location.pathname === '/displayenquiry';
  const isModifyEnquiryPage = location.pathname.startsWith('/modifyenquiry');

  const hideNavAndFooter =
    isLoginPage ||
    isAdminDashboardPage ||
    isDisplayContactPage ||
    isModifyContactPage ||
    isDisplayEnquiryPage ||
    isModifyEnquiryPage;

  return (
    <div className='min-h-screen flex flex-col'>
      {!hideNavAndFooter && <Navbar />}
      <main className='flex-grow'>
        <Routes>
          <Route
            path='/login'
            element={
              <Login onLogin={() => (window.location.href = '/admin')} />
            }
          />
          <Route
            path='/admin'
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path='/displaycontact'
            element={
              <ProtectedRoute>
                <DisplayContact />
              </ProtectedRoute>
            }
          />
          <Route
            path='/modifycontact/:id'
            element={
              <ProtectedRoute>
                <ModifyContact />
              </ProtectedRoute>
            }
          />
          <Route
            path='/displayenquiry'
            element={
              <ProtectedRoute>
                <DisplayEnquiry />
              </ProtectedRoute>
            }
          />
          <Route
            path='/modifyenquiry/:id'
            element={
              <ProtectedRoute>
                <ModifyEnquiry />
              </ProtectedRoute>
            }
          />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/industries' element={<Industries />} />
          <Route path='/infrastructure' element={<Infrastructure />} />
          <Route path='/quality' element={<Quality />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/enquiry' element={<Enquiry />} />
          <Route path='/privacy' element={<Privacy />} />
        </Routes>
      </main>
      {!hideNavAndFooter && <Footer />}
    </div>
  );
}

export function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
