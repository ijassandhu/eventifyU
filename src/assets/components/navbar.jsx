import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import './CSS/navbar.css'
import {searchOnclick} from './javascript/navbar.js'
export default function Navbar(){
    return(
        <>
        <div className="bg-[#222]">
        <nav className="flex bg-[#222] h-20 items-center hover:cursor-pointer transition: all 0.3s ease-in-out; ">
            <h1 className="text-white md:ml-[5%] text-2xl">eventifyU</h1>
            <ul className="flex flex-row ml-[25%] space-x-9 text-lg text-white">
                <li className=" hover:text-red-500"><a href="#">Home</a></li>
                <li className=" hover:text-red-500"><a href="#">About</a></li>
                <li className=" hover:text-red-500"><a href="#">Offer</a></li>
                <li className=" hover:text-red-500"><a href="#">Events</a></li>
                <li className=" hover:text-red-500"><a href="#">Contact</a></li>
            </ul>
            <div className="flex ms-24 ml-3 align-middle justify-center w-[350px]" >
                <button className="text-lg font-semibold text-black bg-[#ff7c11] w-28 h-12 rounded-xl justify-center flex items-center hover:bg-[#ff9845] ml-auto shadow-md xl shadow-black">Log In</button>
                <div className="search leading-10 flex ml-3">
                    <input type="text" placeholder="Search..." className="input p-2 h-12  text-black"/>
                    <button className="btn flex items-center text-black justify-center " onClick={searchOnclick}>
                    <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>
        </nav>
        </div>
      
        </>
    )
}