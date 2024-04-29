import React, { useEffect } from 'react'

const Navbar = () => {
    useEffect(() => {
        const toggle = document.getElementById('toggle');
        const navbar = document.getElementById('navbarphone');
    
        const handleToggleClick = () => {
          navbar.classList.toggle('active');
        };
    
        toggle.addEventListener('click', handleToggleClick);
    
        
        return () => {
          toggle.removeEventListener('click', handleToggleClick);
        };
      }, []);

  return (
    <nav className=''>
        <a href="/">
          <h1 className="logo">MY_<span>BRAND</span></h1>
        </a>
        <ul id="navbar" className="links">
          <li><a href="/">Home</a></li>
          <li><a href="/contactus">Contact Us</a></li>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/blogs">Blogs</a></li>
          <li><a href="/signin">Sign In</a></li>
         
        </ul>
        <ul id="navbarphone" className="linksphone">
        <li><a href="/">Home</a></li>
          <li><a href="/contactus">Contact Us</a></li>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/blogs">Blogs</a></li>
          <li><a href="/signin">Sign In</a></li>
         
        </ul>

        <div id="toggle" className="toggle">
          <svg
            width="26"
            height="24"
            viewBox="0 0 26 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.52478 1H25M1.52478 12H25M1.52478 23H25"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </nav>
  )
}

export default Navbar
