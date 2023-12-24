import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

const AddBadge = () => {
  const navigate = useNavigate();

  const AddBadge = useFormik({
    initialValues: {
      studentName: '',
      companyName: '',
      emailAddress: '',
      badgeId: '',
      title: '',
      file: ''
    },
       onSubmit: async (values) => {
      console.log(values);
      console.log(import.meta.env.VITE_API_URL);


      const res = await fetch('http://localhost:5000/badge/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(res.status);

      if(res.status === 200){
        Swal.fire({
          icon : 'success',
          title : 'Add Successfully!!',
          text: 'Now Add Your Badge'
        });
        navigate('/admin/ManageBadges');
      }else{
        Swal.fire({
          icon : 'error',
          title : 'Oops!!',
          text: 'Some Error Occured'
        });
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
    <div className="grid grid-col-6 grid-flow-col   bg-purple-200 gap-8">

      <div className="  d-flex justify-content-center align-items-center vh-70">
        <div className="card w-10shadow-lg rounded-5">
          <div className="card-body p-5"></div>
          <div className="w-full max-w-xl p-10 bg-white border border-gray-200 rounded-lg shadow sm:p-10 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-10 my-10" >


            <form className="space-y-6" action="#" onSubmit={AddBadge.handleSubmit}>
              <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">
                Add Badge Form
              </h5>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Student Name
                </label>
                <input
                  type="text"
                  name="studentName"
                  id="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="" onChange={AddBadge.handleChange} value={AddBadge.values.studentName}
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  id="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="" onChange={AddBadge.handleChange} value={AddBadge.values.companyName}
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email Address
                </label>
                <input
                  type="text"
                  name="emailAddress"
                  id="email"
                  placeholder=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required="" onChange={AddBadge.handleChange} value={AddBadge.values.emailAddress}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Badge ID
                </label>
                <input
                  type="number"
                  name="badgeId"
                  id="number"
                  placeholder=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required="" onChange={AddBadge.handleChange} value={AddBadge.values.badgeId}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="text"
                  placeholder=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required="" onChange={AddBadge.handleChange} value={AddBadge.values.title}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  File Upload
                </label>
                <input
                  type="file"
                  name="avatar"
                  id="text"
                  placeholder=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-52 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required=""
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?{" "}
                <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">
                  Create account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>



      <div className="mt-20 card w-10shadow-lg rounded-5 " >
        <h2 className='text-5xl font-medium mt-14  font-serif text-green-600 dark:text-white'>Level up your career.</h2>
        <p className='mt-10 text-gray-500'>Join millions of professionals, recruiters, and employers on Credly, where you can:</p>
        <ul className='mt-20 text-gray-500'>

          <li>Grow your professional skills</li>
          <li>Broadcast your skills to managers at your company</li>
          <li>Earn credentials that translate to college credit</li>
          <li>Discover new professional opportunities</li>
        </ul>
      </div>
    </div>
  )
}

export default AddBadge