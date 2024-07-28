import React from 'react'
import opinions from "/photos/opinions.svg"
import Footericons from './footericons'

const Feedback = () => {
    return (
        <div>
            <div className='feedback min-h-screen flex items-center justify-center md:justify-around md:p-20 '>
                <div className='hidden md:flex'>
                    <img src={opinions} alt="" className='h-[30rem] hover:h-[32rem] duration-500' />
                </div>
                <div className='flex flex-col md:flex-row gap-10 md:gap-5 justify-center md:justify-around items-center'>
                    <div className='flex justify-center md:justify-start'>
                        <div className='bg-white shadow-lg md:rounded-3xl p-8 md:p-5 w-[90vw] md:w-[30vw]'>
                            <div className='flex justify-center md:justify-start md:hidden'>
                                <img src={opinions} alt="" className='h-48 md:h-80 hover:scale-110 transition-transform duration-500' />
                            </div>
                            <h1 className='text-3xl md:text-2xl font-bold flex justify-center text-[#3F3D56] mb-6'>Feedback</h1>
                            <form className='flex flex-col items-center'>
                                <div className='flex flex-col gap-6 md:gap-16 w-full'>
                                    <input type="text" placeholder='Name' className='w-full h-12 rounded-xl p-4 text-gray-800 border border-gray-300 focus:outline-none focus:border-black transition duration-300' required />
                                    <input type="email" placeholder='Email' className='w-full h-12 rounded-xl p-4 text-gray-800 border border-gray-300 focus:outline-none focus:border-black transition duration-300' required />
                                    <textarea placeholder='Message' className='w-full h-32 rounded-xl p-4 text-gray-800 border border-gray-300 focus:outline-none focus:border-black transition duration-300' required />
                                </div>
                                <button type='submit' className='bg-[#FF6363] text-white h-12 w-32 rounded-xl mt-6 hover:bg-[#ff3838] hover:shadow-xl transition-all duration-300 transform hover:scale-105'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='copyright fixed bottom-0 bg-[#222] h-10 w-[100%] hidden md:flex md:justify-center'>
                    <p className='text-white text-center justify-center p-2'>&copy; 2024 All rights reserved</p>
            </div>
            <div className='md:hidden'>
            <Footericons/>
           </div>
        </div>
    )
}

export default Feedback;
