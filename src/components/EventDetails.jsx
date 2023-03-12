import React, { useState } from "react";
import TabBar from "../components/TabBar";

const tabs = [
  { label: "Details", value: "tab1", content: <p>Page 2 content</p> },
  { label: "Rounds", value: "tab2", content: <p>Page 3 content</p> },
  { label: "Rules", value: "tab3", content: <p>Page 4 content</p> },
  { label: "Contact", value: "tab4", content: <p>Page 5 content</p> },
];

const Round = (props) => {
  return (
    <div className="p-4">
      {props.rounds.map((item) => (
        <div>
          <p className="font-bold text-2xl lg:text-3xl">{item.title}</p>
          <ul className="list-disc p-4 text-justify text-xl lg:text-2xl leading-loose">
            {item.content.map((i) => (
              <li>{i}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const Rules = (props) => {
  return (
    <div className="p-4">
      <ul className="list-disc text-xl lg:text-2xl text-justify p-4 leading-loose">
        {props.rules.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

// const Prize = (props) => {
//   return (
//     <div className="p-4">
//       <ul className="list-disc text-xl lg:text-2xl p-4">
//         {props.prize.map((item) => (
//           <li>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

const Contact = (props) => {
  return (
    <div className="p-4">
      <ul className="list-disc text-xl lg:text-2xl p-4">
        {props.contact.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default function EventDetails(props) {
  const [activeTab, setActiveTab] = useState(tabs[0].value);
  const activeContent = tabs.find((tab) => tab.value === activeTab)?.content;
  return (
    <div className="body-rest scroll-smooth text-white pt-56 pb-20 px-12">
<<<<<<< HEAD
      <h1 className="text-amber-400	font-bold text-center text-3xl lg:text-4xl">
=======
      <h1 className="text-[#5304bd]	font-bold text-center text-3xl lg:text-4xl">
>>>>>>> 0d40edc6388ef154b7968f67fbec1e995147d15f
        {props.event.title}
      </h1>

      <br />
      <p className="text-xl lg:text-2xl text-justify my-10">
        {props.event.description}
      </p>

      <br />
      <br />
      <TabBar setActiveTab={setActiveTab} activeTab={activeTab} tabs={tabs} />
      {activeContent}
      <h1 className="font-bold text-2xl lg:text-3xl">Details</h1>
      <hr />
      <br />
      <table className="border-separate text-xl lg:text-2xl border-spacing-4 text-center">
        <thead>
          <tr>
            <th>Mode</th>

            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.event.mode}</td>

            <td>{props.event.date}</td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      {props.event.rounds && (
        <div>
          <h1 className="font-bold text-2xl lg:text-3xl">Rounds</h1>
          <hr />
          <br />
          <Round rounds={props.event.rounds} />
        </div>
      )}
      <br />
      {props.event.rules && (
        <div>
          <h1 className="font-bold text-2xl lg:text-3xl">Rules & Guidelines</h1>
          <hr />

          <div>
            <Rules rules={props.event.rules} />
          </div>
        </div>
      )}
      <br />
      {/* {props.event.prize && <div>
      <h1 className="font-bold text-2xl lg:text-3xl">Prize</h1>
      <hr />
      <div>
        <Prize prize={props.event.prize} />
      </div></div>}

      <br /> */}
      <h1 className="font-bold text-2xl lg:text-3xl">Contact</h1>
      <hr />
      <div>
        <Contact contact={props.event.contact} />
      </div>
      <div className="uppercase bg-transparent border w-[150px] rounded-md font-medium sm:text-2xl md:text-2xl mx-auto py-3 text-center hover:bg-violet-700">
        <a
          href="//forms.gle/dmdhQdMV3vJL1ezg7"
          target="_blank"
          rel="noopener noreferrer"
        >
          REGISTER
        </a>
      </div>
    </div>
  );
}
