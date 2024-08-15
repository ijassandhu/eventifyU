import SPORTS from "/photos/SPORTS.jpg";
import SCIENCEDAY from "/photos/SCIENCEDAY.jpg";
import PARIVARTAN from "/photos/PARIVARTAN.jpg";
import img from "/photos/img.svg";
import Footer from "./footer";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import Footericons from "./footericons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AutoType from "./autotype";
import BoxReveal from "./boxreveal";
import WordPullUp from "./wordpullup";

const data = [
  {
    img: `/photos/dummy.png`,
    name: `Tech Amigos`,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet laboriosam corporis dicta maxime nulla? Numquam quas illum aut sit architecto?`,
  },
  {
    img: `/photos/dummy.png`,
    name: `Pheonix club`,
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi facilis odit asperiores sunt quod delectus ut voluptate! Aspernatur, alias animi.`,
  },
  {
    img: `/photos/dummy.png`,
    name: `Virasat Club`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quae voluptate labore, quod delectus doloribus sint voluptas quasi iure aliquam!`,
  },
  {
    img: `/photos/dummy.png`,
    name: `Pixel Club`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sit nostrum velit sequi similique nemo minima non sint consectetur id.`,
  },
  {
    img: `/photos/dummy.png`,
    name: `Flaming Club`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aperiam quod ipsa possimus ipsum eum accusamus mollitia nihil necessitatibus nam.`,
  },
  {
    img: `/photos/dummy.png`,
    name: `Rangmanch`,
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. At possimus illum eaque. Excepturi quos officia saepe voluptatum, obcaecati explicabo corporis?`,
  },
  {
    img: `/photos/dummy.png`,
    name: `Artistia Club`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloribus sequi eos provident ducimus? Iure ex nostrum recusandae repudiandae et?`,
  },
];

function Body() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Medium screens
        settings: {
          slidesToShow: 2, // Show 2 slides on medium screens
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480, // Small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Navbar />

      <div className="hero-section" id="home">
        <div className="hero-section1 flex flex-col md:flex-row gap-8 p-4 md:mt-20 mt-16 relative">
          <div className="md:w-[50%] md:p-12 flex flex-col text-center  pt-20 md:pt-28">
            <BoxReveal
              width="100%"
              height="auto"
              boxColor="#99EA73"
              duration={1}
            >
              <div>
                <h1 className="text-white text-2xl md:text-5xl font-bold">
                  Welcome to Chandigarh Group of Colleges Events Hub.
                </h1>
                <p className="text-white text-xl md:text-2xl mt-4">
                  Discover and join the latest college events!
                </p>
              </div>
            </BoxReveal>
            {/* <WordPullUp
              words="Welcome to Chandigarh Group of Colleges Events Hub."
              wrapperFramerProps={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
              framerProps={{
                hidden: { y: 20, opacity: 0 },
                show: { y: 0, opacity: 1 },
              }}
              className="text-white text-3xl md:text-2xl lg:text-3xl font-bold"
            /> */}

            <h2 className="text-xl md:text-2xl text-[#e6e6e6] mt-4 md:mt-8 lg:mt-12 font-medium px-8 md:px-2">
              <AutoType />
            </h2>
          </div>
          <div className="flex justify-center md:justify-start pt-16 md:pt-32">
            <img
              src={img}
              alt="Event Illustration"
              className="h-[180px] md:h-[360px] lg:h-[480px] rounded-2xl hover:h-[500px] duration-500"
            />
          </div>
        </div>

        <div className="hero-section2">
          <div className="mt-16 px-4">
            <h1 className="text-3xl md:text-5xl text-center my-2 font-normal text-black">
              Discover Upcoming Events
            </h1>
            <p className="p-4 md:p-14 text-base md:text-xl text-center">
              "Welcome to the Chandigarh Group of Colleges Events Portal, your
              ultimate destination for all things happening on campus. Discover
              upcoming events, explore past highlights, and connect with the
              vibrant clubs that make our college community thrive. Whether
              you’re looking to join a new club, attend an exciting event, or
              stay updated with the latest happenings, our platform is here to
              keep you informed and engaged. Join us in celebrating the spirit
              of our college and making every moment count!"
            </p>
          </div>

          <div className="clubsContainer flex flex-wrap justify-around gap-6 md:gap-10 mb-10 px-4">
            <div className="h-[35vh] w-[70vw] md:h-[45vh] md:w-[25vw] rounded-xl flex justify-center items-center">
              <Link to={"/events"}>
                <img
                  src={PARIVARTAN}
                  alt="Parivartan Event"
                  className="rounded-xl hover:shadow-2xl"
                />
              </Link>
            </div>
            <div className="h-[35vh] w-[70vw] md:h-[45vh] md:w-[25vw] rounded-xl flex justify-center items-center">
              <Link to={"/events"}>
                <img
                  src={SPORTS}
                  alt="Sports Event"
                  className="object-cover rounded-xl hover:shadow-2xl"
                />
              </Link>
            </div>
            <div className="h-[35vh] w-[70vw] md:h-[45vh] md:w-[25vw] rounded-xl flex justify-center items-center overflow-hidden hover:shadow-2xl">
              <Link to={"/events"}>
                <img
                  src={SCIENCEDAY}
                  alt="Science Day Event"
                  className="rounded-xl hover:shadow-2xl"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-[#2b2b2b] pt-12 pb-28">
          <h1 className="text-3xl md:text-5xl text-center pb-6 text-white">
            About Us
          </h1>
          <div className="text-center px-6 md:px-28 text-white">
            <h2 className="text-xl md:text-3xl">
              Department of Student Welfare
            </h2>
            <p className="text-base md:text-xl pt-4 md:pt-8 text-[#bcb5b5]">
              The Department of Student Welfare (DSW) is the department that
              works for the student welfare. To make college life of students
              more valuable, educative, and enjoyable, it organizes various
              events in the college, handles the grievances, and much more. DSW
              has 8 clubs under it which handle various areas during
              competitions, festivals, and events. DSW has classified them for
              the interest of students to nurture their growth process.
            </p>
          </div>

          <div className="w-3/4 m-auto">
            <div className="mt-20">
              <Slider {...settings}>
                {data.map((d, index) => (
                  <div
                    key={index}
                    className="bg-[#fff4f4] h-[500px] text-black rounded-xl"
                  >
                    <div className="h-56 rounded-t-xl bg-[#262626] flex justify-center items-center">
                      <img
                        src={d.img}
                        alt={`${d.name} Club`}
                        className="h-44 w-44 rounded-full"
                      />
                    </div>

                    <div className="flex flex-col justify-center items-center gap-4 px-4">
                      <p className="text-xl font-semibold">{d.name}</p>
                      <p>{d.description}</p>
                      <button className="bg-[#99EA73] text-lg px-6 py-1 rounded-xl h-12">
                        <Link to="/clubs">Read More</Link>
                      </button>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <Footericons />
        </div>
        <div className="hidden md:flex">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Body;
