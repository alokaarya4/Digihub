import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import useAppContext from '../../context/AppContext';

const Navbar = () => {

  const {loggedIn, logout} = useAppContext();

  const loginOptions = () => {
    if(loggedIn) {
      return (
        <div className='ml-64'>
          <button onClick={logout} className="text-gray-800 dark:text-white duration-300 cursor-pointer hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
            Logout
          </button>
        </div>
      )
    } else {

    
      return (
        <div className='ml-60'>
          <a className="text-gray-800 dark:text-white duration-300 cursor-pointer hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800" href="/main/login">
            login
          </a>
          <a className="text-gray-800 cursor-pointer dark:text-white duration-300 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800" href="/main/signup">
            Sign Up 
          </a>
        </div>
      )
    }
  }
  


  return (

  <>
    
    <header>
    <nav className="bg-sky-500/75 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a className="flex items-center">
          <span className="self-center text-xl hover:text-white duration-200 cursor-pointer font-semibold whitespace-nowrap dark:text-white">
            DigiHub
          </span>
        </a>
      
        <div
          className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
               <NavLink className="block hover:text-white duration-100 py-2 pr-4 pl-3 text-gray-700 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                aria-current="page" to="/main/home"> Home </NavLink>
            </li>
           
            <li>
                <NavLink className="block hover:text-white py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent duration-200 dark:border-gray-700" to="/admin/addstudent"> Admin </NavLink>  
            </li>
            
            <li>
                <NavLink className="block hover:text-white py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent duration-200 dark:border-gray-700" to="/main/student"> Student </NavLink>
            </li>

            <li>
              <NavLink className="block hover:text-white py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent duration-200 dark:border-gray-700" to="/main/verifybadge"> Verify Badge </NavLink>
            </li>

            <li>
              <NavLink className="block hover:text-white py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent duration-200 dark:border-gray-700" to="/main/browserbadge">Browse Badges
              </NavLink>
            </li>
          </ul>
          <ul>
            {loginOptions()}
          </ul>
        </div>
      </div>
    </nav>
  </header>

  </>
  )
}
export default Navbar;