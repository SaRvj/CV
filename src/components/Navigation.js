import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () =>{
    return(
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/satrana.jpg" alt="profil-pic" />
                    <h3>Satrana Ravelojaona</h3>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" activeclassName="navActive" >
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/compétences" activeclassName="navActive" >
                            <i className="fas fa-mountain"></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/" activeclassName="navActive" >
                            <i className="fas fa-images"></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/" activeclassName="navActive" >
                            <i className="fas fa-address-book"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>

        
    );
};

export default Navigation;