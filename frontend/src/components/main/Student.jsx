import React, { useEffect, useRef, useState } from 'react'

const Student = () => {

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

      <div className="border border-gray-500" key={badge._id}>
        <img className='card-img-top' src={"http://localhost:5000/" + badge.badge.image} alt="" />
        <div className="card-body">
          <button className='bg-blue-400 hover:bg-blue-600 text-white w-full rounded-sm'>View Badge</button>
        </div>
      </div>
    ))
  }

  const displayStudentData = () => {
    if (studentData !== null) {
      return <div className="mr-auto grid grid-cols-2 gap-4 place-self-center lg:col-span-7">
        <h1>Name : {studentData.fullName}</h1>

        <h1>Registration Number : {studentData.registrationNumber}</h1>

        {displayBadges()}
      </div>
    } else {
      return <h1 className='text-white pt-2'>Loading...</h1>
    }

  }

  return (
    <>

      <div className='text-center text-4xl underline font-bold mt-10'>
        <h1>Student Profile</h1>
      </div>
      <div>
        <div className="flex items-center justify-center my-10">
          <div className="flex rounded-full bg-[#0d1829] px-2 w-full max-w-[600px]">
            <button className="self-center flex p-1 cursor-pointer bg-[#0d1829]">
            </button>
            <input
              type="text"
              ref={searchRef}
              className="w-full bg-[#0d1829] flex bg-transparent pl-2 text-[#cccccc] outline-0"
              placeholder=""
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

    </>
  )
}


export default Student