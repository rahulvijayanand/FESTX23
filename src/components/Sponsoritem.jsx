import React from "react";

const Sponsoritem = (props) => {
  return (
    <div className="text-white">
      <div className="flex flex-col w-[250px] h-[250px]  my-10 mx-auto">
        <img
          src={props.img}
          alt={props.alt}
          className="h-[400px] w-[400px] rounded-full"
        />
      </div>
    </div>
  );
};

export default Sponsoritem;
