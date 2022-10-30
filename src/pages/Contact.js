import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () =>{
  return(
    <div className="contact">
      <Navigation/>
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1> Contactez-moi </h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Ile-de-France</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="0648394683">
                <span 
                  className="clickInput" 
                  onClick={() => { alert('téléphone copié !');}}>0648394683
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <CopyToClipboard text="satranaravelojaona@gmail.com">
                <span 
                  className="clickInput" 
                  onClick={() => { alert('e-mail copié !');}}>satranaravelojaona@gmail.com
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">
              <h4>LinkedIn</h4>
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">
              <h4>Github</h4>
              <i className="fab fa-github"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Contact;