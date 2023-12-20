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
        return 
       
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