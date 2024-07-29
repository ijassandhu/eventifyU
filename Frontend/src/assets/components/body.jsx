import ARTISTIA from '/photos/ARTISTIA.jpeg';
import CHAMPION from '/photos/CHAMPION.jpeg';
import FLAMING from '/photos/FLAMING.jpeg';
import PRAYAS from '/photos/PRAYAS.jpeg';
import RANGMANCH from '/photos/RANGMANCH.jpeg';
import TECHAMIGOS from '/photos/TECHAMIGOS.jpeg';
import VIRASAT from '/photos/VIRASAT.jpeg';
import SPORTS from '/photos/SPORTS.jpg';
import SCIENCEDAY from '/photos/SCIENCEDAY.jpg';
import PARIVARTAN from '/photos/PARIVARTAN.jpg';
import team from "/photos/team.svg";
import Footer from './footer';
import { Link } from "react-router-dom"
import Footericons from './footericons';

const clubImages = [
    ARTISTIA,
    CHAMPION,
    FLAMING,
    PRAYAS,
    RANGMANCH,
    TECHAMIGOS,
    VIRASAT,
];

export default function Body() {
    return (
        <>
            <div className="hero-section" id='home'>
                <div className="hero-section1 flex flex-col md:flex-row gap-8 p-4 md:mt-20 mt-16 relative ">
                    <div className="md:h-[50%] md:w-[50%] md:p-28">
                        <h1 className="text-xl md:text-5xl leading-tight font-bold">
                            Welcome to Chandigarh Group of Colleges Events Hub.
                        </h1>
                        <h2 className="text-2xl text-[#e6e6e6] mt-4 md:mt-12 font-medium">Your Gateway to All Campus Activities and Events</h2>
                    </div>
                    <div className="flex justify-center md:justify-start">
                        <img src={team} alt="" className='h-[280px] md:h-[480px] rounded-2xl mt-8 md:mt-[15%] hover:h-[500px] duration-500' />
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

                <div className='bg-[#d5ddea] py-12'>
                    <h1 className='text-3xl md:text-5xl text-center pb-6'>
                        About Us
                    </h1>
                    <div className='text-center px-6 md:px-28'>
                        <h2 className='text-xl md:text-3xl'>Department of Student Welfare</h2>
                        <p className='text-base md:text-xl pt-4 md:pt-8'>
                            The Department of Student Welfare (DSW) is the department that works for the student welfare. To make college life of students more valuable, educative, and enjoyable, it organizes various events in the college, handles the grievances, and much more. DSW has 8 clubs under it which handle various areas during competitions, festivals, and events. DSW has classified them for the interest of students to nurture their growth process.
                        </p>
                    </div>

                    <div className='flex flex-wrap justify-around mt-10 pb-10 gap-6 md:gap-10'>
                        {clubImages.map((image, index) => (
                            <div key={index} className='h-[30vh] md:h-[40vh] w-[70vw] md:w-[25vw] rounded-3xl flex justify-center items-center overflow-hidden hover:h-[35vh] md:hover:h-[45vh] duration-500'>
                                <img src={image} alt="" className='rounded-3xl hover:shadow-2xl duration-500' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
           <div className='md:hidden'>
            <Footericons/>
           </div>
            <div className='hidden md:flex'>
               <Footer />
            </div>
          
        </>
    );
}