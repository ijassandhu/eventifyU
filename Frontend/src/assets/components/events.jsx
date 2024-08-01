import React, { useState } from 'react'
import Footericons from './footericons'
import dummy from '/photos/dummy.png'
import { Bookmark } from 'lucide-react';
import { BookmarkCheck } from 'lucide-react';

const BookmarkedEvents = [1, 5, 3 , 6];

const data = [
  {
    img: `/photos/dummy.png`,
    name: `Tech Amigos`,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet laboriosam corporis dicta maxime nulla? Numquam quas illum aut sit architecto?`
  },
  {
    img: `/photos/dummy.png`,
    name: `Pheonix club`,
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi facilis odit asperiores sunt quod delectus ut voluptate! Aspernatur, alias animi.`
  },
  {
    img: `/photos/dummy.png`,
    name: `Virasat Club`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quae voluptate labore, quod delectus doloribus sint voluptas quasi iure aliquam!`
  },
  {
    img: `/photos/dummy.png`,
    name: `Pixel Club`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sit nostrum velit sequi similique nemo minima non sint consectetur id.`
  },
  {
    img: `/photos/dummy.png`,
    name: `Flaming Club`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aperiam quod ipsa possimus ipsum eum accusamus mollitia nihil necessitatibus nam.`
  },
  {
    img: `/photos/dummy.png`,
    name: `Rangmanch Club`,
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. At possimus illum eaque. Excepturi quos officia saepe voluptatum, obcaecati explicabo corporis?`
  },
  {
    img: `/photos/dummy.png`,
    name: `Artistia Club`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloribus sequi eos provident ducimus? Iure ex nostrum recusandae repudiandae et?`
  },
]



const Events = () => {
  const [isBookmarked, setBookmarked] = useState(BookmarkedEvents);
  function check(index) {
    let doesExist = false;
    console.log(index)
    let newBookmarked = isBookmarked.filter((e) => {
      if (e === index) {
        doesExist = true
      }
      return e !== index;
    });
    if (doesExist !== true) {
      newBookmarked.push(index)
    }
    console.log(newBookmarked);
    setBookmarked(newBookmarked);
  }
  return (
    <div className='pt-20 mb-20 md:mb-0 bg-[#2b2b2b]'>
      <div>

        <h1 className='text-center text-2xl font-semibold text-[#fff] mt-3 md:mt-5 md:text-3xl'>Upcoming Events</h1>
        <h2 className='text-center mt-5 text-lg px-3 md:px-52 text-[#bcb5b5]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorem possimus quod, voluptatibus sint quisquam nulla asperiores? Hic, soluta quos.</h2>

      </div>
      <div className='flex flex-col md:flex-row md:flex-wrap justify-around'>
        {data.map((d, index) => (
          <div key={index}>
            <div className='flex w-[100%] p-3 md:p-10 justify-center md:flex-row '>
              <img src={d.img} alt="" className='w-40 md:w-44 rounded-l-2xl md:overflow-hidden' />
              <div className='bg-[#fff]  w-[70vw] p-2 md:w-[25vw] rounded-r-2xl'>
                <div className='flex justify-between'>
                  <div className='font-bold md:font-semibold pl-2'>
                    {d.name}
                  </div>
                  <div>
                    {/* <Bookmark /> */}
                    <button onClick={() => check(index)}>{isBookmarked.includes(index) ? <BookmarkCheck /> : <Bookmark />}</button>
                  </div>
                </div>
                <div className='py-3 px-2 text-xs md:text-base'>
                  {d.description}
                </div>
                <div className='text-xs flex justify-end '>
                  <button className='bg-[#ff943c] hover:bg-[#ff790a] text-white h-8 w-20 rounded-xl'>Enroll Now</button>

                </div>
              </div>

            </div>
          </div>
        ))}

      </div>
      <div className='md-hidden'>
        <Footericons />
      </div>
    </div>
  )
}


export default Events
