import React from "react";

const Round = (props) => {
  return (
    <div className="p-4">
      {props.rounds.map((item) => (
        <div>
          <p className="font-bold text-2xl lg:text-3xl">{item.title}</p>
          <ul className="list-disc p-4 text-justify text-xl lg:text-2xl">
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
      <ul className="list-disc text-xl lg:text-2xl text-justify p-4">
        {props.rules.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const Prize = (props) => {
  return (
    <div className="p-4">
      <ul className="list-disc text-xl lg:text-2xl p-4">
        {props.prize.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

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
  return (
    <div className="scroll-smooth text-white mt-56 mx-auto">
      <h1 className="text-amber-400	font-bold text-center text-3xl lg:text-4xl">{props.event.title}</h1>

      <br />
      <p className="text-xl lg:text-2xl text-justify my-10">{props.event.description}</p>
      
      <br />
      <br />
      <h1 className="font-bold text-2xl lg:text-3xl">Details</h1>
      <hr />
      <br />
      <table className="border-separate text-xl lg:text-2xl border-spacing-4 text-center">
        <thead>
          <tr>
            <th>Mode</th>
            <th>Venue</th>
            <th>Timing</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.event.mode}</td>
            <td>{props.event.venue}</td>
            <td>{props.event.timing}</td>
            <td>{props.event.date}</td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      {props.event.rounds && 
        <div>
          <h1 className="font-bold text-2xl lg:text-3xl">Rounds</h1>
          <hr />
          <br />
          <Round rounds={props.event.rounds} />
        </div>
      }
      <br />{props.event.rules && <div>
      <h1 className="font-bold text-2xl lg:text-3xl">Rules & Guidelines</h1>
      <hr />

      <div>
        <Rules rules={props.event.rules} />
      </div>
      </div>}
      <br />
      {props.event.prize && <div>
      <h1 className="font-bold text-2xl lg:text-3xl">Prize</h1>
      <hr />
      <div>
        <Prize prize={props.event.prize} />
      </div></div>}

      <br />
      <h1 className="font-bold text-2xl lg:text-3xl">Contact</h1>
      <hr />
      <div>
        <Contact contact={props.event.contact} />
      </div>
    </div>
  );
}
