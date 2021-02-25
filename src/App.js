import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Nav from "./Nav/Nav";
import AboutMe from "./AboutMe/AboutMe";
import Projects from "./Projects/Projects";
import Home from './Home/Home';
import Footer from './Footer/Footer'
import "./App.css";
import ContactForm from "./ContactForm/ContactForm";

function App() {
  return (
    <div className="page-container">
      <div className='content-wrap'>
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <Nav />
      
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path="/AboutMe">
          <AboutMe />
        </Route>
        <Route path="/Projects">
          <Projects />
        </Route>
        <Route path="/ContactForm">
          <ContactForm />
        </Route>
        </Switch>
        </div>
        <Footer />
       
    </div>
  );
}

export default App;
