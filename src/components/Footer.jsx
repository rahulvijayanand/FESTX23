import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="body-rest">
      <div className="w-full bg-black-200 text-white py-y px-2 flex flex-row">
        <div className="sm:grid gird-cols-1 m-auto gap-4 sm:space-y-[5px] py-3 lg:flex flex-row lg:m-auto place-items-center lg:space-x-[70px]">
          <div className="sm:flex flex gap-10 flex-row sm:space-x-[25px] sm:pt-2 lg:space-x-[30px] lg:pt-2">
            <a href="https://www.linkedin.com/in/sairam-computer-science-and-business-systems-sri-sairam-engineering-college-ab6a56219/">
              <FaLinkedin className="text-2xl hover:text-blue-500 transition duration-300" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100071747393470">
              <FaFacebook className="text-2xl hover:text-blue-700 transition duration-300" />
            </a>
            <a href="https://instagram.com/sairam_csbs?igshid=YmMyMTA2M2Y=">
              <FaInstagram className="text-2xl hover:text-pink-500 transition duration-300" />
            </a>
            <a href="https://twitter.com/CsbsSec?s=20&t=T7yzxPgu3-7bnBsK4XEjBw">
              <FaTwitter className="text-2xl hover:text-cyan-400 transition duration-300" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full text-white flex flex-row justify-center items-center text-lg pb-5 pt-2">
        © 2023-2024 DEPT OF CSBS
      </div>
    </div>
  );
};

export default Footer;
