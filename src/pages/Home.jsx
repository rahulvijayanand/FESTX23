import React, { useState, useEffect } from 'react'
import Typed from "react-typed";
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/festxlogo.png"
import SSEC from "../assets/ssec.webp"
import CSBS from "../assets/csbslogo.png"
import FESTX from "../assets/festx.png"

const Home = () => {
  function Countdown() {
    const [countdown, setCountdown] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });

    useEffect(() => {
      const countdownDate = new Date("2023-03-16").getTime();

      const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown({
          days: days < 10 ? `0${days}` : days,
          hours: hours < 10 ? `0${hours}` : hours,
          minutes: minutes < 10 ? `0${minutes}` : minutes,
          seconds: seconds < 10 ? `0${seconds}` : seconds,
        });
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    return (
      <div>
        <div className="flex flex-row items-stretch font-bold justify-center text-4xl md:text-3xl lg:text-8xl ">
          <span className="text-cyan-400">{countdown.days}</span>&nbsp;:&nbsp;
          <span className="">{countdown.hours}</span>&nbsp;:&nbsp;
          <span className="text-cyan-400">{countdown.minutes}</span>
          &nbsp;:&nbsp;
          <span className="">{countdown.seconds}</span>
        </div>
      </div>
    );
  }

  const navigate = useNavigate();
  const eventpage = () => { navigate("/events"); window.scrollTo(0, 0) }
  return (
    <div className="text-white">
      <div className="max-w-[1920px] pt-40 w-full h-full mx-auto text-center flex flex-col justify-center space-y-0">
        <p className='font-bold p-2 lg:text-3xl md:text-3xl sm:text-2xl '>SRI SAIRAM ENGINEERING COLLEGE</p>
        <p className='font-bold p-2 lg:text-3xl md:text-3xl sm:text-2xl '>DEPARTMENT OF COMPUTER SCIENCE AND BUSINESS SYSTEMS<br /><br />SAI TECHNOPHILIA<br /><br />PRESENTS</p>
        <img src={FESTX} alt="festx" className='mx-auto w-[300px] md:w-[550px] lg:w-[700px] py-10' />
        <Typed className='font-bold p-2 md:text-3xl lg:text-3xl sm:text-2xl' strings={["Let's Code Business"]} typeSpeed={40} backSpeed={80} loop />
        <p className='font-bold p-2 md:text-3xl lg:text-3xl sm:text-2xl'>16th - 17th</p>
        <p className='font-bold p-2 md:text-3xl lg:text-3xl sm:text-2xl'>March</p><br />
        <button
          onClick={eventpage}
          className="uppercase bg-gradient-to-br from-[#5304BD] to-[#5304BD] w-[300px] hover:shadow-[0px_0px_10px] rounded-md font-medium lg:text-3xl sm:text-2xl md:text-3xl my-6 mx-auto py-3"
        >
          register now!
        </button>
      </div>
      <div className="pt-20 text-8xl w-full mx-auto justify-center items-center flex">
            <Countdown />
          </div>
      <div className="w-full pt-10">
        <div className="flex flex-col lg:flex-row items-center gap-2 max-w-7xl mx-auto prose dark:prose-dark text-justify p-4">
          <img
            className="xl:mt-20 2xl:mt-16 h-[250px] lg:mt-32 sm:h-[250px] rounded-2xl mx-auto my-4"
            src={Logo}
            alt="/"
          />
          <div className="xl:col-span-2 flex flex-col justify-center">

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

      <div className="w-full">
        <div className="flex flex-col lg:flex-row items-center gap-2 max-w-7xl mx-auto prose dark:prose-dark text-justify p-4">
          <div className="xl:col-span-2 flex flex-col justify-center">
            <div className="block lg:hidden lg:pt-52">
              <img
                src={SSEC}
                alt="sseclogo"
                className="xl:mt-20 w-[250px] 2xl:mt-16 h-[250px] lg:mt-32 rounded-2xl mx-auto my-4"
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
              className="lg:w-[1100px] h-[250px] md:w-[1500px] rounded-2xl mx-auto my-4"
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
            className="xl:mt-20 w-[250px] 2xl:mt-16 h-[250px] lg:mt-32 rounded-2xl mx-auto my-4"
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
  )
}

export default Home