
import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Preloader from "../src/components/Pre";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";
import Register from "./components/Register";

import Cards from "./components/Cards";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";


const App = () => {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}></div>
    
       
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
         <Route path="/Contact" element={<Contact/>}/>
         <Route path="/Sidebar" element={<Sidebar/>}/>
         <Route path="/Register" element={<Register/>}/>
         <Route path="/Cards" element={<Cards/>}/>
         
          <Route path="*" element={<Navigate to="/"/>} />
          
        </Routes>
    
      

    </Router>
  );
};

export default App;
