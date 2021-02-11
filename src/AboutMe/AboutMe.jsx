import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div>
      <section class="about-me" id="about">
        <img
          className="my-pic"
          src="https://i.imgur.com/lhdb94N.jpg?1"
          alt="a picture of Liz Yrineo smiling"
        />
        <p className="bio">
          As a project manager I honed my skills as a solution seeker and team
          leader. I pride myself on bringing teams together with the vision of
          clients and management to connect all project elements in order to
          create customer-driven satisfaction and tangible results. I have
          always strived to inspire and nurture project teams in order to
          achieve creative solutions efficiently and on budget.
        </p>
      </section>

      <div className="edu">
        <div className="csu">
          <img src="https://i.imgur.com/dA0QtWQ.png?1" alt="CSU Rams Logo" />
        </div>
        <div className="ga">
          <img src="https://i.imgur.com/JCsgrUm.png?1" alt="GA Logo" />
        </div>
      </div>

      <div className='lang-logos'>
        <img
          className='css' 
          src='https://i.imgur.com/piCuZuq.png?1' />
        <img
          className='html'
          src='https://i.imgur.com/BIVPcpI.png?2' />
        <img
          className='js'
          src='https://i.imgur.com/ppz7TNX.png?1' />
        <img
          className='ruby'
          src='https://i.imgur.com/shH2AO1.png?1' />
        <img
          className='rails'
          src='https://i.imgur.com/DnIlb0E.png?1' />
        <img
          className='react'
          src='https://i.imgur.com/gs8vbnW.png?5' />
      </div>
      
      
      
      
      <section class="adv-me">
        <img
          className="scaffold"
          src="https://i.imgur.com/Eglh1ND.jpg?5"
          alt="Liz on scaffold"
        />
        <p className="adv-bio">
          Always up for an adventure, when the construction industry was hit
          hard by covid and not wanting to stop building, I decided it was time
          to take my talents and skills in a new direction. Being a lifelong
          learner and always curious, I decided to take a risk and enter the
          technology field. After completing over 430 hours of software
          development instruction and building four complete websites I am excited
          to start the next chapter of my life in the field of technology.
        </p>
      </section>
    </div>
  );
}
