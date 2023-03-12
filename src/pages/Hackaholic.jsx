import React, { useState } from "react";
import TabBar from "../components/TabBar";
import HH from "../assets/HH.png";
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
          <p className="font-bold text-2xl lg:text-3xl">Day 1:</p>
          <ul className="list-disc p-4 text-justify text-xl lg:text-2xl leading-loose break-all">
            <li>
              The day begins with the inauguration ceremony of the hackathon by
              the chief guest.
            </li>
            <li>
              Participants should begin the brainstorming session with their
              teammates at 12 pm.
            </li>
            <li>Mentors will be allotted to each team for assistance.</li>
            <li>
              Brainstorming continues till 4 pm followed by idea pitching.
            </li>
            <li>
              After further changes were required in ideas participants can
              start building their prototypes.
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-2xl lg:text-3xl">Day 2:</p>
          <ul className="list-disc p-4 text-justify text-xl lg:text-2xl leading-loose break-all">
            <li>
              After a night-long prototyping ideating, creating, recreating
              second pitching starts at 11 am.
            </li>
            <li>
              Teams will be instructed to make a business model of their idea
              before the final round of pitching.
            </li>
            <li>
              At 1 pm the final round of pitching will be concluded with the
              winner of the event.
            </li>
            <li>
              At 3 pm in the presence of the Director sir the event will be
              concluded followed by the announcement of winners.
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
      <div class="p-4">
        <ul class="list-disc text-xl lg:text-2xl text-justify p-4 leading-loose">
          <li class="break-words">
            Hackathon teams will be a maximum of 4 people.
          </li>
          <li class="break-words">
            Teams should be made up exclusively of students who are not
            organizers, volunteers, judges, sponsors, or in any other privileged
            position at the event.
          </li>
          <li class="break-words">
            A team can submit only one entry for the hackathon. Participation at
            the hackathon is subjected on a “per-team” basis meaning you are not
            allowed to be on more than one team at the event.
          </li>
          <li class="break-words">
            Each prototype or mock-up presented at the hackathon must be an
            original work.
          </li>
          <li class="break-words">
            Teams must stop hacking once the time is up. However, teams are
            allowed to debug and make small fixes to their programs after time
            is up.
          </li>
          <li class="break-words">
            Projects that violate the Code of Conduct are not allowed.
          </li>
          <li class="break-words">
            Teams that make it to the final round will be given up to ten
            minutes to present their finished project to a panel of judges.
          </li>
          <li class="break-words">
            All the necessary components / Laptop / Equipments / Tools to be
            brought by participants itself.
          </li>
          <li class="break-words">Jury team Decision will be final.</li>
        </ul>
      </div>
    ),
  },
  {
    label: "Contact",
    value: "tab4",
    content: (
      <table class="border-collapse text-xl lg:text-2xl px-4 py-2 lg:px-8 lg:py-4 text-left">
        <tbody>
          <tr>
            <td class="px-10 py-2">Avanthika</td>
            <td class="px-10 py-2">
              <a
                href="tel:+91 93443 43670"
                rel="noopener noreferrer"
                class="underline"
              >
                +91 93443 43670
              </a>
            </td>
          </tr>
          <tr>
            <td class="px-10 py-2">Sujan</td>
            <td class="px-10 py-2">
              <a
                href="tel:+91 89393 41756"
                rel="noopener noreferrer"
                class="underline"
              >
                +91 89393 41756
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
];

const Hackaholic = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].value);
  const activeContent = tabs.find((tab) => tab.value === activeTab)?.content;
  return (
    <div className="body3">
      <div className="text-white pt-36 sm:pt-20 md:pt-40 lg:pt-40 xl:pt-40 2xl:pt-40 pb-20 px-12 flex flex-col justify-center items-center mx-auto max-w-full">
        <h1 className="text-amber-400 font-bold text-center text-3xl lg:text-4xl">
          HACKAHOLIC
        </h1>
        <br />
        <div className="flex flex-col lg:flex-row items-center max-w-7xl text-justify">
          <img
            className="h-[275px] sm:h-[350px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px] shadow-[0px_0px_40px] shadow-purple-500 mx-auto object-cover rounded-lg pointer-events-none"
            src={HH}
            alt="/"
          />

          <div className="xl:col-span-2 flex flex-col justify-center ">
            <p className="text-justify px-10 2xl:pr-auto lg:text-2xl md:text-3xl sm:text-xl mt-10">
              Hackaholic is a 24 hrs hackathon. Five real world problem
              statements will be thrown for which the budding engineers are
              asked to come up with a prototype solution. Winners will be
              announced by the industries that threw the problem statements.
            </p>
            <div className="flex px-10 2xl:pr-auto">
              <img
                className="h-[30px] sm:h-[40px] md:h-[40px] lg:h-[50px] xl:h-[50px] 2xl:h-[50px] mt-8"
                src={Calendar}
                alt="/"
              />
              <p className="w-full px-5 2xl:pr-auto lg:text-3xl md:text-3xl sm:text-3xl mt-10">
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

export default Hackaholic;
