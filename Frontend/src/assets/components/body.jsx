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

const clubImages = [
    ARTISTIA,
    CHAMPION,
    FLAMING,
    PRAYAS,
    RANGMANCH,
    TECHAMIGOS,
    VIRASAT,
    // SPORTS,
    // SCIENCEDAY,
    // PARIVARTAN
]

export default function Body() {
    return (
        <>
            <div className="hero-section" id='home'>
                <div className="hero-section1 flex gap-8">
                    <div className="body h-[50%] w-[50%] p-32 ">
                        <h1 className="text-5xl leading-tight font-bold">
                            Welcome to Chandigarh Group of Colleges Events Hub.
                        </h1>
                        <h2 className="text-2xl text-[#e6e6e6] mt-12 font-medium">Your Gateway to All Campus Activities and Events</h2>
                    </div>
                    <div>
                        <img src={team} alt="" className='h-[480px] rounded-2xl mt-[15%] hover:h-[500px] duration-500' />
                    </div>
                </div>
                <div className='hero-section2'>

                <div className='mt-16'>

                    <h1 className='text-5xl flex justify-center my-2 font-normal text-black'>
                        Discover Upcoming Events
                    </h1>
                    <p className=' p-14 text-xl ml-14 rounded-full text-center'>
                        "Welcome to the Chandigarh Group of Colleges Events Portal, your ultimate destination for all things happening on campus. Discover upcoming events, explore past highlights, and connect with the vibrant clubs that make our college community thrive. Whether you’re looking to join a new club, attend an exciting event, or stay updated with the latest happenings, our platform is here to keep you informed and engaged. Join us in celebrating the spirit of our college and making every moment count!"
                    </p>
                </div>
                <div className='clubsContainer flex justify-around mb-10'>
                    <div className="h-[45vh] w-[25vw] rounded-xl flex justify-center items-center">
                        <div>
                            <img src={PARIVARTAN} alt="" className='rounded-xl hover:shadow-2xl' />
                        </div>
                    </div>
                    <div className="h-[45vh] w-[25vw] rounded-xl flex justify-center items-center">
                        <div>
                            <img src={SPORTS} alt="" className='object-cover rounded-xl hover:shadow-2xl' />
                        </div>
                    </div>
                    <div className="h-[45vh] w-[25vw] rounded-xl flex justify-center items-center overflow-hidden hover:shadow-2xl">
                        <div>
                            <img src={SCIENCEDAY} alt="" />
                        </div>
                    </div>

                </div>
                </div>
                <div>

                </div>
                <div className='bg-[#d5ddea]'>
                    <h1 className='flex justify-center pt-10 pb-6'>
                        About us
                    </h1>
                    <div>
                        <h1 className='text-3xl text-center'>Department of Student Welfare</h1>
                        <p className='text-center text-xl px-28 pt-8'>The Department of Student Welfare (DSW) is the department that works for the student welfare. To make college life of students more valuable , educative and enjoyable , it organizes various events in the college ,handles the grievances and many more DSW has 8 clubs under it which handles various areas during the competitions , festivals and events. DSW has classified them for the interest of students for nurturing their growth process.</p>
                    </div>
                    {/* <div className='flex justify-around mt-10'>
                        <div>
                            <img src={ARTISTIA} alt="" className='h-[40vh] rounded-3xl hover:h-[45vh] duration-500' />
                        </div>
                        <div>
                            <img src={CHAMPION} alt="" className='h-[40vh] rounded-3xl hover:h-[45vh] duration-500' />
                        </div>
                        <div>
                            <img src={FLAMING} alt="" className='h-[40vh] rounded-3xl hover:h-[45vh] duration-500' />
                        </div>
                        <div>
                            <img src={PRAYAS} alt="" className='h-[40vh] rounded-3xl hover:h-[45vh] duration-500' />
                        </div>
                    </div>

                    <div className='flex justify-around mt-10 pb-10'>
                        <div>
                            <img src={RANGMANCH} alt="" className='h-[40vh] rounded-3xl hover:h-[45vh] duration-500' />
                        </div>
                        <div>
                            <img src={TECHAMIGOS} alt="" className='h-[40vh] rounded-3xl hover:h-[45vh] duration-500' />
                        </div>
                        <div>
                            <img src={VIRASAT} alt="" className='h-[40vh] rounded-3xl hover:h-[45vh] duration-500' />
                        </div>
                    </div> */}
                    <div className='flex justify-around mt-10 pb-10 flex-wrap gap-x-[10rem] gap-y-14'>

                        {clubImages.map((image, index) => (
                            <div key={index}>
                                <img src={image} alt="" className='h-[40vh] rounded-3xl hover:h-[45vh] duration-500' />
                            </div>
                ))}
                 </div>
                </div>
            </div>
            <Footer />
        </>
    )
}