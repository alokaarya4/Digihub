import React, { useRef, useState } from 'react'

const VerifyBadge = () => {

  const badgeRef = useRef(null);
  const [badgeData, setBadgeData] = useState(null);


  const searchbadge = async () => {
    console.log(badgeRef.current.value);
    const res = await fetch('http://localhost:5000/badge/getbybadgeid/' + badgeRef.current.value);
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setBadgeData(data);
  }


  const displayBadgeData = () => {


    if (badgeData !== null) {
      return <div className="grid grid-cols-2">


        <h1 className='p-4 font-semibold text-black '>Badge ID :- {badgeData.badgeId}</h1>
        <h1 className='p-4 font-semibold text-black '>Category :- {badgeData.category}</h1>

      </div>
    } else {
      return <h1 className='text-black font-semibold text-center'>Badge ID is Not Valid</h1>
    }
  }

  return (

    <div>
      <label
        className="mx-auto mt-40 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
        htmlFor="search-bar"
      >
        <input
          id="search-bar"
          ref={badgeRef}
          placeholder="Verify Badge ID"
          className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
        />
        <button onClick={searchbadge} className="w-full md:w-auto px-6 py-3  bg-black hover:bg-blue-600 duration-300 border-black text-white fill-white active:scale-95 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">
          <div className="relative">

            <div className="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
              <svg
                className="opacity-0 animate-spin w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx={12}
                  cy={12}
                  r={10}
                  stroke="currentColor"
                  strokeWidth={4}
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
            <div className="flex items-center transition-all opacity-1 valid:">
              <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                Search
              </span>
            </div>
          </div>
        </button>
      </label>

      {displayBadgeData()}

    </div>
  )
}

export default VerifyBadge;