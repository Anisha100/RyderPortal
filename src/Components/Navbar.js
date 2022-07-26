import React from 'react'


const Navbar = () => {
    return (
        <div className="flex shadow-sm bg-gray-50  p-5 justify-between border-b h-20">
            <div className="flex space-x-3 mt-2 ">
                <p className="text-gray-300   bottom:28px">Manage </p>
                <p>	•</p>
                <p>	Employees</p>
                <div className="text-gray-300" />
                <div className="text-gray-300" />

            </div>
            <div className="flex space-x-4 text-gray-400 mr-3 mt-2">

         
<p className="text-gray-300 font-semibold"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg></p>
<p className="text-gray-300 font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
</svg></p>
            </div>
        </div>
    )
}


export default Navbar;
