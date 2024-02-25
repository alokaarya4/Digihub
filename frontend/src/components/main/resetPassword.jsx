import React, { useRef } from 'react'

const ResetPassword = () => {

const emailRef = useRef(null);
const otpRef = useRef(null);

const sendOPT = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/util/sendotp`, {
        method: 'POST',
        body: JSON.stringify({ email: emailRef.current.value }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(res.status);
}

const verifyOPT = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/util/verifyotp/${emailRef.current.value}/${otpRef.current.value}`);
    console.log(res.status);
    }

  return (


    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div className="max-w-md mx-auto">
          <div>
            <h1 className="text-2xl font-semibold">Login Here</h1>
          </div>
          <form onSubmit={loginForm.handleSubmit}>
          <div className=" divide-gray-200">
            <div className="py-10 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div className="relative">
                <input
                  autoComplete="off"
                  id="email"
                  name="email"
                  type="text"
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                  placeholder="Email address" onChange={loginForm.handleChange} value={loginForm.values.email}
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Email Address
                </label>
              </div>
              <div className="relative">
                <input
                  autoComplete="off"
                  id="password"
                  name="password"
                  type="password"
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                  placeholder="Password" onChange={loginForm.handleChange} value={loginForm.values.password}
                />
                <label
                  htmlFor="password"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Password
                </label>
              </div>
              <div className="relative">
                <button type="submit" className="bg-cyan-500 text-white rounded-md px-2 py-1">
                  Login
                </button>
              </div>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  </div>


  )
}
export default ResetPassword;