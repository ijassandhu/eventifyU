import React from 'react'
import Footericons from './footericons'
import Navbar from './navbar';
import { LayoutDashboard, Megaphone, BookA, BookmarkCheck, CalendarCheck, LogOut } from 'lucide-react';
const user = {
  name: "Jaskeerat",
}
const DATE_OPTIONS = { weekday: 'long', month: 'short', day: 'numeric' };
const Dashboard = () => {
  return (
    <>
    <Navbar/>
      <div className='flex invisible md:visible bg-[#222]'>
        <div className='hidden md:block h-[100vh]'>
          <div className='w-[20vw] bg-[#2b2b2b] text-white flex flex-col mt-20 rounded-2xl ml-10 justify-center p-4'>
            <h1 className='text-2xl'><strong>Hello,</strong> {user.name}👋🏻</h1>
            <ul className='text-xl pt-5 flex flex-col'>
              <div className='flex flex-row gap-2 rounded-2xl hover:bg-[#99EA73] hover:text-black h-12 w-[100%] items-center pl-2'>
                <LayoutDashboard />
                <li>Dashboard</li>
              </div>
              <div className='flex flex-row gap-2 rounded-2xl hover:bg-[#99EA73] hover:text-black h-12 w-[100%] items-center pl-2'>
                <Megaphone />
                <li>Announcements</li>
              </div>
              <div className='flex flex-row gap-2 rounded-2xl hover:bg-[#99EA73] hover:text-black h-12 w-[100%] items-center pl-2'>
                <BookA />
                <li>Attendance</li>
              </div>
              <div className='flex flex-row gap-2 rounded-2xl hover:bg-[#99EA73] hover:text-black h-12 w-[100%] items-center pl-2'>
                <CalendarCheck />
                <li>Enrolled Events</li>
              </div>
            </ul>
          </div>
          <div className='w-[20vw] bg-[#2b2b2b] text-white flex flex-col absolute bottom-4 rounded-2xl ml-10 justify-center p-4'>
            <ul className='text-xl flex flex-col'>
              <div className='flex flex-row gap-2 rounded-2xl h-12 w-[100%] items-center pl-2'>
                <BookmarkCheck />
                <li>Saved Events</li>
              </div>
              <div className='flex flex-row gap-2 rounded-2xl h-12 w-[100%] items-center pl-2'>
                <LogOut />
                <li>Log out</li>
              </div>
            </ul>
          </div>
        </div>
        <div>
          <div className='bg-[#2b2b2b] w-[70vw] rounded-2xl flex flex-col mt-20 ml-10 pb-7  '>
            <h1 className='text-xl text-gray-400 p-4'>{(new Date()).toLocaleDateString('en-US', DATE_OPTIONS)}</h1>
            <h2 className='text-2xl text-white pl-4'>Student Complete Detail</h2>
            <hr />
            <div className='flex flex-col md:flex-row flex-wrap p-3'>
              <div className="inputParent wrap-input-2 p-3 flex flex-col">
                <label htmlFor="name" className="text-white self-start text-lg"><span className='text-red-400'>*</span>Name:</label>
                <input className="input pl-3 h-10 w-[80vw] md:w-[20vw] rounded-xl bg-[#2b2b2b] border border-gray-400 text-white"
                  type="text"
                  required
                />
              </div>
              <div className="inputParent wrap-input-2 p-2 md:p-3 flex flex-col">
                <label className="text-white self-start text-lg"><span className='text-red-400'>*</span>Email:</label>
                <input
                  className="input pl-3 h-10 w-[20vw] rounded-xl bg-[#2b2b2b] border border-gray-400 text-white"
                  type="text"
                  required />
              </div>
              <div className="inputParent wrap-input-2 p-2 md:p-3 flex flex-col">
                <label className="text-white self-start text-lg"><span className='text-red-400'>*</span>Gender:</label>
                <input
                  className="input pl-3 h-10 w-[20vw] rounded-xl bg-[#2b2b2b] border border-gray-400 text-white"
                  type="text"
                  required
                />
              </div>
              <div className="inputParent wrap-input-2 p-2 md:p-3 flex flex-col">
                <label className="text-white self-start text-lg"><span className='text-red-400'>*</span>Roll Number:</label>
                <input
                  // defaultValue={value.rollNo}
                  className="input pl-3 h-10 w-[20vw] rounded-xl bg-[#2b2b2b] border border-gray-400 text-white"
                  type="number"
                  required
                />
              </div>
              <div className="inputParent wrap-input-2 p-2 md:p-3 flex flex-col">
                <label className="text-white self-start md:text-lg"><span className='text-red-400'>*</span>Semester:</label>
                <input
                  className="input pl-3 h-10 w-[20vw] rounded-xl bg-[#2b2b2b] border border-gray-400 text-white"
                  type="number"
                  required
                />
              </div>
              <div className="inputParent wrap-input-2 p-2 md:p-3 flex flex-col">
                <label className="text-white self-start md:text-lg"><span className='text-red-400'>*</span>Section:</label>
                <input
                  className="input pl-3 h-10 w-[20vw] rounded-xl bg-[#2b2b2b] border border-gray-400 text-white"
                  type="text"
                  required
                />
              </div>
              <div className="inputParent wrap-input-2 p-2 md:p-3 flex flex-col">
                <label className="text-white self-start md:text-lg"><span className='text-red-400'>*</span>Contact:</label>
                <input
                  className="input pl-3 h-10 w-[20vw] rounded-xl bg-[#2b2b2b] border border-gray-400 text-white"
                  type="number"
                  required
                />
              </div>
              <div className="inputParent wrap-input-2 p-2 md:p-3 flex flex-col">
                <label className="text-white self-start md:text-lg"><span className='text-red-400'>*</span>Degree:</label>
                <input
                  className="input pl-3 h-10 w-[20vw] rounded-xl bg-[#2b2b2b] border border-gray-400 text-white"
                  type="text"
                  required
                />
              </div>
              <div className="inputParent wrap-input-2 p-2 md:p-3 flex flex-col">
                <label className="text-white self-start md:text-lg"><span className='text-red-400'>*</span>Branch:</label>
                <input
                  className="input pl-3 h-10 w-[20vw] rounded-xl bg-[#2b2b2b] border border-gray-400 text-white"
                  type="text"
                  required
                />
              </div>
              <div />
            </div>
            <div className='flex justify-center'>
              <button className='bg-[#99EA73] h-12 w-40 text-xl rounded-xl font-medium transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl animate-fadeInUp'>Save Details</button>
            </div>

          </div>
          <div className='ml-10 mt-10 bg-[#2b2b2b] rounded-xl h-[40vh]'>

          </div>
        </div>
      </div>


      <div className='md:hidden'>
        <Footericons />
      </div>
    </>
  );


}

export default Dashboard
