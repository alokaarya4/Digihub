import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBadges = () => {
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
   
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>
          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>
        </div>
        
        <form onSubmit={updateForm.handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <label className="sr-only">
              Badge Id
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter Badge Id"
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
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter Title "
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
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter Category"
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
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter Description"
              />
             
            </div>
          </div>
          <div>
                <label
                  htmlFor="file"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  File Upload
                </label>
                <input
                  type="file"
                  
                  placeholder="file"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-52 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"

                />
              </div>
          
          <div className="flex items-center justify-between">
           
            <button
              type="submit"
              className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
              Update 
            </button>
          </div>
        </form>
      </div>
      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <img
          alt="Welcome"
          src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  </>
  
  )
}

export default UpdateBadges;