import React, { useState } from "react";

const ToggleSwitch = ({
  initialState = false,
  onToggle,
  label,
  disabled = false,
}) => {
  const [isChecked, setIsChecked] = useState(initialState);

  const handleToggel = () => {
    if (!disabled) {
      const newState = !isChecked;
      setIsChecked(newState);
      if (onToggle) {
        onToggle(newState);
      }
    }
  };

  return (
    <div className="flex items-center gap-2">
      {label && (
        <span
          className={`text-sm ${disabled ? "text-gray-400" : "text-gray-700"}`}
        >
          {label}
        </span>
      )}
      <button
        role="switch"
        aria-checked={isChecked}
        onClick={handleToggel}
        disabled={disabled}
        className={`
            relative inline-flex h-6 w-11 items-center rounded-full
            transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2
            focus:ring-blue-500 focus:ring-offset-2
            ${
              disabled
                ? "cursor-not-allowed bg-gray-200"
                : isChecked
                ? "bg-blue-600"
                : "bg-gray-200"
            }`}
      >
        <span
          className={`
            inline-block h-4 w-4 rounded-full bg-white shadow
            transform transition-transform duration-200 ease-in-out
            ${isChecked ? "translate-x-6" : "translate-x-1"}
            ${disabled ? "shadow-none" : "shadow-md"}
          `}
        />
      </button>
    </div>
  );
};

export default ToggleSwitch;
