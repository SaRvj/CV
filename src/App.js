import React from "react";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import Knowledges from "./pages/Knowledge";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Portfolio from "./pages/Portfolio";

const App = () =>{
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} /> 
        <Route path="/compétences" component={Knowledges} /> 
        <Route path="/contact" component={Contact} /> 
        <Route component={NotFound} /> 
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
       
      
    </BrowserRouter>
  )
}

export default App;