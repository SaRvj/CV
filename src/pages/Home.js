import React from "react";
import Navigation from "../components/Navigation";

const Home = () =>{
  return(
    <div className="home">
        <Navigation/>
        <div className="homeContent">
          <div className="content">
            <h1> Satrana Ravelojaona</h1>
            <h2> Développeur Front-End React</h2>
            <div className="pdf">
              <a href="./media/CV_Satrana_RAVELOJAONA.pdf" target="_blank"> Téléchargez CV</a>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Home;