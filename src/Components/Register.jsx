import React from 'react';
import Cards from "../../src/components/Cards";
import Sidebar from "../../src/components/Sidebar"
import Navbar from "../../src/components/Navbar";
import Contact from "../../src/components/Contact";
import { Container } from 'postcss';
import {useNavigate} from 'react-router-dom'
const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
                                
    navigate('/About');
   };
  return (
   <div>
   <div className="flex w-screen h-screen  bg-gray-50" >
     <Sidebar />

     <div className="w-screen h-screen ">
       <Navbar />
       <div className="ml-10">
       <form class="w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/2 px-3  md:mb-0 ">
      <label class="block uppercase tracking-wide  text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>

    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class=" mb-2 block uppercase tracking-wide text-gray-700 text-xs font-bold " for="grid-last-name">
        Last Name
      </label>
      <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Username
      </label>
      <input class="mb-2 appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" />
      
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full px-3">
      <label class="mb-2 block uppercase tracking-wide text-gray-700 text-xs font-bold" for="grid-password">
        Role
      </label>
      <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" />
      
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/2 px-3 mb-2 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
       Email Address
      </label>
      <input class="appearance-none block w-full bg-white text-gray-700 border  border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
  
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Phone/Mobile No
      </label>
      <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Assign Shops
      </label>
      <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" />
      <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">

    <button  class="border-2 text-xs font-bold border-rose-500 rounded border-solid p-2 " >Cancel</button>
          
    </div>
    <div class="w-full md:w-1/2 px-3">
      
    <button  class="bg-red-600 rounded text-xs font-bold text-stone-50 p-2" >Register Employee</button>
          
      
    </div>
  </div>
   
     
    </div>
  </div>
</form>
   </div>

      
     </div>
   </div>

 </div>
  );
};


export default Register;

