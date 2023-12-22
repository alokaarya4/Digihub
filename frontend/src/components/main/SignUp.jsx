import { useFormik } from "formik";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

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
        enqueueSnackbar('User Added Successfully', { variant: 'success', anchorOrigin: { vertical: 'top', horizontal: 'center', }, });
        navigate('/main/login');
      }else{
        enqueueSnackbar('Something went wrong', { variant: 'error', anchorOrigin: { vertical: 'top', horizontal: 'center', }, });
      }
    }
  })

  const uploadFile = async (e) => {
    let file = e.target.files[0];
    setSelImage(file.name);
    const fd = new FormData();
    fd.append('myfile', file);

    const res = await fetch('http://localhost:5000/util/uploadfile', {
      method: 'POST',
      body: fd
    });

    console.log(res.status);
    
  };

  return (
    <div className="text-center mt-20 ">
        <h1>Sign Up in Your Account</h1>
   
    <div className="card shadow-lg mx-80 rounded-5 mt-6 bg-transparent" >
    <div className="card-body p-10">
    <form className="card mt-10 w-auto max-w-sm mx-auto">
    <div className="mb-5">
      <label
        htmlFor="name"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
       Your Name
      </label>
      <input
        type="text"
        id="name"
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        placeholder="Enter Your Name"
        required=""
        onChange={signupForm.handleChange}
        value={signupForm.values.name}
      />
    </div>
    <div className="mb-5">
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
       Email
      </label>
      <input
        type="email"
        id="email"
        placeholder="Your Email"
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        required=""
        onChange={signupForm.handleChange}
        value={signupForm.values.email}
      />
    </div>
    <div className="mb-5">
      <label
        htmlFor="password"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
         password
      </label>
      <input
        type="password"
        id="repeat-password"
        placeholder="Your Password"
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        required=""
        onChange={signupForm.handleChange}
        value={signupForm.values.password}
      />
    </div>

    <button
      type="submit"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Sign In
    </button>
  </form>
  </div>
  </div>
  </div>

  
  );
};

export default Signup;