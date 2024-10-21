import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../assests/ServiceDetail.css';

const ServiceDetail = () => {
  const { id } = useParams(); 
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 
  const fetchServiceDetail = async () => {
    try {
      console.log('Fetching data for service id:', id); 
      const response = await axios.get(`${process.env.PUBLIC_URL}/services.json`); 
      console.log('API Response:', response.data); 
      const serviceData = response.data; 
      const selectedService = serviceData.find((service) => service.id === parseInt(id)); 
      if (selectedService) {
        
        setService(selectedService); 
      } else {
        console.error('Service not found for id:', id); 
      }
      setLoading(false); 
    } catch (error) {
      console.error('Failed to load service data:', error); 
      setError('Failed to load service data');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServiceDetail(); 
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!service) return <p>Service not found</p>;

  return (
    <div className='ServiceDetailContainer'>
      <h1>{service.title}</h1>
      <p>{service.description}</p>
    </div>
  );
};

export default ServiceDetail;
