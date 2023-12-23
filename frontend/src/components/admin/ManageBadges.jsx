import React from 'react'

const ManageBadges = () => {
  return (
    <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Student Name
        </th>
        <th scope="col" className="px-6 py-3">
          Company Name
        </th>
        <th scope="col" className="px-6 py-3">
          Email Address
        </th>
        <th scope="col" className="px-6 py-3">
          Badge Id
        </th>
        <th scope="col" className="px-6 py-3">
          Title
        </th>
        <th scope="col" className="px-6 py-3">
          File 
        </th>
      </tr>
    </thead>
   
  </table>
</div>

    </div>
  )
}

export default ManageBadges