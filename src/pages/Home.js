import React from 'react';
import Services from './Services';
import '../assests/Services.css';

import '../assests/Home.css';
import Button from '../components/Button';
import ServiceCards from './ServiceCards';

const Home = () => {
  return (
    <div className=''> 
      <div className="heroSection">
        <h1 className="motto">Business Solutions for a Digital Tomorrow</h1>
        <h3>Transforming Ideas into Reality...</h3>
        <Button />
       
      </div>

      <div className="content">
      <p>
          “At RAAR Tech, we combine innovation, expertise, and cutting-edge technology to bring your ideas to life. Whether you're a startup looking to establish your digital presence or an enterprise seeking advanced business solutions, we're here to guide you every step of the way. Our commitment to excellence ensures that we deliver scalable and efficient solutions tailored to your unique business needs.”
          
        </p>
        <div className="buttonHome">
        
        </div>
        <div>
          <h2>"Innovating the Future, One Solution at a Time"</h2>
        </div>
        <div>
          <ServiceCards />
        </div>
      </div>
      </div>
  );
};

export default Home;
