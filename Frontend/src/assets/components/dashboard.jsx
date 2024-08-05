import React from 'react'
import Footericons from './footericons'
import styles from './css/clubs.module.css';

const Dashboard = () => {
  return (
    <>
      <div className='bg-[#2b2b2b] flex justify-center w-full px-16'>
        <div className='pt-24 flex flex-col md:flex-row flex-wrap justify-evenly'>
          <div className="inputParent wrap-input-2 p-2 md:p-3 flex flex-col">
            <label htmlFor="name" className="text-white self-start md:text-lg">Name:</label>
            <input
              id="name"
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
      </div>


      <div className='md:hidden'>
        <Footericons />
      </div>
    </>
  );


}

export default Dashboard
