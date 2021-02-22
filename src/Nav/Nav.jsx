import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';


export default function Nav() {
  return (
   <div className='nav-container'>
      <div className='my-logo'>
        <Link to='/'>
        <img src='https://i.imgur.com/kjzYMFT.png?1' />
        </Link>
      </div>
      
  
      <div className='nav-list'>
       
        {/* <button> */}
        <Link className="abt" to='/AboutMe'>All About Me</Link>
        {/* </button> */}
        <div className='transition'></div>
        <Link className="work" to='/Projects'>My Projects</Link>

        <Link className="contact" to='/ContactForm'>Let's get in touch!</Link>
        </div>
    </div>
    
  )
}
