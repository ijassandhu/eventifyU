import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./Login.jsx";
import Signup from "./signup.jsx";
import dummy from '/photos/dummy.png';

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const toggleModal = () => {
        setShowModal(!showModal);
        setShowModal2(!showModal2);
    };

    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const [isLoggedIn, setLoggedIn] = useState(true);
    const user = { name: "Jaskeerat" };

    return (
        <div>
            <nav className="flex bg-[#222] md:h-20 h-16 items-center fixed top-0 w-[100vw] z-10 justify-between md:justify-around px-4 md:px-0 shadow-lg shadow-[#99EA73]/30">
                <div className="text-[#99EA73] text-2xl flex">
                    <h1 className="hover:text-white transition-colors duration-300">event</h1>
                    <h1 className="text-white hover:text-[#99EA73] transition-colors duration-300">ifyU</h1>
                </div>
                <ul className="md:flex md:flex-row space-x-14 md:space-x-9 text-lg sm:text-md text-white hidden">
                    {['/', '/events', '/dashboard', '/clubs', '/feedback'].map((path, index) => (
                        <li key={index} className={`hover:text-[#99EA73] transition-colors duration-300 ${location.pathname === path ? 'text-[#99EA73]' : ''}`}>
                            <Link to={path}>{path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}</Link>
                        </li>
                    ))}
                </ul>
                {!isLoggedIn ? (
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setShowModal(true)}
                            className="md:text-lg text-sm font-semibold text-[#99EA73] md:w-28 md:h-12 rounded-xl flex items-center justify-center border border-[#99EA73] hover:bg-[#99EA73] hover:text-black transition-all duration-300 w-16 h-9 shadow-md shadow-[#99EA73]"
                        >
                            Sign In
                        </button>
                        {showModal && <Login onClose={() => setShowModal(false)} toggleModal={toggleModal} />}
                        <button
                            onClick={() => setShowModal2(true)}
                            className="md:text-lg text-sm font-semibold text-black bg-[#99EA73] md:w-28 md:h-12 rounded-xl flex items-center justify-center hover:bg-[#75ff35] transition-all duration-300 w-16 h-9 shadow-md shadow-black"
                        >
                            Sign Up
                        </button>
                        {showModal2 && <Signup onClose={() => setShowModal2(false)} toggleModal={toggleModal} />}
                    </div>
                ) : (
                    <div className="flex items-center gap-4">
                        <h1 className="hidden md:block text-white text-sm md:text-xl">Hello! {user.name}</h1>
                        <div className="relative group">
                            <img
                                src={dummy}
                                alt="User Avatar"
                                className="w-10 h-10 rounded-full cursor-pointer border-2 border-[#99EA73] transition-transform duration-300 transform group-hover:scale-110"
                            />
                            {/* <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                                <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-[#99EA73]/20 hover:text-[#222] transition-all duration-300">
                                    Profile
                                </Link>
                                <Link to="/my-events" className="block px-4 py-2 text-gray-800 hover:bg-[#99EA73]/20 hover:text-[#222] transition-all duration-300">
                                    My Events
                                </Link>
                                <Link to="/settings" className="block px-4 py-2 text-gray-800 hover:bg-[#99EA73]/20 hover:text-[#222] transition-all duration-300">
                                    Settings
                                </Link>
                                <button
                                    onClick={() => setLoggedIn(false)}
                                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-[#99EA73]/20 hover:text-[#222] transition-all duration-300"
                                >
                                    Log Out
                                </button>
                            </div> */}
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
