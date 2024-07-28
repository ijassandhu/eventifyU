import React from 'react'
import { Link } from 'react-router-dom';

const Footericons = () => {
  return (
    <div>
       <div className='h-20 w-[100%] fixed bottom-0 bg-[#222] md:hidden'>
            <ul className={'flex md:flex-row lg:space-x-14 md:space-x-9 space-x-6 text-lg sm:text-md justify-between px-3 text-white'}>
                    <li className="hover:text-red-500"><Link to="/">Home</Link></li>
                    <li className="hover:text-red-500"><Link to="/events">Events</Link></li>
                    <li className="hover:text-red-500"><Link to="/clubs">Clubs</Link></li>
                    <li className="hover:text-red-500"><Link to="/feedback">Feedback</Link></li>
                </ul>
            </div>
    </div>
  )
}

export default Footericons;
