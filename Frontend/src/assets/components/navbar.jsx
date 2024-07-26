import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import './CSS/navbar.css'
// import {searchOnclick} from './javascript/navbar.js'
import { Link } from "react-router-dom"
import { useState } from "react"
import Login from "./Login.jsx"
import Signup from "./signup.jsx"
export default function Navbar(){
    const [showModal , setShowModal] = useState(false)
    const [showModal2 , setShowModal2] = useState(false)
    return(
        <>
        <div className="bg-[#222]">
        <nav className="flex bg-[#222] h-20 items-center hover:cursor-pointer transition: all 0.3s ease-in-out fixed w-[100vw] top-0">
            <h1 className="text-white md:ml-[5%] text-2xl">eventifyU</h1>
            <ul className="flex flex-row ml-[25%] space-x-9 text-lg text-white">
                <li className=" hover:text-red-500"><Link to ="/">Home</Link></li>
                <li className=" hover:text-red-500"><Link to ="/events">Events</Link></li>
                <li className=" hover:text-red-500"><Link to ="/clubs">Clubs</Link></li>
                <li className=" hover:text-red-500"><Link to ="#">Dashboard</Link></li>
                <li className=" hover:text-red-500"><Link to ="#">Feedback</Link></li>
            </ul>
            <div className="flex ms-24 align-middle justify-center w-[350px]" >
                 <button onClick={()=>{
                    console.log('set state true');
                    setShowModal(true)}} className="text-lg font-semibold text-black bg-[#ff7c11] w-28 h-12 rounded-xl justify-center flex items-center hover:bg-[#ff9845] ml-auto shadow-md xl shadow-black">Sign In</button>
                 {showModal && <Login onClose={()=> {
                    console.log('state set false');
                    setShowModal(false)}}/> }
                 <button onClick={()=>setShowModal2(true)} className="text-lg font-semibold text-black bg-[#ff7c11] w-28 h-12 rounded-xl justify-center flex items-center hover:bg-[#ff9845] ml-4 shadow-md xl shadow-black">Sign Up</button>
                 {showModal2 && <Signup onClose={()=> setShowModal2(false)}/> }
                    {/* <div className="search leading-10 flex ml-3 justify-end">
                        <input type="text" placeholder="Search..." className="input p-2 h-12  text-black"/>
                        <button className="button flex items-center text-black justify-center " onClick={searchOnclick}>
                        <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div> */}
            </div>
        </nav>
        </div>
      
        </>
    )
}