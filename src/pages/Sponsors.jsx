import React from 'react'
import Sponsoritem from '../components/Sponsoritem'

import AP from "../assets/apple.webp"
import AZ from "../assets/amazon.jpg"
import FB from "../assets/facebook.png"
import GG from "../assets/google.png"
import TW from "../assets/twitter.png"
import ZH from "../assets/zoho.png" 


const Sponsors = () => {
  return (
    <div className='text-white mt-20'>
      <h1 className='text-center py-5 text-6xl font-cinzel'>SPONSORS</h1>
      <div className="sm:grid md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 mt-20  gap-20">
      <Sponsoritem img={ZH} alt="boomer"/>
      <Sponsoritem img={GG} alt="boomer"/>
      <Sponsoritem img={FB} alt="boomer"/>
      <Sponsoritem img={AP} alt="boomer"/>
      <Sponsoritem img={AZ} alt="boomer"/>
      <Sponsoritem img={TW} alt="boomer"/>
    </div>
    </div>
  )
}

export default Sponsors