import DSW from '/photos/DSW.jpeg';
import register from "/photos/register.svg"

export default function Body() {
    return (
        <div className="hero-section">
            <div className="hero-section1 flex gap-8">
                <div className="body h-[50%] w-[50%] p-32 mt-[8%]">
                    <h1 className="text-5xl leading-tight font-bold">
                        Welcome to Chandigarh Group of Colleges Events Hub.
                    </h1>
                    <h2 className="text-2xl text-[#ff8928] mt-12 font-semibold">Your Gateway to All Campus Activities and Events</h2>
                </div>
                <div>
                    <img src={register} alt="" className='h-[450px] rounded-2xl mt-[30%] hover:h-[500px] duration-500' />
                </div>
            </div>
            <div className='mt-16'>
              
                <h1 className='text-5xl flex justify-center my-2 font-normal  text-black'>
                    Discover Upcoming Events
                </h1>
                <p className=' p-14 text-xl ml-14 rounded-full text-center'>
                    "Welcome to the Chandigarh Group of Colleges Events Portal, your ultimate destination for all things happening on campus. Discover upcoming events, explore past highlights, and connect with the vibrant clubs that make our college community thrive. Whether you’re looking to join a new club, attend an exciting event, or stay updated with the latest happenings, our platform is here to keep you informed and engaged. Join us in celebrating the spirit of our college and making every moment count!"
                </p>
            </div>
            <div className='clubsContainer flex justify-around mb-10'>
                <div className="h-[45vh] w-[25vw] bg-red-600 rounded-xl flex justify-center items-center text-white">
                    <div>Parivartan</div>
                </div>
                <div className="h-[45vh] w-[25vw] bg-red-600 rounded-xl flex justify-center items-center text-white">
                    <div>Aagaz</div>
                </div>
                <div className="h-[45vh] w-[25vw] bg-red-600 rounded-xl flex justify-center items-center text-white">
                    <div>Eminence</div>
                </div>  
               
            </div>
            <div className='bg-[#d5ddea] h-[100vh]'>
            <h1 className='flex justify-center pt-10 pb-6'>
                    About us
                </h1>
                <div>
                    <h1 className='text-3xl text-center'>Department of Student Welfare</h1>
                    <p className='text-center text-xl px-28 pt-8'>The Department of Student Welfare (DSW) is the department that works for the student welfare. To make college life of students more valuable , educative and enjoyable , it organizes various events in the college ,handles the grievances and many more DSW has 8 clubs under it which handles various areas during the competitions , festivals and events. DSW has classified them for the interest of students for nurturing their growth process.</p>
                </div>
                <div>
                    <ul className='flex justify-around p-10'>
                    <li>Artistia Club</li>
                    <li>Champion Club</li>
                    <li>Flaming Desire Club</li>
                    <li>Pixel Club</li>
                    <li>Prayas Club</li>
                    <li>Rangmanch Club</li>
                    <li>Tech-Amigos Club</li>
                    <li>Virasat Club</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}