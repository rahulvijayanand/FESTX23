import React from "react";
import { useNavigate } from "react-router-dom";

export default function EventItem(props) {
  const navigate = useNavigate();

  return (
<<<<<<< HEAD
    <button
      onClick={() => {
        navigate(props.title3);
        window.scrollTo(0, 0);
      }}
    >
      <div className="flex flex-col w-[275px] h-[275px] md:h-[300px] md:w-[300px] hover:border shadow-[0px_0px_40px] hover:shadow-purple-400 p-5 mt-10 bg-transparent bg-cover	items-center ">
        <div className="flex flex-col items-center ">
          <p className="p-2 text-center text-xl md:text-2xl font-semibold">
            {props.title1}
          </p>
          <p className="text-white mt-7 md:mt-10 text-6xl md:text-7xl">
            {props.title2}
          </p>
        </div>
        <p className="bg-transparent w-full text-white mt-10 font-semibold text-xl md:text-xl  w-40 md:w-44 h-12 hover:text-white py-2 px-4  border-white-500 hover:border-transparent rounded">
          VIEW DETAILS
        </p>
      </div>
    </button>
=======
    <div className="flex flex-col w-[275px] h-[275px] md:h-[300px] md:w-[300px] border shadow-[0px_0px_40px] shadow-[#00ffff] p-5 mt-10 bg-transparent bg-cover	items-center ">
        <div className="flex flex-col items-center ">
      <p className="p-2 text-center text-xl md:text-2xl font-semibold">{props.title1}</p>
      <p className="text-white mt-7 md:mt-10 text-6xl md:text-7xl">{props.title2}</p></div>
      <button onClick={() => {navigate(props.title3);window.scrollTo(0,0)}} className="bg-transparent hover:bg-[#5304bd] text-white mt-10 font-semibold text-xl md:text-xl  w-40 md:w-44 h-12 hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded">
        View Details
      </button>
    </div>
>>>>>>> 0d40edc6388ef154b7968f67fbec1e995147d15f
  );
}
