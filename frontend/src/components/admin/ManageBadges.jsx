import React, { useEffect, useState } from 'react'

import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ManageBadges = () => {


    const navigate = useNavigate();
    const [userlist, setUserList] = useState([]);

    const fetchUserData = async () => {
        const res = await fetch('http://localhost:5000/badge/getall');

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
        const res = await fetch('http://localhost:5000/badge/delete/' + id, { method: 'DELETE' });
        console.log(res.status);
        if (res.status === 200) {
            fetchUserData();
            toast.success('User Deleted Successfully 😁');
        }
    }


    const displayUsers = () => {
        return <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>

            <thead className='text-xs text-gray-700 uppercase  bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                    <th>Badge ID</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>File</th>
                    <th className='px-7'>Delete</th>
                    <th className='px-7'>Edit</th>
                </tr>
            </thead>
            <tbody className='bg-yellow-100'>
                {
                    userlist.map((user) => (
                        <tr>
                            <td>{user.badgeId}</td>
                            <td>{user.title}</td>
                            <td>{user.category}</td>
                            <td>{user.description}</td>
                            <td>{user.file}</td>
                            <td>
                                <button className='bg-red-500 hover:bg-blue-700 active:bg-red-800 text-white font-bold py-2 px-4 rounded' onClick={() => { deleteUser(user._id) }}>Delete user</button>
                            </td>
                            <td>
                                <button className='bg-blue-500 hover:bg-blue-700 active:bg-green-500 text-white font-bold py-2 px-4 rounded' onClick={() => { navigate('/admin/updatebadges/' + user._id) }} > Edit User</button>
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
             <h1 className='text-center hover:text-6xl hover:text-blue-800 duration-1000 p-20 font-semibold text-5xl'>BADGE DATA</h1>
            <div className='container'>
                {displayUsers()}

            </div>
        </div>
    )
}

export default ManageBadges;