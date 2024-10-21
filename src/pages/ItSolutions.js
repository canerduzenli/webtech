import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../assests/itSolutions.css'

const ItSolutions = () => {
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

const FetchItSolutions = async ()=>{
  try{ 
  const response = await axios.get(`${process.env.PUBLIC_URL}/services.json`);
  const serviceData =await response.data
  const selectedService =serviceData.find((service)=>service.id===2);
  setService(selectedService);
  setLoading(false)
  }catch(error){
    setError('Failed to load service data');
    setLoading('false')
  }
};
useEffect(()=>{
  FetchItSolutions();
},[]);

if (loading) return <p>Loading...</p>;
if (error) return <p>{error}</p>;
if (!service) return <p>Service not found</p>;

    return (
      <>
      <div className="main-title-container">
      <h1 className="main-title">Innovative IT Solutions for Secure and Scalable Growth</h1>
    </div>
    <div className="grid-container">
<div className='main-content'>

</div>
<div className='api-content'>
  <img src={`${process.env.PUBLIC_URL}${service.image}`} alt={service.title}/>
  <h2>{service.title}</h2>
  <p>{service.detail}</p>
  <h4>Why Choose Us?</h4>
  <p><span>Expertise You Can Trust</span>
With years of experience in managing complex IT environments, our team has the skills and knowledge to handle any IT challenge. From network architecture to cybersecurity, we deliver solutions that meet your business objectives.

<span>Tailored IT Strategies</span>
We don’t believe in one-size-fits-all solutions. Our team works closely with your business to understand your goals and develop customized IT strategies that align with your vision.

<span>Proactive Approach to Security</span>
Cyber threats are constantly evolving, and we stay ahead of the curve by employing cutting-edge security technologies and practices. Our proactive approach ensures that your business is always protected from emerging threats.

<span>Scalable Solutions for Growing Businesses</span>
As your business grows, so do your IT needs. Our scalable solutions are designed to grow with you, whether you’re expanding your network, adding more users, or enhancing your security</p>
<div id='contact' className='contactBox'> 
  <h2>Contact Us</h2>
  <p>Get in Touch for Tailored IT Solutions!</p>
<form className='contact-form'>
<label htmlFor='name'>Name:</label>
<input type='text' id='name' name='name' required/>
<label htmlFor='email'>Email:</label>
<input type='email' id='email' name='email' required/>
<label htmlFor='message'>Message:</label>
<textarea id='message' name='message' required></textarea>
<button type='submit'>Send Message</button>
</form>
</div>
<div className='contact-information'>
  <h3>Contact Information</h3>
  <p>Email: support@raartech.com</p>
  <p>Phone: +123-456-7890</p>
  <p>Address: 123 Web Dev Street, Tech City</p>
</div>
</div>
<div className='it-content section1'>
<p> IT Solutions Department
At TechCompany, our IT Solutions department ensures that your business operations run smoothly, securely, and efficiently. We provide comprehensive IT management services to keep your network infrastructure secure and optimized. Our team, led by an experienced IT manager, delivers a range of crucial services:</p><h4>Network and Domain Management
</h4>
<p>We centralize the management of your entire network, ensuring that all users and devices are integrated into one secure domain. By implementing password policies, security protocols, and user access controls, we ensure that each user has the appropriate permissions while maintaining overall system security. Our services also extend to:

<span>Password Policies:</span> Enforcing complex passwords, regular updates, and multi-factor authentication to keep accounts secure.
<span>Group Policies:</span> Defining what actions users can perform on their devices, restricting risky behaviors, and automating system configurations.
<span>User Access Control:</span> Assigning roles and permissions based on job responsibilities, ensuring that sensitive information is only accessible to authorized individuals.</p></div>
<div className='it-content section2'><h4>Network Infrastructure and Switch Management
</h4>
<p>
A robust and secure network is the foundation of every modern business. We manage and maintain the critical network infrastructure to ensure uninterrupted operations. This includes:

<span>Layer 2 Switch Management:</span> We configure and manage Layer 2 switches to optimize traffic flow, reduce latency, and ensure network reliability across multiple system rooms.
<span>VLAN Configuration:</span> Segmenting your network using Virtual Local Area Networks (VLANs) for added security and performance optimization.
<span>Security Policies for Switches:</span> Implementing access control lists (ACLs), port security, and monitoring for suspicious activity to keep your network protected from unauthorized access
</p></div>
<div className='it-content section3'><h4>
Firewall and Security Policies
</h4>
<p>
Securing your network from external threats is paramount in today’s cyber landscape. Our team manages firewalls with precision, providing:

<span>Traffic Filtering and Control: </span> Through URL filtering, we restrict access to harmful or inappropriate websites, protecting your organization from potential threats.
<span>Application Control: </span> We regulate which applications can run within your network to prevent unauthorized or malicious software from being executed.
<span>Intrusion Prevention Systems (IPS):</span>I Detecting and stopping potential attacks in real time, ensuring that your network stays protected from evolving cyber threats.
<span>Bandwidth Management:</span>Prioritizing critical traffic and ensuring optimal bandwidth usage across your network, preventing slowdowns during peak hours.</p></div>
<div className='it-content section4'><h4>Endpoint Detection and Response (EDR) Management</h4>
<p>
Endpoint Detection and Response (EDR) Solutions
In the age of advanced persistent threats, having a proactive defense against malware is crucial. 
We provide:
<span>Real-Time Threat Detection:</span> Constantly monitoring user devices for suspicious activities or potential threats.
<span>Automated Threat Response:</span>Isolating compromised devices to prevent the spread of malware or ransomware.
<span>Ransomware Protection:</span> By enforcing strict security policies, we prevent ransomware attacks before they can cripple your business.
<span>Regular Software Updates:</span> Keeping antivirus and EDR software up-to-date to defend against the latest known threats.</p></div>
<div className='it-content section5'>
  <h4>Security and Compliance
  </h4><p>
  Our IT solutions are designed with a security-first approach, ensuring your company complies with industry regulations and standards such as:

<span>GDPR, HIPAA, or ISO Compliance:</span> Depending on your industry, we ensure that your network and systems meet the required security standards and best practices.
<span>Security Audits:</span> Conducting regular security audits to identify vulnerabilities and proactively addressing any potential risks.
Data Encryption and Backups: Ensuring that sensitive data is encrypted both in transit and at rest, with regular backups to protect against data loss.
  </p>
</div>
<div className='it-content section6'>
  <h4> Helpdesk and IT Support
  </h4><p>
  Our IT team provides dedicated helpdesk support to ensure that your employees stay productive and any issues are resolved quickly. We offer:

<span> 24/7 Support:</span> Assistance whenever you need it, from basic troubleshooting to complex technical issues.
Remote and On-Site Support: Whether resolving issues remotely or providing on-site technical assistance, we are equipped to handle a range of IT problems.
<span>IT Training and Onboarding:</span> Offering training for your employees on new systems, software, and security best practices, ensuring everyone is up to speed.
  </p>
</div>
<div className='it-content section7'>
  <h4>Custom IT Solutions
  </h4><p>
  We understand that every business is unique, which is why we offer custom IT solutions to fit your specific needs. Whether it’s building out new infrastructure, implementing cloud solutions, or enhancing cybersecurity measures, we’re here to support your growth and innovation.
  </p>
  
</div>

    </div>
    </>
  )
}

export default ItSolutions
