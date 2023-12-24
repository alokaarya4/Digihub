import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddStudent = () => {

  const Navigate = useNavigate(); 

  const AddStudent = useFormik({
      initialValues: {
          fullName: '',
          emailAddress: '',
          address: '',
          city: '',
          country: '',
          state: '',
          pinCode: '', 
   },
   onSubmit: async (values) => {
    console.log(values);
    console.log(import.meta.env.VITE_API_URL);

    const res = await fetch('http://localhost:5000/student/add', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    });

        console.log(values);

        if(res.status === 200){
          Swal.fire({
            icon : 'success',
            title : 'Add Successfully!!',
            text: 'Now Add Your Student'
          });
          navigate('/admin/ManageStudent');
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

    <>
   <form onSubmit={AddStudent.handleSubmit}>
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl my-6 text-gray-600">Add Student</h2>
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Personal Details</p>
                <p>Please fill out all the fields.</p>
              </div>

              
              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="full_name">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      id="name"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="" onChange={AddStudent.handleChange} value={AddStudent.values.fullName}
                    />
                  </div>
                  <div className="md:col-span-5">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="text"
                      name="emailAddress"
                      id="email"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      defaultValue=""
                      placeholder="" onChange={AddStudent.handleChange} value={AddStudent.values.emailAddress}
                    />
                  </div>
                  <div className="md:col-span-3">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      defaultValue=""
                      placeholder="" onChange={AddStudent.handleChange} value={AddStudent.values.address}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      defaultValue=""
                      placeholder="" onChange={AddStudent.handleChange} value={AddStudent.values.city}
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="country">Country</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="country"
                        id="country"
                        placeholder="Country"
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        defaultValue="" onChange={AddStudent.handleChange} value={AddStudent.values.country}
                      />
                      <button
                        tabIndex={-1}
                        className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                      >
                      </button>
                      
                      <button
                        tabIndex={-1}
                        htmlFor="show_more"
                        className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                      >
                      </button>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="state">State</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="state"
                        id="state"
                        placeholder="State"
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        defaultValue=""  onChange={AddStudent.handleChange} value={AddStudent.values.state}
                      />
                      <button
                        tabIndex={-1}
                        className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                      >
                       
                      </button>
                      <button
                        tabIndex={-1}
                        htmlFor="show_more"
                        className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                      >
                       
                      </button>
                    </div>
                  </div>
                  <div className="md:col-span-1">
                    <label htmlFor="pincode">Pincode</label>
                    <input
                      type="number"
                      name="pincode"
                      id="number"
                      className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder=""
                      defaultValue=""  onChange={AddStudent.handleChange} value={AddStudent.values.pinCode}
                    />
                  </div>
                 
                 
                  <div className="md:col-span-5 mt-6 text-right">
                    <div className="inline-flex items-end">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
    </form>
  </>
  

  )
}

export default AddStudent