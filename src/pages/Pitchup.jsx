import React, { useState } from "react";
import TabBar from "../components/TabBar";
import PTI from "../assets/PTI.png";
import Calendar from "../assets/calendar.png";
import sp4 from "../assets/sp4.jpg";
import sp5 from "../assets/sp5.jpg";
import sp6 from "../assets/sp6.jpg";
import sp7 from "../assets/sp7.png";

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
      <div class="p-4">
        <ul class="list-disc text-xl lg:text-2xl text-justify p-4 leading-loose">
          <li class="break-words">
            A perfect setup of innovators is present to whom teams have to
            showcase their expertise and understanding into building innovative
            solutions.
          </li>
          <li class="break-words">
            Proposal attracts innovation oriented tech driven Investors.
          </li>
          <li class="break-words">
            The team can nurture the idea and help it grow towards designing.
          </li>
          <li class="break-words">
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
      <table class="border-collapse text-md lg:text-2xl px-4 py-2 lg:px-8 lg:py-4 text-left">
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
    ),
  },
];

const Pitchup = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].value);
  const activeContent = tabs.find((tab) => tab.value === activeTab)?.content;
  return (
    <div className="body3">
      <div className="text-white pt-36 sm:pt-20 md:pt-40 lg:pt-40 xl:pt-40 2xl:pt-40 pb-20 px-12 flex flex-col justify-center items-center mx-auto max-w-full">
        <h1 className="text-amber-400 font-bold text-center text-3xl lg:text-4xl">
          PROPOSE TO INVESTOR
        </h1>
        <br />
        <div className="flex flex-col lg:flex-row items-center max-w-7xl text-justify">
          <img
            className="h-[275px] sm:h-[350px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px] shadow-[0px_0px_40px] shadow-purple-500 mx-auto object-cover rounded-lg"
            src={PTI}
            alt="/"
          />

          <div className="xl:col-span-2 flex flex-col justify-center ">
            <p className="text-justify px-10 2xl:pr-auto lg:text-2xl md:text-3xl sm:text-2xl mt-10">
              Ideate-Engage-innovate unique ideas from this platform that helps
              to brainstorm ideas into utile designs.
            </p>
            <div className="flex px-10 2xl:pr-auto">
              <img
                className="h-[30px] sm:h-[40px] md:h-[40px] lg:h-[50px] xl:h-[50px] 2xl:h-[50px] mt-8"
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

      <div className="hidden lg:block">
        <div className="text-white flex flex-col justify-center items-center mx-auto max-w-full">
          <p className="text-4xl text-yellow-400">OUR INVESTORS</p>
          <table class="border-collapse mt-10 text-md lg:text-2xl px-4 py-2 lg:px-10 lg:py-10">
            <tbody>
              <tr>
                <td class="px-10 py-2">
                  <img
                    className="h-[250px] lg:h-[160px] xl:h-[250px] mx-auto object-cover rounded-full pointer-events-none"
                    src={sp5}
                    alt="/"
                  />
                </td>
                <td class="px-10 py-2">
                  <img
                    className="h-[250px] lg:h-[160px] xl:h-[250px] mx-auto object-cover rounded-full pointer-events-none"
                    src={sp6}
                    alt="/"
                  />
                </td>
                <td class="px-10 py-2">
                  <img
                    className="h-[250px] lg:h-[160px] xl:h-[250px] mx-auto object-cover rounded-full pointer-events-none"
                    src={sp4}
                    alt="/"
                  />
                </td>
                <td class="px-10 py-2">
                  <img
                    className="h-[250px] lg:h-[160px] xl:h-[250px] mx-auto object-cover rounded-full pointer-events-none"
                    src={sp7}
                    alt="/"
                  />
                </td>
              </tr>
              <tr>
                <td class="px-10 py-2 lg:text-xl xl:text-2xl text-center">Mr. Ashwin Ganesh</td>
                <td class="px-10 py-2 lg:text-xl xl:text-2xl text-center">Mr. Subhankar Nanda</td>
                <td class="px-10 py-2 lg:text-xl xl:text-2xl text-center">Mr. Senthamil Arasan A</td>
                <td class="px-10 py-2 lg:text-xl xl:text-2xl text-center">Ms. C Aarthi Ram</td>
              </tr>
              <tr>
                <td class="px-10 py-2 lg:text-xl xl:text-2xl text-center">
                  Head of Operations (South)
                </td>
                <td class="px-10 py-2 lg:text-xl xl:text-2xl text-center">Founder</td>
                <td class="px-10 py-2 lg:text-xl xl:text-2xl text-center">Project Lead</td>
                <td class="px-10 py-2 lg:text-xl xl:text-2xl text-center">
                  Head Of Operations at MCC
                </td>
              </tr>
              <tr>
                <td class="px-10 py-2 lg:text-xl xl:text-2xl text-center">We Founder Circle</td>
                <td class="px-10 py-2 lg:text-xl xl:text-2xl text-center">Youth India Foundation</td>
                <td class="px-10 py-2 lg:text-xl xl:text-2xl text-center">
                  Chennai Metro Hub - StartupTN
                </td>
                <td class="px-10 py-2 lg:text-xl xl:text-2xl text-center">MRF Innovation Park</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="block lg:hidden">
        <div className="w-full text-center">
          <div className="flex flex-col lg:flex-row items-center gap-2 max-w-7xl mx-auto prose dark:prose-dark text-justify p-4">
            <p className="text-yellow-400 text-3xl">OUR INVESTORS</p>
            <img
              className="h-[250px] lg:h-[250px] mt-10 mx-auto object-cover rounded-full pointer-events-none "
              src={sp5}
              alt="/"
            />
            <div className="xl:col-span-2 flex flex-col justify-center text-center">
              <p className="text-center text-white 2xl:pr-auto lg:text-2xl lg:mt-20 text-2xl mt-5">
                Mr. Ashwin Ganesh
              </p>
              <p className="text-center text-white 2xl:pr-auto lg:text-2xl lg:mt-20 text-2xl mt-5">
                Head of Operations (South)
              </p>
              <p className="text-center text-white 2xl:pr-auto lg:text-2xl lg:mt-20 text-2xl mt-5">
                We Founder Circle
              </p>
            </div>
          </div>
        </div>
        <div className="w-full text-center">
          <div className="flex flex-col lg:flex-row items-center gap-2 max-w-7xl mx-auto prose dark:prose-dark text-justify p-4">
            <img
              className="h-[250px] lg:h-[250px] mt-10 mx-auto object-cover rounded-full pointer-events-none "
              src={sp6}
              alt="/"
            />
            <div className="xl:col-span-2 flex flex-col justify-center text-center">
              <p className="text-center text-white 2xl:pr-auto lg:text-2xl lg:mt-20 text-2xl mt-5">
                Mr. Subhankar Nanda
              </p>
              <p className="text-center text-white 2xl:pr-auto lg:text-2xl lg:mt-20 text-2xl mt-5">
                Founder
              </p>
              <p className="text-center text-white 2xl:pr-auto lg:text-2xl lg:mt-20 text-2xl mt-5">
                Youth India Foundation
              </p>
            </div>
          </div>
        </div>
        <div className="w-full text-center">
          <div className="flex flex-col lg:flex-row items-center gap-2 max-w-7xl mx-auto prose dark:prose-dark text-justify p-4">
            <img
              className="h-[300px] lg:h-[300px] mt-10 mx-auto object-cover rounded-full pointer-events-none "
              src={sp4}
              alt="/"
            />
            <div className="xl:col-span-2 flex flex-col justify-center text-center">
              <p className="text-center text-white 2xl:pr-auto lg:text-2xl lg:mt-20 text-2xl mt-5">
                Mr. Senthamil Arasan A
              </p>
              <p className="text-center text-white 2xl:pr-auto lg:text-2xl lg:mt-20 text-2xl mt-5">
                Project Lead
              </p>
              <p className="text-center text-white 2xl:pr-auto lg:text-2xl lg:mt-20 text-2xl mt-5">
                Chennai Metro Hub - StartupTN
              </p>
            </div>
          </div>
        </div>
        <div className="w-full text-center">
          <div className="flex flex-col lg:flex-row items-center gap-2 max-w-7xl mx-auto prose dark:prose-dark text-justify p-4">
            <img
              className="h-[300px] lg:h-[300px] mt-10 mx-auto object-cover rounded-full pointer-events-none "
              src={sp7}
              alt="/"
            />
            <div className="xl:col-span-2 flex flex-col justify-center text-center">
              <p className="text-center text-white 2xl:pr-auto lg:text-2xl lg:mt-20 text-2xl mt-5">
                Ms. C Aarthi Ram
              </p>
              <p className="text-center text-white 2xl:pr-auto lg:text-2xl lg:mt-20 text-2xl mt-5">
                Head Of Operations at MCC
              </p>
              <p className="text-center text-white 2xl:pr-auto lg:text-2xl lg:mt-20 text-2xl mt-5">
                MRF Innovation Park
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

export default Pitchup;
