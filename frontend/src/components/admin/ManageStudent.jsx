import React, { useEffect, useState } from 'react'

import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ManageStudent = () => {


    const navigate = useNavigate();
    const [studentlist, setStudentList] = useState([]);

    const fetchStudentData = async () => {
        const res = await fetch('http://localhost:5000/student/getall');

        console.log(res.status);
        if(res.status === 200){
            const data = await res.json();
            console.log(data);
            setStudentList(data);
        }
    };

    useEffect(() => {
      fetchStudentData();
    }, []);


    const deleteStudent = async (id) => {
        console.log(id);
        const res = await fetch('http://localhost:5000/student/delete/'+id, {method : 'DELETE'});

        if(res.status === 200){
            fetchStudentData();
            toast.success('Student Deleted Successfully 😁');
        }
    }

    const displayStudent = () => {
        return <table className='table table-dark table-striped'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Loaction</th>
                    <th>Photos</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    studentlist.map((student) => (
                        <tr>
                            <td>{student._id}</td>
                            <td>{student.name}</td>
                            <td>{student.location}</td>
                            <td>
                                <img width={50} className='img-fluid' src={'http://localhost:5173/'+student.image} alt="" />
                            </td>
                            <td>
                                <button className='btn btn-danger' onClick={() => { deleteStudent(student._id) }}>Delete Student</button>
                            </td>
                            <td>
                                <button className='btn btn-primary' onClick={ () => { navigate('/updatestudent/'+student._id) } }>Edit Student</button>
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
            {displayStudent()}
         </div>
    </div>
  )
}

export default ManageStudent;