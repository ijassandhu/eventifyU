import React from "react";
import Footericons from "./footericons";
import LogoutConfirmation from "./logoutconfirmation";
import Navbar from "./navbar";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Megaphone,
  BookA,
  BookmarkCheck,
  CalendarCheck,
  LogOut,
} from "lucide-react";

const user = {
  name: "Jaskeerat",
};

const DATE_OPTIONS = { weekday: "long", month: "short", day: "numeric" };

const Dashboard = () => {
  const location = useLocation();
  const [isLoggedIn, setLoggedIn] = useState(true);
  const [logoutconfirmation, setLogoutConfirmation] = useState(false);
  return (
    <div>
      <Navbar />
      <div className="bg-[#222] flex flex-col md:flex-row pb-4">
        <div className="hidden md:flex md:flex-col">
          <div className="w-[20vw] bg-[#2b2b2b] text-white flex flex-col mt-28 rounded-2xl ml-10 p-4 shadow-lg">
            <h1 className="text-2xl mb-4">
              <strong>Hello,</strong> {user.name}👋🏻
            </h1>
            <ul className="text-xl pt-5 flex flex-col">
              <div
                className={`flex flex-row gap-2 rounded-2xl hover:bg-[#99EA73] hover:text-black h-12 w-[100%] items-center pl-2 ${
                  location.pathname === "/dashboard"
                    ? "bg-[#99EA73] text-black border-2 border-black"
                    : ""
                }`}
              >
                <LayoutDashboard />
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              </div>
              <div className="flex flex-row gap-2 rounded-2xl hover:bg-[#99EA73] hover:text-black h-12 w-[100%] items-center pl-2">
                <Megaphone />
                <li>
                  <Link to="/dashboard/announcements">Announcements</Link>
                </li>
              </div>
              <div className="flex flex-row gap-2 rounded-2xl hover:bg-[#99EA73] hover:text-black h-12 w-[100%] items-center pl-2">
                <BookA />
                <li>
                  <Link to="/dashboard/attendance">Attendance</Link>
                </li>
              </div>
              <div className="flex flex-row gap-2 rounded-2xl hover:bg-[#99EA73] hover:text-black h-12 w-[100%] items-center pl-2">
                <CalendarCheck />
                <li>
                  <Link to="/dashboard/enrolled-events">Enrolled Events</Link>
                </li>
              </div>
            </ul>
          </div>
          <div className="w-[20vw] bg-[#2b2b2b] text-white flex flex-col mt-auto rounded-2xl ml-10 p-4 shadow-lg">
            <ul className="text-xl flex flex-col">
              <div className="flex flex-row gap-2 items-center pl-2 rounded-2xl h-12 w-full cursor-pointer hover:text-black hover:bg-[#99EA73] transition duration-300 ease-in-out">
                <BookmarkCheck />
                <li>
                  <Link to="/saved">Saved Events</Link>
                </li>
              </div>
              {isLoggedIn ? (
                <div>
                  <button
                    onClick={() => setLogoutConfirmation(true)}
                    className="flex flex-row gap-2 items-center pl-2 rounded-2xl h-12 w-full cursor-pointer hover:text-black hover:bg-[#99EA73] transition duration-300 ease-in-out"
                  >
                    <LogOut />
                    <li>Log out</li>
                  </button>
                  {logoutconfirmation && (
                    <LogoutConfirmation
                      onConfirm={() => {
                        setLoggedIn(false);
                        setLogoutConfirmation(false);
                      }}
                      onCancel={() => {
                        setLogoutConfirmation(false);
                      }}
                    />
                  )}
                </div>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>

        <div className="hidden md:flex">
          <div className="bg-[#2b2b2b] md:w-[70vw] w-[90vw] rounded-2xl flex flex-col mt-28 md:ml-10 ml-4 pb-4 shadow-lg transition-all">
            <h1 className="text-xl text-gray-400 p-4">
              {new Date().toLocaleDateString("en-US", DATE_OPTIONS)}
            </h1>
            <h2 className="text-2xl text-white pl-4 mb-4">
              Student Complete Detail
            </h2>
            <hr className="border-gray-600" />
            <div className="flex flex-col md:flex-row flex-wrap p-3 gap-4">
              {[
                { label: "Name:", type: "text" },
                { label: "Email:", type: "email" },
                { label: "Gender:", type: "text" },
                { label: "Roll Number:", type: "number" },
                { label: "Semester:", type: "number" },
                { label: "Section:", type: "text" },
                { label: "Contact:", type: "tel" },
                { label: "Degree:", type: "text" },
                { label: "Branch:", type: "text" },
              ].map((input, index) => (
                <div
                  key={index}
                  className="inputParent wrap-input-2 p-3 flex flex-col"
                >
                  <label
                    htmlFor={input.label}
                    className="text-white self-start text-lg"
                  >
                    <span className="text-red-400">*</span>
                    {input.label}
                  </label>
                  <input
                    className="input pl-3 h-10 w-full md:w-[20vw] rounded-xl bg-[#2b2b2b] border border-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[#99EA73] transition"
                    type={input.type}
                    required
                  />
                </div>
              ))}
            </div>
            <div className="text-gray-500 p-3">
              Make sure all the information you've entered is correct and
              up-to-date. Double-check your name, email, and other details to
              ensure accuracy. Once you're confident that everything is correct,
              click "Save Details" to submit your information. If you need to
              make any changes, feel free to update the fields before
              finalizing.
            </div>
            <div className="flex justify-end pr-3">
              <button className="bg-[#99EA73] h-12 w-40 text-xl rounded-xl font-medium transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl animate-fadeInUp">
                Save Details
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <Footericons />
      </div>
      <div className="bg-[#222] flex flex-col md:hidden pb-20 pt-16">
        {/* <div className='flex flex-col'>
          <div className='bg-[#2b2b2b] text-white flex flex-col rounded-2xl p-4 mx-4 shadow-lg'>
            <h1 className='{`text-xl mb-4'>Hello,{user.name}👋🏻</h1>
          </div>
        </div> */}

        <div className="flex-1 px-4">
          <div className="bg-[#2b2b2b] rounded-2xl flex flex-col mt-3 pb-4 shadow-lg">
            <h1 className="text-lg text-gray-400 p-4">
              {new Date().toLocaleDateString("en-US", DATE_OPTIONS)}
            </h1>
            <h2 className="text-xl text-white pl-4 mb-4">
              Student Complete Detail
            </h2>
            <hr className="border-gray-600" />
            <div className="flex flex-col p-3 gap-4">
              {[
                { label: "Name:", type: "text" },
                { label: "Email:", type: "email" },
                { label: "Gender:", type: "text" },
                { label: "Roll Number:", type: "number" },
                { label: "Semester:", type: "number" },
                { label: "Section:", type: "text" },
                { label: "Contact:", type: "tel" },
                { label: "Degree:", type: "text" },
                { label: "Branch:", type: "text" },
              ].map((input, index) => (
                <div
                  key={index}
                  className="inputParent wrap-input-2 p-2 flex flex-col"
                >
                  <label
                    htmlFor={input.label}
                    className="text-white self-start text-sm"
                  >
                    <span className="text-red-400">*</span>
                    {input.label}
                  </label>
                  <input
                    className="input pl-3 h-10 w-full rounded-xl bg-[#2b2b2b] border border-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[#99EA73] transition"
                    type={input.type}
                    required
                  />
                </div>
              ))}
            </div>
            <div className="text-gray-500 p-3 text-sm">
              Make sure all the information you've entered is correct and
              up-to-date. Double-check your name, email, and other details to
              ensure accuracy. Once you're confident that everything is correct,
              click "Save Details" to submit your information. If you need to
              make any changes, feel free to update the fields before
              finalizing.
            </div>
            <div className="flex justify-end pr-3">
              <button className="bg-[#99EA73] h-10 w-32 text-lg rounded-xl font-medium transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
                Save Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
