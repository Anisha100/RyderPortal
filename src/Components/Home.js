import "./Home.css";
import logo from "../../src/assets/logo.png";
import {useNavigate} from 'react-router-dom'
import RyderLogo from "../../src/assets/RyderLogo.png";
import { useHistory } from "react-router-dom";
import {  useState } from "react";
import React from 'react'

import ReactDOM from "react-dom";
const Home= () => {
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
                                
    navigate('/About');
   };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">

     
      
              <img src={logo} alt="" className="c-icons" />
            
            
            
          
       </div>
        <div className="c-right">
        <img className="c-desc" src={RyderLogo} alt="" />
          <form  onSubmit={handleSubmit}>
          LOGIN ID/EMAIL
           <input  type="text" placeholder="" name="user_name" /><br></br>
           Password
           <input  type="password" placeholder="" name="user_subject" />
           <br></br>
          
        
           <button  class="button" >LOGIN</button>
          
          <p>Forgot password?</p>
        
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
