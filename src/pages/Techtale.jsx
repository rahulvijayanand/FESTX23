import React, { useState } from "react";
import TabBar from "../components/TabBar";
import TT from "../assets/TT.png";
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
    label: "Contact",
    value: "tab2",
    content: (
      <table class="border-collapse text-xl lg:text-2xl px-4 py-2 lg:px-8 lg:py-4 text-left">
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
