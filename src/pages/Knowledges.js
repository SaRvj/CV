import React from "react";
import Navigation from "../components/Navigation";
import Experience from "../styles/components/knowledges/Experiences";
import Hobbies from "../styles/components/knowledges/Hobbies";
import Languages from "../styles/components/knowledges/Languages";
import OtherSkills from "../styles/components/knowledges/OtherSkills";

const Knowledges = () =>{
  return(
    <div className="knowledges">
      <Navigation/>
      <div className="knowledgesContent">
      <Languages/>
      <Experience />
      <OtherSkills />
      <Hobbies />
      </div>
    </div>
  )
};

export default Knowledges;