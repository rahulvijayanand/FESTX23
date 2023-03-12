import React, { useState } from "react";
import TabBar from "../components/TabBar";
import PTI from "../assets/PTI.png";
import Calendar from "../assets/calendar.png";

const tabs = [
  {
    label: "Details",
    value: "tab1",
    content: (
      <table className="border-collapse text-xl lg:text-2xl px-4 py-2 lg:px-8 lg:py-4 text-left">
        <thead>
          <tr>
            <th className="px-10 py-5">Mode</th>
            <th className="px-10 py-5">Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-10 py-5">Offline</td>
            <td className="px-10 py-5">10:00 AM - 12:00 PM</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    label: "Rules",
    value: "tab2",
    content: (
<<<<<<< HEAD
      <div class="p-4">
        <ul class="list-disc text-xl lg:text-2xl text-justify p-4 leading-loose">
          <li class="break-words">
=======
      <div className="p-4">
        <ul className="list-disc text-xl lg:text-2xl text-justify p-4 leading-loose">
          <li className="break-words">
>>>>>>> 0d40edc6388ef154b7968f67fbec1e995147d15f
            A perfect setup of innovators is present to whom teams have to
            showcase their expertise and understanding into building innovative
            solutions.
          </li>
<<<<<<< HEAD
          <li class="break-words">
            Proposal attracts innovation oriented tech driven Investors.
          </li>
          <li class="break-words">
            The team can nurture the idea and help it grow towards designing.
          </li>
          <li class="break-words">
=======
          <li className="break-words">
            Proposal attracts innovation oriented tech driven Investors.
          </li>
          <li className="break-words">
            The team can nurture the idea and help it grow towards designing.
          </li>
          <li className="break-words">
>>>>>>> 0d40edc6388ef154b7968f67fbec1e995147d15f
            Investors can generate ample ideas through proposals generating
            innovative thoughts from the attendees which later can also be
            nurtured and directly merged with the existing product line.
          </li>
        </ul>
      </div>
    ),
  },
  {
    label: "Contact",
    value: "tab3",
    content: (
<<<<<<< HEAD
      <table class="border-collapse text-xl lg:text-2xl px-4 py-2 lg:px-8 lg:py-4 text-left">
        <tbody>
          <tr>
            <td class="px-10 py-2">Haribabu</td>
            <td class="px-10 py-2">
              <a
                href="tel:+91 86680 70272"
                rel="noopener noreferrer"
                class="underline"
              >
                +91 86680 70272
              </a>
            </td>
          </tr>
          <tr>
            <td class="px-10 py-2">Sree Lakshmi</td>
            <td class="px-10 py-2">
              <a
                href="tel:+91 70940 81674"
                rel="noopener noreferrer"
                class="underline"
              >
                +91 70940 81674
              </a>
            </td>
          </tr>
        </tbody>
      </table>
=======
      <div className="p-4">
        <ul className="list-disc text-xl lg:text-2xl p-4">
          <li>Avula Naga Sanjay - 89395 55757</li>
          <li>Pooja - 80723 41630</li>
        </ul>
      </div>
>>>>>>> 0d40edc6388ef154b7968f67fbec1e995147d15f
    ),
  },
];

const Pitchup = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].value);
  const activeContent = tabs.find((tab) => tab.value === activeTab)?.content;
  return (
<<<<<<< HEAD
    <div className="body3">
      <div className="text-white pt-36 sm:pt-20 md:pt-40 lg:pt-40 xl:pt-40 2xl:pt-40 pb-20 px-12 flex flex-col justify-center items-center mx-auto max-w-full">
=======
    <div>
      <div className="body3 text-white pt-36 sm:pt-20 md:pt-40 lg:pt-40 xl:pt-40 2xl:pt-40 pb-20 px-12 flex flex-col justify-center items-center mx-auto max-w-full">
>>>>>>> 0d40edc6388ef154b7968f67fbec1e995147d15f
        <h1 className="text-amber-400 font-bold text-center text-3xl lg:text-4xl">
          PROPOSE TO INVESTOR
        </h1>
        <br />
        <div className="flex flex-col lg:flex-row items-center max-w-7xl text-justify">
          <img
<<<<<<< HEAD
            className="h-[275px] sm:h-[350px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px] shadow-[0px_0px_40px] shadow-purple-500 mx-auto object-cover rounded-lg"
=======
            className="h-[150px] sm:h-[200px] md:h-[350px] lg:h-[300px] xl:h-[400px] 2xl:h-[500px] shadow-[0px_0px_40px] shadow-purple-500 mx-auto object-cover rounded-lg"
>>>>>>> 0d40edc6388ef154b7968f67fbec1e995147d15f
            src={PTI}
            alt="/"
          />

          <div className="xl:col-span-2 flex flex-col justify-center ">
            <p className="text-justify px-10 2xl:pr-auto lg:text-2xl md:text-3xl sm:text-xl mt-10">
              Ideate-Engage-innovate unique ideas from this platform that helps
              to brainstorm ideas into utile designs.
            </p>
            <div className="flex px-10 2xl:pr-auto">
              <img
<<<<<<< HEAD
                className="h-[30px] sm:h-[40px] md:h-[40px] lg:h-[50px] xl:h-[50px] 2xl:h-[50px] mt-8"
=======
                className="h-[40px] sm:h-[40px] md:h-[40px] lg:h-[50px] xl:h-[50px] 2xl:h-[50px] mt-8"
>>>>>>> 0d40edc6388ef154b7968f67fbec1e995147d15f
                src={Calendar}
                alt="/"
              />
              <p className="text-justify px-5 2xl:pr-auto lg:text-3xl md:text-3xl sm:text-3xl mt-10">
                17th March
              </p>
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      <div className="text-white pb-20 pt-20">
=======
      <div className="body-rest text-white pb-20 pt-20">
>>>>>>> 0d40edc6388ef154b7968f67fbec1e995147d15f
        <div className="flex-row justify-center items-center">
          <TabBar
            setActiveTab={setActiveTab}
            activeTab={activeTab}
            tabs={tabs}
          />
        </div>
        <div className="flex justify-center pt-10">{activeContent}</div>
        <div className="pt-10">
          <div className="uppercase bg-transparent border w-[150px] rounded-lg font-medium sm:text-2xl md:text-2xl mx-auto py-3 text-center hover:bg-purple-700">
            <a
              href="//forms.gle/dmdhQdMV3vJL1ezg7"
              target="_blank"
              rel="noopener noreferrer"
            >
              REGISTER
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pitchup;
