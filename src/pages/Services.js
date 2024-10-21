import React from 'react';
import '../assests/Services.css';

const Services = ({ service }) => {
  return (
    
    <div className='service'>
      {/* images div div */}
      <div className='ServiceImg'>
        <img src={service.image} alt={service.title} />
      </div>

      {/* texts div */}
      <div className="serviceTextContainer">
        <h2>{service.title}</h2>
        <p>{service.description}</p>
      </div>
    </div>
  );
};

export default Services;
