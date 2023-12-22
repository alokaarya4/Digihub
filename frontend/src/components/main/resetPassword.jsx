import { Label } from '@headlessui/react/dist/components/label/label';
import React from 'react'

const resetPassword = () => {

  const emilRef = useRef(null);

  const sendOTP = async () => {
    const res = await fetch('http://localhost:5000/user/sendotp', {
      method: 'POST',
      body: JSON.stringify({ email: emilRef.current.value }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log(res.status);
varifyOTP = async () => {
 
  }
  return (
 
    <div>
      <h2>Reset your password</h2>
      <label htmlFor="email" >Enter ragisterred Email </label>
      
      <input type="email" ref={emilRef} />

      <button onClick={sendOTP}>Send OTP</button>

      </div>
  )
}

export default resetPassword
