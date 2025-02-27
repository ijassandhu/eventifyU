import React from "react";
import { Instagram } from "lucide-react";
import Navbar from "./navbar";

const clubs = [
  {
    imgSrc: "/photos/SPORTS.jpg",
    name: "Tech-Amigos Club",
    instaAccount: "https://www.instagram.com/tech_amigos_club/",
  },
  {
    imgSrc: "/photos/SPORTS.jpg",
    name: "Artistia Club",
    instaAccount: "https://www.instagram.com/artistia_club/",
  },
  {
    imgSrc: "/photos/SPORTS.jpg",
    name: "Pheonix Club",
    instaAccount: "https://www.instagram.com/pheonix_club/",
  },
  {
    imgSrc: "/photos/SPORTS.jpg",
    name: "Pixel Club",
    instaAccount: "https://www.instagram.com/pixel_club/",
  },
  {
    imgSrc: "/photos/SPORTS.jpg",
    name: "Rangmanch Club",
    instaAccount: "https://www.instagram.com/rangmanch_club/",
  },
  {
    imgSrc: "/photos/SPORTS.jpg",
    name: "Eco Minions Club",
    instaAccount: "https://www.instagram.com/eco_minions_club/",
  },
  {
    imgSrc: "/photos/SPORTS.jpg",
    name: "Virasat Club",
    instaAccount: "https://www.instagram.com/virasat_club/",
  },
  {
    imgSrc: "/photos/SPORTS.jpg",
    name: "Champions Club",
    instaAccount: "https://www.instagram.com/champions_club/",
  },
  {
    imgSrc: "/photos/SPORTS.jpg",
    name: "The Flaming Desire",
    instaAccount: "https://www.instagram.com/flaming_desire_club/",
  },
  {
    imgSrc: "/photos/SPORTS.jpg",
    name: "Prayas Club",
    instaAccount: "https://www.instagram.com/prayas_club/",
  },
];

const dswInstaAccount = "https://www.instagram.com/dsw_college/";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#2b2b2b] text-white min-h-screen p-8 pt-28">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-xl mb-10 text-center">
          Connect with our clubs on Instagram!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {clubs.map((club, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#222] p-6 rounded-xl shadow-lg"
            >
              <img
                src={club.imgSrc}
                alt={club.name}
                className="w-32 h-32 rounded-full mb-4"
              />
              <h2 className="text-2xl font-semibold mb-2">{club.name}</h2>
              <a
                href={club.instaAccount}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#99EA73] flex items-center space-x-2 text-lg hover:underline"
              >
                <Instagram />
                <span>Follow us on Instagram</span>
              </a>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <h2 className="text-2xl font-semibold mb-2">DSW Instagram</h2>
          <a
            href={dswInstaAccount}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#99EA73] flex justify-center items-center space-x-2 text-lg hover:underline"
          >
            <Instagram />
            <span>Follow DSW on Instagram</span>
          </a>
        </div>
      </div>
      <div className="copyright bg-[#222] h-10 w-[100%] hidden md:flex md:justify-center">
        <p className="text-white text-center justify-center p-2">
          &copy; 2024 All rights reserved
        </p>
      </div>
    </>
  );
};

export default Contact;
