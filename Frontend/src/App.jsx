import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
export function App() {
  return <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>;
}