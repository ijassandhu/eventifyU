export default function Navbar(){
    return(
        <>
        <div className="bg-[#222]">
        <nav className="flex bg-[#222] h-20 items-center hover:cursor-pointer transition: all 0.3s ease-in-out; ">
            <h1 className="text-white md:ml-[12%] text-2xl">eventifyU</h1>
            <ul className="flex flex-row ml-[50%] space-x-8 text-lg text-white">
                <li className=" hover:text-red-500"><a href="#">Home</a></li>
                <li className=" hover:text-red-500"><a href="#">About</a></li>
                <li className=" hover:text-red-500"><a href="#">Offer</a></li>
                <li className=" hover:text-red-500"><a href="#">Events</a></li>
                <li className=" hover:text-red-500"><a href="#">Contact</a></li>
            </ul>
        </nav>
        </div>
      
        </>
    )
}