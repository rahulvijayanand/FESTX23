import React from 'react'
import Typed from "react-typed";
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/festxlogo.png"
import SSEC from "../assets/ssec.webp"
import CSBS from "../assets/csbslogo.jpg"


const Home = () => {
  const navigate=useNavigate();
  const eventpage = () => {navigate("/events")}
  return (
    <div className="text-white">
      <div className="max-w-[1920px] py-32 w-full h-full mx-auto text-center flex flex-col justify-center space-y-0">
        <p className='font-bold p-2 lg:text-4xl md:text-3xl sm:text-2xl '>SRI SAIRAM ENGINEERING COLLEGE</p>
        <p className='font-bold p-2 lg:text-4xl md:text-3xl sm:text-2xl '>DEPARTMENT OF COMPUTER SCIENCE AND BUSINESS SYSTEMS<br/><br/>SAI TECHNOPHILIA PRESENTS</p>
        <h1 className='md:text-7xl font-cinzel tracking-wider sm:text-6xl text-4xl font-bold md:py-6'>FESTX'23</h1>
        <Typed className='font-bold p-2 md:text-3xl lg:text-4xl sm:text-2xl' strings={["Let's Code Business"]} typeSpeed={40} backSpeed={80} loop/>
        <p className='font-bold p-2 md:text-3xl lg:text-4xl sm:text-2xl'>16th - 17th</p>
        <p className='font-bold p-2 md:text-3xl lg:text-4xl sm:text-2xl'>March</p><br/>
        <button onClick={eventpage} className='uppercase bg-gradient-to-br from-[#37D5D6] to-[#36096D] w-[300px] rounded-md font-medium lg:text-4xl sm:text-2xl md:text-3xl my-6 mx-auto py-3'>register now!</button>
      </div>
      <div className='w-full'>
        <div className='max-w-[1920px] grid lg:grid-cols-2'>
          <img className='w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] xl:mt-10 mx-auto my-4' src={Logo} alt="/" />
          <div className='flex flex-col justify-center'>
            <h1 className='px-10 lg:text-5xl md:text-4xl my-5 sm:text-3xl font-bold py-2'>ABOUT FESTX</h1>
            <p className='px-10 xl:pr-20 2xl:pr-0 lg:pr-0 text-justify lg:text-3xl md:text-2xl sm:text-1xl'>FESTX is an annual symposium hosted by the Department of Computer Science and 
            Business Systems of Sri Sairam Engineering College to promote the spirit of Entrepreneurship and to explore the latest tech trends. 
            FESTX'23 is a two day programme hosted by the Department of Computer Science and Business Systems which has 6 unique inter-collegiate events.
            </p>
          </div>
        </div>
      </div>
      <div className='w-full py-16'>
        <h1 className='text-center lg:text-5xl md:text-4xl sm:text-3xl font-bold py-2'>WHY FESTX?</h1>
        <div className='max-w-[1620px] mx-auto grid md:grid-cols-1'>
          <p className='xl:mx-auto sm:w-[500px] md:w-[768px] lg:w-[1200px] px-10 my-4 text-justify lg:text-3xl md:text-2xl sm:text-1xl'>Entrepreneurship with 
          computer based learning helps us to ideate path-breaking solutions and help start startups and make it a successful one.</p>
        </div>
      </div>
      {/* <div className='w-full py-16 '>
        <h1 className='text-center lg:text-5xl md:text-4xl sm:text-3xl font-bold py-2'>For Queries, Contact</h1>
        <div className='max-w-[1620px] mx-auto  grid md:grid-cols-1'>
          <p className='w-[500px] mx-auto my-4 md:text-center lg:text-3xl sm:text-center md:text-2xl sm:text-1xl'>AJAI K : +91 89256 310749</p>
          <p className='w-[500px] mx-auto my-4 md:text-center lg:text-3xl sm:text-center md:text-2xl sm:text-1xl'>LOKESWARI S : +91 73391 12232</p>
        </div>
      </div> */}
      <br/>
      <br/>
      <br/>
      <div className='w-full'>
        <div className='max-w-[1920px] grid lg:grid-cols-2'>
          <img className='xl:mt-24 w-[250px] 2xl:mt-10 h-[250px] sm:w-[350px] sm:h-[350px] rounded-2xl lg:mt-40 mx-auto my-4' src={SSEC} alt="/" />
          <div className='flex flex-col '>
            <h1 className='lg:text-5xl md:text-4xl px-10 my-5 sm:text-3xl font-bold py-2'>ABOUT SAIRAM</h1>
            <p className='text-justify 2xl:pr-0 px-10 lg:text-3xl md:text-2xl sm:text-1xl'>Sri Sairam Engineering College, Chennai, established in the year 1995 by 
            MJF.Ln.Leo Muthu, Chairman of Sapthagiri Educational Trust, is a non-profitable and a non-minority institution. A well-defined vision, 
            highly committed mission and a dedicated leadership facilitate Sri Sairam Engineering College to be in the best of educational institutions 
            in the country. The institution is affiliated to Anna University and approved by the All India Council for Technical Education (AICTE), 
            New Delhi.
            </p>
          </div>
        </div>
      </div>
      <br/>
      <div className='w-full'>
        <div className='max-w-[1920px] grid lg:grid-cols-2'>
          <img className='xl:mt-20 w-[250px] 2xl:mt-10 h-[250px] sm:w-[350px] sm:h-[350px] lg:mt-32 rounded-2xl mx-auto my-4' src={CSBS} alt="/" />
          <div className='flex flex-col 2xl:mt-10'>
            <h1 className='lg:text-5xl  px-10 md:text-4xl sm:text-3xl my-5 font-bold py-2'>ABOUT CSBS</h1>
            <p className=' text-justify px-10 2xl:pr-0 lg:text-3xl md:text-2xl sm:text-1xl'>CSBS is a steadily growing department and is gaining popularity among 
            students and parents likewise as Candidates from this field play a vital role in software development and possess the appropriate managerial 
            skills,which will unlock a lot of career opportunities such as being a consultant and much more.It is curated to create business engineers 
            that ensures their futuristic and holistic development.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home