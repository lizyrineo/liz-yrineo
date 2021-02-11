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
        <a class="social-list-github__link" href="https://github.com/lizyrineo">
          <img className="github" src="https://i.imgur.com/RlRMDAQ.png?1" />
        </a>

        <a
          class="social-list-linkedin__link"
          href="https://www.linkedin.com/in/liz-yrineo-39542469/">
          <img className="linkedin" src="https://i.imgur.com/6oOxSwo.png?1" />
        </a>
      </div>
    </div>
  );
}
