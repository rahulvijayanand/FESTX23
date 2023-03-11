import React, { useState } from "react";
import TabBar from "../components/TabBar";
import LO from "../assets/LO.png";
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
            <td className="px-10 py-5">Online</td>
            <td className="px-10 py-5">8:50 AM</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    label: "Rules",
    value: "tab2",
    content: (
      <div className="p-4">
        <ul className="list-disc text-xl lg:text-2xl text-justify p-4 leading-loose">
          <li className="break-words">
            Length of the film should be minimum 5 mins and should not exceed 15
            mins.
          </li>
          <li className="break-words">
            The content in the film should not have any profanity or abuse.
          </li>
          <li className="break-words">
            The content should be original and should not have any copyright
            content.
          </li>
          <li className="break-words">
            Credits card of the film must be mentioned.
          </li>
          <li className="break-words">
            Prizes are given under three categories, Best actor/actress,
            BestDirector, Best Film.
          </li>
          <li className="break-words">
            Judges decision will be final and binding.
          </li>
        </ul>
      </div>
    ),
  },
  {
    label: "Contact",
    value: "tab3",
    content: (
      <div className="p-4">
        <ul className="list-disc text-xl lg:text-2xl p-4">
          <li>Jai Vignesh - 88256 45904</li>
          <li>Balaji - 86678 58430</li>
        </ul>
      </div>
    ),
  },
];

const LightsOn = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].value);
  const activeContent = tabs.find((tab) => tab.value === activeTab)?.content;
  return (
    <div>
      <div className="body3 text-white pt-36 sm:pt-20 md:pt-40 lg:pt-40 xl:pt-40 2xl:pt-40 pb-20 px-12 flex flex-col justify-center items-center mx-auto max-w-full">
        <h1 className="text-amber-400 font-bold text-center text-3xl lg:text-4xl">
          LIGHTS ON
        </h1>
        <br />
        <div className="flex flex-col lg:flex-row items-center max-w-7xl text-justify">
          <img
            className="h-[150px] sm:h-[200px] md:h-[350px] lg:h-[300px] xl:h-[400px] 2xl:h-[500px] shadow-[0px_0px_40px] shadow-purple-500 mx-auto object-cover rounded-lg"
            src={LO}
            alt="/"
          />

          <div className="xl:col-span-2 flex flex-col justify-center ">
            <p className="text-justify px-10 2xl:pr-auto lg:text-2xl md:text-3xl sm:text-xl mt-10">
              The event LIGHTS ON is conducted to present your creative short
              films. It is an OPEN THEME short film contest. The participants
              should register for your entry. The participants have to submit
              your short films through online. The submission link will be
              available in the website. The submitted films will be shortlisted
              by the event organizers and final decision will be taken by the
              judge. The announcement of prize winners will be on 15/03/2023 and
              the prize will be distributed on 17/03/2023 (offline mode).
            </p>
            <div className="flex px-10 2xl:pr-auto">
              <img
                className="h-[40px] sm:h-[40px] md:h-[40px] lg:h-[50px] xl:h-[50px] 2xl:h-[50px] mt-8"
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

      <div className="body-rest text-white pb-20 pt-20">
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

export default LightsOn;
