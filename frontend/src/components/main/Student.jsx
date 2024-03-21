import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Student = () => {

  const navigate = useNavigate();
  const searchRef = useRef(null);
  const [studentData, setStudentData] = useState(null);
  const [issuedBadges, setIssuedBadges] = useState([]);

  const [userlist, setUserlist] = useState([]);
  const [badgeList, setBadgeList] = useState([]);
  
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

  const displayBadges = () => {
    return issuedBadges.map((badge) => (
      
      <div>
        <h1 className='p-4 font-semibold text-black'>Badge ID :- {badge.badge.badgeId}</h1>
        <h1 className='p-4 font-semibold text-black'>Category :- {badge.badge.category}</h1>
        <div className="border mt-8 w-52" key={badge._id}>
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
      return <div className="grid grid-cols-2 text-black lg:col-span-7">
        <h1 className='font-semibold p-4'>Registration Number :- {studentData.registrationNumber}</h1>
        <h1 className='font-semibold p-4'>Name :- {studentData.fullName}</h1>
        <h1 className='font-semibold p-4'>Email Address :- {studentData.emailAddress}</h1>
        <h1 className='font-semibold p-4'>Address :- {studentData.address}</h1>
        <h1 className='font-semibold p-4'>City :- {studentData.city}</h1>
        <h1 className='font-semibold p-4'>Country :- {studentData.country}</h1>
        <h1 className='font-semibold p-4'>State :- {studentData.state}</h1>
        <h1 className='font-semibold p-4'>Pin Code :- {studentData.pinCode}</h1>
        <h1 className='font-semibold p-4'>Mobile Number :- {studentData.mobileNumber}</h1>
        {displayBadges()}
      </div>
    } else {
      return <h1 className='text-black font-semibold text-center'>Enter Student Registration Number to Search Here....</h1>
    }
  }

  return (
    <>
    
      <div className='justify-center flex bg-purple-200'>
      <div className='p-10 mt-10'>
        <h1 className='text-center text-4xl hover:text-5xl duration-1000 hover:text-blue-600 font-bold'>STUDENT PROFILE</h1>
        <div>
          <div className="flex items-center justify-center my-10">
            <div className="flex rounded-full bg-white px-2 w-full max-w-[600px]">
              <input
                type="text"
                ref={searchRef}
                className="w-full flex bg-transparent pl-2 text-slate-600 font-semibold outline-0"
                placeholder="Your Registration Number"
              />
              <button type="submit" className="relative p-2 bg-white rounded-full" onClick={searchStudent}>
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

     


    </>
  )
}
export default Student