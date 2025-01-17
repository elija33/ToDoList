import React from "react";

const Submit = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 ml-2 w-24"
    >
      Submit
    </button>
  );
};

export default Submit;
