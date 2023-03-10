import React, { useState } from "react";
import TabBar from "../components/TabBar";
import BB from "../assets/BB.png";
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
            <td className="px-10 py-5">8:50 AM</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    label: "Rounds",
    value: "tab2",
    content: (
      <div className="p-4 text-center">
        <div>
          <p className="font-bold text-2xl lg:text-3xl">
            Aptitude-based Programming:
          </p>
          <ul className="list-disc p-4 text-justify text-xl lg:text-2xl leading-loose break-all">
            <li>
              Round 1 will consist of 5 programming questions for each
              participant.
            </li>
            <li>
              The participant can choose any language of their own to solve the
              problem.
            </li>
            <li>Compiling is allowed.</li>
            <li>Date: 16th March 2023.</li>
            <li>Duration - 1 Hour 30 Mins</li>
            <li>Mode - Offline.</li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-2xl lg:text-3xl">Hurdle Programming:</p>
          <ul className="list-disc p-4 text-justify text-xl lg:text-2xl leading-loose break-all">
            <li>Participants will be given 1 programming problem.</li>
            <li>
              Participants have to solve the problem along with the hurdle
              given.
            </li>
            <li>Hurdle will be instructed before the event starts.</li>
            <li>Date: 17th March 2023.</li>
            <li>Duration - 45 Mins.</li>
            <li>Mode - Offline.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    label: "Rules",
    value: "tab3",
    content: (
      <div className="p-4">
        <ul className="list-disc text-xl lg:text-2xl text-justify p-4 leading-loose">
          <li className="break-words">
            Every participant should have a Hackerrank account.
          </li>
          <li className="break-words">
            There will be three rounds and each round will be a knockout round.
          </li>
          <li className="break-words">
            Participants are selected based on rank in each round.
          </li>
          <li className="break-words">Tie-Breaker is available.</li>
          <li className="break-words">
            Instructions for the Tie-Breaker round were explained during the
            event.
          </li>
          <li className="break-words">No malpractices will be entertained.</li>
          <li className="break-words">
            Any rule violation will lead to disqualification
          </li>
        </ul>
      </div>
    ),
  },
  {
    label: "Contact",
    value: "tab4",
    content: (
      <div className="p-4">
        <ul className="list-disc text-xl lg:text-2xl p-4">
          <li>Krishna Kumar - 77080 77528</li>
          <li>Navin - 70925 83650</li>
          <li>Harithaa - 99622 91235</li>
        </ul>
      </div>
    ),
  },
];

const BloodyBuggers = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].value);
  const activeContent = tabs.find((tab) => tab.value === activeTab)?.content;
  return (
    <div>
      <div className="body3 text-white pt-36 sm:pt-20 md:pt-40 lg:pt-40 xl:pt-40 2xl:pt-40 pb-20 px-12 flex flex-col justify-center items-center mx-auto max-w-full">
        <h1 className="text-amber-400 font-bold text-center text-3xl lg:text-4xl">
          BLODDY BUGGERS
        </h1>
        <br />
        <div className="flex flex-col lg:flex-row items-center max-w-7xl text-justify">
          <img
            className="h-[150px] sm:h-[200px] md:h-[350px] lg:h-[300px] xl:h-[400px] 2xl:h-[500px] shadow-[0px_0px_40px] shadow-purple-500 mx-auto object-cover rounded-lg"
            src={BB}
            alt="/"
          />

          <div className="xl:col-span-2 flex flex-col justify-center ">
            <p className="text-justify px-10 2xl:pr-auto lg:text-2xl md:text-3xl sm:text-xl mt-10">
              A major league for programming competitors to showcase your
              fascinating talents. Get equipped to take part in this mind game.
              Don't let bugs hunt your code, hunt it with your skills. Set Your
              Standards and kill the competition.
            </p>
            <div className="flex px-10 2xl:pr-auto">
              <img
                className="h-[40px] sm:h-[40px] md:h-[40px] lg:h-[50px] xl:h-[50px] 2xl:h-[50px] mt-8"
                src={Calendar}
                alt="/"
              />
              <p className="text-justify px-5 2xl:pr-auto lg:text-3xl md:text-3xl sm:text-3xl mt-10">
                16th-17th March
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

export default BloodyBuggers;
