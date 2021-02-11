import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';


export default function Nav() {
  return (
   <div className='nav-container'>
      <div className='my-logo'>
        <Link to='/'>
        <img src='https://i.imgur.com/bUIAj1I.png?1' />
        </Link>
      </div>
      
  
    <div className='nav-list'>
        <Link className="abt" to='/AboutMe'>All About Me</Link>
      
        <Link className="work" to='/Projects'>My Projects</Link>

        <Link className="contact" to='/ContactForm'>Let's get in touch!</Link>
    </div>
    </div>
    
  )
}
