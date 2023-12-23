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

    useEffect(() => {
      fetchUserData();
    }, []);


    const deleteUser = async (id) => {
        console.log(id);
        const res = await fetch('http://localhost:5173/AddStudent/delete/'+id, {method : 'DELETE'});
        console.log(res.status);
        if(res.status === 200){
            fetchUserData();
            toast.success('User Deleted Successfully 😁');
        }
    }
};

    const displayUser = () => {
        return  <table className='table table-dark table-striped'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Badge Id</th>
                <th>Technology</th>
                <th>File</th>
                <th>Delete</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {
                userlist.map((user) => (
                    <tr>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.location}</td>
                        <td>
                            <img width={50} className='img-fluid' src={'http://localhost:5000/'+user.image} alt="" />
                        </td>
                        <td>
                            <button className='btn btn-danger' onClick={() => { deleteUser(user._id) }}>Delete User</button>
                        </td>
                        <td>
                            <button className='btn btn-primary' onClick={ () => { navigate('/updateuser/'+user._id) } }>Edit User</button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </table>
       
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
    {displayUser()}

<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
  <tr>
    <th scope="col" className="px-6 py-3">
      ID
    </th>
    <th scope="col" className="px-6 py-3">
      NAME
    </th>
    <th scope="col" className="px-6 py-3">
      Badge ID
    </th>
    <th scope="col" className="px-6 py-3">
      Technology
    </th>
    <th scope="col" className="px-6 py-3">
      file
    </th>
    <th scope="col" className="px-6 py-3">
      Delete
    </th>
  </tr>
</thead>

</table>
</div>

</div>
  )


export default ManageUser