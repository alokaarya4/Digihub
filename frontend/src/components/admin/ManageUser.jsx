import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ManageUser = () => {

const navigate =useNavigate();
    const[userlist, setUserlist] =useState([]);

const fetchUserData = async()=> {
    const res=await fetch('http://localhost:5000/user/getall');
    console.log (res.status);

    if(res.status===200){
        const data =await res.json();
        console.log(data);
        setUserlist(data);
    }
};

useEffect(() =>{
fetchUserData();
}, []);

const deleteUser = async (id) => {
    console.log(id);
    const res = await fetch('http://localhost:5000/user/delete/' + id, { method: 'DELETE' });
    console.log(res.status);
    if (res.status === 200) {
      fetchUserData();
      toast.success('User Deleted Successfully 😁');
    }
  }



const displayUsers = () => {
    return <table className ='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>

        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
                <th className='p-2'>id</th>
                <th>name</th>
                <th>email</th>
                <th>password</th>
                <th>Delete User</th>
            </tr>
        </thead>
        <tbody className='bg-yellow-100'>
            {
                userlist.map((user) => (
                    <tr>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>
                            <button className='bg-red-500 hover:bg-blue-700 active:bg-red-800 text-white font-bold py-2 px-4 rounded' onClick={() => { deleteUser(user._id) }}>Delete User</button>
                        </td>
                       
                    </tr>
                )
                )
}
        </tbody>
        </table>
}

  return (
    <div className='bg-purple-300'>
        <h1 className='text-center hover:text-6xl hover:text-blue-800 duration-1000 p-20 font-semibold text-5xl'>USER DATA</h1>
        <div className='container'>
            {displayUsers()}

        </div>
    </div>
  )
}

export default ManageUser