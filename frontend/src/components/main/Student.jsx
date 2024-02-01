import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Student = () => {

  const navigate = useNavigate();

  const searchRef = useRef(null);
  const [studentData, setStudentData] = useState(null);
  const [issuedBadges, setIssuedBadges] = useState([]);

  const getIssuedBadges = async (studentId) => {
    const res = await fetch('http://localhost:5000/issue/getbystudent/' + studentId);
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setIssuedBadges(data);
  }

  const searchStudent = async () => {
    console.log(searchRef.current.value);
    const res = await fetch('http://localhost:5000/student/getbyreg/', {
      method: 'POST',
      body: JSON.stringify({
        registrationNumber: searchRef.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      }

    });
    console.log(res.status);

    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setStudentData(data);
      getIssuedBadges(data._id);
    }
  }

  const displayBadges = () => {
    return issuedBadges.map((badge) => (
      <div>
         <h1 className='p-4 font-semibold text-black '>Badge ID :- {badge.badge.badgeId}</h1>
      <div className=" border mt-8 w-52" key={badge._id}>
        <img className='w-52' src={"http://localhost:5000/" + badge.badge.image} alt="" />
        <div className="card-body">
          <button className='bg-blue-400 hover:bg-blue-600 text-white w-52 rounded-sm'>View Badge</button>
        </div>
        </div>
      </div>
    ))
  }

  const displayStudentData = () => {
    if (studentData !== null) {
      return <div className="mr-auto m-36  grid grid-cols-2 place-self-center lg:col-span-7">
        <h1 className='font-semibold p-4'>Name :- {studentData.fullName}</h1>
        <h1  className='font-semibold p-4'>Registration Number :- {studentData.registrationNumber}</h1>
        <h1 className='font-semibold p-4'>Address :- {studentData.address}</h1>
        <h1 className='font-semibold p-4'>City :- {studentData.city}</h1>
        <h1 className='font-semibold p-4'>Country :- {studentData.country}</h1>
        <h1 className='font-semibold p-4'>State :- {studentData.state}</h1>
        <h1 className='font-semibold p-4'>Email Address :- {studentData.emailAddress}</h1>
        <h1 className='font-semibold p-4'>Pin Code :- {studentData.pinCode}</h1>
        <h1 className='font-semibold p-4'>Mobile Number :- {studentData.mobileNumber}</h1>



       

        {displayBadges()}
      </div>
    } else {
      return <h1 className='text-black text-center'>Loading...</h1>
    }

  }

  return (
    <>
        
      <div className='container shadow-lg rounded-lg bg-purple-100 shadow-slate-300 m-40 p-10 w-auto mt-10'>
        <h1 className='text-center text-4xl font-bold'>Student Profile</h1>
      
      <div>
        <div className="flex bg-[url('/Badge.png')] items-center justify-center my-10">
          <div className="flex rounded-full bg-[#0d1829] px-2 w-full max-w-[600px]">
            <button className="self-center flex p-1 cursor-pointer bg-[#0d1829]">
            </button>
            <input
              type="text"
              ref={searchRef}
              className="w-full bg-[#0d1829] flex bg-transparent pl-2 text-[#cccccc] outline-0"
              placeholder="Your Registration Number"
            />
            <button type="submit" className="relative p-2 bg-[#0d1829] rounded-full" onClick={searchStudent}>
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="#999"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />{" "}
                </g>
              </svg>
            </button>

          </div>
        </div>
        {displayStudentData()}
      </div>
      </div>

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
          99.99% Verify Badges
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
        <h3 className="mb-2 text-2xl font-bold dark:text-white">100+ Student</h3>
        <p className="font-light text-gray-500 dark:text-gray-400">
          More and More Students Gets are Joining our DigiHub
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
        Badges mean nothing in themselves, but they mark a certain achievement and they are a link between the rich and the poor.
        </p>
      </blockquote>
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
      
      <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
        <h3 className="mb-4 text-6xl font-semibold">Kotlin</h3>
        <p className="font-semilight text-gray-500 sm:text-lg dark:text-gray-400">
        Kotlin for App Development
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
            <span>Only available at digipodium.</span>
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
        <a
          href="#"
          className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
        >
          Get started
        </a>
      </div>
      <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
        <h3 className="mb-4 text-6xl font-semibold">Python</h3>
        <p className="font-semilight text-gray-500 sm:text-lg dark:text-gray-400">
        Python for Data Science
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
            <span>Only available at digipodium.</span>
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
        <a
          href="#"
          className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
        >
          Get started
        </a>
      </div>
      <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
        <h3 className="mb-4 text-6xl font-semibold">MEAN</h3>
        <p className="font-semilight text-gray-500 sm:text-lg dark:text-gray-400">
        MEAN Stack Developer 
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
            <span>Only available at digipodium.</span>
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


    </>
  )
}


export default Student