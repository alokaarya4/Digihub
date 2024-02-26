import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';



const BrowserBadge = () => {

  const [badgeList, setBadgeList] = useState([]);
  const [masterList, setMasterList] = useState([]);

  const browseRef = useRef(null);


  const fetchBadges = async () => {
    const res = await fetch('http://localhost:5000/badge/getall');

    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setBadgeList(data);
      setMasterList(data);
    }
  }

  // For Search code----------------------
  const searchBadges = () => {
    setBadgeList(
      masterList.filter(badge => badge.title.toLowerCase().includes(browseRef.current.value.toLowerCase()))
    );
  }
//---------------------------------


  useEffect(() => {
    fetchBadges();
  }, [])

  const displayBadges = () => {
    return badgeList.map(badge => (
      <div className="relative flex flex-col bg-white shadow-lg shadow-gray-500 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
        <div className="h-auto overflow-hidden">
          <div className="h-auto mb-4 overflow-hidden relative">
            <img src={"http://localhost:5000/" + badge.image} alt="" />

          </div>
          <h4 className='mb-2 text-center font-semibold'>{badge.title}</h4>
          <Link to={"/main/viewbadge/" + badge._id} className='duration-500 font-semibold hover:bg-blue-600 rounded-sm text-black px-6'>View Details</Link>
        </div>
      </div>
    ))
  }

  return (
    <div className='bg-purple-200'>
       
        <div className=''> 
        <label
    className="mx-auto relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
    htmlFor="search-bar"
  >
    <input
      id="search-bar"
      ref={browseRef}
      placeholder="Verify Badge ID"
      className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
    />
    <button className="w-full md:w-auto px-6 py-3 bg-blue-500  hover:bg-blue-900 duration-300 text-white fill-white active:scale-95 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70" onClick={searchBadges}>
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
        </div>

      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12">
        <div className="mx-auto max-w-screen-xl px-4 w-full">
          <h2 className="mb-4 flex justify-center font-semibold text-6xl text-black ">
            Badges
          </h2>

          <div className="grid py-16 w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {displayBadges()}
          </div>
        </div>
      </div>

    </div>
  )
}

export default BrowserBadge