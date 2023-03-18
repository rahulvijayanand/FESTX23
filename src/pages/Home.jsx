import React from "react";
import Typed from "react-typed";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/festxlogo.png";
import SSEC from "../assets/ssec.png";
import CSBS from "../assets/csbslogo.png";
import FESTX from "../assets/festx.png";

const Home = () => {
  function Countdown() {
    return (
      <div>
        <div className="flex flex-row items-stretch justify-center text-4xl md:text-3xl lg:text-8xl ">
          <span className="text-violet-700">00</span>&nbsp;:&nbsp;
          <span className="">00</span>&nbsp;:&nbsp;
          <span className="text-violet-700">00</span>
          &nbsp;:&nbsp;
          <span className="">00</span>
        </div>
      </div>
    );
  }

  const navigate = useNavigate();
  const eventpage = () => {
    navigate("/events");
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div className="body flex flex-col">
        <div className="text-white">
          <div className="max-w-[1920px] pb-20 pt-40 w-full h-full mx-auto text-center flex flex-col justify-center space-y-2">
            <p className="font-bold p-2 lg:text-3xl md:text-3xl sm:text-2xl">
              SRI SAIRAM ENGINEERING COLLEGE
            </p>
            <p className="font-bold p-2 lg:text-3xl md:text-3xl sm:text-2xl ">
              DEPARTMENT OF COMPUTER SCIENCE AND BUSINESS SYSTEMS
              <br />
              <br />
              SAI TECHNOPHILIA
              <br />
              <br />
              PRESENTS
            </p>
            <img
              src={FESTX}
              alt="festx"
              className="mx-auto w-[250px] md:w-[550px] lg:w-[700px] py-10 pointer-events-none"
            />
            <Typed
              className="p-2 md:text-3xl lg:text-3xl sm:text-2xl font-weight:100"
              strings={["Let's Code Business"]}
              typeSpeed={40}
              backSpeed={80}
              loop
            />
            <p className="font-bold p-2 md:text-3xl lg:text-3xl sm:text-2xl">
              March 16 - 17th
            </p>
            <p className="font-bold p-2 md:text-3xl lg:text-3xl sm:text-2xl"></p>
            <br />
            <button
              onClick={eventpage}
              className="uppercase bg-gradient-to-br from-[#5304BD] to-[#5304BD] w-[250px] lg:w-[300px] hover:shadow-[0px_0px_10px] rounded-md font-medium lg:text-3xl sm:text-2xl md:text-3xl my-6 mx-auto py-3"
            >
              register now!
            </button>
          </div>
        </div>
      </div>
      <div className="body-rest pb-20">
        <div className="text-white">
          <div className="pt-20 text-8xl w-full mx-auto justify-center items-center flex">
            <Countdown />
          </div>
          <div className="w-full pt-10">
            <div className="flex flex-col lg:flex-row items-center gap-2 max-w-7xl mx-auto prose dark:prose-dark text-justify p-4">
              <img
                className="xl:mt-20 2xl:mt-16 h-[250px] lg:mt-32 sm:h-[250px] rounded-2xl mx-auto my-4 pointer-events-none"
                src={Logo}
                alt="/"
              />
              <div className="xl:col-span-2 flex flex-col justify-center">
                {/*<h1 className="px-10 lg:text-4xl md:text-4xl my-5 sm:text-3xl font-bold py-2">
                  ABOUT FESTX
  </h1>*/}
                <p className="text-justify 2xl:pr-auto px-10 lg:text-2xl lg:mt-20 md:text-xl sm:text-1xl mt-10">
                  FESTX is an annual symposium hosted by the Department of
                  Computer Science and Business Systems of Sri Sairam
                  Engineering College to promote the spirit of Entrepreneurship
                  and to explore the latest tech trends. FESTX'23 is a two day
                  programme hosted by the Department of Computer Science and
                  Business Systems which has 7 unique inter-collegiate events.
                </p>
              </div>
            </div>
          </div>
          {/*<div className='w-full py-16 '>
        <h1 className='text-center lg:text-5xl md:text-4xl sm:text-3xl font-bold py-2'>For Queries, Contact</h1>
        <div className='max-w-[1620px] mx-auto  grid md:grid-cols-1'>
          <p className='w-[500px] mx-auto my-4 md:text-center lg:text-3xl sm:text-center md:text-2xl sm:text-1xl'>AJAI K : +91 89256 310749</p>
          <p className='w-[500px] mx-auto my-4 md:text-center lg:text-3xl sm:text-center md:text-2xl sm:text-1xl'>LOKESWARI S : +91 73391 12232</p>
        </div>
        </div>
          <br />
          <br />
          <br />
  */}
          <div className="w-full">
            <div className="flex flex-col lg:flex-row items-center gap-2 max-w-7xl mx-auto prose dark:prose-dark text-justify p-4">
              <div className="xl:col-span-2 flex flex-col justify-center">
                <div className="block lg:hidden lg:pt-52">
                  <img
                    src={SSEC}
                    alt="sseclogo"
                    className="xl:mt-20 w-[250px] 2xl:mt-16 h-[250px] lg:mt-32 rounded-2xl mx-auto my-4 pointer-events-none"
                  />
                </div>
                <p className="text-justify 2xl:pr-auto px-10 lg:text-2xl md:text-xl sm:text-1xl mt-10">
                  Sri Sairam Engineering College, Chennai, established in the
                  year 1995 by MJF.Ln.Leo Muthu, Chairman of Sapthagiri
                  Educational Trust, is a non-profitable and a non-minority
                  institution. A well-defined vision, highly committed mission
                  and a dedicated leadership facilitate Sri Sairam Engineering
                  College to be in the best of educational institutions in the
                  country. The institution is affiliated to Anna University and
                  approved by the All India Council for Technical Education
                  (AICTE), New Delhi.
                </p>
              </div>
              <div className="hidden lg:block">
                <img
                  className="lg:w-[1100px] h-[250px] md:w-[1500px] rounded-2xl mx-auto my-4 pointer-events-none"
                  src={SSEC}
                  alt="/"
                />
              </div>
            </div>
          </div>

          <br />
          <div className="w-full">
            <div className="flex flex-col lg:flex-row items-center gap-2 max-w-7xl mx-auto prose dark:prose-dark text-justify p-4">
              <img
                className="xl:mt-20 w-[250px] 2xl:mt-16 h-[250px] lg:mt-32 rounded-2xl mx-auto my-4 pointer-events-none"
                src={CSBS}
                alt="/"
              />
              <div className="xl:col-span-2 flex flex-col justify-center ">
                <p className=" text-justify px-10 2xl:pr-auto lg:text-2xl md:text-xl sm:text-1xl mt-10">
                  CSBS is a steadily growing department and is gaining
                  popularity among students and parents likewise as Candidates
                  from this field play a vital role in software development and
                  possess the appropriate managerial skills,which will unlock a
                  lot of career opportunities such as being a consultant and
                  much more.It is curated to create business engineers that
                  ensures their futuristic and holistic development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
