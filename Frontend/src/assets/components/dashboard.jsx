import React from 'react'
import Footericons from './footericons'
import styles from './css/clubs.module.css';

const Dashboard = () => {
  return (
    <>
      <div className='bg-[#2b2b2b] flex justify-center w-full h-64'>
        <div className='pt-16 flex flex-col md:flex-row mr-2'>
          <div className="inputParent wrap-input-2 p-2 md:p-10">
            <label htmlFor="name" className="text-white">Name:</label>
            <input
              id="name"
              className="input pl-3 h-10 w-[80vw] md:w-[25vw] rounded-xl"
              type="text"
              placeholder="Name"
            />
            <span className="focus-border"></span>
          </div>
          <div className="inputParent wrap-input-2 p-2 md:p-10">
            <label className="text-white">Email:</label>
            <input
              id="email"
              className="input pl-3 h-10 w-[80vw] md:w-[25vw] rounded-xl"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="inputParent wrap-input-2 p-2 md:p-10">
            <label className="text-white">Contact:</label>
            <input
              id="contact"
              className="input pl-3 h-10 w-[80vw] md:w-[25vw] rounded-xl"
              type="number"
              placeholder="Contact"
            />
          </div>
        </div>
      </div>

        <div className='md:hidden'>
          <Footericons/>
        </div>
    </>
  );


}

export default Dashboard
