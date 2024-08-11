import React from "react";
import Footericons from "./footericons";
import Navbar from "./navbar";
import { Link } from "react-router-dom";

const Clubs = () => {
  const clubs = [
    {
      imgSrc: "/photos/SPORTS.jpg",
      name: "Tech-Amigos Club",
      club_tag: "tech-amigos",
    },
    {
      imgSrc: "/photos/SPORTS.jpg",
      name: "Artistia Club",
      club_tag: "artistia-club",
    },
    {
      imgSrc: "/photos/SPORTS.jpg",
      name: "Pheonix Club",
      club_tag: "tech-amigos",
    },
    {
      imgSrc: "/photos/SPORTS.jpg",
      name: "Pixel Club",
      club_tag: "tech-amigos",
    },
    {
      imgSrc: "/photos/SPORTS.jpg",
      name: "Rangmanch Club",
      club_tag: "tech-amigos",
    },
    {
      imgSrc: "/photos/SPORTS.jpg",
      name: "Eco Minions Club",
      club_tag: "tech-amigos",
    },
    {
      imgSrc: "/photos/SPORTS.jpg",
      name: "Virasat Club",
      club_tag: "virasat",
    },
    {
      imgSrc: "/photos/SPORTS.jpg",
      name: "Champions Club",
      club_tag: "tech-amigos",
    },
    {
      imgSrc: "/photos/SPORTS.jpg",
      name: "The Flaming Desire",
      club_tag: "tech-amigos",
    },
    {
      imgSrc: "/photos/SPORTS.jpg",
      name: "Prayas Club",
      club_tag: "tech-amigos",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="background min-h-screen bg-[#2b2b2b] pt-16 md:pt-20 flex flex-col items-center pb-20 md:pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
          {clubs.map((club, index) => (
            <Link to={`/club/${club.club_tag}`}>
              <div
                key={index}
                className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl animate-fadeInUp"
              >
                <div className="relative">
                  <img
                    className="w-full h-48 object-cover"
                    src={club.imgSrc}
                    alt={club.name}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 flex">
                    <h2 className="text-lg font-semibold text-white bg-black bg-opacity-50 p-2 rounded">
                      {club.name}
                    </h2>
                  </div>
                </div>
                <div className="p-4 bg-[#1f1f1f]">
                  <p className="text-sm text-[#FFF]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="md:hidden">
        <Footericons />
      </div>
    </>
  );
};

export default Clubs;
