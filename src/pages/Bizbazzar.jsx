import React from 'react'

import EventDetails from '../components/EventDetails'

const Bizbazzar = () => {
  return (
    <div  className="bg-black text-white p-4">
      <EventDetails title="The Web Slasher" description="Every web dev aspires to make a polished website but they all end up
        straying towards unethical features. We aim to bring awareness towards
        these unethical and annoying features web devs implement." details="Submit the website via email on or before 09-02-2023" type="Online" teamsize="Individual (1)" deadline="09-02-2023"/>
    </div>
  )
}

export default Bizbazzar