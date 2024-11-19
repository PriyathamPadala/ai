import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Dashboard from './components/Dashboard';
import DiseaseDetails from './pages/DiseaseDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/disease/:diseaseId" element={<DiseaseDetails />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;