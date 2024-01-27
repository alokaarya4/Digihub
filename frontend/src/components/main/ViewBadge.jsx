import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewBadge = () => {

  const { id } = useParams();
  const [badgeData, setBadgeData] = useState(null);



  const fetchBadgeData = async () => {
    const res = await fetch("http://localhost:5000/badge/getbyid/" + id);
    console.log(res.status);

    const data = await res.json();
    console.log(data);
    setBadgeData(data);
  }

  useEffect(() => {
    fetchBadgeData();
  }, [])

  const displayBadgeData = () => {
    if (badgeData !== null) {
      return (
        <div className="mr-auto grid grid-cols-2 gap-4 place-self-center lg:col-span-7">
         <h5>{badgeData.category}</h5>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            {badgeData.description}
          </p>

          <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
            <div className="h-auto overflow-hidden">
              <div className=" mb-2 overflow-hidden relative">
                <img src={"http://localhost:5000/" + badgeData.image} alt="" />

              </div>
              <h4 className='mb-2 text-center text-2xl font-semibold'>{badgeData.title}</h4>
            </div>
          </div>
        </div>
      )
    }
  }


  return (
    <div>
      <div>
        <h1 className="text-center text-6xl font-bold pt-10 underline">
          View Badges
        </h1>
      </div>

      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">

          {/* <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
      <img src="/AAAA.jpg" alt="computer image" className='rounded-md'/>
    </div> */}
          {displayBadgeData()}


        </div>
      </section>




    </div>
  )
}


export default ViewBadge