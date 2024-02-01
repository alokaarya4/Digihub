import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

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

  useEffect(() => {
    fetchBadges();
  }, [])

  const displayBadges = () => {
    return badgeList.map(badge => (
      <div className="relative flex flex-col bg-gray-100 shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
        <div className="h-auto overflow-hidden">
          <div className="h-auto mb-4 overflow-hidden relative">
            <img src={"http://localhost:5000/" + badge.image} alt="" />

          </div>
          <h4 className='mb-2 text-center font-semibold'>{badge.title}</h4>
          <Link to={"/main/viewbadge/" + badge._id} className='duration-500  hover:bg-blue-600 rounded-sm text-black px-6'>View Details</Link>
        </div>
      </div>
    ))
  }

  return (
    <div >
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <>

      
        <div className="flex items-center justify-center h-72 bg-[#00e4de]">
          <div className="flex rounded-full bg-[#0d1829] px-2 w-full max-w-[600px]">
            <button className="self-center flex p-1 cursor-pointer bg-[#0d1829]">
            </button>
            <input
              type="text"
              ref={browseRef}
              className="w-full bg-[#0d1829] flex bg-transparent pl-2 text-[#cccccc] outline-0"
              placeholder="Broswe Badges Search Here"
            />
            <button type="submit" className="relative p-2 bg-[#0d1829] rounded-full">
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
      </>

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