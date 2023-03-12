import React from "react";
import { ImMobile } from "react-icons/im";
import { FaUser } from "react-icons/fa";
const Contactitem = (props) => {
  return (
    <div className="pb-10 text-white">
      <div className="mx-auto flex flex-col h-[275px] w-[275px] md:h-[300px] md:w-[300px] hover:border shadow-[0px_0px_40px] hover:shadow-purple-400 bg-opacity-5 items-center bg-center">
        <h1 className="text-xl mt-5 md:mt-10 font-semibold">{props.heading}</h1>
        <div className="my-10 md:my-14 text-base leading-loose md:leading-loose ">
          <p className="flex flex-row items-center gap-5">
            <FaUser />
            {props.name1}
          </p>
          <p className="flex flex-row items-center gap-5">
            <ImMobile />
            <a
              href={`tel:${props.mob1}`}
              rel="noopener noreferrer"
              class="underline"
            >
              {props.mob1}
            </a>
          </p>
          <p className="flex flex-row items-center gap-5">
            <FaUser />
            {props.name2}
          </p>
          <p className="flex flex-row items-center gap-5">
            <ImMobile />
            <a
              href={`tel:${props.mob2}`}
              rel="noopener noreferrer"
              class="underline"
            >
              {props.mob2}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contactitem;
