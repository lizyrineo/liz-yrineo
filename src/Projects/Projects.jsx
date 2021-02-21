import React from "react";
import './Projects.css';

export default function Projects() {
  return (
    <div>
    <div className='proj-page'>
        <h1 className='proj-title'>My Projects</h1>
     
        <div class="all-projects">
         <div className='all-p1'>
            <div className='p1'>
              <a href="https://visit-national-parks.netlify.app"target="_blank">
                <img className= 'pic1' src="https://i.imgur.com/4HbEIL4.png?2"
                  alt='P1 screenshot'
                />
            </a>
              <p className='p1-text'>I built this app after 10 days of instruction with HTML, CSS and Javascript.  Using an external API, I leveraged Axios to retrieve the data.  The site was deployed using Github and Netlify.</p>
            </div>
          </div>
          
          <div className='all-p2'>
          <div className='p2'>
            <a href="https://elated-dijkstra-9e1c18.netlify.app"target="_blank">
                <img
                  className='pic2'
                  src="https://i.imgur.com/Bv5hGUs.png?1"
                  alt=""
              />
            </a>
            <p className='p2-text'>I created a working and interactive app using Javascript and React.  I implemented and organized React file structure so the app would have functionality between the components.  Using Airtable, I created a robust database and leveraged Axios for full CRUD.</p>
            </div>
            </div>
      
          <div className='all-p3'>
          <div className='p3'>
          <a href='https://get-lost.netlify.app/'target="_blank">
                <img
                  className='pic3'
                  src="https://i.imgur.com/2wpn1Su.png?1"
                  alt=""
            />
            </a>
            <p className='p3-text'>This app was a team project.  In the highly collaborative team environment, we decided on the subject, content and design of the full CRUD site.  Our success was based on our communication and full utilization of Github. We utilized Express, Mongoose and MongoDB for the backend and React for the client facing side.  Deployment was completed using Heroku and Netlify.</p>
          </div>
          </div>

          <div className='all-p4'>
          <div className='p4'>
          <a href='https://pitch-in-volunteer.netlify.app'target="_blank">
                <img
                  className='pic4'
                  src="https://i.imgur.com/oRJHJO1.png?1"
                  alt=""
            />
            </a>
            <p className='p4-text'>This site is a full-stack, full CRUD site created using Ruby on Rails.  The database consists of three associated tables.  I built a Ruby on Rails server to define models for interacting with the database.  The cliient facing side was created using React, consuming the data from the Ruby on Rails API.</p>
            </div>
            </div>
        </div>
        </div>
     </div> 
  );
}
