import React from "react";
import { useNavigate } from "react-router-dom";

export default function EventItem(props) {
  const navigate = useNavigate();

  return (
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
        <p className="bg-transparent w-full text-white mt-10 font-semibold text-xl md:text-xl border-2  w-40 md:w-44 h-12 hover:text-white hover:bg-violet-700 py-2 px-4 rounded">
          VIEW DETAILS
        </p>
      </div>
    </button>
  );
}
