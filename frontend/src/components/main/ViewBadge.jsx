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
      return (<div className="grid grid-cols-2">

        <div className="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-4 lg:pt-28">


          <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
            <div className="h-auto overflow-hidden">
              <div className="mb-2 overflow-hidden  relative">
                <img src={"http://localhost:5000/" + badgeData.image} alt="" />
              </div>
              <h4 className='mb-2 text-center text-2xl font-semibold'>{badgeData.title}</h4>
            </div>
          </div>

        </div>
        <div className='max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-8 lg:pt-28'>
          <h5 className='ml-auto font-bold'>{badgeData.category}
            <p className="mt-12 text-gray-600 font-semibold lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              {badgeData.description}
            </p>
          </h5>
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

      
        {displayBadgeData()}


      </section>




    </div>
  )
}


export default ViewBadge