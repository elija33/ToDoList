import React, { useState } from "react";
import Submit from "./Submit";

const InputBox = ({ onTextSubmit }) => {
  const [texting, setTexting] = useState("");
  const [error, setError] = useState("");

  const texthandle = (e) => {
    setTexting(e.target.value);
    if (error) setError("");
  };

  const handleSubmit = () => {
    if (texting.trim()) {
      onTextSubmit(texting);
      setTexting("");
      setError("");
    } else {
      setError("Enter Some List Here");
    }
  };

  return (
    <div>
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
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default InputBox;
