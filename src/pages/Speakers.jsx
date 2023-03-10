import React from "react";

import ZOHO from "../assets/rajalaksmi.jpeg";
import GOOGLE from "../assets/sundar.jpg";
import FB from "../assets/mark.webp";
import APPLE from "../assets/tim.jpg";
import AMAZON from "../assets/jeff.jpg";
import TESLA from "../assets/elon.jpeg";

import Speakeritem from "../components/Speakeritem";
const Speakers = () => {
  return (
    <div className="text-white mt-20 ">
      <h1 className="text-center py-5 text-6xl font-cinzel">SPEAKERS</h1>
      <div className="mt-20 sm:grid md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 px-10 gap-10  place-items-center">
        <Speakeritem
          img={ZOHO}
          name="RAJALAKSHMI SRINIVASAN"
          job="DIRECTOR - PRODUCT MANAGEMENT"
          comp="ZOHO"
          alt="boomer"
        />
        <Speakeritem
          img={GOOGLE}
          name="SUNDAR PICHAI"
          job="CHIEF EXECUTIVE OFFICER"
          comp="ALPHABET & GOOGLE"
          alt="boomer"
        />
        <Speakeritem
          img={FB}
          name="MARK ZUCKERBERG"
          job="CHIEF EXECUTIVE OFFICER"
          comp="FACEBOOK"
          alt="boomer"
        />
        <Speakeritem
          img={APPLE}
          name="TIM COOK"
          job="CHIEF EXECUTIVE OFFICER"
          comp="APPLE"
          alt="boomer"
        />
        <Speakeritem
          img={AMAZON}
          name="JEFF BEZOS"
          job="EXECUTIVE CHAIRMAN"
          comp="AMAZON"
          alt="boomer"
        />
        <Speakeritem
          img={TESLA}
          name="ELON MUSK"
          job="CHIEF EXECUTIVE OFFICER"
          comp="TWITTER"
          alt="boomer"
        />
            
      </div>
    </div>
  );
};

export default Speakers;
