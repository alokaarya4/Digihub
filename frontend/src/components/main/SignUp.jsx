import { Formik, useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Signup = () => {
  const navigate = useNavigate();
  const [selImage, setSelImage] = useState('');
  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },

    onSubmit: async (values) => { 
      values.avatar = selImage;
      console.log(values);

      // sending request to backend
      const res = await fetch('http://localhost:5000/user/add', {
        method: 'POST',
        body : JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.status);

      if(res.status === 200){
        Swal.fire({
          icon : 'success',
          title : 'Signup Success!!',
          text: 'Now Login to Continue'
        });
        navigate('/main/login');
      }else{
        enqueueSnackbar('Something went wrong', { variant: 'error', anchorOrigin: { vertical: 'top', horizontal: 'center', }, });
      }
    }
  })

  return (
    
         <>
  
  <div className="h-full bg-[url('/Login-here.png')] bg-gray-100 dark:bg-gray-900">
    <div className="mx-auto">
      <div className="flex rounded-md justify-center mx-48 py-12">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          <div
            className="w-full h-auto pt-20 bg-white dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-lg">
           <img src="/sign.jpg" />
          </div>


          <div className="w-full  lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
            <h3 className="py-4 text-slate-500 font-bold text-2xl mx-16 dark:text-white">
              CREATE A NEW ACCOUNT
            </h3>
           
            <form className="pt-6 pb-8 bg-white dark:bg-gray-800 rounded" onSubmit={signupForm.handleSubmit}>
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label
                    className="block ml-16 mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    className="w-full ml-16 px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="First Name"onChange={signupForm.handleChange} value={signupForm.values.name} 
                  />
                </div>
              </div>
              
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label
                    className="block ml-16 mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full ml-16 px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="text"
                    placeholder="Email "onChange={signupForm.handleChange} value={signupForm.values.email} 
                  />
                </div>
              </div>
             
             
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label
                    className="block  ml-16  mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="w-full  ml-16  px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Your Password"onChange={signupForm.handleChange} value={signupForm.values.password} 
                  />
                </div>
              </div>
              
              
              <div className="mb-6 mx-16">
                <button
                  className="w-auto px-4 py-2 font-semibold text-white bg-blue-500 rounded-2xl hover:bg-blue-700 dark:bg-blue-700 active:bg-green-500 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
              <div className="pt-6 mt-6 mx-20 space-y-4 border-t border-gray-200 dark:border-gray-700">
            </div>
              <div className="mx-20">
                <a
                  className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="mx-20">
                <a
                  className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                  href="#"
                >
                  Already have an account? Login!
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>


</> 
);
};
export default Signup;