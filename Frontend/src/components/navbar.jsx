import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import Login from "./Login.jsx";
import Signup from "./signup.jsx";
import dummy from "/photos/dummy.png";

const Navbar = () => {
  const [active, setActive] = useState(false);
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

  const [isLoggedIn, setLoggedIn] = useState(false);
  // const user = { name: "Jaskeerat" };

  return (
    <div>
      <nav className="flex bg-[#222] md:h-20 h-16 items-center fixed top-0 w-[100vw] z-10 px-4 md:px-0 shadow-lg shadow-[#99EA73]/30">
        <div className="text-[#99EA73] text-2xl flex absolute md:left-20">
          <h1 className="hover:text-white transition-colors duration-300">
            event
          </h1>
          <h1 className="text-white hover:text-[#99EA73] transition-colors duration-300">
            ifyU
          </h1>
        </div>
        <ul className="md:flex md:flex-row space-x-14 md:space-x-9 text-lg sm:text-md text-white hidden absolute left-2/4 -translate-x-2/4">
          {["/", "/events", "/dashboard", "/clubs", "/feedback"].map(
            (path, index) => (
              <li
                key={index}
                className={`hover:text-[#99EA73] transition-colors duration-300 ${
                  location.pathname.split("/").slice(0, 2).join("/") === path
                    ? "text-[#99EA73]"
                    : ""
                }`}
              >
                <Link to={path}>
                  {path === "/"
                    ? "Home"
                    : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                </Link>
              </li>
            )
          )}
        </ul>
        {isLoggedIn ? (
          <div className="flex gap-4 right-5 absolute md:right-20">
            <button
              onClick={() => setShowModal(true)}
              className="md:text-lg text-sm font-semibold text-[#99EA73] md:w-28 md:h-12 rounded-xl flex items-center justify-center border border-[#99EA73] hover:shadow-black transition-all duration-300 w-16 h-9 shadow-md shadow-[#99EA73]"
            >
              Sign In
            </button>
            {showModal && (
              <Login
                onClose={() => setShowModal(false)}
                toggleModal={toggleModal}
              />
            )}
            <button
              onClick={() => setShowModal2(true)}
              className="md:text-lg text-sm font-semibold text-black bg-[#99EA73] md:w-28 md:h-12 rounded-xl flex items-center justify-center hover:bg-[#75ff35] transition-all duration-300 w-16 h-9 shadow-md shadow-black"
            >
              Sign Up
            </button>
            {showModal2 && (
              <Signup
                onClose={() => setShowModal2(false)}
                toggleModal={toggleModal}
              />
            )}
          </div>
        ) : (
          <div className="flex items-center absolute right-5 md:right-20">
            {/* <h1 className="hidden md:block text-white text-sm md:text-xl">Hello! {user.name}</h1> */}
            <div>
              {location.pathname === "/clubs" ||
              location.pathname === "/events" ? (
                <>
                  <div>
                    <div
                      className={`relative h-12 ${
                        active ? "w-56" : "w-12"
                      } transition-all duration-300`}
                    >
                      <input
                        type="text"
                        className={`bg-white border-0 text-lg p-3 h-full rounded-full 
          ${active ? "w-full pl-12" : "w-0"} 
          transition-all duration-300 ease-in-out focus:outline-none`}
                        placeholder="Search..."
                      />
                      <button
                        className="absolute top-0 left-0 w-12 h-12 bg-white rounded-full text-xl flex justify-center items-center 
          transition-transform duration-300 ease-in-out"
                        onClick={() => setActive(!active)}
                      >
                        <Search />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>

            <div className="relative group md:pl-4">
              <img
                src={dummy}
                alt="User Avatar"
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-[#99EA73] transition-transform duration-300 transform group-hover:scale-110"
              />
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
