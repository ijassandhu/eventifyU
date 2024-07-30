import React from 'react'
import { Link } from 'react-router-dom';
import { House } from 'lucide-react';
import { CalendarCheck } from 'lucide-react';
import { Users } from 'lucide-react';
import { MessageSquareText } from 'lucide-react';

const Footericons = () => {
  return (
    <div>
      <div className='h-20 w-[100vw] fixed bottom-0 bg-[#222] md:hidden flex items-center'>
        <ul className={'flex md:flex-row lg:space-x-14 md:space-x-9 md:text-lg text-sm px-3 text-white w-[100%] '}>
          <div className='flex flex-row justify-around w-[100%]'>
            <div>
              <li className="hover:text-red-500"><Link className='flex flex-col justify-center items-center' to="/">
                <House />
                Home</Link></li>
            </div>
            <div>
              <li className="hover:text-red-500"><Link className='flex flex-col justify-center items-center' to="/events">
                <CalendarCheck />
                Events</Link></li>
            </div>
            <div>
              <li className="hover:text-red-500"><Link className='flex flex-col justify-center items-center' to="/clubs">
                <Users />
                Clubs</Link></li>

            </div>
            <div>
              <li className="hover:text-red-500"><Link className='flex flex-col justify-center items-center' to="/feedback">
                <MessageSquareText />
                Feedback</Link></li>
            </div>
      </div>
        </ul>
      </div>
    </div>
  )
}

export default Footericons;
