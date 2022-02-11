import React from "react";
import "./tabs.css";

export default function Tabs({ activeButton, setActiveButton }) {
  const tabs = [
    {
      id: 1,
      heading: "Photo",
    },
    {
      id: 2,
      heading: "Videos",
    },
  ];

  const handleTabSwitch = (tab) => {
    setActiveButton(tab.id);
  };

  return (
    <div className="tabs-container">
      {React.Children.toArray(
        tabs.map((tab) => (
          <button
            className={`tabs-button ${
              activeButton === tab.id ? "active-tab" : ""
            }`}
            onClick={() => handleTabSwitch(tab)}
          >
            {tab.heading}
          </button>
        ))
      )}
    </div>
  );
}
