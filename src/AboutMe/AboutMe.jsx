import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div>
        <div className='bio-container'>
        <div className='my-pic-border'>
          <img
          className="my-pic"
          src="https://i.imgur.com/Hfp7La0.jpg?1"
          alt="Liz Yrineo smiling"
          />
          </div>
        <p className="my-bio">
            As a project manager I honed my skills as a solution seeker and team
            leader. I pride myself on bringing teams together with the vision of
            clients and management to connect all project elements in order to
            create customer-driven satisfaction and tangible results. I have
            always strived to inspire and nurture project teams in order to
            achieve creative solutions efficiently and on budget.
        </p>
      </div>
      
      <div className="adv-container">
        
        <p className="adv-bio-text">
          Always up for an adventure, when the construction industry was hit
          hard by covid and not wanting to stop building, I decided it was time
          to take my talents and skills in a new direction. Being a lifelong
          learner and always curious, I decided to take a risk and enter the
          technology field. After completing over 500 hours of software
          development instruction and building four complete websites I am excited
          to start the next chapter of my life in the field of technology.
        </p>
        <div className='skydiving-container'>
        <img
          className="skydiving"
          src="https://i.imgur.com/lSDvBmM.jpg?1"
          alt="Liz skydiving"
          />
          </div>
      </div>
      <div className='lang-logos'>
        <img
          className='html'
          src='https://i.imgur.com/jyoXnDC.png?1'
          alt='html logo'/>
        <img
          className='css' 
          src='https://i.imgur.com/Jtlztah.png?1'
          alt='css logo'/>
        <img
          className='js'
          src='https://i.imgur.com/iQXZiyS.png?1'
          alt='js logo'/>
        <img
          className='ruby'
          src='https://i.imgur.com/5L5X3ay.png?1'
          alt='ruby logo'/>
        <img
          className='rails'
          src='https://i.imgur.com/PEsMKjC.png?2'
          alt='rails logo'/>
        <img
          className='react'
          src='https://i.imgur.com/UXSeeZx.png?1'
          alt='react logo'/>
      </div>
    </div>
  );
}
