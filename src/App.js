import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Knowledges from "./pages/Knowledges";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Portfolio from "./pages/Portfolio";

const App = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/competences" element={<Knowledges/>} /> 
        <Route path="/contact" element={<Contact/>} /> 
        <Route path="/*" element={<NotFound/>} /> 
        <Route path="/portfolio" element={<Portfolio/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;