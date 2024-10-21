import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Link bileşenini import edin
import axios from 'axios';
import '../assests/Services.css';

const ServiceCards = () => {
  const [services, setServices] = useState([]);

  const fetchServiceData = async () => {
    try {
      const response = await axios.get(`${process.env.PUBLIC_URL}/services.json`);
      setServices(response.data);
    } catch (error) {
      console.error('Data rendering error', error);
    }
  };

  useEffect(() => {
    fetchServiceData();
  }, []);

  return (
    <div className="serviceContainerWrapper">
      <h1 className="serviceTitle"></h1>
      <div className="serviceContainer">
        {services && services.length > 0 ? (
          services.map((service) => (
            <div className="serviceCards" key={service.id}>
              {getLinkForService(service.title) ? (
                <Link to={getLinkForService(service.title)} className="serviceLink">
                  <div className="ServiceImg">
                    <img src={`${process.env.PUBLIC_URL}${service.image}`} alt={service.title} />
                  </div>
                  <div className="serviceTextContainer">
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                  </div>
                </Link>
              ) : (
                <p>No Link Available</p>
              )}
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

const getLinkForService = (title) => {
  switch (title) {
    case 'Web Application Development':
      return '/web-app'; 
    case 'IT Solutions':
      return '/it-solutions'; 
    case 'Digital Marketing':
      return '/digital-marketing'; 
    case 'Virtual Mailbox Office':
      return '/virtual-mailbox'; 
    case 'Logo Design':
      return '/logo-design'; // Logo Design bileşenine yönlendir
    case 'Website Development & Design':
      return '/website-development'; // Website Development bileşenine yönlendir
    default:
      return null; // Eğer başlıkla eşleşen bir rota yoksa null döndür
  }
};

export default ServiceCards;
