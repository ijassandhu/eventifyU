import SPORTS from '/photos/SPORTS.jpg';
import SCIENCEDAY from '/photos/SCIENCEDAY.jpg';
import PARIVARTAN from '/photos/PARIVARTAN.jpg';                
import team from "/photos/team.svg";
import Footer from './footer';
import { Link } from "react-router-dom"
import Footericons from './footericons';
// import dummy from '/photos/dummy.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
    {
    img:`/photos/dummy.png`,
    name:`Tech Amigos`,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet laboriosam corporis dicta maxime nulla? Numquam quas illum aut sit architecto?`
    },
    {
    img:`/photos/dummy.png`,
    name:`Pheonix club`,
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi facilis odit asperiores sunt quod delectus ut voluptate! Aspernatur, alias animi.`
    },
    {
    img:`/photos/dummy.png`,
    name:`Virasat Club`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quae voluptate labore, quod delectus doloribus sint voluptas quasi iure aliquam!`
    },
    {
    img:`/photos/dummy.png`,
    name:`Pixel Club`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sit nostrum velit sequi similique nemo minima non sint consectetur id.`
    },
    {
    img:`/photos/dummy.png`,
    name:`Flaming Club`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aperiam quod ipsa possimus ipsum eum accusamus mollitia nihil necessitatibus nam.`
    },
    {
    img:`/photos/dummy.png`,
    name:`Rangmanch`,
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. At possimus illum eaque. Excepturi quos officia saepe voluptatum, obcaecati explicabo corporis?`
    },
    {
    img:`/photos/dummy.png`,
    name:`Artistia Club`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloribus sequi eos provident ducimus? Iure ex nostrum recusandae repudiandae et?`
    },
  ]

 function Body() {
    
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    
    return (
        <>
            <div className="hero-section" id='home'>
                <div className="hero-section1 flex flex-col md:flex-row gap-8 p-4 md:mt-20 mt-16 relative ">
                    <div className="md:h-[50%] md:w-[50%] md:p-28 flex flex-col text-center">
                        <h1 className="text-3xl md:w-[100%] md:text-5xl leading-tight font-bold p-10 md:p-0">
                            Welcome to Chandigarh Group of Colleges Events Hub.
                        </h1>
                        <h2 className="text-xl text-[#e6e6e6] mt-4 md:mt-12 font-medium px-8 md:px-2">Your Gateway to All Campus Activities and Events</h2>
                    </div>
                    <div className="flex justify-center md:justify-start">
                        <img src={team} alt="" className='h-[280px] md:h-[480px] rounded-2xl md:mt-[15%] hover:h-[500px] duration-500' />
                    </div>
                </div>

                <div className='hero-section2'>
                    <div className='mt-16 px-4'>
                        <h1 className='text-3xl md:text-5xl text-center my-2 font-normal text-black'>
                            Discover Upcoming Events
                        </h1>
                        <p className='p-4 md:p-14 text-base md:text-xl text-center'>
                            "Welcome to the Chandigarh Group of Colleges Events Portal, your ultimate destination for all things happening on campus. Discover upcoming events, explore past highlights, and connect with the vibrant clubs that make our college community thrive. Whether you’re looking to join a new club, attend an exciting event, or stay updated with the latest happenings, our platform is here to keep you informed and engaged. Join us in celebrating the spirit of our college and making every moment count!"
                        </p>
                    </div>

                    <div className='clubsContainer flex flex-wrap justify-around gap-6 md:gap-10 mb-10 px-4'>
                        <div className="h-[35vh] w-[70vw] md:h-[45vh] md:w-[25vw] rounded-xl flex justify-center items-center">
                            <img src={PARIVARTAN} alt="" className='rounded-xl hover:shadow-2xl' />
                        </div>
                        <div className="h-[35vh] w-[70vw] md:h-[45vh] md:w-[25vw] rounded-xl flex justify-center items-center">
                            <img src={SPORTS} alt="" className='object-cover rounded-xl hover:shadow-2xl' />
                        </div>
                        <div className="h-[35vh] w-[70vw] md:h-[45vh] md:w-[25vw] rounded-xl flex justify-center items-center overflow-hidden hover:shadow-2xl">
                            <img src={SCIENCEDAY} alt="" className='rounded-xl hover:shadow-2xl' />
                        </div>
                    </div>
                </div>

                <div className='bg-[#2b2b2b] py-12'>
                    <h1 className='text-3xl md:text-5xl text-center pb-6 text-white'>
                        About Us
                    </h1>
                    <div className='text-center px-6 md:px-28 text-white'>
                        <h2 className='text-xl md:text-3xl'>Department of Student Welfare</h2>
                        <p className='text-base md:text-xl pt-4 md:pt-8 text-white'>
                            The Department of Student Welfare (DSW) is the department that works for the student welfare. To make college life of students more valuable, educative, and enjoyable, it organizes various events in the college, handles the grievances, and much more. DSW has 8 clubs under it which handle various areas during competitions, festivals, and events. DSW has classified them for the interest of students to nurture their growth process.
                        </p>
                    </div>

                    <div className='w-3/4 m-auto'>
                        <div className='mt-20'>
                        <Slider {...settings}>
                            {data.map((d,index) => (
                                <div key={index} className='bg-[#fff4f4] h-[450px] text-black rounded-xl'>
                                    <div className='h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center'>
                                        <img src={d.img } alt="" className='h-44 w-44  rounded-full' />
                                        </div>    

                                        <div className='flex flex-col justify-center items-center gap-4 p-4'>
                                            <p className='text-xl font-semibold'>{d.name}</p>
                                            <p>{d.description}</p>
                                        <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl h-12'>Read More</button>
                                        </div>
                                </div>
                            ))}
                        </Slider>
                        </div>
                    </div>
                </div>
                <div className='md:hidden'>
                    <Footericons />
                </div>
                <div className='hidden md:flex'>
                    <Footer />
                </div>
            </div>

        </>
    )

}
export default Body;