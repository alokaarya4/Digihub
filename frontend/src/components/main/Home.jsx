import React from 'react'

const Home = () => {
  return (
    
    
    
    
    
    <div>

    <div id="default-carousel" className="relative w-full" data-carousel="slide">
  {/* Carousel wrapper */}
  <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
    {/* Item 1 */}
    <div className="hidden duration-700 ease-in-out" data-carousel-item="">
      <img
        src="/docs/images/carousel/carousel-1.svg"
        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        alt="..."
      />
    </div>
    {/* Item 2 */}
    <div className="hidden duration-700 ease-in-out" data-carousel-item="">
      <img
        src="/docs/images/carousel/carousel-2.svg"
        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        alt="..."
      />
    </div>
    {/* Item 3 */}
    <div className="hidden duration-700 ease-in-out" data-carousel-item="">
      <img
        src="/docs/images/carousel/carousel-3.svg"
        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        alt="..."
      />
    </div>
    {/* Item 4 */}
    <div className="hidden duration-700 ease-in-out" data-carousel-item="">
      <img
        src="/docs/images/carousel/carousel-4.svg"
        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        alt="..."
      />
    </div>
    {/* Item 5 */}
    <div className="hidden duration-700 ease-in-out" data-carousel-item="">
      <img
        src="/docs/images/carousel/carousel-5.svg"
        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        alt="..."
      />
    </div>
  </div>
  {/* Slider indicators */}
  <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
    <button
      type="button"
      className="w-3 h-3 rounded-full"
      aria-current="true"
      aria-label="Slide 1"
      data-carousel-slide-to={0}
    />
    <button
      type="button"
      className="w-3 h-3 rounded-full"
      aria-current="false"
      aria-label="Slide 2"
      data-carousel-slide-to={1}
    />
    <button
      type="button"
      className="w-3 h-3 rounded-full"
      aria-current="false"
      aria-label="Slide 3"
      data-carousel-slide-to={2}
    />
    <button
      type="button"
      className="w-3 h-3 rounded-full"
      aria-current="false"
      aria-label="Slide 4"
      data-carousel-slide-to={3}
    />
    <button
      type="button"
      className="w-3 h-3 rounded-full"
      aria-current="false"
      aria-label="Slide 5"
      data-carousel-slide-to={4}
    />
  </div>
  {/* Slider controls */}
  <button
    type="button"
    className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
    data-carousel-prev=""
  >
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
      <svg
        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 6 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 1 1 5l4 4"
        />
      </svg>
      <span className="sr-only">Previous</span>
    </span>
  </button>
  <button
    type="button"
    className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
    data-carousel-next=""
  >
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
      <svg
        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 6 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m1 9 4-4-4-4"
        />
      </svg>
      <span className="sr-only">Next</span>
    </span>
  </button>
</div>
  {/* fetures */}
<div>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="sm:w-16 sm:h-16 w-10 h-10"
          viewBox="0 0 24 24"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
          Shooting Stars
        </h2>
        <p className="leading-relaxed text-base">
          Blue bottle crucifix vinyl post-ironic four dollar toast vegan
          taxidermy. Gastropub indxgo juice poutine.
        </p>
        <a className="mt-3 text-indigo-500 inline-flex items-center">
          Learn More
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
          The Catalyzer
        </h2>
        <p className="leading-relaxed text-base">
          Blue bottle crucifix vinyl post-ironic four dollar toast vegan
          taxidermy. Gastropub indxgo juice poutine.
        </p>
        <a className="mt-3 text-indigo-500 inline-flex items-center">
          Learn More
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="sm:w-16 sm:h-16 w-10 h-10"
          viewBox="0 0 24 24"
        >
          <circle cx={6} cy={6} r={3} />
          <circle cx={6} cy={18} r={3} />
          <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
        </svg>
      </div>
    </div>
    <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="sm:w-16 sm:h-16 w-10 h-10"
          viewBox="0 0 24 24"
        >
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <circle cx={12} cy={7} r={4} />
        </svg>
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
          The 400 Blows
        </h2>
        <p className="leading-relaxed text-base">
          Blue bottle crucifix vinyl post-ironic four dollar toast vegan
          taxidermy. Gastropub indxgo juice poutine.
        </p>
        <a className="mt-3 text-indigo-500 inline-flex items-center">
          Learn More
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
    <button className="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
      Button
    </button>
  </div>
</section>


</div>
</div>
 
 
  
  )
}

export default Home