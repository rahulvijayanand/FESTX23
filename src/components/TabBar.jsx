import React from "react";

const TabBar = ({ tabs, setActiveTab, activeTab }) => {
  return (
    <div className="flex items-center justify-center px-4 md:px-10 sm:px-4 lg:px-10 md:px-60">
      {tabs.map((tab) => (
        <div
          key={tab.value}
          className={`${
            activeTab === tab.value ? "bg-purple-900" : "bg-purple-600"
          } text-white py-1.5 px-1.5 mx-2 lg:py-2 lg:px-4 rounded-md cursor-pointer`}
          onClick={() => setActiveTab(tab.value)}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
};

export default TabBar;
