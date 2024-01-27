import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const BadgeAdd = () => {


    const navigate = useNavigate();

    const [selImage, setSelImage] = useState('');
  
    const BadgeAddForm = useFormik({
      initialValues: {
        badgeId: '',
        title: '',
        category: '',
        description: '',
        image: '',
        createdAt: new Date()
      },
      onSubmit: async (values) => {
        values.image = selImage;
  
        console.log(values);
        console.log(import.meta.env.VITE_API_URL);
  
  
        const res = await fetch('http://localhost:5000/badge/add', {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
        console.log(values);
  
        if (res.status === 200) {
          Swal.fire({
            icon: 'success',
            title: 'Add Successfully!!',
            text: 'Now Add Your Badge'
          });
          navigate('/admin/ManageBadges');
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops!!',
            text: 'Some Error Occured'
          });
        }
      }
    })
    const uploadfile = async (e) => {
      let file = e.target.files[0];
      setSelImage(file.name);
      const fd = new FormData();
      fd.append('myfile', file);
  
      const res = await fetch('http://localhost:5000/util/uploadfile/', {
        method: 'POST',
        body: fd
      });
  
      console.log(res.status);
    };
  
    
    return (
        <div>
            <form onSubmit={BadgeAddForm.handleSubmit}>
            <div className="flex justify-center items-center pl-64 bg-purple-200">
                <div className="container mx-auto my-4 px-4 lg:px">
                    <div className="w-full p-10 my-4 bg-white md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                        <div className="">
                            <h1 className="font-bold mb-8 text-center underline text-3xl">
                                Add Badge Form
                            </h1>
                        </div>

                        <div>
                            <label
                                htmlFor="badgeid"
                                className="block text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Badge ID
                            </label>
                            <input
                                className="w-full mb-4 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text"
                                id="badgeId"
                                placeholder="Badge ID" onChange={BadgeAddForm.handleChange} value={BadgeAddForm.values.badgeId}
                            />

                             <label
                                htmlFor="badgeid"
                                className="block text-sm font-medium text-gray-900 dark:text-white"
                            >
                               Title
                            </label>
                            <input
                                className="w-full mb-4 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text"
                                id="title"
                                placeholder="Title" onChange={BadgeAddForm.handleChange} value={BadgeAddForm.values.title}
                            />
                            
                             <label
                                htmlFor="badgeid"
                                className="block text-sm font-medium text-gray-900 dark:text-white"
                            >
                               Category
                            </label>
                            <input
                                className="w-full mb-4 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text"
                                id="category"
                                placeholder="Category" onChange={BadgeAddForm.handleChange} value={BadgeAddForm.values.category}
                            />
                             <label
                                htmlFor="badgeid"
                                className="block text-sm font-medium text-gray-900 dark:text-white"
                            >
                               Description
                            </label>
                            <input
                                className="w-full mb-4 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text"
                                id="description"
                                placeholder="Description" onChange={BadgeAddForm.handleChange} value={BadgeAddForm.values.description}
                            />
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
                  onChange={uploadfile}

                  placeholder=""
                  className="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-52 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"

                />
              </div>



                        <div className="my-2 w-1/2 lg:w-1/4 ">
                            <button
                                className="text-sm  font-bold tracking-wide bg-blue-900 text-white p-3  rounded-lg w-full focus:outline-none focus:shadow-outline"
                          >
                              SUBMIT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </div>
    )
}

export default BadgeAdd