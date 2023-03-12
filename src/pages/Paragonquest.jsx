import React, { useState } from "react";
import TabBar from "../components/TabBar";
import PQC from "../assets/PQC.png";
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
    label: "Rounds",
    value: "tab2",
    content: (
      <div className="p-4 text-center">
        <div>
          <p className="font-bold text-2xl lg:text-3xl">Round 1:</p>
          <ul className="list-disc p-4 text-justify text-xl lg:text-2xl leading-loose break-all">
            <li>
              Round 1 is conducted in mentimeter via offline mode on the day of
              the event.
            </li>
            <li>
              All the participants should join the mentimeter quiz and answer
              the questions.
            </li>
            <li>
              The members are shortlisted for the 2nd round based on the scores
              they got on round 1.
            </li>
            <li>
              The shortlisted participants are then grouped into team of 3
              members and will move onto round 2.
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-2xl lg:text-3xl">Round 2:</p>
          <ul className="list-disc p-4 text-justify text-xl lg:text-2xl leading-loose break-all">
            <li>Round 2 is conducted among the grouped teams.</li>
            <li>This will test your team coordination.</li>
            <li>
              In this round, a riddle will be asked to the teams by a person X.
            </li>
            <li>
              The volunteer will take the teams to the spot of the next clue.
              Based on the riddle, the teams will find the clue.
            </li>
            <li>
              Everytime after they found the clue they should come back to the
              person X for the location of next clue which will be shown by our
              volunteers.
            </li>
            <li>The final clue will lead you to the treasure.</li>
            <li>
              The team which finds the treasure will be considered as the
              winner.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    label: "Rules",
    value: "tab3",
    content: (
<<<<<<< HEAD
      <div class="p-4">
        <ul class="list-disc text-xl lg:text-2xl text-justify p-4 leading-loose">
          <li class="break-words">This is an offline event.</li>
          <li class="break-words">Only Solo participants.</li>
          <li class="break-words">This event consists of 2 rounds.</li>
=======
      <div className="p-4">
        <ul className="list-disc text-xl lg:text-2xl text-justify p-4 leading-loose">
          <li className="break-words">This is an offline event.</li>
          <li className="break-words">Only Solo participants.</li>
          <li className="break-words">This event consists of 2 rounds.</li>
>>>>>>> 0d40edc6388ef154b7968f67fbec1e995147d15f
        </ul>
      </div>
    ),
  },
  {
    label: "Contact",
    value: "tab4",
    content: (
<<<<<<< HEAD
      <table class="border-collapse text-xl lg:text-2xl px-4 py-2 lg:px-8 lg:py-4 text-left">
        <tbody>
          <tr>
            <td class="px-10 py-2">Divyesh</td>
            <td class="px-10 py-2">
              <a
                href="tel:+91 89390 20427"
                rel="noopener noreferrer"
                class="underline"
              >
                +91 89390 20427
              </a>
            </td>
          </tr>
          <tr>
            <td class="px-10 py-2">Suretha</td>
            <td class="px-10 py-2">
              <a
                href="tel:+91 93602 51179"
                rel="noopener noreferrer"
                class="underline"
              >
                +91 93602 51179
              </a>
            </td>
          </tr>
        </tbody>
      </table>
=======
      <div className="p-4">
        <ul className="list-disc text-xl lg:text-2xl p-4">
          <li>Divyesh - 89390 20427</li>
          <li>Suretha - 93602 51179</li>
        </ul>
      </div>
>>>>>>> 0d40edc6388ef154b7968f67fbec1e995147d15f
    ),
  },
];

const ParagonQuest = () => {
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
          PARAGON QUEST
        </h1>
        <br />
        <div className="flex flex-col lg:flex-row items-center max-w-7xl text-justify">
          <img
<<<<<<< HEAD
            className="h-[310px] sm:h-[350px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px] shadow-[0px_0px_40px] shadow-purple-500 mx-auto object-cover rounded-lg pointer-events-none"
=======
            className="h-[150px] sm:h-[200px] md:h-[350px] lg:h-[300px] xl:h-[400px] 2xl:h-[500px] shadow-[0px_0px_40px] shadow-purple-500 mx-auto object-cover rounded-lg"
>>>>>>> 0d40edc6388ef154b7968f67fbec1e995147d15f
            src={PQC}
            alt="/"
          />

          <div className="xl:col-span-2 flex flex-col justify-center ">
            <p className="text-justify px-10 2xl:pr-auto lg:text-2xl md:text-3xl sm:text-xl mt-10">
              Hello hunters🏴‍☠️!! Get ready to reveal the pirate inside you and
              make the treasure yours and win exciting cash prizes with a quest
              of 2 rounds.
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

export default ParagonQuest;
