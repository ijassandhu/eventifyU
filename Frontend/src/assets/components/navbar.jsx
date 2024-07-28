import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
// import {searchOnclick} from './javascript/navbar.js'
import { Link } from "react-router-dom"
import { useState } from "react"
import Login from "./Login.jsx"
import Signup from "./signup.jsx"

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    // const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <nav className="flex bg-[#222] md:h-20 h-16 items-center fixed top-0 w-[100vw] z-10 justify-between md:justify-around px-4 md:px-0">
                <h1 className="text-white text-2xl">eventifyU</h1>
                <ul className={'md:flex md:flex-row space-x-14 md:space-x-9 text-lg sm:text-md text-white hidden'}>
                    <li className="hover:text-red-500"><Link to="/">Home</Link></li>
                    <li className="hover:text-red-500"><Link to="/events">Events</Link></li>
                    <li className="hover:text-red-500"><Link to="/clubs">Clubs</Link></li>
                    <li className="hover:text-red-500"><Link to="/dashboard">Dashboard</Link></li>
                    <li className="hover:text-red-500"><Link to="/feedback">Feedback</Link></li>
                </ul>
                <div className="flex items-center space-x-4">
                    <button
                        onClick={() => setShowModal(true)}
                        className="md:text-lg text-sm font-semibold text-[#ff943c] md:w-28 md:h-12 rounded-xl flex items-center justify-center shadow-md border border-[#ff7c11] hover:shadow-black w-16 h-9 "
                    >
                        Sign In
                    </button>
                    {showModal && <Login onClose={() => setShowModal(false)} />}
                    <button
                        onClick={() => setShowModal2(true)}
                        className="md:text-lg text-sm font-semibold text-black bg-[#ff943c] md:w-28 md:h-12 rounded-xl flex items-center justify-center hover:bg-[#ff790a] shadow-md shadow-black  w-16 h-9"
                    >
                        Sign Up
                    </button>
                    {showModal2 && <Signup onClose={() => setShowModal2(false)} />}

                </div>
            </nav >
        </div >
    )
}
export default Navbar;