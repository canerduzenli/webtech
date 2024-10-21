import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [showHeader, setShowHeader] = useState(true); // State to show or hide header
  const [lastScrollY, setLastScrollY] = useState(0); // State to track last scroll position
  const [isMenuOpen,setIsMenuOpen]=useState(false); // State to toggle menu

    // Function to handle scroll behavior
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        // If the user is at the top of the page, show the navbar
        if (window.scrollY === 0) {
          setShowHeader(true); // Show the navbar
        } else {
          setShowHeader(false); // Hide the navbar when scrolling down or up away from the top
        }
      }
    };
    
  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

//useEffect hook to add and clean up event listeners
useEffect(()=>{
  if(typeof window!=='undefined'){
    window.addEventListener('scroll',controlNavbar);
// Cleanup the event listener on component unmount
return ()=>{
  window.removeEventListener('scroll',controlNavbar);
};
  }
},[lastScrollY]);

  return (
   <div className={`header ${showHeader ? 'active' : 'hidden'}`}>
    <nav className='navbar'>
      <div className='nav-logo'>
        <h3>TECH Solutions</h3>
        </div>
        {/* Hamburger Menu Button */}
        <div className='menu-icon' onClick={toggleMenu}>
          {/* Menu icon lines */}
          <div className={`menu-line ${isMenuOpen ? 'change' : ''}`}></div>
          <div className={`menu-line ${isMenuOpen ? 'change' : ''}`}></div>
          <div className={`menu-line ${isMenuOpen ? 'change' : ''}`}></div>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-active' : ''}`}>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink exact to="/aboutus">About Us</NavLink></li>
          <li><NavLink exact to="/services">Services</NavLink></li>
          <li><NavLink exact to="/joinus">Join Us</NavLink></li>
          <li><NavLink exact to="/blog">Blog</NavLink></li>
        </ul>
    </nav>
   </div>
  )
}

export default Navbar;
