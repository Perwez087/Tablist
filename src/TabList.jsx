import React, { useState } from "react";

const TabList = ({ tabs }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleTabChange = (index) => {
    setSelectedIndex(index);
    // console.log(index);
  };

const Component = tabs[selectedIndex].Component

  return (
    <div role="tablist">
      <div className="flex items-center gap-4 mb-4">
        {tabs.map((tab, index) => (
          <button
            onClick={() => handleTabChange(index)}
            key={tab.id}
            role="tab"
            className={`${index === selectedIndex ? "bg-red-500" : "bg-blue-500"} px-4 py-2 rounded hover:border-green-500 border-2 hover:bg-white hover:text-black duration-300 border-transparent`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="border-2 border-blue-500 px-4 py-2 rounded-md">
        {selectedIndex >=0 && Component}
      </div>
    </div>
  );
};

export default TabList;
