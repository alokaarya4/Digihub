import React, { useEffect, useState } from 'react'

import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ManageBadge = () => {


    const navigate = useNavigate();
    const [userlist, setUserList] = useState([]);

    const fetchUserData = async () => {
        const res = await fetch('http://localhost:5000/student/getall');

        console.log(res.status);
        if(res.status === 200){
            const data = await res.json();
            console.log(data);
            setUserList(data);
        }
    };

    useEffect(() => {
      fetchUserData();
    }, []);


    const deleteUser = async (id) => {
        console.log(id);
        const res = await fetch('http://localhost:5000/student/delete/'+id, {method : 'DELETE'});
        console.log(res.status);
        if(res.status === 200){
            fetchUserData();
            toast.success('User Deleted Successfully 😁');
        }
    }
   

    const displayUser = () => {
        return  <table className=''>
        
       
    </table>
       
    }

  return (
    <div>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    {displayUser()}

    <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr className='space-x-8 justify-between '>
        <th scope="col" className="px-6 py-3">
         Full Name
        </th>
        <th scope="col" className="px-6 py-3 ">
          Email Address
        </th>
        <th scope="col" className="px-6 py-3">
          Address
        </th>
        <th scope="col" className="px-6 py-3">
          City
        </th>
        <th scope="col" className="px-6 py-3">
          Country
        </th>
        <th scope="col" className="px-6 py-3">
          State
        </th>
        <th scope="col" className="px-6 py-3">
          Pin Code
        </th>
        <th scope="col" className="px-6 py-3">
          Delete
        </th>
        <th scope="col" className="px-6 py-3">
          Edit
        </th>
  
      </tr>
    </thead>
  </table>
  <tbody>
            {
                userlist.map((user) => (
                    <tr className='flex justify-between space-x-44'>
                        <td>{user.fullName}</td>
                        <td>{user.emailAddress}</td>
                        <td>{user.address}</td>
                        <td>{user.city}</td>
                        <td>{user.country}</td>
                        <td>{user.state}</td>
                        <td>{user.pinCode}</td>
                        {/* <td>{user.location}</td> */}
                        {/* <td>
                            <img width={50} className='img-fluid' src={'http://localhost:5000/'+user.image} alt="" />
                        </td> */}
                        <td>
                            <button className='bg-orange-300' onClick={() => { deleteUser(user._id) }}>Delete User</button>
                        </td>
                        <td>
                            <button className='bg-blue-300' onClick={ () => { navigate('/updateuser/'+user._id) } }>Edit User</button>
                        </td>
                    </tr>
                ))
            }
        </tbody>


        
          





</div>

    </div>


</div>

</div>
  )
}

export default ManageBadge;