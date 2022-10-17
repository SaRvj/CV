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
                <span className="clickInput">0648394683</span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Contact;