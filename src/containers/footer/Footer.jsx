import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className="gpt3__footer section__margin">
      <div className="gpt3__footer-header">
        <h3 className="gradient__text">Do you want to step in to the future before others</h3>
      </div>
      <div className="gpt3__footer-request-button">
        <button>Request Early Access</button>
      </div>
      <div className="gpt3__footer-container">
        <div className="gpt3__footer-container__logo">
          <img src={logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-container__links">
          <h4>Links</h4>
          <ul>
            <li><a>Overons</a></li>
            <li><a>Social Media</a></li>
            <li><a>Counters</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        <div className="gpt3__footer-container__company">
        <h4>Company</h4>
          <ul>
            <li><a>Terms & Conditions</a></li>
            <li><a>Private Policy</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        <div className="gpt3__footer-container__get-in-touch">
        <h4>Get in touch</h4>
          <ul>
            <li><a>Crechterwoord K12 182 DK Alknjkcb</a></li>
            <li><a>085-132567</a></li>
            <li><a>info@paytime.net</a></li>
          </ul>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer