import React, { useState } from "react";
import TabBar from "../components/TabBar";
import TT from "../assets/TT.png";
import Calendar from "../assets/calendar.png";
import sp1 from "../assets/sp1.jpg";
import sp2 from "../assets/sp2.jpg";

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
    label: "Contact",
    value: "tab2",
    content: (
      <table class="border-collapse text-md lg:text-2xl px-4 py-2 lg:px-8 lg:py-4 text-left">
        <tbody>
          <tr>
            <td class="px-10 py-2">Afrin Ruqayyah Fathima</td>
            <td class="px-10 py-2">
              <a
                href="tel:+91 70106 74056"
                rel="noopener noreferrer"
                class="underline"
              >
                +91 70106 74056
              </a>
            </td>
          </tr>
          <tr>
            <td class="px-10 py-2">Kavin Prabhakar</td>
            <td class="px-10 py-2">
              <a
                href="tel:+91 75980 96947"
                rel="noopener noreferrer"
                class="underline"
              >
                +91 75980 96947
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
];

const Techtale = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].value);
  const activeContent = tabs.find((tab) => tab.value === activeTab)?.content;
  return (
    <div className="body3">
      <div className="text-white pt-36 sm:pt-20 md:pt-40 lg:pt-40 xl:pt-40 2xl:pt-40 pb-20 px-12 flex flex-col justify-center items-center mx-auto max-w-full">
        <h1 className="text-amber-400 font-bold text-center text-3xl lg:text-4xl">
          TECH TALE
        </h1>
        <br />
        <div className="flex flex-col lg:flex-row items-center max-w-7xl text-justify">
          <img
            className="h-[275px] sm:h-[350px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px] shadow-[0px_0px_40px] shadow-purple-500 mx-auto object-cover rounded-lg pointer-events-none"
            src={TT}
            alt="/"
          />

          <div className="xl:col-span-2 flex flex-col justify-center ">
            <p className="text-justify px-10 2xl:pr-auto lg:text-2xl md:text-3xl sm:text-xl mt-10">
              Tech Tale is a 2-day tech talk event that will explore the
              intersection of technology and business. Day one will focus on
              technology, with industry experts and thought leaders sharing
              insights on the latest developments and trends in the tech
              industry. Day two will shift the focus to business, with speakers
              sharing tips and strategies for building successful companies and
              growing your business. Our speakers will come from some of the
              most promising organizations in the industry, offering attendees
              the opportunity to learn from the best and gain valuable insights
              and advice. Whether you're an entrepreneur, investor, or simply
              interested in the latest developments in technology and business,
              Tech Tale is the event for you. Don't miss this unique opportunity
              to gain insights, network with industry leaders, and take your
              tech and business journey to the next level. Join us for two days
              of inspiration, learning, and connection at Tech Tale.
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
      <div className="hidden lg:block">
        <div className="text-white flex flex-col justify-center items-center mx-auto max-w-full">
          <p className="text-4xl text-yellow-400">SPEAKERS</p>
          <table class="border-collapse mt-10 text-md lg:text-2xl px-4 py-2 lg:px-10 lg:py-10">
            <thead>
              <tr>
                <th className="px-10 py-5 text-3xl">Day 1</th>
                <th className="px-10 py-5 text-3xl">Day 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-10 py-2">
                  <img
                    className="h-[300px] lg:h-[300px] mx-auto object-cover rounded-full pointer-events-none"
                    src={sp1}
                    alt="/"
                  />
                </td>
                <td class="px-10 py-2">
                  <img
                    className="h-[300px] lg:h-[300px] mx-auto object-cover rounded-full pointer-events-none"
                    src={sp2}
                    alt="/"
                  />
                </td>
              </tr>
              <tr>
                <td class="px-10 py-2 text-center">Mr. Banuchandran Kannan</td>
                <td class="px-10 py-2 text-center">Mr. Suresh VeeraRaghavan</td>
              </tr>
              <tr>
                <td class="px-10 py-2 text-center">Associate Director</td>
                <td class="px-10 py-2 text-center">Vice President</td>
              </tr>
              <tr>
                <td class="px-10 py-2 text-center">Cognizant Pvt, Ltd.</td>
                <td class="px-10 py-2 text-center">Paxel.Co</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="block lg:hidden">
        <div className="w-full text-center">
          <div className="flex flex-col lg:flex-row items-center gap-2 max-w-7xl mx-auto prose dark:prose-dark text-justify p-4">
            <p className="text-yellow-400 text-3xl">SPEAKERS</p>
            <p className="text-white text-2xl mt-10">Day 1</p>
            <img
              className="h-[300px] lg:h-[300px] mt-10 mx-auto object-cover rounded-full pointer-events-none "
              src={sp1}
              alt="/"
            />
            <div className="xl:col-span-2 flex flex-col justify-center text-center">
              <p className="text-center text-white 2xl:pr-auto lg:text-2xl lg:mt-20 text-2xl mt-5">
                Mr. Banuchandran Kannan
              </p>
              <p className="text-center text-white 2xl:pr-auto lg:text-2xl lg:mt-20 text-2xl mt-5">
                Associate Director
              </p>
              <p className="text-center text-white 2xl:pr-auto lg:text-2xl lg:mt-20 text-2xl mt-5">
                Cognizant Pvt, Ltd.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full text-center">
          <div className="flex flex-col lg:flex-row items-center gap-2 max-w-7xl mx-auto prose dark:prose-dark text-justify p-4">
            <p className="text-white text-2xl mt-10">Day 2</p>
            <img
              className="h-[300px] lg:h-[300px] mt-10 mx-auto object-cover rounded-full pointer-events-none "
              src={sp2}
              alt="/"
            />
            <div className="xl:col-span-2 flex flex-col justify-center text-center">
              <p className="text-center text-white 2xl:pr-auto lg:text-2xl lg:mt-20 text-2xl mt-5">
                Mr. Suresh VeeraRaghavan
              </p>
              <p className="text-center text-white 2xl:pr-auto lg:text-2xl lg:mt-20 text-2xl mt-5">
                Vice President
              </p>
              <p className="text-center text-white 2xl:pr-auto lg:text-2xl lg:mt-20 text-2xl mt-5">
                Paxel.Co
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

export default Techtale;
