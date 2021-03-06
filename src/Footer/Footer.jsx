import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="main-footer">
      <div className="social-container">
        <div className="github">
          <a
            className="social-list-github__link"
            href="https://github.com/lizyrineo"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="github" icon={faGithub} />
          </a>
        </div>

        <div className="linkedin">
          <a
            className="social-list-linkedin__link"
            href="https://www.linkedin.com/in/liz-yrineo-39542469/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
          </a>
        </div>
      </div>

      <div className="author">
        <p> ©lizyrineo 2021</p>
      </div>

      <div className="resume">
        <a
          href="https://drive.google.com/file/d/1H50CXXYD1Ofg3H7fW4ruTgmFCSzdHcCk/preview"
          target="_blank"
          rel="noreferrer"
        >
          <button className="resume-click">To my resume</button>
        </a>
      </div>
    </div>
  );
}
