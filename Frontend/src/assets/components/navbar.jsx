import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import Login from "./Login.jsx"
import Signup from "./signup.jsx"
// import Navbar from './navbar'

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const toggleModal = () => {
        setShowModal(!showModal);   
        console.log('called')
        setShowModal2(!showModal2); 
    }

    const Location = useLocation();
    useEffect(() => { window.scrollTo(0,0);}, [Location]);
    const [isloggedin , setloggedin ] = useState(false);
    return (
        <div>
            {/* <Navbar/> */}
            <nav className="flex bg-[#222] md:h-20 h-16 items-center fixed top-0 w-[100vw] z-10 justify-between md:justify-around px-4 md:px-0">
                <div className="text-[#99EA73] text-2xl flex">
                    <h1>event</h1>
                    <h1 className="text-white">ifyU</h1>
                </div>
                <ul className="md:flex md:flex-row space-x-14 md:space-x-9 text-lg sm:text-md text-white hidden">
                    <li className={`hover:text-red-500 ${location.pathname === '/' ? 'text-red-500' : ''}`}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={`hover:text-red-500 ${location.pathname === '/events' ? 'text-red-500' : ''}`}>
                        <Link to="/events">Events</Link>
                    </li>
                    <li className={`hover:text-red-500 ${location.pathname === '/dashboard' ? 'text-red-500' : ''}`}>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className={`hover:text-red-500 ${location.pathname === '/clubs' ? 'text-red-500' : ''}`}>
                        <Link to="/clubs">Clubs</Link>
                    </li>
                    <li className={`hover:text-red-500 ${location.pathname === '/feedback' ? 'text-red-500' : ''}`}>
                        <Link to="/feedback">Feedback</Link>
                    </li>
                </ul>
                {(!isloggedin) ? 

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setShowModal(true)}
                        className="md:text-lg text-sm font-semibold text-[#99EA73] md:w-28 md:h-12 rounded-xl flex items-center justify-center border border-[#99EA73] hover:shadow-black w-16 h-9 shadow-md shadow-[#99EA73] "
                    >
                        Sign In
                    </button>
                    {showModal && <Login onClose={() => setShowModal(false)} toggleModal={toggleModal} />}
                    <button
                        onClick={() => setShowModal2(true)}
                        className="md:text-lg text-sm font-semibold text-black bg-[#99EA73] md:w-28 md:h-12 rounded-xl flex items-center justify-center hover:bg-[#75ff35] hover:text-black shadow-md shadow-black  w-16 h-9"
                    >
                        Sign Up
                    </button>
                    {showModal2 && <Signup onClose={() => setShowModal2(false)} toggleModal={toggleModal} />}

                </div>:
                <div className="flex items-center gap-4">
                    <button className="bg-[#99EA73] h-10 w-28">Click me</button>
                </div>

                }
            </nav >
        </div >
    )
}
export default Navbar;