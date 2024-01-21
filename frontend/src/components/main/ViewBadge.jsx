import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewBadge = () => {

  const {id} = useParams();
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
    if(badgeData!==null){
      return (
        <div></div>
      )
    }
  }
  

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
  <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
    <div className="mr-auto place-self-center lg:col-span-7">
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
       View Badges<br />
        Student &amp; Certification.
      </h1>
      <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
      Students from partner universities sign up through the VIP form provided by HousingAnywhere to their university. Once they sign up, they immediately receive a verified student badge which qualifies them as reliable tenants. </p>
      
    </div>
   
    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
      <img src="/AAAA.jpg" alt="computer image" className='rounded-md'/>
    </div>
  </div>
</section>
       
       <>
  <div className="flex flex-col bg-white m-auto p-auto">
    <h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
      View Badges
    </h1>
    <div className="flex py-10 overflow-x-scroll pb-10 hide-scroll-bar">
      <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
        <div className="inline-block px-3">
        <img className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" src="/dell.png" alt="" />
        </div>
       
        <div className="inline-block px-3">
        <img className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" src="/dell.png" alt="" />
        </div>
       
          <div className="inline-block px-3">
          <img className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" src="/dell.png" alt="" />
        </div>
       
        <div className="inline-block px-3">
        <img className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" src="/dell.png" alt="" />
        </div>
        
        <div className="inline-block px-3">
        <img className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" src="/dell.png" alt="" />
        </div>
        
        <div className="inline-block px-3">
        <img className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" src="/dell.png" alt="" />
        </div>
        
        <div className="inline-block px-3">
        <img className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" src="/dell.png" alt="" />
        </div>
        
        <div className="inline-block px-3">
        <img className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" src="/dell.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n.hide-scroll-bar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scroll-bar::-webkit-scrollbar {\n  display: none;\n}\n"
    }}
  />
</>

    </div>
  )
}

export default ViewBadge