import React from 'react'
import {ImMobile} from "react-icons/im"
import {FaUser} from "react-icons/fa"
const Contactitem = (props) => {
  return (
    <div className='text-white'>
      <div className="mx-auto flex flex-col h-[300px] w-[300px] md:h-[400px] md:w-[400px] border shadow-[0px_0px_40px] shadow-cyan-400  my-10 items-center bg-center">
        <h1 className='text-xl md:text-3xl mt-10 font-semibold'>{props.heading}</h1>
        <div className='my-10 md:my-14 text-xl leading-loose md:text-2xl md:leading-loose '>
        <p className='flex flex-row items-center gap-5'><FaUser/>{props.name1}</p>
        <p className='flex flex-row items-center gap-5'><ImMobile/>{props.mob1}</p>
        <p className='flex flex-row items-center gap-5'><FaUser/>{props.name2}</p>
        <p className='flex flex-row items-center gap-5'><ImMobile/>{props.mob2}</p>
      </div>
      </div></div>
  )
}

export default Contactitem

