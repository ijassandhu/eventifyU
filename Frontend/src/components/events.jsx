import React, { useState } from "react";
import Footericons from "./footericons";
import dummy from "/photos/dummy.png";
import Navbar from "./navbar";
import { Bookmark } from "lucide-react";
import { BookmarkCheck } from "lucide-react";

const BookmarkedEvents = [1, 5, 3, 6];

const data = [
  {
    img: `/photos/dummy.png`,
    name: `EVENT 1`,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing Amet laboriosam corporis dicta maxime nulla? Numquam quas illum aut sit architecto?`,
  },
  {
    img: `/photos/dummy.png`,
    name: `EVENT 2`,
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi facilis odit asperiores sunt quod delectus ut voluptate! Aspernatur, alias animi.`,
  },
  {
    img: `/photos/dummy.png`,
    name: `EVENT 3`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quae voluptate labore, quod delectus doloribus sint voluptas quasi iure aliquam!`,
  },
  {
    img: `/photos/dummy.png`,
    name: `EVENT 4`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sit nostrum velit sequi similique nemo minima non sint consectetur id.`,
  },
  {
    img: `/photos/dummy.png`,
    name: `EVENT 5`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aperiam quod ipsa possimus ipsum eum accusamus mollitia nihil necessitatibus nam.`,
  },
  {
    img: `/photos/dummy.png`,
    name: `EVENT 6`,
    description: `Lorem ipsum dolor sit amet, adipisicing elit. At possimus illum  Excepturi quos officia saepe voluptatum, obcaecati explicabo corporis?`,
  },
  {
    img: `/photos/dummy.png`,
    name: `EVENT 7`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloribus sequi provident ducimus? Iure ex nostrum recusandae repudiandae et?`,
  },
];

const Events = () => {
  const [isBookmarked, setBookmarked] = useState(BookmarkedEvents);
  function check(index) {
    let doesExist = false;
    console.log(index);
    let newBookmarked = isBookmarked.filter((e) => {
      if (e === index) {
        doesExist = true;
      }
      return e !== index;
    });
    if (doesExist !== true) {
      newBookmarked.push(index);
    }
    console.log(newBookmarked);
    setBookmarked(newBookmarked);
  }
  return (
    <div>
      <Navbar />
      <div className="pt-20 md:mb-0 bg-[#2b2b2b]">
        <h1 className="text-center text-2xl font-semibold text-[#fff] mt-3 md:mt-5 md:text-3xl">
          Upcoming Events
        </h1>
        <h2 className="text-center mt-5 text-lg px-3 md:px-52 text-[#bcb5b5]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          dolorem possimus quod, voluptatibus sint quisquam nulla asperiores?
          Hic, soluta quos.
        </h2>
      </div>
      <div className="md:hidden flex flex-col md:flex-row md:flex-wrap justify-around mb-20 md:mb-0 bg-[#2b2b2b]">
        {data.map((d, index) => (
          <div key={index}>
            <div className="flex w-[100%] p-3 md:p-10 justify-center md:flex-row ">
              <img
                src={d.img}
                alt=""
                className="w-40 md:w-44 rounded-l-2xl md:overflow-hidden"
              />
              <div className="bg-[#fff]  w-[70vw] p-2 md:w-[25vw] rounded-r-2xl">
                <div className="flex justify-between">
                  <div className="font-bold md:font-semibold pl-2">
                    {d.name}
                  </div>
                  <div>
                    <button onClick={() => check(index)}>
                      {isBookmarked.includes(index) ? (
                        <BookmarkCheck />
                      ) : (
                        <Bookmark />
                      )}
                    </button>
                  </div>
                </div>
                <div className="py-3 px-2 text-xs md:text-base">
                  {d.description}
                </div>
                <div className="text-xs flex justify-end ">
                  <button className="bg-[#99EA73] hover:bg-[#75ff35] hover:text-black h-8 w-20 rounded-xl">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="hidden md:flex md:flex-wrap md:justify-around md:px-32 gap-y-24 gap-x-6 pt-7 pb-10 bg-[#2b2b2b]">
          {data.map((m, index) => (
            <div key={index}>
              <div className="w-[300px] text-ellipsis">
                <img
                  src={m.img}
                  alt=""
                  className="rounded-t-3xl border hover:border-gray-500"
                />

                <div className="text-center px-3 text-white rounded-b-3xl border-2 hover:border-gray-500">
                  <h2 className="text-md font-bold text-center">{m.name}</h2>
                  <h1 className="text-xs lg:text-md text-center">
                    {m.description}
                  </h1>
                  <div className="flex justify-between">
                    <button className="bg-[#99EA73] text-black h-10 w-28 rounded-2xl my-2 hover:bg-[#75ff35] transition-all duration-300 transform hover:scale-105">
                      Enroll Now
                    </button>
                    <button onClick={() => check(index)}>
                      {isBookmarked.includes(index) ? (
                        <BookmarkCheck />
                      ) : (
                        <Bookmark />
                      )}
                    </button>
                  </div>
                </div>

                <div></div>

                <div></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="copyright bottom-0 bg-[#222] h-10 w-[100%] hidden md:flex md:justify-center">
        <p className="text-white text-center justify-center p-2">
          &copy; 2024 All rights reserved
        </p>
      </div>
      <div className="md-hidden">
        <Footericons />
      </div>
    </div>
  );
};

export default Events;
