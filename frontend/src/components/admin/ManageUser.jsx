import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ManageUser = () => {

const navigate =useNavigate();
    const[userlist, setUserlist] =useState([]);

const fetchUserData = async()=> {
    const res=await fetch('http://localhost:5000/user/getall');
    console.log (res.status);

    const fetchUserData = async () => {
        const res = await fetch('http://localhost:5000/user/getall');

        console.log(res.status);
        if(res.status === 200){
            const data = await res.json();
            console.log(data);
            setUserList(data);
        }
    };
}

    useEffect(() => {
      fetchUserData();
    }, []);


    const deleteUser = async (id) => {
        console.log(id);
        const res = await fetch('http://localhost:5000/user/delete/'+id, {method : 'DELETE'});
        console.log(res.status);
        if(res.status === 200){
            fetchUserData();
            toast.success('User Deleted Successfully 😁');
        }
    }


const displayUsers = () => {
    return <table className ='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>

        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>password</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {
                userlist.map((user) => (
                    <tr>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>
                            <button className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'onClick={() =>{deleteuser(user._id)}}>Delete user</button>
                        </td>
                        <td>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={()=> {navigate('/updateuser/'+user._id)}} > Edit User</button>
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
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    {displayUsers()}

    <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr className='space-x-8 justify-between '>
        <th scope="col" className="px-6 py-3">
         ID
        </th>
        <th scope="col" className="px-6 py-3 ">
          Name
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
                        <td>{user._id}</td>
                        <td>{user.name}</td>
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


export default ManageUser