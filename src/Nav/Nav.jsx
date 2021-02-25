import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';


export default function Nav() {
  return (
   <div className='nav-container'>
      <div className='my-logo'>
        <div className='drop-box-top'>
        <div className='drop1'></div>
        <div className='drop2'></div>
        </div>
        <div className='drop-box-bottom'>
        <div className='drop3'></div>
        <Link to='/'>
        <img className='computer' src='https://i.imgur.com/bFSTws1.png?2' alt='computer'/>
          </Link>
          <h1 className='my-name'>Liz Yrineo</h1>
          </div>
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
