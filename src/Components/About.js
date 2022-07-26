import React from 'react';
import Cards from "./Cards";
import Sidebar from "./Sidebar"
import Navbar from "./Navbar";
import Contact from "./Contact";
import { Container } from 'postcss';
const About = () => {
  return (
   <div>
   <div className="flex w-screen h-screen overflow-x-hidden" >
     <Sidebar />
     <div className="w-screen h-screen ">
       <Navbar />
       <Contact/>
    <Cards/>

      
     </div>
   </div>

 </div>
  );
};


export default About;

