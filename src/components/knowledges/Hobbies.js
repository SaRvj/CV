import React from "react";

const Hobbies = () => {
    return (
        <div className="hobbies">
           <h3>Centres d'intérêt</h3> 
           <ul>
                <li className="hobby">
                    <i className="fas fa-female"></i>
                    <span>Danse de salon</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-music"></i>
                    <i className="fa-solid fa-person-dress-simple"></i>
                    <span>Chant chorale</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-plane"></i>
                    <span>Voyage</span>
                </li>
           </ul>
        </div>
    );
};

export default Hobbies;