import React from 'react'
import "./Contact.css";
import {useNavigate} from 'react-router-dom'
const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
                                
    navigate('/Register');
   };

    return (
        <div className="py-2 border-b  flex space-x-4 shadow-sm bg-gray-50   justify-between ">
            <div className="flex space-x-2 mt-5  ">
            <p className="text-gray-300 font-semibold"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg></p>     
                <div className="text-gray-300 " />
<p className="text-gray-300">Search Employee </p>
            </div>
            
            <div className="flex space-x-4 text-gray-400 mr-3 mt-5">
              <a>Filter </a>

              <p className="text-gray-600 font-semibold"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
</svg></p>
              <p className="text-gray-600 font-semibold"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
</svg></p>
<p className="text-gray-600 font-semibold">
<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
</svg></p>
            <form  onSubmit={handleSubmit}>
         
        
           <button  class="button1 text-xs font-bold" >Register</button>
          
         
        
          </form>

            </div>
        </div>
    )
}


export default Contact;
