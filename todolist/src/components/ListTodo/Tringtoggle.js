import React from "react";
import "../../../../todolist/src/Apping.css";

const Toggle = ({ isChecked, onChange }) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <div>
        <input
          type="checkbox"
          className="hidden"
          checked={isChecked}
          onChange={onChange}
        />
        <div
          className={`w-10 h-6 rounded-full ${
            isChecked ? "bg-green-500" : "bg-gray-300"
          } transition-colors duration-200`}
        >
          <div
            className={`absolute w-4 h-4 bg-white rounded-full top-1 transition-transform duration-200 ${
              isChecked ? "translate-x-5" : "translate-x-1"
            }`}
          />
        </div>
      </div>
    </label>
  );
};

export default Toggle;
