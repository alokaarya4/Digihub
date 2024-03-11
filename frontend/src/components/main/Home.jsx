import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const [userlist, setUserlist] = useState([]);
  const [badgeList, setBadgeList] = useState([]);
  
  const fetchUserData = async()=> {
    const res=await fetch('http://localhost:5000/user/getall');
    console.log (res.status);
    if(res.status===200){
        const data =await res.json();
        console.log(data);
        setUserlist(data);
    }
  };

  const fetchBadges = async () => {
    const res = await fetch('http://localhost:5000/badge/getall');
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setBadgeList(data);
    }
  }

  useEffect(() => {
    fetchUserData();
    fetchBadges();
  },[])

  return (
    <div>
<section className=" bg-[url('/Backgrounds/back-1.png')] bg-cover dark:bg-gray-900">
  <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
    <div className="mr-auto place-self-center lg:col-span-7">
      <h1 className="max-w-2xl mb-4 text-4xl text-blue-800 font-extrabold leaq  ding-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
       Verify badges<br />
        Student &amp; Certification.
      </h1>
      <p className="max-w-2xl mb-6  font-semibold text-red-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
      Students from partner Institute & Collages sign up through the DigiHub to their Institute & Collages. Once they sign up, they immediately receive a Verified Student Badge which qualifies them as reliable Students. </p>
      
      <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <button 
          className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200  hover:text-white active:bg-green-600 rounded-lg sm:w-auto hover:bg-blue-500 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800" onClick={()=> {navigate('/main/Login/')}}>
             Login here 
        </button>
       
       
         <button
          className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-blue-500 hover:text-white active:bg-green-600 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={()=> {navigate('/main/SignUp/')}}>
          Sign Up
        </button>
      </div>
    </div>
   
    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
      <img src="/badge-02.png" alt="Badge Image" className=''/>
    </div>
  </div>
</section>

<section className="bg-purple-100 "> 
<marquee velocity={25} scrollamount="20">
  <div className="max-w-screen-xl lg:pb-16">
    <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
      <a href="" className="flex items-center lg:justify-center">
        <img src="/MERN-logo.png" />
      </a>
      <a href="https://www.python.org/" target='_blank' className="flex items-center lg:justify-center">
        <img src="/pythonlogo1.png" className='m-4'/>
      </a>
      <a href="https://kotlinlang.org/" target='_blank' className="flex items-center lg:justify-center">
        <img src="/kotlin.png" />
      </a>
      <a href="https://react.dev/" target='_blank' className="flex items-center lg:justify-center">
        <img src="/React-logo1.png"/>
      </a>
      <a href="https://angular.io/" target='_blank' className="flex items-center lg:justify-center">
        <img src="/Angular1.png" />        
     </a>
      <a href="https://www.javascript.com/" target='_blank' className="bg-auto">
         <img src="/JavaScript-logo.png" className='mt-4' />
        </a>
    </div>
  </div>
  </marquee>
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
         {badgeList.length}
        </h3>
        <p className="font-light text-gray-500 dark:text-gray-400">
          Everyone got Badges from our DigiHub
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
          <h3 className="mb-2 text-2xl font-bold dark:text-white">{userlist.length}</h3>
       
        
       
        <p className="font-light text-gray-500 dark:text-gray-400">
          More and More Students Gets are Joining our DigiHub
        </p>
      </div>
    </div>
  </div>
</section>

<section id="testimonials" className="py-10 m-4 lg:py-20">
  <div className="container mx-auto">
    <p className="uppercase tracking-wider mb-8 text-gray-600 text-center">
      What Student Are Saying
    </p>
    <div className="flex flex-col md:flex-row md:-mx-3">
      <div className="flex-1 px-3">
        <div
          className="p-12 rounded-lg border border-solid border-gray-200 mb-8"
          style={{ boxShadow: "0 10px 28px rgba(0,0,0,.08)" }}
        >
          <p className="text-xl font-semibold">
          If you want to learn something in life then come here
          </p>
          <p className="mt-6">
          I have spent many good moments of my life here, studied here, got to learn a lot and had a lot of fun.
          </p>
          <div className="flex items-center mt-8">
            <img
              className="w-12 h-12 mr-4 rounded-full"
              src="/Alok.jpg"
              alt="Alok Kumar Pic"
            />
            <div>
              <p>Alok Kumar</p>
              <p className="text-sm text-gray-600">
                MERN Stack Developer
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 px-3">
        <div
          className="p-12 rounded-lg border border-solid border-gray-200 mb-8"
          style={{ boxShadow: "0 10px 28px rgba(0,0,0,.08)" }}
        >
          <p className="text-xl font-semibold">
          If you want to learn something in life then come here
          </p>
          <p className="mt-6">
          I have spent many good moments of my life here, studied here, got to learn a lot and had a lot of fun.
          </p>
          <div className="flex items-center mt-8">
            <img
              className="w-12 h-12 mr-4 rounded-full"
              src="/Alok.jpg"
              alt="Alok Kumar Pic"
            />
            <div>
              <p>Alok Kumar</p>
              <p className="text-sm text-gray-600">
                MERN Stack Developer
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 px-3">
        <div
          className="p-12 rounded-lg border border-solid border-gray-200 mb-8"
          style={{ boxShadow: "0 10px 28px rgba(0,0,0,.08)" }}
        >
          <p className="text-xl font-semibold">
          If you want to learn something in life then come here
          </p>
          <p className="mt-6">
          I have spent many good moments of my life here, studied here, got to learn a lot and had a lot of fun.
          </p>
          <div className="flex items-center mt-8">
            <img
              className="w-12 h-12 mr-4 rounded-full"
              src="/Alok.jpg"
              alt="Alok Kumar Pic"
            />
            <div>
              <p>Alok Kumar</p>
              <p className="text-sm text-gray-600">
                MERN Stack Developer
              </p>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  </div>
</section>


<section className="bg-white dark:bg-gray-900">
  <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
    <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
      <h2 className="mb-4 text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
       Our Popular Courses
      </h2>
      <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
       The Our Courses for you depends on your interests, career goals, and current skill level. Here are some popular and widely recognized courses that cover a range of topics:
      </p>
    </div>
    <div className="space-y-8  lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
      
      <div className="flex flex-col duration-300  max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
        <h3 className="mb-4 text-6xl font-semibold">Kotlin</h3>
        <p className="font-semilight text-gray-500 sm:text-lg dark:text-gray-400">
        Kotlin for App Development
        </p>
        <div className="flex items-baseline justify-center my-8">
          <span className="mr-2 text-5xl font-semibold">10000 RS</span>
          <span className="text-gray-500 dark:text-gray-400">/ 6 month</span>
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
            <span>Only available at DigiHub.</span>
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
            <span>Less boilerplate code</span>
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
              Our Students : <span className="font-semibold">100+ developers</span>
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
            Realtime Cloud services Firebase
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
            Data classes ,Sealed Classes, etc.
            </span>
          </li>
        </ul>
        <button
          className="text-white hover:bg-purple-900 bg-purple-600 active:bg-blue-800 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"  onClick={() => {navigate('/main/registrationform')}}
        >
          Registration Now
        </button>
      </div>
      
      
      <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
        <h3 className="mb-4 text-6xl font-semibold">Python</h3>
        <p className="font-semilight text-gray-500 sm:text-lg dark:text-gray-400">
        Python for Data Science
        </p>
        <div className="flex items-baseline justify-center my-8">
          <span className="mr-2 text-5xl font-extrabold">7999 RS</span>
          <span className="text-gray-500 dark:text-gray-400">6/month</span>
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
            <span>Only available at DigiHub.</span>
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
            <span>Use popular python libraries</span>
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
              Our Students : <span className="font-semibold">200+ Programmers</span>
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
            Create autonomous web crawlers
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
            Cool data science projects
            </span>
          </li>
        </ul>
        <button
          className="text-white bg-purple-600 hover:bg-purple-900 active:bg-blue-800 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
        >
         Registration Now
        </button>
      </div>
      <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
        <h3 className="mb-4 text-6xl font-semibold">MEAN</h3>
        <p className="font-semilight text-gray-500 sm:text-lg dark:text-gray-400">
        MEAN Stack Developer 
        </p>
        <div className="flex items-baseline justify-center my-8">
          <span className="mr-2 text-5xl font-extrabold">8999 RS</span>
          <span className="text-gray-500 dark:text-gray-400">/6 month</span>
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
            <span>Only available at DigiHub.</span>
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
            <span>Learn to use Github</span>
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
              Our Students : <span className="font-semibold">300+ developers</span>
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
            Using New Context API
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
            Free Project Hosting
            </span>
          </li>
        </ul>
        <button
          
          className="text-white bg-purple-600 hover:bg-purple-900 active:bg-blue-800 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
        >
         Registration Now
        </button>
      </div>

    </div>
  </div>
</section>

    
    </div>
  )
}
export default Home