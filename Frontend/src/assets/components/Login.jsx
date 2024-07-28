import React from "react"
import { X } from 'lucide-react';

export default function Login({onClose}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="mt-10 flex flex-col gap-5 text-white">
        <button onClick={onClose} className="place-self-end"><X size={30} /></button>
        <div className="bg-[#222] rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4">
          <h1 className="text-3xl text-gray-100">Sign in</h1>
          <form className="flex flex-col gap-5 items-center">
            <input
              className="w-full px-4 py-3 text-blackrounded-md border border-gray-500"
              type="email"
              placeholder="Enter your email"
              required />
            <input
              className="w-full px-4 py-3 text-black rounded-md border border-gray-500"
              type="password"
              placeholder="Enter your password"
              required />
            <button className="bg-[#ff943c] h-10 w-24 rounded-2xl text-black hover:bg-[#ff9138]">SIGN IN</button>
            <button className="text-[#ff7c11] hover:underline">Forget Password?</button>
          </form>
          <hr className="w-[100%] border border-gray-300"/>
          <div>
          <p className="text-gray-500">Don't have account?</p>
          {/* <Link to="/signup">Sign Up</Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}