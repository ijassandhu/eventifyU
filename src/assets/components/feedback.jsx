import React from 'react'
import opinions from "/photos/opinions.svg"

const Feedback = () => {
    return (
        <>
            <div className='feedback'>

                <div className='flex gap-5 pl-20 pt-20  justify-around'>
                    <div>
                        <img src={opinions} alt="" />
                    </div>
                    <div>

                        <div className='bg-[#E6E6E6] h-[65vh] w-[30vw] rounded-3xl'>
                            <h1 className='p-6 text-2xl font-semibold flex justify-center text-[#3F3D56]'>Feedback</h1>
                            <form className='p-2 flex'>
                                <div className='flex gap-8 flex-col pl-16'>
                                    <input type="text" placeholder='Name' className='w-[20vw] h-[6vh] rounded-3xl p-4 text-black' required />
                                    <input type="email" placeholder='Email' className='w-[20vw] h-[6vh] rounded-3xl p-4 text-black' required />
                                    <textarea type="text" placeholder='Message' className='w-[20vw] h-[16vh] rounded-3xl p-4 text-black' required />
                                </div>
                            </form>
                            <div className='flex justify-center items-center'>
                                <button type='submit' className='bg-[#FF6363] text-white h-12 w-24 rounded-2xl mt-6 hover:bg-[#ff3838] hover:shadow-2xl'>Submit</button>

                            </div>
                        </div >
                    </div>

                </div >
            </div>
        </>
    )
}

export default Feedback