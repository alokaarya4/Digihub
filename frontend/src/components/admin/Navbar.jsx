import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
    <nav className="bg-sky-500/75 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
      <div className="flex flex-wrap space-x-9 items-center mx-auto max-w-screen-xl">
       
        <a className="flex items-center ">
          <span className="self-center text-xl cursor-pointer font-semibold whitespace-nowrap dark:text-white">
            DigiHub
          </span>
        </a>
      
        <div
          className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
               <NavLink className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                aria-current="page" to="/main/home"> Home </NavLink>
            </li>

          <li>
                <NavLink className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" to="/admin/AddBadge">Add Badge</NavLink>  
            </li>
            
            <li>
                <NavLink className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" to="/admin/AddStudent">Add Student</NavLink>  
            </li>
            

            <li>
                <NavLink className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" to="/admin/ManageStudent">Manage Student</NavLink>
            </li>


            <li>
              <NavLink className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" to="/admin/ManageUser">Manage User</NavLink>
            </li>

            <li>
              <NavLink className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" to="/admin/ManageBadges">Manage Badges</NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  </header>
  
  )
}

export default Navbar;