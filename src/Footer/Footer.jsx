import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="all-footer">
      <div className='liz-contact'>
      <a href="mailto:lizyrineo@yahoo.com" className="footer-link">
          lizyrineo@yahoo.com
      </a>
      </div>
      <div className="social-list">
        <a class="social-list-github__link" href="https://github.com/lizyrineo" target="_blank">
          <img className="github" src="https://i.imgur.com/RlRMDAQ.png?1" />
        </a>

        <a
          class="social-list-linkedin__link"
          href="https://www.linkedin.com/in/liz-yrineo-39542469/" target="_blank">
          <img className="linkedin" src="https://i.imgur.com/6oOxSwo.png?1" />
        </a>

        <a class='resume'
          href='https://docs.google.com/document/d/1TCvJJONmBpydlQxLJF4_b7ab-qB8rh8sW6vrjkdWjHY/edit?usp=sharing' target='_blank'>
          <img className='resume' src='https://i.imgur.com/3i5fIPF.png' />
          </a>
      </div>
    </div>
  );
}
