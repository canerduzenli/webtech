import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assests/WebApp.css'; 
// Import updated CSS
import '../assests/itSolutions.css'
import Keyboard from '../images/keyboard.jpg'


const WebApp = () => {
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the service details from services.json
  const fetchWebAppService = async () => {
    try {
      const response = await axios.get(`${process.env.PUBLIC_URL}/services.json`);
      const serviceData = response.data;
      const selectedService = serviceData.find((service) => service.id === 1);
      setService(selectedService);
      setLoading(false);
    } catch (error) {
      setError('Failed to load service data');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWebAppService();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!service) return <p>Service not found</p>;

  return (
 <div> 
      {/* Main Title */}
      <div className="main-title-container">
        <h1 className="main-title">Web Application Development</h1>
      </div>
      <div className="grid-container">
      <div className='main-content'></div>

      <div className='api-content'>
      <img src={`${process.env.PUBLIC_URL}${service.image}`} alt={service.title}/>
  <h2>{service.title}</h2>
  <p>{service.detail}</p>
  <div className='linkWeb'> 
<a href="#approach">Our Approach</a>
<a href="#technologies">Technologies & Tools</a>
<a href="#process">Development Process</a>
<a href="#data-management">Data Management</a>
<a href="#scalability">Scalability & Future-Proofing</a>
<a href="#contact">Contact Us</a>
</div>
<div className='choose-content'> 
<h4>Why Choose Us?</h4>
<ul>
<p>Experienced Team of Developers</p>
<p>Client-Centric Development Approach</p>
<p>Customized Solutions for Your Business Needs</p>
<p>Focus on Security and Scalability</p>
<p>End-to-End Support and Maintenance</p>
</ul>
</div>
<h4>Services We Offer</h4>
<ul>
<p>Custom Web Application Development</p>
<p>Progressive Web App (PWA) Development</p>
<p>Enterprise Application Development</p>
<p>API Development & Integration</p>
<p>eCommerce Web Solutions</p>
<p>Web Portal Development</p>
</ul>
     
        


</div>

  </div>

</div>

     
  
  );
};

export default WebApp;
