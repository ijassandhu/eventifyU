import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function Signup({ onClose, toggleModal }) {
  const [formData, setFormData] = useState({
    username: "ijassandhu",
    email: "",
    password: "",
  });

  const wrap = async (e) => {
    try {
      e.preventDefault();
      if (!formData.username || !formData.email || !formData.password) {
        alert("Please fill all the fields");
        return;
      }
      const response = await fetch("http://localhost:5000/user/", {
        method: "POST",
        headers: {},
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          userpassword: formData.password,
        }),
      });
      if (!response.ok) {
        console.log(response);
        throw new Error(JSON.stringify(response));
      }
      const data = await response.json();
      console.log("User registered successfully", data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center m-0">
      <div className="mt-10 flex flex-col gap-5 text-white">
        <button onClick={onClose} className="place-self-end">
          <X size={30} />
        </button>
        <div className="bg-[#494747] rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4">
          <h1 className="text-3xl text-gray-100">Sign up</h1>
          <form className="flex flex-col gap-5 items-center">
            <input
              className="w-full px-4 py-3 text-blackrounded-md text-black border border-gray-500"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              placeholder="Enter your email"
              required
              autoComplete="on"
            />
            <input
              className="w-full px-4 py-3 text-black rounded-md border border-gray-500"
              type="password"
              name="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  password: e.target.value,
                })
              }
              placeholder="Create password"
              required
            />
            <input
              className="w-full px-4 py-3 text-black rounded-md border border-gray-500"
              type="password"
              name="confirm"
              placeholder="Confirm password"
              required
            />
            <button
              onClick={wrap}
              className="bg-[#99EA73] h-10 w-24 rounded-2xl text-black hover:bg-[#75ff35]"
            >
              SIGN UP
            </button>
          </form>
          <hr className="w-[100%] border border-gray-300" />
          <div>
            <p className="text-gray-500">
              Have an account?{" "}
              <button onClick={toggleModal} className="text-[#99EA73]">
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}