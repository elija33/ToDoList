import React from "react";
import ToggleSwitch from "./ToggleSwitch";

function Toggleing() {
  const handleToggel = (newState) => {
    console.log("Toggle switch to:", newState);
  };
  return <ToggleSwitch onToggle={handleToggel} initialState={false} />;
}

export default Toggleing;
