import React, { useState } from "react";
import "../../../../todolist/src/Apping.css";

const Tringtoggle = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="flex">
      <label className="switch">
        <input
          type="checkbox"
          className="slider round"
          checked={isChecked}
          onChange={handleToggle}
        />
      </label>
      <span className="slider round">{isChecked ? "ON" : "OFF"}</span>
    </div>
  );
};

export default Tringtoggle;
