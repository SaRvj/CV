import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Knowledges from "./pages/Knowledge";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Portfolio from "./pages/Portfolio";

const App = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" component={Home} /> 
        <Route path="/compétences" component={Knowledges} /> 
        <Route path="/contact" component={Contact} /> 
        <Route path="/*" component={NotFound} /> 
        <Route path="/portfolio" component={Portfolio} />
      </Routes>
       
      
    </BrowserRouter>
  )
}

export default App;