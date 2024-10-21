import React, { useEffect ,useState} from 'react'
import  Navbar from './Navbar'
import '../assests/Header.css'


const Header = () => {
  const [showHeader,setShowHeader]=useState(true);
  const [lastScrollY,setLastScrollY]=useState(0);
const controlHeader =()=>{
  if(typeof window !=='undefined')
  {
    if(window.scrollY==0)
    {
      setShowHeader(true);
    }else{
      setShowHeader(false);
    }
  }
}
useEffect(()=>{
  if(typeof window!=='undefined'){
    window.addEventListener('scroll',controlHeader);
    return ()=>{
      window.removeEventListener('scroll',controlHeader);
    };
  }
},[lastScrollY]);
  return (
    <div className={`header ${showHeader ? 'active' : 'hidden'}`}>  
    
     <Navbar/>
    </div>
  )
}

export default Header
