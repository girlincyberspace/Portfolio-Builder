import React, {useState, useEffect, useRef} from 'react';
import './Navbar.css';
import profile from '../../assets/profile.png';

function NavbarAfterSignIn({ userData }){
    

    return(
        <div className='navbarAfterSignIn'>
            
            <p><a href='/'>Liz</a></p>
            
            <ul>
                <a href='/manage-home'><li>Home</li></a>
                <a href='templates'><li>Create New Portfolio</li></a>
                <a href='/manage-home'><li>My Portfolios</li></a>
            </ul>
            <div className='profile-container'>
                <img src={profile} alt='profile picture' className='profile'></img>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/>
                </svg>
                
            </div>
        </div>
  
      );
  }
  
  export default NavbarAfterSignIn;