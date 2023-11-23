import { useFormik } from "formik";
import React from "react";
import useAppContext from "../../context/AppContext";
import * as Yup from 'yup'; 

  const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is Required'),
    password : Yup.string().required('Password is Required')
  });
  
  const Login = () => {
  
    const { setLoggedIn } = useAppContext();
  
    // initializing formik
    const loginForm = useFormik({
      initialValues: {
        email: '',
        password : ''
      },
  
      onSubmit: async (values, { resetForm }) => {
        console.log(values);
        console.log(import.meta.env.VITE_API_URL);
  
        const res = await fetch(`${import.meta.env.VITE_API_URL}/user/authenticate`, {
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
            title : 'Login Success!!'
          });
  
          const data = await res.json();
          sessionStorage.setItem('user', JSON.stringify(data));
          setLoggedIn(true);
  
        }else if(res.status === 401){
          Swal.fire({
            icon : 'error',
            title : 'Login Failed!!',
            text: 'Email or Password is incorrect'
          })
        }else{
          Swal.fire({
            icon : 'error',
            title : 'Something went wrong!!'
          })
        }
  
        // submit values to the backend
      },
  
      validationSchema: loginSchema
    });
  
  return (
    <>
     <div className="card shadow-lg rounded-5 mt-6 bg-transparent ">
     <div className="card-body p-10">
     <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"> 
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src=""
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
     </div> 
  </>
)
}

export default Login;