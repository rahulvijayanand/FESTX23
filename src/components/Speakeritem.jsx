import React from "react";

const Speakeritem = (props) => {
  return (
    <div className="text-white">
      <div className="flex flex-col w-[350px] h-[350px] md:h-[400px] md:w-[400px] border-4  my-10 ">
        <img src={props.img} alt={props.alt} />
      </div>
      <div className="text-center font-semibold text-2xl">
        <p>{props.name}</p>
        <p>{props.job}</p>
        <p>{props.comp}</p>
      </div>
    </div>
  );
};

export default Speakeritem;
