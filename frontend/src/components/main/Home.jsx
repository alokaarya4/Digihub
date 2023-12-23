import React from 'react'

const Home = () => {


  
  return (
    <div>
   {/* header */}
   

<section className="bg-white dark:bg-gray-900">
  <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
    <div className="mr-auto place-self-center lg:col-span-7">
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
       Verify badges<br />
        Student &amp; Certification.
      </h1>
      <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
      Students from partner universities sign up through the VIP form provided by HousingAnywhere to their university. Once they sign up, they immediately receive a verified student badge which qualifies them as reliable tenants. </p>
      
      <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <button 
          className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200  hover:text-blue-700 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
             Login here 
        </button>
       
       
         <button
          className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
          Sign Up
        </button>
      </div>
    </div>
   
    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
      <img src="/AAAA.jpg" alt="computer image" className='rounded-md'/>
    </div>
  </div>
</section>

<section className=" bg-green-200">
  <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
    <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
      <a href="#" className="flex items-center lg:justify-center">
        <img src="/JC NEW.png" />
      </a>
      <a href="#" className="flex items-center lg:justify-center">
        <img src="/google.png" />
      </a>
      <a href="#" className="flex items-center lg:justify-center">
        <img src="/AWS NEW.png" />
      </a>
      <a href="#" className="flex items-center lg:justify-center">
        <img src="/ADOBE.png" />
      </a>
      <a href="#" className="flex items-center lg:justify-center">
        <img src="/IBM NEW.png" />        
     </a>
      <a href="#" className="bg-auto">
         <img src="/dell.png" alt="computer image" />
        </a>
    </div>
  </div>
</section>

<section className="bg-white dark:bg-gray-900">
  <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
    <div className="col-span-2 mb-8">
      <p className="text-lg font-medium text-purple-600 dark:text-purple-500">
       Verify Students
      </p>
      <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
      Empower Your Workforce and Unlock Your Organization's True Potential
      </h2>
      <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
      Allows companies to create, manage and monitor their credentialing, certificate, or badge program from start to finish.
      </p>
      <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
        <div>
          <a
            href="#"
            className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
          >
            Learn More
          
          </a>
        </div>
        
      </div>
    </div>
    <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
      <div>
        <svg
          className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
            clipRule="evenodd"
          />
        </svg>
        <h3 className="mb-2 text-2xl font-bold dark:text-white">
          99.99% uptime
        </h3>
        <p className="font-light text-gray-500 dark:text-gray-400">
          For Landwind, with zero maintenance downtime
        </p>
      </div>
      <div>
        <svg
          className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
        <h3 className="mb-2 text-2xl font-bold dark:text-white">100+ Student</h3>
        <p className="font-light text-gray-500 dark:text-gray-400">
          Trusted by over 600 milion users around the world
        </p>
      </div>
      <div>
        <svg
          className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
            clipRule="evenodd"
          />
        </svg>
        <h3 className="mb-2 text-2xl font-bold dark:text-white">
          100+ countries
        </h3>
        <p className="font-light text-gray-500 dark:text-gray-400">
          Have used Landwind to create functional websites
        </p>
      </div>
      <div>
        <svg
          className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
        <h3 className="mb-2 text-2xl font-bold dark:text-white">5+ Million</h3>
        <p className="font-light text-gray-500 dark:text-gray-400">
          Transactions per day
        </p>
      </div>
    </div>
  </div>
</section>

<section className="bg-gray-50 dark:bg-gray-800">
  <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
    <figure className="max-w-screen-md mx-auto">
      <svg
        className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
        viewBox="0 0 24 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
          fill="currentColor"
        />
      </svg>
      <blockquote>
        <p className="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">
        How have we suddenly generated so much dramatic increase in the visibility of our program? It’s all been driven by badging through Credly’s Acclaim platform.
        </p>
      </blockquote>
      <figcaption className="flex items-center justify-center mt-6 space-x-3">
        <img
          className="w-6 h-6 rounded-full"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
          alt="profile picture"
        />
        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
          <div className="pr-3 font-medium text-gray-900 dark:text-white">
            Micheal Gough
          </div>
          <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
            CEO at Google
          </div>
        </div>
      </figcaption>
    </figure>
  </div>
</section>

<section className="bg-white dark:bg-gray-900">
  <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
    <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
      <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        Designed for business teams like yours
      </h2>
      <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
        Here at Landwind we focus on markets where technology, innovation, and
        capital can unlock long-term value and drive economic growth.
      </p>
    </div>
    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
      {/* Pricing Card */}
      <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
        <h3 className="mb-4 text-2xl font-semibold">Starter</h3>
        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          Best option for personal use &amp; for your next project.
        </p>
        <div className="flex items-baseline justify-center my-8">
          <span className="mr-2 text-5xl font-extrabold">$29</span>
          <span className="text-gray-500 dark:text-gray-400">/month</span>
        </div>
        {/* List */}
        <ul role="list" className="mb-8 space-y-4 text-left">
          <li className="flex items-center space-x-3">
            {/* Icon */}
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Individual configuration</span>
          </li>
          <li className="flex items-center space-x-3">
            {/* Icon */}
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>No setup, or hidden fees</span>
          </li>
          <li className="flex items-center space-x-3">
            {/* Icon */}
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>
              Team size: <span className="font-semibold">1 developer</span>
            </span>
          </li>
          <li className="flex items-center space-x-3">
            {/* Icon */}
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>
              Premium support: <span className="font-semibold">6 months</span>
            </span>
          </li>
          <li className="flex items-center space-x-3">
            {/* Icon */}
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>
              Free updates: <span className="font-semibold">6 months</span>
            </span>
          </li>
        </ul>
        <a
          href="#"
          className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
        >
          Get started
        </a>
      </div>
      {/* Pricing Card */}
      <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
        <h3 className="mb-4 text-2xl font-semibold">Company</h3>
        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          Relevant for multiple users, extended &amp; premium support.
        </p>
        <div className="flex items-baseline justify-center my-8">
          <span className="mr-2 text-5xl font-extrabold">$99</span>
          <span
            className="text-gray-500 dark:text-gray-400"
            dark:text-gray-400=""
          >
            /month
          </span>
        </div>
        {/* List */}
        <ul role="list" className="mb-8 space-y-4 text-left">
          <li className="flex items-center space-x-3">
            {/* Icon */}
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Individual configuration</span>
          </li>
          <li className="flex items-center space-x-3">
            {/* Icon */}
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>No setup, or hidden fees</span>
          </li>
          <li className="flex items-center space-x-3">
            {/* Icon */}
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>
              Team size: <span className="font-semibold">10 developers</span>
            </span>
          </li>
          <li className="flex items-center space-x-3">
            {/* Icon */}
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>
              Premium support: <span className="font-semibold">24 months</span>
            </span>
          </li>
          <li className="flex items-center space-x-3">
            {/* Icon */}
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>
              Free updates: <span className="font-semibold">24 months</span>
            </span>
          </li>
        </ul>
        <a
          href="#"
          className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
        >
          Get started
        </a>
      </div>
      {/* Pricing Card */}
      <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
        <h3 className="mb-4 text-2xl font-semibold">Enterprise</h3>
        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          Best for large scale uses and extended redistribution rights.
        </p>
        <div className="flex items-baseline justify-center my-8">
          <span className="mr-2 text-5xl font-extrabold">$499</span>
          <span className="text-gray-500 dark:text-gray-400">/month</span>
        </div>
        {/* List */}
        <ul role="list" className="mb-8 space-y-4 text-left">
          <li className="flex items-center space-x-3">
            {/* Icon */}
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Individual configuration</span>
          </li>
          <li className="flex items-center space-x-3">
            {/* Icon */}
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>No setup, or hidden fees</span>
          </li>
          <li className="flex items-center space-x-3">
            {/* Icon */}
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>
              Team size: <span className="font-semibold">100+ developers</span>
            </span>
          </li>
          <li className="flex items-center space-x-3">
            {/* Icon */}
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>
              Premium support: <span className="font-semibold">36 months</span>
            </span>
          </li>
          <li className="flex items-center space-x-3">
            {/* Icon */}
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>
              Free updates: <span className="font-semibold">36 months</span>
            </span>
          </li>
        </ul>
        <a
          href="#"
          className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
        >
          Get started
        </a>
      </div>
    </div>
  </div>
</section>





    </div>



  )
}

export default Home