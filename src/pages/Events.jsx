import React from "react";
import EventItem from "../components/EventItem";
import EVENT from "../assets/evnts.png";
import { SiHackster, SiStartrek } from "react-icons/si";
import { GiTreasureMap, GiTalk } from "react-icons/gi";
import { FaCode, FaVideo } from "react-icons/fa";
import { RiFundsBoxLine } from "react-icons/ri";
// import { bloodyBuggers } from '../components/EventDetailsContent'

const Events = () => {
  return (
    <div className="text-white">
      <div class="body2 flex justify-center items-center text-center">
        <img
          src={EVENT}
          alt="festx"
          class="mx-auto w-[200px] md:w-[400px] py-10 pointer-events-none"
        />
      </div>
      <div className="body-rest">
        <div className="grid sm:grid md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 pt-10 gap-0 lg:gap-10 place-items-center">
          <EventItem
            title1="HACKAHOLIC"
            title2={<SiHackster />}
            title3="/hackaholic"
          />
          <EventItem
            title1="BIZ BAZAAR"
            title2={<SiStartrek />}
            title3="/biz-bazaar"
          />
          <EventItem
            title1="TECH TALE"
            title2={<GiTalk />}
            title3="/tech-tale"
          />
          <EventItem
            title1="BLOODY BUGGERS"
            title2={<FaCode />}
            title3="/bloody-buggers"
          />
          <EventItem
            title1="LIGHTS ON"
            title2={<FaVideo />}
            title3="/lights-on"
          />
          <EventItem
            title1="PROPOSE TO INVESTOR"
            title2={<RiFundsBoxLine />}
            title3="/pitch-up"
          />
        </div>
        <div className="flex justify-center pb-20 lg:pt-10 items-center">
          <EventItem
            title1="PARAGON QUEST"
            title2={<GiTreasureMap />}
            title3="/paragon-quest"
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
