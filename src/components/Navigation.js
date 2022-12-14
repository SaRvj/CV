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
                        <NavLink exact to="/" className="navActive" >
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/competences" className="navActive" >
                            <i className="fas fa-mountain"></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/portfolio" className="navActive" >
                            <i className="fas fa-images"></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" className="navActive" >
                            <i className="fas fa-address-book"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/satranaravelojaona" target="blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/SaRvj" target="blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    </li>
                </ul>
                <div className="signature">
                    <p>satranaravelojaona - 2022</p>
                </div>
        
            </div>
        </div>

        
    );
};

export default Navigation;