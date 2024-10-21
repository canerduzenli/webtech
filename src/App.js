import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Header from './components/Header';
import ServiceCards from './pages/ServiceCards';
import ServiceDetail from './components/ServiceDetail';
import WebApp from './pages/WebApp'; 
import ItSolutions from './pages/ItSolutions'; 
import DigitalMarketing from './pages/DigitalMarketing'; 
import VirtualMailbox from './pages/MailBox'; 
import LogoDesign from './pages/LogoDesign'; 
import WebsiteDevelopment from './pages/WebsiteDev'; 

function App() {
  return (
    <div className="App-container">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} /> 
        <Route path="/services" element={<ServiceCards />} /> 
        <Route path="/services/:id" element={<ServiceDetail />} /> 
        <Route path="/web-app" element={<WebApp />} /> 
        <Route path="/it-solutions" element={<ItSolutions />} /> 
        <Route path="/digital-marketing" element={<DigitalMarketing />} /> 
        <Route path="/virtual-mailbox" element={<VirtualMailbox />} /> 
        <Route path="/logo-design" element={<LogoDesign />} /> 
        <Route path="/website-development" element={<WebsiteDevelopment />} /> 
      </Routes>
    </div>
  );
}

export default App;
