import React from 'react'

const Student = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
  <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
    <div className="mr-auto place-self-center lg:col-span-7">
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
       
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
        How have we suddenly generated so much dramatic increase in the visibility of our program? It’s all been driven by badging through Credly’s Acclaim platform.
        </p>
      </blockquote>
      <figcaption className="flex items-center justify-center mt-6 space-x-3">
        <img
          className="w-6 h-6 rounded-full"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
          alt="profile picture"
        />
        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
          <div className="pr-3 font-medium text-gray-900 dark:text-white">
            Micheal Gough
          </div>
          <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
            CEO at Google
          </div>
        </div>
      </figcaption>
    </figure>
  </div>
</section>


    </div>
  )
}

export default Student