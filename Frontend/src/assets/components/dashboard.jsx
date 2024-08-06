import React from 'react'
import Footericons from './footericons'
import { LayoutDashboard, Megaphone, BookA, BookmarkCheck } from 'lucide-react';
import styles from './css/clubs.module.css';
const user ={
  name: "Jaskeerat",
}
const Dashboard = () => {
  return (
    <>
      {/* <div className='bg-[#2b2b2b] flex justify-center w-full px-16'>
        <div className='pt-24 flex flex-col md:flex-row flex-wrap justify-evenly'>
          <div className="inputParent wrap-input-2 p-2 md:p-3 flex flex-col">
            <label htmlFor="name" className="text-white self-start md:text-lg">Name:</label>
            <input
              id="name"s
              className="input pl-3 h-10 w-[80vw] md:w-[25vw] rounded-xl bg-[#2b2b2b] border border-white text-white"
              type="text"
              required
            />
          </div>
          <div className="inputParent wrap-input-2 p-2 md:p-3 flex flex-col">
            <label className="text-white self-start md:text-lg">Email:</label>
            <input
              id="email"
              className="input pl-3 h-10 w-[80vw] md:w-[25vw] rounded-xl bg-[#2b2b2b] border border-white text-white"
              type="text"
              required />
          </div>
          <div className="inputParent wrap-input-2 p-2 md:p-3 flex flex-col">
            <label className="text-white self-start md:text-lg">Contact:</label>
            <input
              id="contact"
              className="input pl-3 h-10 w-[80vw] md:w-[25vw] rounded-xl bg-[#2b2b2b] border border-white text-white"
              type="number"
              required
            />
          </div>

          <div className="inputParent wrap-input-2 p-2 md:p-3 flex flex-col">
            <label className="text-white self-start md:text-lg">Course:</label>
            <input
              id="contact"
              className="input pl-3 h-10 w-[80vw] md:w-[25vw] rounded-xl bg-[#2b2b2b] border border-white text-white"
              type="text"
              required
            />
          </div>

          <div className="inputParent wrap-input-2 p-2 md:p-3 flex flex-col">
            <label className="text-white self-start md:text-lg">Department:</label>
            <input
              id="contact"
              className="input pl-3 h-10 w-[80vw] md:w-[25vw] rounded-xl bg-[#2b2b2b] border border-white text-white"
              type="text"
              required
            />
          </div>
          <div className="inputParent wrap-input-2 p-2 md:p-3 flex flex-col">
            <label className="text-white self-start md:text-lg">Semester:</label>
            <input
              id="contact"
              className="input pl-3 h-10 w-[80vw] md:w-[25vw] rounded-xl bg-[#2b2b2b] border border-white text-white"
              type="text"
              required
            />
          </div>

          <div className="inputParent wrap-input-2 p-2 md:p-3 flex flex-col">
            <label className="text-white self-start md:text-lg">College:</label>
            <input
              id="contact"
              className="input pl-3 h-10 w-[80vw] md:w-[25vw] rounded-xl bg-[#2b2b2b] border border-white text-white"
              type="text"
              required
            />
          </div>

          <div className="inputParent wrap-input-2 p-2 md:p-3 flex flex-col">
            <label className="text-white self-start md:text-lg">Roll Number:</label>
            <input
              // defaultValue={value.rollNo}
              id="contact"
              className="input pl-3 h-10 w-[80vw] md:w-[25vw] rounded-xl bg-[#2b2b2b] border border-white text-white"
              type="number"
              required
            />
          </div>
          <div className="inputParent wrap-input-2 p-2 md:p-3 flex flex-col">
            <label className="text-white self-start md:text-lg">Section:</label>
            <input
              id="contact"
              className="input pl-3 h-10 w-[80vw] md:w-[25vw] rounded-xl bg-[#2b2b2b] border border-white text-white"
              type="number"
              required
            />
          </div>
        </div>
      </div> */}
      <div className='hidden md:block bg-[#222] h-[100vh]'>
        <div className='w-[20vw] bg-[#2b2b2b] text-white flex flex-col mt-20 rounded-2xl ml-10 justify-center'>

            <h1 className='text-2xl'>Hello! {user.name}</h1>
          <ul className='text-xl pt-5 flex flex-col'>
            <div className='flex flex-row gap-2 border-2 hover:border-[#75FF35] h-12 w-[100%] items-center'>
            <LayoutDashboard/>
            <li>Dashboard</li>
            </div>
            <div className='flex flex-row gap-2 border-2 hover:border-[#75FF35] h-12 w-[100%] items-center'>
            <Megaphone/>
            <li>Announcements</li>
            </div>
            <div className='flex flex-row gap-2 border-2 hover:border-[#75FF35] h-12 w-[100%] items-center'>
            <BookA />
            <li>Attendance</li>
            </div>
            <div className='flex flex-row gap-2 border-2 hover:border-[#75FF35] h-12 w-[100%] items-center'>
            <BookmarkCheck/>
            <li>Saved Events</li>
            </div>
          </ul>
        </div>
      </div>


      <div className='md:hidden'>
        <Footericons />
      </div>
    </>
  );


}

export default Dashboard
