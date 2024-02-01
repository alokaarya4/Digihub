import React, { useEffect, useState } from 'react'

import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ManageStudent = () => {


 const navigate = useNavigate();
  const [userlist, setUserList] = useState([]);

  const fetchUserData = async () => {
    const res = await fetch('http://localhost:5000/student/getall');

    console.log(res.status);
    if (res.status === 200) {
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
    const res = await fetch('http://localhost:5000/student/delete/' + id, { method: 'DELETE' });
    console.log(res.status);
    if (res.status === 200) {
      fetchUserData();
      toast.success('User Deleted Successfully 😁');
    }
  }


  const displayUser = () => {
    return <table>


    </table>

  }


  const displayUsers = () => {
    return <table className ='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>

        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
                <th>Registration Number</th>
                <th>Full Name</th>
                <th>Email Address</th>
                <th>Address</th>
                <th>City</th>
                <th>Country</th>
                <th>State</th>
                <th>Pin Code</th>
                <th>Mobile Number</th>
                <th className='px-7'>Delete</th>
                <th className='px-7'>Edit</th>
            </tr>
        </thead>
        <tbody className='bg-yellow-100'>
            {
                userlist.map((user) => (
                    <tr>
                       <td>{user.registrationNumber}</td>
                        <td>{user.fullName}</td>
                        <td>{user.emailAddress}</td>
                        <td>{user.address}</td>
                        <td>{user.city}</td>
                        <td>{user.country}</td>
                        <td>{user.state}</td>
                        <td>{user.pinCode}</td>
                        <td>{user.mobileNumber}</td>
                        <td>
                            <button className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => { deleteUser(user._id) }}>Delete user</button>
                        </td>
                        <td>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={()=> {navigate('/admin/UpdateStudent/'+user._id)}} > Edit User</button>
                        </td>
                    </tr>
                )
                )
}
        </tbody>
        </table>
}

  return (
    <div>
        <h1 className='text-center my-8 font-bold text-4xl'>Manage Student Data</h1>
        <hr />
        <div className='container'>
            {displayUsers()}

        </div>
    </div>
  )

}

export default ManageStudent;