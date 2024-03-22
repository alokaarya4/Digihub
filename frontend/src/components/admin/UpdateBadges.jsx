import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBadges = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [userData, setUserData] = useState({});

  const fetchUserData = async () => {
    const res = await fetch("http://localhost:5000/badge/getbyid/" + id);
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setUserData(data);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const updateForm = useFormik({
    initialValues: {
      badgeId: '',
       title: '',
       category: '',
       description: '',
       image: ''
       
    },

    onSubmit: async (values) => {
      console.log(values);

      // sending request to backend
      const res = await fetch('http://localhost:5000/badge/update/'+id, {
        method: 'PUT',
        body : JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(res.status);

      if(res.status === 200){
        Swal.fire({
          icon : 'success',
          title : 'Update Success!!',
          text: 'Badge Updated successfully'
        });
        navigate('/admin/managebadges');
      }else{
        Swal.fire({
          icon : 'error',
          title : 'Oops!!',
          text: 'Some Error Occured'
        });
      }
    }
  })
  return (
    <>
   
    <section className="relative flex p-4 bg-purple-300 flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl text-slate-700 font-bold sm:text-3xl">BADGE UPDATE FORM</h1>
          <div className="pt-2 mt-4 space-y-4 border-t border-slate-400 dark:border-gray-700">
                            </div>
        </div>
        
        <form onSubmit={updateForm.handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <label className="sr-only">
              Badge Id
            </label>
            <div className="relative">
              <input
                type="text"
                id="badgeId"
                className="w-full rounded-lg border-gray-200 bg-gray-100 p-4 pe-12 text-sm shadow-sm"
                placeholder="Badge ID" onChange={updateForm.handleChange} value={updateForm.values.badgeId}
              />
            </div>
          </div>
          <div>
            <label  className="sr-only">
              Title
            </label>
            <div className="relative">
              <input
                type="text"
                id="title"
                className="w-full rounded-lg border-gray-200 bg-gray-100 p-4 pe-12 text-sm shadow-sm"
                placeholder="Title" onChange={updateForm.handleChange} value={updateForm.values.title}
              />
             
            </div>
          </div>
          <div>
            <label  className="sr-only">
              Category
            </label>
            <div className="relative">
              <input
                type="text"
                id="category"
                className="w-full rounded-lg border-gray-200 bg-gray-100 p-4 pe-12 text-sm shadow-sm"
                placeholder="Category" onChange={updateForm.handleChange} value={updateForm.values.category}
              />
             
            </div>
          </div>
          <div>
            <label  className="sr-only">
            Description
            </label>
            <div className="relative">
              <input
                type="text"
                id="description"
                className="w-full rounded-lg border-gray-200 bg-gray-100 p-4 pe-12 text-sm shadow-sm"
                placeholder="Description" onChange={updateForm.handleChange} value={updateForm.values.description}
              />
             
            </div>
          </div>
          <div>
                <label
                  htmlFor="file"
                  className="block p-2 rounded-md mb-2 text-sm bg-gray-100 font-medium text-gray-900 dark:text-white"
                >
                  File Upload
              
                <input
                  type="file"
                  placeholder="file"
                  className=" border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-52 p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
                  </label>
              </div>
          
          <div className="flex items-center justify-between">
           
            <button
              type="update"
              className="inline-block hover:bg-blue-800 duration-300 rounded-lg active:bg-green-500 bg-blue-500 px-8 py-2 text-xl font-medium mx-80 text-white"
            >
              Update 
            </button>
          </div>
        </form>
      </div>
      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <img
          alt="Welcome"
          src="/updatebadgepic.webp"
          className="absolute rounded-xl shadow-lg inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  </>
  
  )
}

export default UpdateBadges;