import React, { useEffect, useState } from 'react'

import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ManageUser = () => {


    const navigate = useNavigate();
    const [userlist, setUserList] = useState([]);

    const fetchUserData = async () => {
        const res = await fetch('http://localhost:5173/place/getall');

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
        const res = await fetch('http://localhost:5173/place/delete/'+id, {method : 'DELETE'});

        if(res.status === 200){
            fetchUserData();
            toast.success('User Deleted Successfully 😁');
        }
    }

    const displayUser = () => {
        return <table className='table table-dark table-striped'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Photos</th>
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
                                <img width={50} className='img-fluid' src={'http://localhost:5173/'+user.image} alt="" />
                            </td>
                            <td>
                                <button className='text-white bg-red-600' onClick={() => { deleteUser(user._id) }}>Delete User</button>
                            </td>
                            <td>
                                <button className='text-white bg bg-sky-400' onClick={ () => { navigate('/updateuser/'+user._id) } }>Edit User</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    }

  return (
    <div>
         <h1 className='text-center font-semibold'>Table</h1>
         <hr />
         <div className='container'>
            {displayUser()}
         </div>
    </div>
  )
}

export default ManageUser;