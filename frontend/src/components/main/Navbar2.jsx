import React, { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  return (
   <div>
    <h1>Navbar</h1>
    <ul className='display: flex  space-x-4 justify-center rounded-md bg-cyan-100'>
      <li><a href="#">Home</a></li>
      <li><a href="#">Login</a></li>
      <li><a href="#">Admin</a></li>
      <li><a href="#">Student</a></li>
      <li><a href="#">Verify Badge</a></li> 
      <li><a href="#">Browse Badge</a></li>
      <li><a href="#">View Student</a></li>
      <li><a href="#">View Badge</a></li>
    </ul>

    <button></button>
   </div>
  )
}

export default Navbar;