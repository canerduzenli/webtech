import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assests/Marketing.css'

const DigitalMarketing = () => {

const [service,setService]=useState(null);
const [loading,setLoading]=useState(true);
const [error,setError]=useState(null);

const  MarketingService = async ()=>{
  try {
  const response = await axios.get(`${process.env.PUBLIC_URL}/services.json`)
  const serviceData =await response.data
  const selectedService =await serviceData.find((service)=>service.id===3)
  setService(selectedService);
  setLoading(false);
}catch(error){
  setError('Failed to load service data')
  setLoading(false);
}
};


useEffect (()=>{
  MarketingService();
},[])

if (loading) return <p> Loading...</p>
if(error) return <p>{error}</p>
if(!service) return <>Service not found </>

  return (
    
    <div>
      <div className="main-title-container">
        <h1 className="main-title">Digital Marketing</h1>
      </div>
      <div className='Digital-container'>
        <div> 
        
      </div>
      <div className='Marketing-hero'> <h1>Marketing Hero Banner </h1> </div>
      <div className='Api-digital'> 
      <img className='sidebar-image ' src={`${process.env.PUBLIC_URL}${service.image}`} /> 
      <h1>{service.title}</h1>
      <p>{service.description}</p>
      </div>
      <div className='Marketing-service'>Marketing Service</div>
      </div>
      </div>
  )
}

export default DigitalMarketing
