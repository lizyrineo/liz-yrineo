import React, {useState} from 'react'
import './Home.css'
import { CSSTransition } from 'react-transition-group';


export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
 
  return (
    <div>
      <div className="title">
        <p class="section__intro">Project Manager & Software Developer</p>
      </div>
    
      <div className='home-text'>
        <img className='para1' src='https://i.imgur.com/W8HfzLS.png' onload='loadImage()'/>
        <img className='para2' src='https://i.imgur.com/L9eSdY8.png' onload='loadImage()'/>
      </div>
      
    </div>
  )
}
