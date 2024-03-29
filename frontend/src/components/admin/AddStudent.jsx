import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddStudent = () => {

  const navigate = useNavigate(); 

  const AddStudent = useFormik({
      initialValues: {
          registrationNumber: '',
          fullName: '',
          emailAddress: '',
          address: '',
          city: '',
          country: '',
          state: '',
          pinCode: '', 
          mobileNumber: ''
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
    <div className="min-h-screen p-6 bg-purple-200 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-bold text-slate-800 text-4xl my-6">STUDENT FORM</h2>
          <div className="bg-white rounded-xl shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <img className="h-80 mb-5 shadow-slate-300 mt-8" src="/formpic.jpg"></img>
                <p className="font-medium text-center text-2xl">Personal Details</p>
                <p className='text-center'>Please fill out all the fields.</p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2">
                    <label htmlFor='registrationNumber' className='font-semibold'>Registration Number</label>
                    <input
                      type="text"
                      name="registrationNumber"
                      id="registrationNumber"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      defaultValue=""
                      placeholder="" onChange={AddStudent.handleChange} value={AddStudent.values.registrationNumber}
                    />
                  </div>
                  <div className="md:col-span-5">
                    <label htmlFor='name' className='font-semibold'>Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      id="name"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="" onChange={AddStudent.handleChange} value={AddStudent.values.fullName}
                    />
                  </div>
                  
                  <div className="md:col-span-5">
                    <label htmlFor='email' className='font-semibold'>Email Address</label>
                    <input
                      type="text"
                      name="emailAddress"
                      id="email"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      defaultValue=""
                      placeholder="" onChange={AddStudent.handleChange} value={AddStudent.values.emailAddress}
                    />
                  </div>
                  <div className="md:col-span-5">
                    <label htmlFor='address' className='font-semibold'>Address</label>
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
                    <label htmlFor='city' className='font-semibold'>City</label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      defaultValue=""
                      placeholder="" onChange={AddStudent.handleChange} value={AddStudent.values.city}
                    />
                  </div>
                  
                  <div className="md:col-span-3">
                    <label htmlFor='country' className='font-semibold'>Country</label>
                      <input
                        type='text'
                        name="country"
                        id="country"
                        placeholder=""
                        className="px-4 bg-gray-50 rounded border mt-1 h-10 text-gray-800 w-full"
                        defaultValue="" onChange={AddStudent.handleChange} value={AddStudent.values.country}
                      />
                    </div>


                  <div className="md:col-span-2">
                    <label htmlFor='state' className='font-semibold'>State</label>
                      <input
                        name="state"
                        id="state"
                        placeholder=""
                        className="px-4 bg-gray-50 border rounded mt-1 h-10 text-gray-800 w-full"
                        defaultValue=""  onChange={AddStudent.handleChange} value={AddStudent.values.state}
                      />
                    </div>
                    
                  <div className="md:col-span-1">
                    <label htmlFor="pincode" className='font-semibold'>Pincode</label>
                    <input
                      type="text"
                      name="pinCode"
                      id='pincode'
                      className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder=""
                      defaultValue=""  onChange={AddStudent.handleChange} value={AddStudent.values.pinCode}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor='mobileNumber' className='font-semibold'>Mobile Number</label>
                      <input
                        type='text'
                        name="mobileNumber"
                        id="mobileNumber"
                        placeholder=""
                        className="px-4 bg-gray-50 border rounded mt-1 h-10 text-gray-800 w-full"
                        defaultValue="" onChange={AddStudent.handleChange} value={AddStudent.values.mobileNumber}
                      />
                    </div>
                  
                 
                 
                  <div className="md:col-span-5 mt-4 text-right">
                    <div className="inline-flex items-end">
                      <button className="bg-blue-500  hover:bg-blue-800 active:bg-green-500 text-white font-semibold py-2 px-8 rounded-md">
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