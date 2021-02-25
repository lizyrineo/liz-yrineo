import React, { useState } from "react";
import "./Home.css";
import { CSSTransition } from "react-transition-group";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <div className="home-title">
          <span>⌯ Project Manager ⌯</span>
          <span> Software Developer ⌯</span>
          <span> Community Activist ⌯</span>
        </div>
        <div className="home1-container">
          
            <p className="para1">
              After several successful years as a commercial construction
              project manager, I've transitioned to the world of coding. I've
              dedicated over 500 hours as a software engineering fellow. I'm
              excited to break into the technology field where my new skills
              will blossom as I bring all of my previous expertise along with
              the new languages and specialized programming proficiencies I've
              mastered.
            </p>
            <div className='const-pic-border'>
              <img
                className="const-pic"
                src="https://i.imgur.com/WqzuraB.jpg?2"
              />
           
          </div>
          
        
      </div>
      
      <div className="home2-container">
      <div className='hands-pic-border'>
        <img className="hands-pic" src="https://i.imgur.com/WIX9OUq.jpg?1" />
        </div>
        <p className="para2">
          Using my experience as a team leader I have confidence that I will
          foster an environment of creativity and inspiration. Building is what
          I love and I will use my talents from managing large-scale
          construction projects to managing new technical endeavors.
        </p>
      
      
      
        </div>
      </div>
  );
}
