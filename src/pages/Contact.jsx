import React from 'react'
import Contactitem from '../components/Contactitem'
const Contact = () => {
  return (
    <div className='text-white mt-20'>
      <h1 className='text-center py-5 text-4xl md:text-6xl font-cinzel'>CONTACT</h1>
      <div className="grid place-items-center lg:grid-cols-2 ">
        <Contactitem heading="Staff Co-Ordinators" name2="NIRMALA" mob2="+91 73973 73234" name1="NARESH KUMAR" mob1="+91 98416 53088"/>
        <Contactitem heading="Student Co-Ordinators" name2="AJAI" mob2="+91 89256 31079" name1="LOKESWARI" mob1="+91 73391 12232"/>
      </div>
      <h1 className='text-center mt-10 text-4xl'>EVENT CO-ORDINATORS</h1>
      <div className="sm:grid md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 p-5 gap-10 place-items-center">
        <Contactitem heading="HACKAHOLIC" name1="AVANTHIKA" mob1="+91 93443 43670" name2="SUJAN" mob2="+91 89393 41756"/>
        <Contactitem heading="BIZ BAZAAR" name1="AVULA NAGA SANJAY" mob1="+91 89395 55757" name2="POOJA" mob2="+91 99433 95924"/>
        <Contactitem heading="TECH TALE" name1="AFRIN RUQAYYAH FATHIMA" mob1="+91 70106 74056" name2="KAVIN PRABHAKAR" mob2="+91 75980 96947"/>
        <Contactitem heading="BLOODY BUGGERS" name1="KRISHNA KUMAR" mob1="+91 77080 77528" name2="HARITHAA" mob2="+91 99622 91235"/>
        <Contactitem heading="LIGHTS ON" name1="JAI VIGNESH" mob1="+91 88256 45904" name2="BALAJI" mob2="+91 86678 58430"/>
        <Contactitem heading="PITCH UP" name1="HARIBABU" mob1="+91 86680 70272" name2="SREE LAKSHMI" mob2="+91 70940 81674"/>
        <Contactitem heading="PARAGON QUEST" name1="SURETHA" mob1="+91 93602 51179" name2="DIVYESH" mob2="+91 89390 20427"/>
      </div>
    </div>
  )
}

export default Contact





