import React from "react"
import { X } from 'lucide-react';

export default function Signup({onClose, toggleModal}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center m-0">
      <div className="mt-10 flex flex-col gap-5 text-white">
        <button onClick={onClose} className="place-self-end"><X size={30} /></button>
        <div className="bg-[#494747] rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4">
          <h1 className="text-3xl text-gray-100">Sign up</h1>
          <form className="flex flex-col gap-5 items-center">
            <input
              className="w-full px-4 py-3 text-blackrounded-md text-black border border-gray-500"
              type="email"
              placeholder="Enter your email"
              required />
            <input
              className="w-full px-4 py-3 text-black rounded-md border border-gray-500"
              type="password"
              placeholder="Create password"
              required />
            <input
              className="w-full px-4 py-3 text-black rounded-md border border-gray-500"
              type="password"
              placeholder="Confirm password"
              required />
            <button className="bg-[#99EA73] h-10 w-24 rounded-2xl text-black hover:bg-[#75ff35]">SIGN UP</button>
          </form>
          <hr className="w-[100%] border border-gray-300"/>
          <div>
          <p className="text-gray-500">Have an account? <button onClick={toggleModal} className="text-[#99EA73]">Sign in</button></p>
          </div>
        </div>
      </div>
    </div>
  )
}