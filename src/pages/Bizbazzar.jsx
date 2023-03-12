import React, { useState } from "react";
import TabBar from "../components/TabBar";
import BIB from "../assets/BIB.png";
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
            <td className="px-10">Offline</td>
            <td className="px-10">8:50 AM</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    label: "Rules",
    value: "tab2",
    content: (
      <div class="p-4">
        <ul class="list-disc text-xl lg:text-2xl text-justify p-4 leading-loose">
          <li class="break-words">
            Pre-seed, seed-stage or early-stage startups are allowed to apply.
          </li>
          <li class="break-words">
            Ideation - stage startups are eligible to register.
          </li>
          <li class="break-words">
            MVP (Minimum Viable Product) is a must showcase the start-up.
          </li>
        </ul>
      </div>
    ),
  },
  {
    label: "Contact",
    value: "tab3",
    content: (
      <table class="border-collapse text-xl lg:text-2xl px-4 py-2 lg:px-8 lg:py-4 text-left">
        <tbody>
          <tr>
            <td class="px-10 py-2">Avula Naga Sanjay</td>
            <td class="px-10 py-2">
              <a
                href="tel:+91 89395 55757"
                rel="noopener noreferrer"
                class="underline"
              >
                +91 89395 55757
              </a>
            </td>
          </tr>
          <tr>
            <td class="px-10 py-2">Pooja</td>
            <td class="px-10 py-2">
              <a
                href="tel:+91 80723 41630"
                rel="noopener noreferrer"
                class="underline"
              >
                +91 80723 41630
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
];

const Bizbazzar = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].value);
  const activeContent = tabs.find((tab) => tab.value === activeTab)?.content;
  return (
    <div className="body3">
      <div className="text-white pt-36 sm:pt-20 md:pt-40 lg:pt-40 xl:pt-40 2xl:pt-40 pb-20 px-12 flex flex-col justify-center items-center mx-auto max-w-full">
        <h1 className="text-amber-400 font-bold text-center text-3xl lg:text-4xl">
          BIZ BAZZAR
        </h1>
        <br />
        <div className="flex flex-col lg:flex-row items-center max-w-7xl text-justify">
          <img
            className="h-[310px] sm:h-[350px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px] shadow-[0px_0px_40px] shadow-purple-500 mx-auto object-cover rounded-lg pointer-events-none"
            src={BIB}
            alt="/"
          />

          <div className="xl:col-span-2 flex flex-col justify-center ">
            <p className="text-justify px-10 2xl:pr-auto lg:text-2xl md:text-3xl sm:text-xl mt-10">
              Startup Expo is a great opportunity for startups to solicit
              mentorship and funding from investors and facilitators and present
              their products and services. This event will feature startups
              across a wide range of sectors, particularly those with founders
              running them at an early stage. The event provides an amazing
              platform for startups to showcase their innovative products to the
              rest of the world and connect them to a community that will help
              propel their growth.
            </p>
            <div className="flex px-10 2xl:pr-auto">
              <img
                className="h-[30px] sm:h-[40px] md:h-[40px] lg:h-[50px] xl:h-[50px] 2xl:h-[50px] mt-8"
                src={Calendar}
                alt="/"
              />
              <p className="text-justify px-5 2xl:pr-auto lg:text-3xl md:text-3xl sm:text-3xl mt-10">
                16-17th March
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white pb-20 pt-20">
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

export default Bizbazzar;
