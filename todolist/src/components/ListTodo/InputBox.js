import React, { useState } from "react";
import Submit from "./Submit";

const InputBox = ({ onTextSubmit }) => {
  const [texting, setTexting] = useState("");

  const texthandle = (e) => {
    setTexting(e.target.value);
  };

  const handleSubmit = () => {
    if (texting.trim()) {
      onTextSubmit(texting);
      setTexting("");
    }
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        value={texting}
        type="text"
        onChange={texthandle}
        placeholder="Enter Your List..."
        className="inputtext"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default InputBox;
